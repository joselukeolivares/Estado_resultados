function shopping(){


   var shop={};

   shop.build=function(app)
{
  console.log("building shop");

    var texture = PIXI.Texture.fromImage('assets/Interior tienda.png');
    var tienda_dentro = new PIXI.Sprite(texture);
    tienda_dentro.alpha=0;

                tienda_dentro.x = app.screen.width / 2;
                tienda_dentro.y = app.screen.height / 2;
                tienda_dentro.anchor.set(0.5,0.5);
		        		tienda_dentro.scale.set(0.5,0.5);
    app.stage.addChild(tienda_dentro);
    var group_2=new PIXI.display.Group(-1,false);
    app.stage.addChild(new PIXI.display.Layer(group_2));
    var container=new PIXI.Container();




              try{

                      var Loader = PIXI.loader;
                      Loader
                            .add('assets/Articulos.json')
                            .load(setup);

                  }catch(err){
                    console.log(err);
                  setup();
                }


   var celulares,
       comedor,
	     tvs,
	     sala,
	     lavanderia,
       audio,
	     lineablanca;


	function setup(){

     var id = Loader.resources['assets/Articulos.json'].textures;


       tvs = new PIXI.Sprite(id['5. TVS.png']);
	   tvs.position.set(1225,180);
	   tvs.scale.set(0.5,0.5);
     tvs.alpha=0;
     tvs.parentGroup=group_2;

	   //app.stage.addChild(tvs);


  	   audio = new PIXI.Sprite(id['8. AUDIO.png']);
	   audio.position.set(1300,350);
	   audio.scale.set(0.5,0.5);
     audio.alpha=0;
     audio.parentGroup=group_2;

	   //app.stage.addChild(audio);

       celulares = new PIXI.Sprite(id['10. CELULARES.png']);
	   celulares.position.set(1400,450);
	   celulares.scale.set(0.5,0.5);
     celulares.alpha=0;
     celulares.parentGroup=group_2;

	   //app.stage.addChild(celulares);

	   ////////////////////////////////////////////////

	   sala = new PIXI.Sprite(id['6. SALA.png']);
	   sala.position.set(0,190);
	   sala.scale.set(0.5,0.5);
     sala.alpha=0;
     sala.parentGroup=group_2;

	   //app.stage.addChild(sala);

	   lavanderia = new PIXI.Sprite(id['7. LAVANDERIA.png']);
	   lavanderia.position.set(-120,320);
	   lavanderia.scale.set(0.5,0.5);
     lavanderia.alpha=0;
     lavanderia.parentGroup=group_2;

	   //app.stage.addChild(lavanderia);

	   lineablanca = new PIXI.Sprite(id['9. LINEA BLANCA.png']);
	   lineablanca.position.set(25,360);
	   lineablanca.scale.set(0.5,0.5);
     lineablanca.alpha=0;
     lineablanca.parentGroup=group_2;

	   //app.stage.addChild(lineablanca);

	   comedor = new PIXI.Sprite(id['11. COMEDOR.png']);
	   comedor.position.set(-180,600);
	   comedor.scale.set(0.5,0.5);
     comedor.alpha=0;
     comedor.parentGroup=group_2;
     //container.addChild(comedor);

     container.addChild(celulares,comedor,tvs,sala,lavanderia,audio,lineablanca);
     TweenMax.to([tienda_dentro,celulares,comedor,tvs,sala,lavanderia,audio,lineablanca],3,{alpha:1});
     app.stage.addChild(container);
     //console.log(self.app.stage);
     debugger;

    clientes(app);

   }//end setup

   function clientes(app){
    
   }

  }//end build

return shop;
}//end inicio
