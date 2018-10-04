function loader_pixi(){

  var Loader = PIXI.loader;
  Loader
        .add([
          "assets/spritesheet.json",
          {name:"Cliente_naranja",url:"assets/CTE CAMINANDO/CTECAMINANDO.json"},
          "assets/ui/Bloque_3/persons.json",
          "assets/ui/Bloque_3/compra.json",
          "assets/ui/Bloque_3/ventaCoins.json",
          "assets/background_coppel.png",
          "assets/coppel.png",
          "assets/singleDoor.png",
          "assets/Button_3.png",
          "assets/Botton_1.png",
          "assets/4. TIENDA FONDO.png",
          "assets/ui/Bloque_2/ERC_video_1.png",
          "assets/ui/Bloque_2/pause_play.png",
          "assets/ui/Bloque_2/explorar_1.png",
          "assets/1. ROMBO AZUL.png",
          "assets/ui/Bloque_2/close_video_2.png",
          "assets/ui/Bloque_2/interface.json",
          "assets/MONEDA DANDO VUELTAS (1)/spritesheet (2).json",
          {name:"cliente_negro",url:"assets/CTE NEGRITO LEVANTANDO LOS BRAZOS/CTE NEGRITO LEVANTANDO LOS BRAZOS/CTENEGROMANOSARRIBA.json"},
          "assets/ui/Bloque_3/tasa_de_compra.png",
          "assets/ui/Bloque_3/compra_promedio.png",
          "assets/ui/Bloque_3/venta.png",
          "assets/ui/Bloque_3/ic-retry.png",
          "assets/ui/Bloque_3/ic-right-arrow.png",
          "assets/ui/Bloque_3/ic-next.png",
          "assets/ui/Bloque_3/ic-next-selected.png",
          "assets/ui/Bloque_3/ic-left-arrow-circular.png",
          "assets/ui/Bloque_3/ic-times.png",
          "assets/ui/Bloque_3/ic-equals.png",
          "assets/ui/Bloque_3/num-mil.png",
          "assets/ui/Bloque_3/num-500mil.png",
          "assets/ui/Bloque_3/num-millon.png",
          "assets/ui/Bloque_3/num-1millon120.png",
          "assets/ui/Bloque_3/num-2mil.png",
          "assets/ui/Bloque_3/num-mil400.png",
          "assets/ui/Bloque_3/tasa-50percent.png",
          "assets/ui/Bloque_3/tasa-80percent.png",
          "assets/ui/Bloque_3/compraProm_indicador.png",
          "assets/ui/Bloque_3/tasa_indicador.png",

          "assets/ui/Bloque_3/b-continue.png",
          "assets/ui/Bloque_3/b-continue-selected.png"

        ])
        .on("progress",loadProgressHandler)
        .load(charged);


         function loadProgressHandler(loader,resource){
           console.log("Se ha cargado el archivo: "+resource.url);
           console.log("Progreso: "+loader.progress+"%");
         }

        function charged(){
          actual_app=start().createApp();
        }


}

loader_pixi();
