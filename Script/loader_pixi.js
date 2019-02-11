
function loader_pixi(){

  var Loader = PIXI.loader;
  Loader
        .add([
          "assets/ui/bloque_1/Articulos.json",
          "assets/video/ESTADO DE RESULTADO.mp4",
          {name:"Cliente_naranja",url:"assets/CTE CAMINANDO/CTECAMINANDO.json"},
          "assets/ui/bloque_3/persons.json",
          "assets/ui/bloque_3/compra.json",
          "assets/ui/bloque_3/ventaCoins.json",
          "assets/background_coppel.png",
          "assets/coppel.png",
          "assets/singleDoor.png",
          "assets/Button_3.png",
          "assets/Botton_1.png",
          "assets/4. TIENDA FONDO.png",
          "assets/ui/bloque_2/ERC_video_1.png",
          "assets/ui/bloque_2/pause_play.png",
          "assets/ui/bloque_2/explorar_1.png",
          "assets/1. ROMBO AZUL.png",
          "assets/ui/bloque_2/close_video_2.png",
          "assets/ui/bloque_2/interface.json",
          "assets/MONEDA DANDO VUELTAS (1)/spritesheet (2).json",
          {name:"cliente_negro",url:"assets/CTE NEGRITO LEVANTANDO LOS BRAZOS/CTE NEGRITO LEVANTANDO LOS BRAZOS/CTENEGROMANOSARRIBA.json"},
          "assets/ui/bloque_3/b_tasa_de_compra.png",
          "assets/ui/bloque_3/b_tasa_de_compra_gray.png",
          "assets/ui/bloque_3/b_compra_promedio.png",
          "assets/ui/bloque_3/b_compra_promedio_gray.png",
          "assets/ui/bloque_3/b_venta.png",
          "assets/ui/bloque_3/b_venta_gray.png",
          "assets/ui/bloque_3/ic-retry.png",
          "assets/ui/bloque_3/ic-right-arrow.png",
          "assets/ui/bloque_3/ic-next.png",
          "assets/ui/bloque_3/ic-next-selected.png",
          "assets/ui/bloque_3/ic-left-arrow-circular.png",
          "assets/ui/bloque_3/ic-times.png",
          "assets/ui/bloque_3/ic-equals.png",
          "assets/ui/bloque_3/num-mil.png",
          "assets/ui/bloque_3/num-500mil.png",
          "assets/ui/bloque_3/num-millon.png",
          "assets/ui/bloque_3/num-1millon120.png",
          "assets/ui/bloque_3/num-2mil.png",
          "assets/ui/bloque_3/num-mil400.png",
          "assets/ui/bloque_3/tasa-50percent.png",
          "assets/ui/bloque_3/tasa-80percent.png",
          "assets/ui/bloque_3/compraProm_indicador.png",
          "assets/ui/bloque_3/tasa_indicador.png",
          "assets/ui/bloque_3/b-continue.png",
          "assets/ui/bloque_3/b-continue-selected.png",
          "assets/ui/bloque_3/num-800mil.png",
          "assets/ui/bloque_4/LEVANTANDO_LA_ MANO.png",
          "assets/ui/bloque_5/bloque5_ctes.json",
          "assets/ui/bloque_5/ic-hand.png",
          "assets/ui/bloque_5/CTES EN 500X350/2. GENERADOS 500x350.png",
          "assets/ui/bloque_5/spritesheet_bloque_5.json",
          "assets/ui/bloque_5/botones/13. RECUADRO DE TASA DE COMPRA.png",
          "assets/ui/bloque_5/botones/14. RECUADRO DE TASA DE C.P.A Y VENTA.png",
          "assets/ui/bloque_5/botones/12. RECUADRO DE RESULTADOS FINALES 1.png",
          "assets/ui/bloque_5/botones/12. RECUADRO DE RESULTADOS FINALES.png",
          "assets/ui/bloque_4/clientes/globo1.png",
          "assets/ui/bloque_4/clientes/globo2.png",
          "assets/ui/bloque_4/clientes/globo3.png",
          "assets/ui/bloque_4/clientes/globo4.png",
          "assets/ui/bloque_5/spritesheet.json",
          "assets/ui/bloque_4/clientes/globo1_click.png",
          "assets/ui/bloque_4/clientes/globo2_click.png",
          "assets/ui/bloque_4/clientes/globo3_click.png",
          "assets/ui/bloque_4/clientes/globo4_click.png",
          "assets/ui/bloque_4/clientes_2/clientes300/clientes300.json",
          "assets/ui/bloque_4/clientes_min/clientes_min.json",
          "assets/ui/bloque_4/test_gimp.png",
          "assets/ui/bloque_4/globos/1 VDO.png",
          "assets/ui/bloque_4/globos/2 VDO.png",
          "assets/ui/bloque_4/globos/3 VDO.png",
          "assets/ui/bloque_4/globos/4 VDO.png",
          "assets/ui/bloque_7/2 FONDO.png",
          "assets/ui/bloque_7/EQUIPOCREADO FONDO.png",
          "assets/ui/bloque_7/EQUIPOCREADO 1.png",
          "assets/ui/bloque_7/EQUIPOCREADO 2.png",
          "assets/ui/bloque_7/EQUIPOCREADO 3.png",
          "assets/ui/bloque_7/EQUIPOCREADO 4.png",
          "assets/ui/bloque_7/EQUIPOCREADO 5.png",
          "assets/ui/bloque_7/EQUIPOCREADO 6.png",
          "assets/ui/bloque_7/EQUIPOCREADO 7.png",
          "assets/ui/bloque_7/EQUIPOCREADO 8.png",
          "assets/ui/bloque_6/22. BOTON REGRESAR UN PASO PARA ATRAS 1.png",
          "assets/ui/bloque_6/22. BOTON REGRESAR UN PASO PARA ATRAS 2.png",
          "assets/ui/bloque_6/Globo-01.png",
          "assets/ui/bloque_6/Globo-02.png",
          "assets/ui/bloque_6/Globo-03.png",
          "assets/ui/bloque_6/Globo-04.png",
          "assets/ui/bloque_6/Globo-01-clicked.png",
          "assets/ui/bloque_6/Globo-02-clicked.png",
          "assets/ui/bloque_6/Globo-03-clicked.png",
          "assets/ui/bloque_6/Globo-04-clicked.png"
        ])
        .on("progress",loadProgressHandler)
        .load(charged);



        var progreso = document.createElement("DIV");
        progreso.setAttribute("class","ldBar");
        progreso.setAttribute("style","height:35%;width:35%;position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%)");
        progreso.setAttribute("data-value","0");
        document.body.appendChild(progreso);


        progreso.style.textAlign="center";
        progreso.style.fontFamily="Roboto-Regular";
        progreso.style.fontSize=factorScreen(100)+"px";


         function loadProgressHandler(loader,resource){

          //console.log("Se ha cargado el archivo: "+resource.url);
         //console.log("Progreso: "+loader.progress+"%");

           var t = new ldBar('.ldBar');
           var s =  document.getElementsByClassName('ldBar').ldBar;

               t.set(loader.progress);


               progreso.setAttribute("data-value","0");
           if(loader.progress > 99.99)
           {
             document.body.removeChild(progreso);
           }

         }

     var v = document.getElementsByClassName('ldBar-label');



        function charged(){
           actual_app=start().createApp();
        }


}

//"assets/ui/bloque_4/1. N-15.png",
//"assets/ui/bloque_4/clientes/4. ASV.png",
//"assets/ui/bloque_4/clientes/7. S-15 2.png",
//"assets/ui/bloque_4/clientes/2. N+15.png",
//"assets/ui/bloque_4/clientes/5. ACV2.png",
//"assets/ui/bloque_4/clientes/8. S+15 2.png",
//"assets/ui/bloque_4/clientes/3. GENERADOS.png",
//"assets/ui/bloque_4/clientes/6. Z.png",
//"assets/ui/bloque_4/clientes/9. QUEBRANTADOS.png",
//"assets/ui/bloque_4/globos/1 VDO.png",
//"assets/ui/bloque_4/globos/2 VDO.png",
//"assets/ui/bloque_4/globos/3 VDO.png",
//"assets/ui/bloque_4/globos/4 VDO.png",
