/*global QUnit*/

sap.ui.define([
	"buscador_imagens/controller/Busca_Imagens.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Busca_Imagens Controller");

	QUnit.test("I should test the Busca_Imagens controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
