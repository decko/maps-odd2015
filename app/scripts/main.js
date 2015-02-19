/*jslint browser: true*/
/*global L */

(function (window, document, L, undefined) {
	'use strict';

	L.Icon.Default.imagePath = 'images/';

	// var crs = new L.Proj.CRS.TMS(
	// 	'EPSG:4674',
	// 	'+proj=tmerc +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=dd +no_defs',
	// 	[-16.300000,-48.500000,-15.450000,-47.200000], {
	// 		resolutions: [
	// 		0.70312500000000000000,
	// 		0.35156250000000000000,
	// 		0.17578125000000000000,
	// 		0.08789062500000000000,
	// 		0.04394531250000000000,
	// 		0.02197265625000000000,
	// 		0.01098632812500000000,
	// 		0.00549316406250000000,
	// 		0.00274658203125000000,
	// 		0.00137329101562500000,
	// 		0.00068664550781250000,
	// 		0.00034332275390625000,
	// 		0.00017166137695312500,
	// 		0.00008583068847656250,
	// 		0.00004291534423828120,
	// 		0.00002145767211914060,
	// 		0.00001072883605957030,
	// 		0.00000536441802978516,
	// 		0.00000268220901489258,
	// 		0.00000134110450744629
	// 		],
	// 	}
	// )

	var stamen = L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
		minZoom: 0,
		maxZoom: 18,
		attribution: 'Map data © <a href="http://www.openstreetmap.org">OpenStreetMap contributors</a>',
	});

	var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		minZoom: 0,
		maxZoom: 18,
		attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
	});

	// var codeplan_2014_SIRGAS = L.tileLayer('http://ortofoto.mapa.codeplan.df.gov.br/tms/1.0.0/mosaico_df_2014@SIRGAS/{z}/{x}/{y}.png', {
	// 	tms: true,
	// 	bounds: [[-16.300000,-48.500000],[-15.450000,-47.200000]],
	// 	continuousWorld: true,
	// 	zoomOffset: 0,
	// 	// zoomReverse: true,
	// 	// zIndex: 0
	// });

	// var codeplan_2013_SIRGAS = L.tileLayer('http://ortofoto.mapa.codeplan.df.gov.br/tms/1.0.0/mosaico_df_2014@SIRGAS/{z}/{x}/{y}.png', {
	// 	tms: true,
	// 	bounds: [[-16.300000,-48.500000],[-15.450000,-47.200000]],
	// 	continuousWorld: true,
	// 	zoomOffset: 0,
	// 	// zoomReverse: true,
	// 	// zIndex: 0
	// });

	var baseMaps = {
		'Stamen Grayscale Tiles': stamen,
		'OpenStreetMap': osm,
		// 'Codeplan Ortofoto 2014': codeplan_2014_SIRGAS,
		// 'Codeplan Ortofoto 2013': codeplan_2013_SIRGAS,
	};

	/* create leaflet map */
	var map = L.map('map', {
		center: [-15.793938, -47.882751],
		zoom: 4,
		layers: [stamen, osm],
		// layers: [stamen, osm, codeplan_2013_SIRGAS, codeplan_2014_SIRGAS],
		// crs: crs,

	});

	/* add default stamen tile layer */
	
	L.control.layers(baseMaps).addTo(map);

	L.marker([-15.793938, -47.882751]).addTo(map);

}(window, document, L));