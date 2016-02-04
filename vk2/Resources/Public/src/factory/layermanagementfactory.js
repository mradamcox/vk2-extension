goog.provide('vk2.factory.LayerManagementFactory');

goog.require('goog.dom');
goog.require('goog.style');
goog.require('goog.dom.classes');
goog.require('goog.net.cookies');
//goog.require('ol.layer.Vector');
goog.require('vk2.utils.routing');
goog.require('vk2.settings');
goog.require('vk2.tool.OpacitySlider');
goog.require('vk2.utils');

/**
 * @param {ol.layer.Base} layer
 * @param {number} index
 * @param {ol.Map} map
 * @static
 */
vk2.factory.LayerManagementFactory.getLayerManagementRecord = function(layer, index, map){

	var eventListener = {};
	eventListener.changevisibility = function(event){
		if (goog.DEBUG)
			console.log('Change visiblity event');
		
		if (goog.dom.classes.has(containerListEl, 'visible')){
			// hide layer
			goog.dom.classes.addRemove(containerListEl, 'visible', 'notvisible');
			layer['setVisible'](false);
		} else {
			// display layer
			goog.dom.classes.addRemove(containerListEl, 'notvisible', 'visible');
			layer['setVisible'](true);
		};
	};
	eventListener.updatevisibility = function(event){
		if (!layer['getVisible']() && goog.dom.classes.has(containerListEl, 'visible')){
			// hide layer
			goog.dom.classes.addRemove(containerListEl, 'visible', 'notvisible');
		} else if (layer['getVisible']() && goog.dom.classes.has(containerListEl, 'notvisible')){
			// display layer
			goog.dom.classes.addRemove(containerListEl, 'notvisible', 'visible');
		};
	};
	eventListener.moveontop = function(event){
		map.removeLayer(layer);
		map.addLayer(layer);
		event.stopPropagation();
	};
	eventListener.removelayer = function(event){
		map.removeLayer(layer);
		event.stopPropagation();
	};
	
	//
	// Build html content
	// 
	var classVisible = layer['getVisible']() ? 'visible' : 'notvisible';
	var containerListEl = goog.dom.createDom('li', {
		'class':'layermanagement-record ' + classVisible,
		'id': index,
		'data-id':layer.getId()
	});
	
	// Control Container
	var controlContainer = goog.dom.createDom('div', {'class':'control-container'});
	goog.dom.appendChild(containerListEl, controlContainer);
	
	var moveUp_button = goog.dom.createDom('button', {
		'class':'move-layer-top minimize-tool',
		'type':'button',
		'title':vk2.utils.getMsg('factory-move-top'),
		'innerHTML':vk2.utils.getMsg('factory-move-top')
	});
	goog.dom.appendChild(controlContainer, moveUp_button);	
	goog.events.listen(moveUp_button, 'click', eventListener.moveontop);
	
	var disableLayer = goog.dom.createDom('button', {
		'class':'disable-layer minimize-tool',
		'type':'button',
		'title':vk2.utils.getMsg('factory-show-map'),
		'innerHTML': vk2.utils.getMsg('factory-show-map')
	});
	goog.dom.appendChild(controlContainer, disableLayer);
	goog.events.listen(disableLayer, 'click', eventListener.changevisibility);
	
	var delete_button = goog.dom.createDom('button', {
		'class':'remove-layer minimize-tool',
		'type':'button',
		'title':vk2.utils.getMsg('factory-rm-map'),
		'innerHTML':vk2.utils.getMsg('factory-rm-map')
	});
	goog.dom.appendChild(controlContainer, delete_button);
	goog.events.listen(delete_button, 'click', eventListener.removelayer);
	
	var dragContainerEl = goog.dom.createDom('div',{'class':'drag-btn'});
	goog.dom.appendChild(controlContainer, dragContainerEl);
	
	// thumbnail
	var anchor_thumbnail = goog.dom.createDom('a',{
		'class':'thumbnail',
		'href':'#'
	});
	goog.dom.appendChild(containerListEl, anchor_thumbnail);
	
	var img_thumbnail = goog.dom.createDom('img',{
		'onerror':'this.onerror=null;this.src="http://www.deutschefotothek.de/images/noimage/image120.jpg"',
		'alt':'...',
		'src':layer.getThumbnail()
	});
	goog.dom.appendChild(anchor_thumbnail, img_thumbnail);
	
	// metadata container
	var metadataContainer = goog.dom.createDom('div',{'class':'metadata-container'});
	goog.dom.appendChild(containerListEl, metadataContainer);

	var title = goog.dom.createDom('h4',{'innerHTML':layer.getTitle()});
	goog.dom.appendChild(metadataContainer, title);
	
	var timestampContainer = goog.dom.createDom('div',{'class':'timestamps'});
	goog.dom.appendChild(metadataContainer, timestampContainer);
	
	var time = goog.dom.createDom('span', {
		'class':'timestamps-label',
		'innerHTML': vk2.utils.getMsg('timestamp') + ' ' + layer.getTime()
	});
	goog.dom.appendChild(timestampContainer, time);
	
	// add update georeference anchor if login  
	if (goog.net.cookies.get('vk2-auth')){
		
		var anchorGeoreferenceUpdate = goog.dom.createDom('a', {
			'class':'georeference-update',
			'title': vk2.utils.getMsg('factory-update-georef') + ' ...',
			'innerHTML': vk2.utils.getMsg('factory-update-georef') + ' ...',
			'target':'_blank',
			'href': vk2.utils.routing.getGeorefPageRoute(layer.getId())
		});
		goog.dom.appendChild(controlContainer, anchorGeoreferenceUpdate);
	};
	
	// opdacity slider
	var opacitySlider = new vk2.tool.OpacitySlider(containerListEl, layer, 'vertical');
	
	// append listeners for update view regarding to extern layer controls
	layer.on('change:visible', eventListener.updatevisibility);
	return containerListEl;
};