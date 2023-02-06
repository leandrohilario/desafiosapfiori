sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("buscadorimagens.controller.Busca_Imagens", {
            onInit: function () {
                this.produto = 
                {
                nome : "margarina",
                marca: "doriana",
                peso: 500,
                uom: "G",
                estoque :12,
                adicionarEstoque : function()
                    {
                        this.estoque ++;
                        return this.estoque + ' Unidades em estoque';
                    }
               }

            },
            /* 
            onPressBuscar: function(){
                //alert("nasceu meu aplicativo SAP Fiori!");
                // Variaveis
                var material = "Coca Cola";
                var unidades = 10;
                var peso = 1.8;
        
                //Lista = tabela interna no abap
                let listaCompras = ["pão","leite", "banana", "maça"]
                
                // objetivos = estrutura no abap
               
        
                
            var total = this.produto.adicionarEstoque	();
        
            alert(total);
        
            }
            */ 
         
            
            onPressBuscar: function(){
                // instancia objeto input na variavel
                let inputBusca = this.byId("inpBusca");
                let query = inputBusca.getValue();
                alert(query);
            }
            
        });
    });
