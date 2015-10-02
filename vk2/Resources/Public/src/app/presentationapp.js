goog.provide('vk2.app.PresentationApp');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');

goog.require('vk2.settings');
goog.require('vk2.utils');
goog.require('vk2.controller.MapController');
goog.require('vk2.tool.Permalink');
goog.require('vk2.module.SpatialTemporalSearchModule');
goog.require('vk2.module.LayerManagementModule');

/**
 * @constructor
 * @param {Object} settings
 * 		{boolean} authenticate
 * 		{string} modalAnchorClassName
 * 		{string} mapContainerId
 * 		{string} spatialsearchContainerId
 * 		{string} georefChooserContainerId
 */
vk2.app.PresentationApp = function(settings){
	if (goog.DEBUG)
		console.log(settings);
	
	// define proxy url
	vk2.utils.setProxyUrl();
	vk2.utils.checkIfCookiesAreEnabble();
	
	// check if the app should be started in georeference mode
	var isAuthenticate = goog.isDef(settings['authenticate']) && goog.isBoolean(settings['authenticate']) ? settings['authenticate'] : false,
		georeferenceModuleActivate = isAuthenticate && vk2.settings.GEOREFERENCE_ACTIVE ? true : false;
		
	// append modal behavior to page anchors
	var modalAnchorClassName = goog.isDef(settings['modalAnchorClassName']) ? settings['modalAnchorClassName'] : 'vk2-modal-anchor';
	vk2.utils.loadModalOverlayBehavior(modalAnchorClassName);
	
	// check if there is a main page and if yes load it
	this.loadWelcomePage_();
	
	//
	// initialize basic application modules
	//
	var mapController = new vk2.controller.MapController(vk2.settings.MAIN_MAP_SETTINGS, settings['mapContainerId']);
	
	// load spatialsearch 
	var spatialSearch = new vk2.module.SpatialTemporalSearchModule(settings['spatialsearchContainerId'], mapController.getMap(), georeferenceModuleActivate);
	mapController.registerSpatialTemporalSearch(spatialSearch);
	
	// load layermanagement
	var layermanagement = new vk2.module.LayerManagementModule(settings['mapContainerId'], mapController.getMap().getLayers(), mapController.getMap());
	
	// permalink 
	var permalink = new vk2.tool.Permalink(mapController.getMap());
	permalink.parsePermalink();
	mapController.registerPermalinkTool(permalink);
		
	if(goog.DEBUG){
		window['map'] = mapController.getMap();		
		window['spatialsearch'] = spatialSearch;
		window['mapsearch'] = spatialSearch.getMapSearchModule();
	};
	
	// for correct displaying of tooltips
	setTimeout(function(){vk2.utils.overwriteOlTitles(settings['mapContainerId']);}, 500);
};

/**
 * @private
 */
vk2.app.PresentationApp.prototype.loadWelcomePage_ = function(){
	// welcome page
	if (goog.dom.getElement("vk2WelcomePage")){
		goog.dom.getElement("vk2WelcomePage").click();
	};
};