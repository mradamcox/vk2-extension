goog.provide('vk2.viewer.ZoomifyViewer');
goog.provide('vk2.viewer.ZoomifyViewerEventType');

goog.require('goog.dom');
goog.require('goog.net.XhrIo');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
goog.require('goog.events.EventType');
goog.require('vk2.settings');

//goog.require('ol.proj.Projection');
//goog.require('ol.source.Zoomify');
//goog.require('ol.layer.Tile');
//goog.require('ol.Map');
//goog.require('ol.control.FullScreen');
//goog.require('ol.control.Zoom');
//goog.require('ol.View2D');
//goog.require('ol.interaction.DragZoom');
//goog.require('ol.control.OverviewMap');

/**
 * @enum {string}
 */
vk2.viewer.ZoomifyViewerEventType = {
	// Is triggered after zoomify layer loaded
	LOADEND: 'loadend',
};

/**
 * @param {string} containerEl
 * @param {string} zoomify_properties_url
 * @param {boolean=} opt_withWebGL
 * @param {boolean=} opt_withOverview
 * @constructor
 * @extends {goog.events.EventTarget}
 */
vk2.viewer.ZoomifyViewer = function(containerEl, zoomify_properties_url, opt_withWebGL, opt_withOverview){
	
	var renderer = goog.isDef(opt_withWebGL) ? 'webgl' : 'canvas';
	
	var withOverview_ = goog.isDef(opt_withOverview) ? opt_withOverview : false;
	
	goog.net.XhrIo.send(zoomify_properties_url, goog.bind(function(event){
		if (event.target.getStatus() != 200){
			alert('Something went wrong, while trying to get the process information from the server. Please try again or contact the administrator.');
		};
	
		var responseXML = event.target.getResponseXml();
		var node = goog.dom.findNode(responseXML, function(n){
			return n.nodeType == goog.dom.NodeType.ELEMENT && n.tagName == 'IMAGE_PROPERTIES';
		});
		
		var width = parseInt(node.getAttribute('WIDTH'), 0);
		var height = parseInt(node.getAttribute('HEIGHT'), 0);
		var url = zoomify_properties_url.substring(0,zoomify_properties_url.lastIndexOf("/")+1)
		this.initialize_(url, height, width, containerEl, renderer, withOverview_);
	}, this), 'GET');
		
	goog.base(this);
};
goog.inherits(vk2.viewer.ZoomifyViewer, goog.events.EventTarget);

/**
 * @param {string} url
 * @param {number} height
 * @param {number} width
 * @param {string} containerEl
 * @param {string} renderer
 * @param {boolean} withOverview
 */
vk2.viewer.ZoomifyViewer.prototype.initialize_ = function(url, height, width, containerEl, renderer, withOverview){
	
	/**
	 * @type {number}
	 * @private
	 */
	this._height = height;
	
	/**
	 * @type {number}
	 * @private
	 */
	this._width = width;
	
	//var imgCenter = [width / 2, - height / 2];
	//var extent = [0, 0, width, height];
	
	// Maps always need a projection, but Zoomify layers are not geo-referenced, and
	// are only measured in pixels.  So, we create a fake projection that the map
	// can use to properly display the layer.
	var proj = new ol.proj.Projection({
		'code': 'ZOOMIFY',
		'units': 'pixels',
		'extent': [0, 0, width, height]
	});
	
	/**
	 * @type {ol.source.Zoomify}
	 * @private
	 */
	this._zoomifySource = new ol.source.Zoomify({
		  'url': url,
		  'size': [width, height],
		  'crossOrigin': '*'
	});
	
	var view = new ol.View({
	    'projection': proj,
	    'center': [width / 2, - height / 2],
		'zoom': 1,
		'maxZoom': 9
    });
	
	var zoomifyLayer_ = new ol.layer.Tile({
    	'source': this._zoomifySource
    });
	
	var controls_ = [new ol.control.FullScreen(), new ol.control.Zoom() ];
	
	if (withOverview){
		controls_.push( new ol.control.OverviewMap({
			'collapsed': false,
			'layers': [zoomifyLayer_]
		}));
	};
	
	/**
	 * @type {ol.Map}
	 * @private
	 */
	this._map = new ol.Map({
		'layers': [ zoomifyLayer_ ],
		'interactions': ol.interaction.defaults().extend([
            new ol.interaction.DragZoom()
        ]),
        'controls': controls_,
	    'renderer': renderer,
	    'target': containerEl,
	    'view': view
	});
	
	// add zoom to extent control
	this._map.addControl(new ol.control.ZoomToExtent({
		'extent': view.calculateExtent(this._map['getSize']())
	}));
	
	// dispatch for other observers who are waiting 
	this.dispatchEvent(new goog.events.Event(vk2.viewer.ZoomifyViewerEventType.LOADEND,{}));	
};

/**
 * @returns {ol.Map}
 */
vk2.viewer.ZoomifyViewer.prototype.getMap = function(){
	return this._map;
};

/**
 * @returns {ol.source.Zoomify}
 */
vk2.viewer.ZoomifyViewer.prototype.getZoomifySource = function(){
	return this._zoomifySource;
};

/**
 * @returns {number}
 */
vk2.viewer.ZoomifyViewer.prototype.getHeight = function(){
	return parseInt(this._height, 0);
};

/**
 * @returns {number}
 */
vk2.viewer.ZoomifyViewer.prototype.getWidth = function(){
	return parseInt(this._width, 0);
};