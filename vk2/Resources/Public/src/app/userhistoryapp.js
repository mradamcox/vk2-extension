goog.provide('vk2.app.UserHistoryApp');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('vk2.settings');
goog.require('vk2.utils.routing');

/**
 * @param {Object} settings
 * 		target {string} Id of the record container
 * 		targetPoints {string} Id of the point container
 * @constructor
 */
vk2.app.UserHistoryApp = function(settings) {
	
	if (goog.DEBUG) {
		console.log(settings)
	};
	
	var targetEl = goog.dom.getElement(settings['target']),
		targetPointsEl = goog.dom.getElement(settings['targetPoints']);
	
	this.fetchData_(targetEl, targetPointsEl);
};

/**
 * @param {Object} data
 * @param {Element} targetEl
 * @param {Element} targetPointsEl
 * @private
 */
vk2.app.UserHistoryApp.prototype.displayData_ = function(data, targetEl, targetPointsEl) {
	
	// update point data
	if (data['points'] !== undefined) {
		targetPointsEl.innerHTML = data['points'];
	};
	
	// render map records 
	if (data['georef_profile'] !== undefined) {
		for (var i = 0, ii = data['georef_profile'].length; i < ii; i++) {
			goog.dom.appendChild(targetEl, 
				this.renderRecord_(data['georef_profile'][i]));
		}
	}
};

/** 
 * Functions fetchs the data from server on load up
 * @param {Element} targetEl
 * @param {Element} targetPointsEl
 * @private
 */
vk2.app.UserHistoryApp.prototype.fetchData_ = function(targetEl, targetPointsEl) {
	var xhr = new goog.net.XhrIo();
	
	// add listener to request object
	goog.events.listenOnce(xhr, goog.net.EventType.SUCCESS, function(e){
		var xhr = /** @type {goog.net.XhrIo} */ (e.target),
		 	data = xhr.getResponseJson();
		
		if (goog.DEBUG) {
			console.log(data);
		};
		
		this.displayData_(data, targetEl, targetPointsEl);
		xhr.dispose();
	}, false, this);
	
	goog.events.listenOnce(xhr, goog.net.EventType.ERROR, function(e){
		alert('Something went wrong, while trying to fetch data from the server.')
	}, false, this);
	
	// send request
	var url = vk2.utils.routing.getGeoreferenceUserHistory();
	xhr.send(url, 'GET');	
};

/**
 * Function creates a map record element for a given map record 
 * @param {Object} record
 * @return {Element}
 */
vk2.app.UserHistoryApp.prototype.renderRecord_ = function(record) {
	var wmsUrl = record['transformed'] !== undefined && record['transformed'] === true ? 
			vk2.settings.WMS_DYNAMIC_TEMPLATE + '?SERVICE=WMS&VERSION=1.0.0&REQUEST=GetCapabilities&map=' + record['mapid'] : '#',
		imageUrl = record['thumbnail'] !== undefined ? record['thumbnail'] : vk2.settings.THUMBNAILS_DEFAULT;
	var articleEl = goog.dom.createDom('article', {
		id: record['georef_id'],
		innerHTML: '<div class="media"><a class="pull-right" href="' + wmsUrl + '">' +
				'<img alt="" src="' + imageUrl + '"></a><div class="media-body">' + 
				'</div></div>'	
	});
	return articleEl;
};