function shopping(){


   var shop={};
   shop.flag_ctes=true;

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
try{
  var loader_ctes=PIXI.loader;
      if(shop.flag_ctes){
        loader_ctes
        .add('Cliente_naranja','assets/Cliente_naranja.json')
        .load(onAssetsLoad);
      }


}catch(err){
  debugger;
  if(shop.flag_ctes)
  Loader.load(onAssetsLoad);
}


      var Cliente_1,
       Cliente_2,
       Cliente_3,
       Cliente_4,
       Cliente_5,
       Cliente_6,
       Cliente_7,
       Cliente_8,
       Cliente_9;


     var id = Loader.resources['assets/Articulos.json'].textures;


       tvs = new PIXI.Sprite(id['5. TVS.png']);
	   tvs.position.set(screen.width / 1.5, screen.height / 5.6);
	   tvs.scale.set(0.4,0.4);
     tvs.alpha=0;
     tvs.parentGroup=group_2;

	   //app.stage.addChild(tvs);

  	   audio = new PIXI.Sprite(id['8. AUDIO.png']);
	   audio.position.set(screen.width / 1.45, screen.height / 3.2);
	   audio.scale.set(0.4,0.4);
     audio.alpha=0;
     audio.parentGroup=group_2;

	   //app.stage.addChild(audio);

       celulares = new PIXI.Sprite(id['10. CELULARES.png']);
	   celulares.position.set(screen.width / 1.38,screen.height / 2.5);
	   celulares.scale.set(0.4,0.4);
     celulares.alpha=0;
     celulares.parentGroup=group_2;

	   //app.stage.addChild(celulares);

	   ////////////////////////////////////////////////

	   sala = new PIXI.Sprite(id['6. SALA.png']);
	   sala.position.set(screen.width /8, screen.height / 6.2);
	   sala.scale.set(0.5,0.5);
     sala.alpha=0;
     sala.parentGroup=group_2;

	   //app.stage.addChild(sala);

	   lavanderia = new PIXI.Sprite(id['7. LAVANDERIA.png']);
	   lavanderia.position.set(screen.width /16, screen.height / 4);
	   lavanderia.scale.set(0.5,0.5);
     lavanderia.alpha=0;
     lavanderia.parentGroup=group_2;

	   //app.stage.addChild(lavanderia);

	   lineablanca = new PIXI.Sprite(id['9. LINEA BLANCA.png']);
	   lineablanca.position.set(screen.width /7, screen.height / 3.8);
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




function onAssetsLoad(Loader,res){
  var clientes_t=[Cliente_1,Cliente_2,Cliente_3,Cliente_4,Cliente_5,Cliente_6,Cliente_7,Cliente_8,Cliente_9];
  shop.clientes_t=clientes_t;
var position=1;


          for(i=0;i<clientes_t.length;i++){

          var p = i * 200;
          var q = i * 100;
          debugger;
           clientes_t[i] = new PIXI.spine.Spine(res.Cliente_naranja.spineData);
           clientes_t[i].scale.set(0.07,0.07);
           clientes_t[i].x = app.screen.width / 16+p;
           clientes_t[i].y = app.screen.height / 16+q;
           clientes_t[i].interactive = true;
           clientes_t[i].state.setAnimation(0,'walk',true);
           clientes_t[i].on('mouseover',clicked);
           clientes_t[i].on('mouseout',mouseout);
           clientes_t[i].walk=true;
           app.stage.addChild(clientes_t[i]);

          }

       function clicked(){
          console.log("happy");
         this.state.setAnimation(0,'happy',false);
         this.walk=false;

       }


       function mouseout(){

      this.state.setAnimation(0,'unhappy',false);
      this.state.setAnimation(0,'walk',true);
      this.walk=true;

       }

       app.ticker.add(function(delta) {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation

    for (var i=0;i<clientes_t.length;i++) {
        if(clientes_t[i].walk)
        clientes_t[i].x += 1 * delta;
        if(clientes_t[i].x>app.screen.width)
        clientes_t[i].x=0+1 * delta;


    }

});


}


setTimeout(function () {LoadButton()}, 10000);

function LoadButton(){

  var btn = PIXI.Texture.fromImage('assets/Botton_1.png');
  var btn_2 = PIXI.Texture.fromImage('assets/Button_2.png');

  	var button = new PIXI.Sprite(btn);

  	        button.x = app.screen.width / 2;
              button.y = app.screen.height / 2;
              button.anchor.set(0.5,0.5);
              button.scale.set(0.25,0.25);


       app.stage.addChild(button);

       button.interactive = true;
       button.buttonMode = true;

              button
                 .on('mouseover',MouseOver)
                 .on('mouseout',MouseOut);


                 function MouseOver(){
					this.Over = true;
					if(this.isdown){
					return;
					}
					this.texture = btn_2;
					}

					function MouseOut(){
					this.Over = false;
					if(this.isdown){
					return;
					}
					this.texture = btn;

					}




            					}







     TweenMax.to([tienda_dentro,celulares,comedor,tvs,sala,lavanderia,audio,lineablanca],4,{alpha:1});


     container.addChild(celulares,comedor,tvs,sala,lavanderia,audio,lineablanca);
     TweenMax.to([tienda_dentro,celulares,comedor,tvs,sala,lavanderia,audio,lineablanca],3,{alpha:1});
     app.stage.addChild(container);
     //console.log(self.app.stage);
     debugger;

    clientes(app);

   }//end setup


   function clientes(app){

   }

 return shop;
  }//end build

return shop;
}//end inicio
