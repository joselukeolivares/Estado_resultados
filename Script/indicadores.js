function indicadores(){
    var self={};

    self.createApp=function(){
      var div_app=document.getElementById("aplicacion");

      self.app=new PIXI.Application(width,height,{transparent:true});

      div_app.appendChild(self.app.view);

      self.app.stage = new PIXI.display.Stage();

      try{

        new Promise(function(resolve,reject){
            var shop=new shopping();
                shop.flag_ctes=false;
                shop.build(self.app);
                debugger;

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

      var titulo=new PIXI.Text("Indicadores del Estado de Resultado de Clientes",{fontSize:36,fill:0x174389,fontWeight:'bold'});
          titulo.y=height*.05;
          titulo.x=50;

      var container2=new PIXI.Container();
          container2.addChild(graphics);
          container2.addChild(titulo);


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



              rect_tc.lineStyle(2,0x4286f4,1);
              rect_tc.beginFill(0xa5a4a0,.95);
              rect_tc.drawRect(TC_txt.x-10,TC_txt.y*.85,width*.20,height*.15);
              rect_tc.endFill();

              rect_WTC.lineStyle(2,0x4286f4,1);
              rect_WTC.beginFill(0xa5a4a0,.95);
              rect_WTC.drawRect(TC_txt.x-10,TC_txt.y*.85,width*.20,height*.12);
              rect_WTC.endFill();

              container_1[i].addChild(rect_tc);
              container_1[i].addChild(TC_txt);

              container_2[i].addChild(rect_WTC);
              container_2[i].addChild(WTC_txt);
              container_2[i].alpha=0;
              container_2[i].y=container_1[i].y+(i*200);


              app.stage.addChild(container_2[i]);

              app.stage.addChild(container_1[i]);

              container_1[i].interactive = true;
              container_1[i].buttonMode = true;
              container_2[i].interactive = true;
              container_2[i].buttonMode = true;
              container_1[i].name="container_1_"+i;
              container_2[i].name="container_2_"+i;

              container_1[i].child_container=container_2[i];

              TweenMax.to(container_1[i],2,{pixi:{y:(container_1[i].y+(i*200)),alpha:1}});

              container_1[i].on('mouseover',function(){
                 debugger;
                  TweenMax.to(this.child_container,3,{pixi:{x:(this.width+this.x),y:this.y,alpha:1}});
              });


              container_2[i].on('mouseover',function(){
                  console.log("on click")
                  var containers=[]

                  for(var i=0;i<3;i++){


                      var container_1=app.stage.getChildByName("container_1_"+i);
                      container_1.old_x=container_1.x;
                      container_1.old_y=container_1.y;
                      containers.push(container_1);

                      var container_2=app.stage.getChildByName("container_2_"+i);
                      container_2.old_x=container_2.x;
                      container_2.old_y=container_2.y;
                      containers.push(container_2);
                  }
                  debugger;
                  TweenMax.to(containers,3,{pixi:{x:(width*1.5),rotation:360,alpha:0,scale:.1},onComplete:Qes(this.name)});
              })



      }//end for

    }//end createSprite

    function Qes(nombre){
      console.log("Qes function");
      console.log(nombre);

      var descripcion=new PIXI.Text("Indicadores del Estado de Resultado de Clientes",
      {fontSize:36,
       fill:0x174389,
       fontWeight:'bold'});
          titulo.y=height*.05;
          titulo.x=50;
          self.app.stage.addChild()


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
