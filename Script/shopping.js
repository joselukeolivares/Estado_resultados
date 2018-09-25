function shopping(){


   var shop={};
   shop.flag_ctes=true;
   shop.escala_1=(self.height*.4)/950;
   shop.escala_2=(self.height*.5)/950;
   shop.escala_3=(self.height*.07)/950;
   shop.escala_4=(self.height*.2)/950;

   shop.build=function(app)
{
  console.log("building shop");

  shop.width=app.screen.width;
  shop.height=app.screen.height;

    var texture = PIXI.Texture.fromImage('assets/4. TIENDA FONDO.png');
    var tienda_dentro = new PIXI.Sprite(texture);
    tienda_dentro.alpha=0;

                tienda_dentro.x = app.screen.width / 2;
                tienda_dentro.y = app.screen.height / 2;
                tienda_dentro.anchor.set(0.5,0.5);
		        		tienda_dentro.scale.set(shop.escala_2,shop.escala_2);
                app.stage.addChild(tienda_dentro);

                var group_2=new PIXI.display.Group(0, true);
                     group_2.on('sort', function (sprite) {

                      sprite.zOrder = -sprite.y;
                           });

               app.stage.addChild(new PIXI.display.Layer(group_2));

               var container=new PIXI.Container();

              try{

                      var Loader = PIXI.loader;
                      Loader
                            .add('assets/spritesheet.json')
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
	     lineablanca,
       perfumeria;


	function setup(){
try{
  var loader_ctes=PIXI.loader;
      if(shop.flag_ctes){
        loader_ctes
        .add('Cliente_naranja','assets/CTE CAMINANDO/CTECAMINANDO.json')
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



     var id = Loader.resources['assets/spritesheet.json'].textures;
       tvs = new PIXI.Sprite(id['5. TVS.png']);
	   tvs.position.set(shop.width*.75, shop.height / 4);
	   tvs.scale.set(shop.escala_1,shop.escala_1);
     tvs.alpha=0;
     tvs.parentGroup=group_2;

	   //app.stage.addChild(tvs);

  	   audio = new PIXI.Sprite(id['8. AUDIO.png']);
	   audio.position.set(shop.width*.82, shop.height / 2.2);
	   audio.scale.set(shop.escala_1,shop.escala_1);
     audio.alpha=0;
     audio.parentGroup=group_2;

	   //app.stage.addChild(audio);

       celulares = new PIXI.Sprite(id['10. CELULARES.png']);
	   celulares.position.set(shop.width*.85,shop.height / 1.8);
	   celulares.scale.set(shop.escala_1,shop.escala_1);
     celulares.alpha=0;
     celulares.parentGroup=group_2;

	   //app.stage.addChild(celulares);

	   ////////////////////////////////////////////////

	   sala = new PIXI.Sprite(id['6. SALA.png']);
	   sala.position.set(shop.width*0.00001, shop.height / 5);
	   sala.scale.set(shop.escala_2,shop.escala_2);
     sala.alpha=0;
     sala.parentGroup=group_2;


	   //app.stage.addChild(sala);

	   lavanderia = new PIXI.Sprite(id['7. LAVANDERIA.png']);
	   lavanderia.position.set(-100, shop.height / 3.1);
	   lavanderia.scale.set(shop.escala_2,shop.escala_2);
     lavanderia.alpha=0;
     lavanderia.parentGroup=group_2;


	   //app.stage.addChild(lavanderia);

	   lineablanca = new PIXI.Sprite(id['9. LINEA BLANCA.png']);
	   lineablanca.position.set(shop.width*.01, shop.height / 3.7);
	   lineablanca.scale.set(shop.escala_2,shop.escala_2);
     lineablanca.alpha=0;
     lineablanca.parentGroup=group_2;
     lineablanca.y= app.screen.height / 2.6;

	   //app.stage.addChild(lineablanca);

	   comedor = new PIXI.Sprite(id['11. COMEDOR.png']);
	   comedor.position.set(-175,shop.height*.70);
	   comedor.scale.set(shop.escala_2,shop.escala_2);
     comedor.alpha=0;
     comedor.parentGroup=group_2;
     comedor.y= app.screen.height / 1.4;


     perfumeria = new PIXI.Sprite(id['PERFUMERIA.png']);
	   perfumeria.position.set(shop.width*.01, screen.height / 6.2);
	   perfumeria.scale.set(shop.escala_2,shop.escala_2);
     perfumeria.alpha=0;
     perfumeria.parentGroup=group_2;
     perfumeria.y= app.screen.height / 2.2;
     perfumeria.x= app.screen.width / 2.6;

     //container.addChild(comedor);



function onAssetsLoad(Loader,res){

var clientes_t=[Cliente_1,Cliente_2,Cliente_3,Cliente_4,Cliente_5,Cliente_6,Cliente_7,Cliente_8];
var muebles = [sala,tvs,lavanderia,perfumeria,audio,lineablanca,celulares,comedor];

  shop.clientes_t=clientes_t;
  var position=1;



          for(i=0;i<8;i++){
          var p = i * (shop.width/10);
          var q = i * (shop.height/10);

           clientes_t[i] = new PIXI.spine.Spine(res.Cliente_naranja.spineData);
           clientes_t[i].scale.set(shop.escala_4,shop.escala_4);
           clientes_t[i].x =Math.floor((Math.random() * shop.width) + 1);
           clientes_t[i].y = app.screen.height*.2+q;
           clientes_t[i].interactive = true;
           clientes_t[i].state.setAnimation(0,'walk',true);
           clientes_t[i].on('mouseover',clicked);
           clientes_t[i].on('mouseout',mouseout);
           clientes_t[i].walk=true;





          }

          container.addChild(clientes_t[0]);
          container.addChild(muebles[0]);
          container.addChild(clientes_t[1]);
          container.addChild(muebles[1]);
          container.addChild(clientes_t[2]);
          container.addChild(muebles[2]);
          container.addChild(clientes_t[3]);
          container.addChild(muebles[3]);
          container.addChild(muebles[4]);
          container.addChild(muebles[5]);
          container.addChild(clientes_t[4]);
          container.addChild(clientes_t[5]);
          container.addChild(muebles[6]);
          container.addChild(muebles[7]);
          container.addChild(clientes_t[6]);
          container.addChild(clientes_t[7]);

       function clicked(){

         this.state.setAnimation(0,'happy',false);
         this.walk=false;


       }


       function mouseout(){
        let cte=this;
                cte.state.setAnimation(0,'unhappy',false);

      setTimeout(function(){
        cte.state.setAnimation(0,'walk',true);
        //cte.stateData.setMix('unhappy','walk',1);
        cte.walk=true;
      },1100);

       }

        app.ticker.add(function(delta) {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation

    for (var i=0;i<clientes_t.length;i++) {
        if(clientes_t[i].walk)
        clientes_t[i].x += 0.8 * delta;
        if(clientes_t[i].x>app.screen.width+100)
        clientes_t[i].x=0+1 * delta;

    }
});


setTimeout(function () {LoadButton()}, 1000);

function LoadButton(){

  var btn = PIXI.Texture.fromImage('assets/Button_3.png');
  var btn_2 = PIXI.Texture.fromImage('assets/Botton_1.png');

  	var button = new PIXI.Sprite(btn);

  	        button.x = app.screen.width / 2;
              button.y = app.screen.height / 2;
              button.anchor.set(0.5,0.5);
              button.scale.set(shop.escala_1,shop.escala_1);


       app.stage.addChild(button);

       button.interactive = true;
       button.buttonMode = true;

              button
                 .on('mouseover',MouseOver)
                 .on('mouseout',MouseOut)
                 .on('click',Clicked);


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

           function Clicked(){

                 toSlide("story");

                 $(function() {
       $('#main').html('<strong>Ejemplo con html()</strong>');
  
     });
           }
            					}
}
     TweenMax.to([tienda_dentro,sala,tvs,lavanderia,audio,lineablanca,celulares,comedor,perfumeria],4,{alpha:1});


     //container.addChild(celulares,comedor,tvs,sala,lavanderia,audio,lineablanca);
     //container.addChild(sala,tvs,lavanderia,audio,lineablanca,celulares,comedor);


     TweenMax.to([tienda_dentro,sala,tvs,lavanderia,audio,lineablanca,celulares,comedor,perfumeria],3,{alpha:1});
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
