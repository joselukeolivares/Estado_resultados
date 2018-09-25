function loader_pixi(){

  var Loader = PIXI.loader;
  Loader
        .add("assets/spritesheet.json")
        .add("Cliente_naranja","assets/CTE CAMINANDO/CTECAMINANDO.json")
        .add("assets/ui/Bloque_3/persons.json")
        .add("assets/ui/Bloque_3/compra.json")
        .add("assets/ui/Bloque_3/ventaCoins.json")
        .load(charged);

        function charged(){

          actual_app=indicators().createApp();
        }


}

loader_pixi();
