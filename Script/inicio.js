function inicio(){
  var self={};
  self.frames;



  self.destroyApp=function(){
    console.log("destruyendo la app Inicio");

    if(self.app==null)
       return self;


       self.app.destroy(true);
       var canvas=document.getElementsByTagName("canvas")
       var parent=document.getElementById("aplicacion");
       parent.removeChild(canvas[0]);


    return self;
  }

  self.createApp=function(){
     self.frames=[]

     var aplicacion=document.getElementById('aplicacion');
     self.app = new PIXI.Application(width,height,{transparent:true});

     self.app.view.style.width = aplicacion.width;
   	 self.app.view.style.height = aplicacion.height;
     aplicacion.appendChild(self.app.view);

     console.log("createApp:Inicio w:"+aplicacion.width+"/h:"+aplicacion.height);
     createSprite(self.app);


     return self;
  }

   self.removeElements=function(){

     if(self.app.stage==null)
        return false;

      var app=self.app;
      while(app.stage.children[0]) {
        console.log("Elemntos restantes: "+app.stage.children.length +" de la app de PIXI")
        app.stage.removeChild(app.stage.children[0]); }



    return self;
   }


  function createSprite(app){
    debugger;
    var textureBackground = PIXI.Texture.fromImage('assets/background_coppel.png');
  	var textureShop = PIXI.Texture.fromImage('assets/coppel.png');
  	var textureDoor = PIXI.Texture.fromImage('assets/coppel_puerta_01.png');

  	var background = new PIXI.Sprite(textureBackground);
        background.name="background";
  	var shop = new PIXI.Sprite(textureShop);
        shop.name="shop";
  	var notDoor = new PIXI.Sprite(textureDoor);
        notDoor.name="notDoor";

    let animatedDoor;


    background.x = app.screen.width / 2;
    background.y =app.screen.height / 1.52;
    background.anchor.set(0.5,0.5);
    background.scale.set(0.4,0.4);

    shop.x = app.screen.width / 2;
    shop.y = app.screen.height / 2;
    shop.anchor.set(0.5,0.5);
    shop.scale.set(0.4,0.4);

    notDoor.x = app.screen.width / 2;
    notDoor.y = app.screen.height /1.52;
    notDoor.anchor.set(0.5,0.5);
    notDoor.scale.set(0.4,0.4);

    app.stage.addChild(background);
        app.stage.addChild(shop);
        app.stage.addChild(notDoor);

      notDoor.interactive = true;
      notDoor.buttonMode = true;

      background.interactive = true;
      background.buttonMode = true;

      try{
        PIXI.loader
            .add('assets/doors.json')
            .load(setup);
      }catch(err){
            setup();
      }

      function setup(){


            for(var val=1;val<=10;val++){

                self.frames.push(PIXI.Texture.fromFrame("coppel_puerta_0"+val+".png"));
               }

            animatedDoor= new PIXI.extras.AnimatedSprite(self.frames);

           animatedDoor.x = app.screen.width / 2;
           animatedDoor.y = app.screen.height / 1.52;
           animatedDoor.anchor.set(0.5);
           animatedDoor.animationSpeed = 0.1;
           animatedDoor.scale.set(0.4,0.4);
           animatedDoor.name="animatedDoor";
           animatedDoor.visible=false;
           animatedDoor.loop=false;
           app.stage.addChild(animatedDoor);

      }


      notDoor
    	     .on('mouseover',onmouseOver(app));


    	background
            .on('mouseout',onmouseOut(app));

  }


	 		function onmouseOver(app){


        return function (){
          //debugger;
          console.log("onmouseOver");
          var notDoor=app.stage.getChildByName('notDoor');
          var shop=app.stage.getChildByName('shop')
          var background=app.stage.getChildByName('background')
          var animatedDoor=app.stage.getChildByName('animatedDoor')
          animatedDoor.animationSpeed = 0.1;
          notDoor.visible = false;
          animatedDoor.visible = true;
          animatedDoor.gotoAndPlay(0);
          animatedDoor.onComplete=function(){

            TweenMax.to([shop,animatedDoor,background],3,{pixi:{alpha:.1},onComplete:tweenComplete});

            function tweenComplete(){

                console.log("tweenComplete");

                  self.removeElements();
                  try{
                    shopping().build(app);
                  }catch(err){

                  }

            }



          };

		   }

		}

		function onmouseOut(app){

      return function(){
        //console.log("mouseout");
        var animatedDoor=app.stage.getChildByName('animatedDoor');
        var notDoor=app.stage.getChildByName('notDoor');




          try{
            frames.reverse();
            animatedDoor.animationSpeed = 0.1;

            animatedDoor.gotoAndPlay(0);

            animatedDoor.onComplete=function () {

              animatedDoor.visible=false;
              notDoor.visible=true;
              frames.reverse();
                      console.log('animation complete');};
          }catch(err){};
			}

		}




 return self;
}//end inicio
