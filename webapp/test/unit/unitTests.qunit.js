/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"buscador_imagens/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
