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
        //.on("progress",loadProgressHandler)
        .load(charged);
/*
        //start.js
        let background = new PIXI.Sprite(PIXI.Texture.fromImage("assets/background_coppel.png"));
        let storeEntrance = new PIXI.Sprite(PIXI.Texture.fromImage("assets/coppel.png"));
        let door1 = new PIXI.Sprite(PIXI.Texture.fromImage("assets/singleDoor.png"));
        let door2 = new PIXI.Sprite(PIXI.Texture.fromImage("assets/singleDoor.png"));
        //shopping.js
        var btn = PIXI.Texture.fromImage('assets/Button_3.png');
        var btn_2 = PIXI.Texture.fromImage('assets/Botton_1.png');
        var texture = PIXI.Texture.fromImage('assets/4. TIENDA FONDO.png');

        //story.js
        var texture = PIXI.Texture.fromImage('assets/1. ROMBO AZUL.png');
        var button_video_1=new PIXI.Sprite(PIXI.Texture.fromImage('assets/ui/Bloque_2/ERC_video_1.png'));
        let paused=new PIXI.Sprite(PIXI.Texture.fromImage('assets/ui/Bloque_2/pause_play.png'));
        let next_block=new PIXI.Sprite(PIXI.Texture.fromImage('assets/ui/Bloque_2/explorar_1.png'));
        let close=new PIXI.Sprite(PIXI.Texture.fromImage('assets/ui/Bloque_2/close_video_2.png'));

        //indicators.js
        let tasaDeCompra = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/Bloque_3/tasa_de_compra.png"));
        let compraPromedio = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/Bloque_3/compra_promedio.png"));
        let venta = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/Bloque_3/venta.png"));
        let contButton = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/Bloque_3/continue.png"));
        let retry = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/Bloque_3/retry.png"));
        let rightArrow = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/Bloque_3/rightArrow.png"));
        //slider.js
        var roundedRect=new PIXI.Sprite(PIXI.Texture.fromImage('assets/ui/Bloque_3/compraProm_indicador.png'));
        var roundedRects=new PIXI.Sprite(PIXI.Texture.fromImage('assets/ui/Bloque_3/tasa_indicador.png'));
*/
         function loadProgressHandler(loader,resource){
           console.log("Se ha cargado el archivo: "+resource.url);
           console.log("Progreso: "+loader.progress+"%");
         }

        function charged(){
          actual_app=indicators().createApp();
        }


}

loader_pixi();
