function shopping(){

  debugger;
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
		        		tienda_dentro.scale.set(0.4,0.4);

		app.stage.addChild(tienda_dentro);

              try{

                      var Loader = PIXI.loader;
                      Loader
                            .add('assets/Articulos.json')
                            .load(setup);

                  }catch(err){
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
/*
    PIXI.loader
        .add('Cliente_1','assets/Cliente_1.json')
      .add('Cliente_2','assets/Cliente_2.json')
      .add('Cliente_3','assets/Cliente_3.json')
      .add('Cliente_4','assets/Cliente_4.json')
      .add('Cliente_5','assets/cliente_5.json')
      .add('Cliente_6','assets/cliente_6.json')
      .add('Cliente_7','assets/cliente_7.json')
      .add('Cliente_8','assets/cliente_8.json')
      .add('Cliente_9','assets/cliente_9.json')
      .load(onAssetsLoad);



      var Cliente_1,
       Cliente_2,
       Cliente_3,
       Cliente_4,
       Cliente_5,
       Cliente_6,
       Cliente_7,
       Cliente_8,
       Cliente_9;
*/

  PIXI.loader
      .add('Cliente_naranja','assets/Cliente_naranja.json')
      .load(onAssetsLoad);

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

	   app.stage.addChild(tvs);

  	   audio = new PIXI.Sprite(id['8. AUDIO.png']);
	   audio.position.set(screen.width / 1.45, screen.height / 3.2);
	   audio.scale.set(0.4,0.4);
     audio.alpha=0;

	   app.stage.addChild(audio);

       celulares = new PIXI.Sprite(id['10. CELULARES.png']);
	   celulares.position.set(screen.width / 1.38,screen.height / 2.5);
	   celulares.scale.set(0.4,0.4);
     celulares.alpha=0;

	   app.stage.addChild(celulares);

	   ////////////////////////////////////////////////

	   sala = new PIXI.Sprite(id['6. SALA.png']);
	   sala.position.set(screen.width /8, screen.height / 6.2);
	   sala.scale.set(0.5,0.5);
     sala.alpha=0;

     app.stage.addChild(sala);

	   lavanderia = new PIXI.Sprite(id['7. LAVANDERIA.png']);
	   lavanderia.position.set(screen.width /16, screen.height / 4);
	   lavanderia.scale.set(0.5,0.5);
     lavanderia.alpha=0;

     app.stage.addChild(lavanderia);

	   lineablanca = new PIXI.Sprite(id['9. LINEA BLANCA.png']);
	   lineablanca.position.set(screen.width /7, screen.height / 3.8);
	   lineablanca.scale.set(0.5,0.5);
     lineablanca.alpha=0;

      app.stage.addChild(lineablanca);

	   comedor = new PIXI.Sprite(id['11. COMEDOR.png']);
	   comedor.position.set(screen.width /64, screen.height / 2);
	   comedor.scale.set(0.5,0.5);
     comedor.alpha=0;

     app.stage.addChild(comedor);

  var clientes_t=[Cliente_1,Cliente_2,Cliente_3,Cliente_4,Cliente_5,Cliente_6,Cliente_7,Cliente_8,Cliente_9];

function onAssetsLoad(Loader,res){

var position=1;


          for(i=0;i<clientes_t.length;i++){

          var p = i * 200;
          var q = i * 100;
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






/*
     		   function onAssetsLoad(loader,res){


     		   Cliente_1 = new PIXI.spine.Spine(res.Cliente_1.spineData);


     		   Cliente_2 = new PIXI.spine.Spine(res.Cliente_2.spineData);


     		   Cliente_3 = new PIXI.spine.Spine(res.Cliente_3.spineData);


     		   Cliente_4 = new PIXI.spine.Spine(res.Cliente_4.spineData);


     		   Cliente_5 = new PIXI.spine.Spine(res.Cliente_5.spineData);


     		   Cliente_6 = new PIXI.spine.Spine(res.Cliente_6.spineData);


     		   Cliente_7 = new PIXI.spine.Spine(res.Cliente_7.spineData);


     		   Cliente_8 = new PIXI.spine.Spine(res.Cliente_8.spineData);


     		   Cliente_9 = new PIXI.spine.Spine(res.Cliente_9.spineData);


     		   var clienteCage = new PIXI.Container();
     		   var clienteCage_2 = new PIXI.Container();
     		   var clienteCage_3 = new PIXI.Container();
     		   var clienteCage_4 = new PIXI.Container();
     		   var clienteCage_5 = new PIXI.Container();
     		   var clienteCage_6 = new PIXI.Container();
     		   var clienteCage_7 = new PIXI.Container();
     		   var clienteCage_8 = new PIXI.Container();
     		   var clienteCage_9 = new PIXI.Container();

     		   clienteCage.addChild(Cliente_1);
     		   clienteCage_2.addChild(Cliente_2);
     		   clienteCage_3.addChild(Cliente_3);
     		   clienteCage_4.addChild(Cliente_4);
           clienteCage_5.addChild(Cliente_5);
     		   clienteCage_6.addChild(Cliente_6);
     		   clienteCage_7.addChild(Cliente_7);
     		   clienteCage_8.addChild(Cliente_8);
     		   clienteCage_9.addChild(Cliente_9);


          Cliente_1.scale.set(0.1,0.1);
                 Cliente_1.x = app.screen.width /1.3;
                 Cliente_1.y = app.screen.height / 1.3;

     			Cliente_2.scale.set(0.1,0.1);
                 Cliente_2.x = app.screen.width /3;
                 Cliente_2.y = app.screen.height / 1.35;

     			Cliente_3.scale.set(0.1,0.1);
                 Cliente_3.x = 900;
                 Cliente_3.y = app.screen.height / 1.25;

                 Cliente_4.scale.set(0.1,0.1);
                 Cliente_4.x = 1150;
                 Cliente_4.y = app.screen.height / 1.5;

                 Cliente_5.scale.set(0.1,0.1);
                 Cliente_5.x = app.screen.width / 4.5;
                 Cliente_5.y = app.screen.height / 1.6;

     			Cliente_6.scale.set(0.1,0.1);
                 Cliente_6.x = app.screen.width / 2.5;
                 Cliente_6.y = app.screen.height / 2.2;

     			Cliente_7.scale.set(0.1,0.1);
                 Cliente_7.x = app.screen.width /1.5;
                 Cliente_7.y = app.screen.height / 2.8;

     			Cliente_8.scale.set(0.1,0.1);
                 Cliente_8.x = app.screen.width / 4.5;
                 Cliente_8.y = app.screen.height / 4;

     			Cliente_9.scale.set(0.1,0.1);
                 Cliente_9.x = app.screen.width / 3;
                 Cliente_9.y = app.screen.height / 4.6;
*/
  //     app.stage.addChild(clienteCage);
  //  	 app.stage.addChild(clienteCage_2);
  //  	 app.stage.addChild(clienteCage_3);
  //  	 app.stage.addChild(clienteCage_4);
  //  	 app.stage.addChild(clienteCage_7);
  //  	 app.stage.addChild(clienteCage_9);
  //  	 app.stage.addChild(sala);
  //  	 app.stage.addChild(clienteCage_8);
  //  	 app.stage.addChild(lavanderia);
  //     app.stage.addChild(lineablanca);
  //     app.stage.addChild(clienteCage_5);
  //  	 app.stage.addChild(clienteCage_6);
  //  	 app.stage.addChild(comedor);

  /*
       Cliente_1
            .on('click',Click(Cliente_1));

       Cliente_2
             .on('click',Click(Cliente_2));

       Cliente_3
               .on('click',Click(Cliente_3));

      Cliente_4
              .on('click',Click(Cliente_4));


      var clientes_t=[Cliente_1,Cliente_2,Cliente_3,Cliente_4];

              for(var i=0;i<4;i++){
                  clientes_t[i].interactive=true;
                  //clientes_t[i].state.setAnimation(0,'happy',false);
                  clientes_t[i].on('pointerdown',clicked);
                  clientes_t[i].on('mouseout',mouseout);
              }

              function clicked(){

                    console.log("happy false");
                    this.state.setAnimation(0,'happy',false);




              }

              function mouseout(){


                //this.state.setAnimation(0,'happy',false);


              }


*/

     TweenMax.to([tienda_dentro,celulares,comedor,tvs,sala,lavanderia,audio,lineablanca],4,{alpha:1});

//}


   }//end setup


  }//end build

return shop;
}//end inicio
