sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("buscadorimagens.controller.Busca_Imagens", {
            onInit: function () {
                //Conclete indica que variavel é do tipo tabela inerna odo ABAP
                //Vamos fazer um table type dentro de uma estrutura do ABAP
                let ImageList = {
                    Imagens : [
                            {
                                url : "http://cdn.shopify.com/s/files/1/0265/3893/4330/products/coca-cola-110591_1200x1200.jpg?v=1590528264",
                                thumbnail : "https://rapidapi.usearch.com/api/thumbnail/get?value=158279291306047240",
                                title : "Coca-cola White Lily Diner",
                                provider : {
                                                name : "shopify"
                                           }
                            },			
                            {
                                url : "http://cdn.shopify.com/s/files/1/0445/5858/1921/products/diet_coke_400x400_80d4f97c-0844-4c38-84d0-5fa6fc01260a.png?v=1631917880",
                                thumbnail : "https://rapidapi.usearch.com/api/thumbnail/get?value=6486852065862083098",
                                title : "Coca-Cola Diet Coke Mundii",
                                provider : {
                                                name : "shopify"
                                           }
                            },
                            {
                                url : "https://productplacementblog.com/wp-content/uploads/2021/01/Pepsi-Cola-Coca-Cola-and-Schaefer-Beer-in-The-United-States-vs.-Billie-Holiday-2021-.jpg",
                                thumbnail : "https://rapidapi.usearch.com/api/thumbnail/get?value=1469749380542572073",
                                title : "Pepsi Cola, Coca-Cola And Schaefer Beer In The United States Vs. Billie Holiday (2021)",
                                provider : {
                                                name : "productplacementblog"
                                           }
                            }
                            
                        ]                  
		        };

                // Criação do Modelo para exibir dados na tela
                let ImageModel = new JSONModel(ImageList); 
                let view = this.getView();
                view.setModel(ImageModel, "ModeloImagem");




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
                //alert(query);

            //https://rapidapi.com/azharxes/api/filepursuit 
            //Copiado do site acima - javascript / jquery

            const settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q="
                + query 
                + "&pageNumber=1&pageSize=10&autoCorrect=true",
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": "7532122fd8mshcebe3ee986a7c90p15a7fejsn156548b9919b",
                    "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
            
                    }
                };
                
                // Em JavaScript os parentesis () serve para passar parametros
                // callback: uma função executada no final de outra função
                // Para debugar Soucers
/*                $.ajax(settings).done(function (response) {
                    console.log(response);
                });    
*/

                $.ajax(settings).done(function (response) {
                    console.log(response);

                    // Instanciar o modelo
                    let oImageModel = this.getView().getModel("ModeloImagem");
                    let oDadosImage = oImageModel.getData();
                    //limpar a tabela interna = array
                    oDadosImage.Imagens = [];

                    //Inserir os registro novos
                    //Loop adicinoa dados de uma tabela em outra tabela
                    let listaResultados = response.value;
                    let newItem;

                    //vamos ao loop classico
                     // 1a var contador  2a var condição 3a var 
                    
                     for (var i = 0; i < listaResultados.length; i++) {
                        // ler a tabela pelo indice
                        newItem = listaResultados[i];
                        // adicinoar os dados na nova tabela
                        oDadosImage.Imagens.push(newItem);
                    }

                    // Atualizar o modelo
                    oImageModel.refresh(); 

                }.bind(this)
                );    



            }
            
        });
    });
