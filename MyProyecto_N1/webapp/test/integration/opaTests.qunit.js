/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/ProyectoN1/MyProyecto_N1/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});