goog.provide('vk2.georeference.utils');

goog.require('goog.dom');

/**
 * The function initialize the coordinates systems relavant for the georeferencing application
 */
vk2.georeference.utils.initializeGeorefenceCRS = function(){
	proj4.defs("EPSG:3043","+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
	proj4.defs("EPSG:4314",'+proj=longlat +ellps=bessel +datum=potsdam +no_defs');
	proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");
	proj4.defs("EPSG:900913",'+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +over no_defs');
	proj4.defs("EPSG:3857","+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs");
};

/**
 * @param {ol.source.Vector} clipPolygonSource
 * @return {Array.<Array.<Number>>}
 */
vk2.georeference.utils.extractClipPolygon = function(clipPolygonSource){
	var clipFeature = clipPolygonSource.getFeatures()[0];
	if (goog.isDef(clipFeature) && clipFeature.getGeometry().getType() === "Polygon"){
		var response = [];
		var coordinates = clipFeature.getGeometry().getCoordinates()[0];
		for (var i = 0; i < coordinates.length; i++){
			response.push(vk2.utils.transformGeoCoordsToPixel(coordinates[i]));
		};
		return response;
	};
	return [];
};

/**
 * @param {string} elementId
 * @return {string}
 */
vk2.georeference.utils.extractTransformationAlgorithm = function(elementId){
	var el = goog.dom.getElement(elementId);
	if (el.value.toLowerCase() === 'tps')
		return 'tps';
	if (el.value.toLowerCase() === 'polynom')
		return 'polynom';
	return 'affine';
};

/**
 * @param {string} elementId
 * @return {string}
 */
vk2.georeference.utils.extractProjection = function(elementId){
	var el = goog.dom.getElement(elementId);
	return el.value;
};

/**
 * Function checks if the given gcp object is a gcp object for initial setup. Means there are no source 
 * cooridinates given, but 4 corner coordinates for the target srs.
 *  
 * @param {Object} gcp
 * @return {boolean}
 */
vk2.georeference.utils.isNewTKGCP = function(gcp){
	if (goog.isDef(gcp['gcps']) && gcp['gcps'].length === 4) {
		var gcps = gcp['gcps'];
		if (gcps[0]['source'].length === 0 && gcps[1]['source'].length === 0 && gcps[2]['source'].length === 0 && gcps[3]['source'].length === 0)
			return true;
	};
};