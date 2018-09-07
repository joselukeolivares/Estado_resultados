function indicadores(){
    var self={};

    self.createApp=function(){
      var div_app=document.getElementById("aplicacion");

      self.app=new PIXI.Application(width,height,{transparent:true});

      div_app.appendChild(self.app.view);






      self.app.stage = new PIXI.display.Stage();

      //self.app.stage.addChild(new PIXI.display.Layer(group_2));


     /*
      var loader=PIXI.loader;
          loader
          .add("assets/Articulos.json")
          .load(setup);

          var comedor;

          function setup(){


            var id=loader.resources['assets/Articulos.json'].textures;


            debugger;
            comedor=new PIXI.Sprite(id['11. COMEDOR.png']);
                comedor.position.set(0,100);
                comedor.scale.set(.5,.5);
                comedor.parentGroup=group_1;
                //comedor.zOrder=+2;

            lineablanca=new PIXI.Sprite(id['9. LINEA BLANCA.png']);
                lineablanca.position.set(1,100);
                lineablanca.scale.set(.5,.5);
                lineablanca.parentGroup=group_1;
                //lineablanca.zOrder=+1;



                TweenMax.to([comedor],5,{pixi:{opacity:1},onComplete:tweenComplete});



                function tweenComplete(){
                  console.log("tweenComplete Comedor");
                }





            var container2=new PIXI.Container();
                container2.addChild(lineablanca);
                self.app.stage.addChild(container2);



          }
      //var shop=Loader.resources["assets/Articulos.json"].texture;




      //self.app.view.style.width=div_app.width;
      //self.app.view.style.height=div_app.height;
*/


      try{

        new Promise(function(resolve,reject){
            shopping().build(self.app);
            resolve("Tienda construida");
        }).then(function(msj){
          console.log(msj);
          return createSprite(self.app)
        });
      }catch(err){
        console.log("No se logro desarrollar shopping()");
        console.log(err);
      }

      //createSprite(self.app);
      return self;
    }

    function createSprite(app){
      console.log("indicadores: createSprite ");
      var group_1=new PIXI.display.Group(0,false);
      self.app.stage.addChild(new PIXI.display.Layer(group_1));
      var graphics=new PIXI.Graphics();


      graphics.lineStyle(2,0x4286f4,1);
      graphics.beginFill(0xf4f441,.6);
      graphics.drawRect(0,0,width,height);
      graphics.endFill();

      graphics.lineStyle(2, 0xFF00FF, 1);
      graphics.beginFill(0xFF00BB, 0.25);
      graphics.drawRoundedRect(250, 450, 300, 100, 15);
      graphics.parentGroup=group_1;

      var container2=new PIXI.Container();
          container2.addChild(graphics);


      app.stage.addChild(container2);

      var txt_button_1=["Tasa de Compra","Compra Promedio","Venta Total"],
          txt_button_2=["¿Que es la tasa de Compra?","¿Que es la Compra Promedio","Que es la Venta Total"],
          container_1=[],
          container_2=[];

          var style=new PIXI.TextStyle({
              fontSize:36,
              wordWrap: true,
              wordWrapWidth: width*.20

          })

      for(var i=0;i<3;i++){
          container_1[i]=new PIXI.Container();
          container_2[i]=new PIXI.Container();

          var TC_txt=new PIXI.Text(txt_button_1[i],style);
              TC_txt.y=height/3;
              TC_txt.x=50;
          var WTC_txt=new PIXI.Text(txt_button_2[i],style);
              WTC_txt.y=height/3.4;
              WTC_txt.x=50;

              var rect_tc=new PIXI.Graphics();
              var rect_WTC=new PIXI.Graphics();    

      }

      var button_TC=new PIXI.Container();
      var button_WTC=new PIXI.Container();








          rect_tc.lineStyle(2,0x4286f4,1);
          rect_tc.beginFill(0xa5a4a0,.95);
          rect_tc.drawRect(TC_txt.x-10,TC_txt.y*.85,width*.20,height*.15);
          rect_tc.endFill();

          rect_WTC.lineStyle(2,0x4286f4,1);
          rect_WTC.beginFill(0xa5a4a0,.95);
          rect_WTC.drawRect(TC_txt.x-10,TC_txt.y*.85,width*.20,height*.12);
          rect_WTC.endFill();


          button_TC.addChild(rect_tc);
          button_TC.addChild(TC_txt);

          button_WTC.addChild(rect_WTC);
          button_WTC.addChild(WTC_txt);
          button_WTC.alpha=0;


       app.stage.addChild(button_WTC);

       app.stage.addChild(button_TC);
       button_TC.interactive = true;
       button_TC.buttonMode = true;

       button_TC.on('mouseover',function(){
         console.log('mouseover');

         TweenMax.to(button_WTC,2,{pixi:{x:((width*.20)),alpha:1}});
       })

    }


    self.removeElements=function(){
		debugger;

      var app=self.app.stage;
      while(app.getChildAt[0]){
        app.removeChildAt(0);
      }

      return self;

    }

    self.destroyApp=function(){

        self.app.destroy(true);

        return self;
    }

    return self;

}
