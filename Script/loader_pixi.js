function loader_pixi(){

  var Loader = PIXI.loader;
  Loader
        .add('assets/spritesheet.json')
        .add('Cliente_naranja','assets/CTE CAMINANDO/CTECAMINANDO.json')
        .add("assets/ui/Bloque_3/persons.json")
        .add("assets/ui/Bloque_3/arts.json")
        .add("assets/ui/Bloque_3/ventaCoins.json")
        .add("assets/ui/Bloque_4/clientes/5. ACV2.png")
        .load(charged);

        function charged(){

          actual_app=segmentacion().createApp();
        }


}

loader_pixi();
