function indicadores(){
    var self={};

    self.createApp=function(){
      var div_app=document.getElementById("aplicacion");

      self.app=new PIXI.Application(width,height,{transparent:true});
      self.width=self.app.screen.width;
      self.height=self.app.screen.height;
      //debugger;
      div_app.appendChild(self.app.view);

      self.app.stage = new PIXI.display.Stage();

      try{

        new Promise(function(resolve,reject){
            var shop=new shopping();
                shop.flag_ctes=false;
                shop.build(self.app);
                //debugger;

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

      var titulo=new PIXI.Text("Indicadores del Estado de Resultado de Clientes",{fontSize:((self.height*30)/500),fill:0x174389,fontWeight:'bold'});
          titulo.y=self.height*.1;
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
              fontSize:((self.height*15)/500),
              wordWrap: true,
              wordWrapWidth: width*.20

          })

      for(var i=0;i<3;i++){
          container_1[i]=new PIXI.Container();
          container_2[i]=new PIXI.Container();

          var TC_txt=new PIXI.Text(txt_button_1[i],style);
              TC_txt.y=self.height/3;
              TC_txt.x=50;
          var WTC_txt=new PIXI.Text(txt_button_2[i],style);
              WTC_txt.y=self.height/3.4;
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
              container_2[i].y=container_1[i].y+(i*self.height/6);


              app.stage.addChild(container_2[i]);

              app.stage.addChild(container_1[i]);

              container_1[i].interactive = true;
              container_1[i].buttonMode = true;
              container_2[i].interactive = true;
              container_2[i].buttonMode = true;
              container_1[i].name="container_1_"+i;
              container_2[i].name="container_2_"+i;

              container_1[i].child_container=container_2[i];

              TweenMax.to(container_1[i],2,{pixi:{y:(container_1[i].y+(i*self.height/6)),alpha:1}});

              container_1[i].on('mouseover',function(){
                 //debugger;
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
                  //debugger;
                  TweenMax.to(containers,3,{pixi:{x:(this.width*2),rotation:360,alpha:0,scale:.1},onComplete:Qes(this.name)});
              })



      }//end for

    }//end createSprite
    self.Qes=function(nombre){
      return Qes(nombre)
    }
    function Qes(nombre){
      var index = nombre.charAt(nombre.length-1);
      console.log(index);
      var contenedor_kpi=new PIXI.Container();
          contenedor_kpi.name="contenedor_kpi";
      self.app.stage.addChild(contenedor_kpi);
      var indicador=["Tasa de Compra","Compra Promedio","Venta Total"],
          descripcion=[
            "Texto que describira la Tasa de Compra (En construcción)",
            "Indica la compra promedio que realizaron los clientes (que compraron) en un periodo. Se calcula dividiendo las ventas en totales sobre el número de clientes que compraron.",
            "Texto que describira la Venta Total (En construcción)"
          ]
       //Colocamos el texto con el nombre del indicador
      var nombre=new PIXI.Text(indicador[index],
      {fontSize:(self.height*30)/500,
       fill:0xf4d442,
       fontWeight:'bold',
       dropShadow:true,
       dropShadowColor:0xf2f1ed
     });
          nombre.y=self.height*.2;
          nombre.x=self.width*.1;
          contenedor_kpi.addChild(nombre);

      //Colamos texto con descripcion del indicador
      var descrip=new PIXI.Text(descripcion[index],
      {fontSize:(self.height*20)/500,
       fill:0xf4d442,
       fontWeight:'bold',
       dropShadow:true,
       dropShadowColor:0xf2f1ed,
       wordWrap: true,
       wordWrapWidth: self.width*.5
     });
          descrip.y=self.height*.3;
          descrip.x=self.width*.05;
          contenedor_kpi.addChild(descrip);

          //Colamos texto invitacion a interactuar con indicador
          var Interactua=new PIXI.Text("Interactua con la "+indicador[index]+ " para ver el efecto",
          {fontSize:(self.height*15)/500,
           fill:'black',
           fontWeight:'bold',
           dropShadow:true,
           dropShadowColor:'white',
           wordWrap: true,
           wordWrapWidth: self.width*.2
         });
              Interactua.y=self.height*.6;
              Interactua.x=self.width*.3;
              contenedor_kpi.addChild(Interactua);
//debugger;
        for(var j=0;j<indicador.length;j++){

          if(indicador[index]!=indicador[j])
          {    //Colamos opciones para intertuar con los otros indicadores
          var indicador_to=new PIXI.Text(indicador[j],
          {fontSize:(self.height*15)/500,
           fill:'black',
           fontWeight:'bold',
           dropShadow:true,
           dropShadowColor:'white',
           wordWrap: true,
           wordWrapWidth: self.width*.2
         });
              indicador_to.y=self.height*.9;
              indicador_to.x=self.width*.25+(200*j);
              indicador_to.interactive=true;
              indicador_to.buttonMode=true;
              indicador_to.name="container_2_"+j;
              indicador_to.on('click',function(){
                var reset=self.app.stage.getChildByName('contenedor_kpi');
                self.app.stage.removeChild(reset);
                self.Qes(this.name);
                console.log("nvo index: "+this.name);
              })
              contenedor_kpi.addChild(indicador_to);}
        }

        var Loader = PIXI.loader;
try{
  Loader
    .add('assets/ui/Bloque_3/triangles.json')
    .load(triangles);

}catch(err){
   triangles();
}


          function triangles(){
             var triangle_rg=Loader.resources['assets/ui/Bloque_3/triangles.json'].textures;
             var articulos=Loader.resources['assets/Articulos.json'].textures;
             var img=
              ['9. LINEA BLANCA.png',
              '7. LAVANDERIA.png',
              '9. LINEA BLANCA.png',
              '6. SALA.png',
              '7. LAVANDERIA.png',
              '9. LINEA BLANCA.png',
              '11. COMEDOR.png',
              '6. SALA.png',
              '7. LAVANDERIA.png',
              '6. SALA.png']


              var row=self.width*.025;
              var col=self.height*.02;
             for(var i=0;i<img.length;i++){
               var articulo=new PIXI.Sprite(articulos[img[i]]);

               var
               row=+row;
               col=+col;
               articulo.position.set((self.width*.7)+ (col*i), self.height*.2+(i*row));
          	   articulo.scale.set((self.height*.2)/500,(self.height*.2)/500);
               articulo.name="item_porncentaje_"+(i+1)+"0%";
               console.log(articulo.name);
               contenedor_kpi.addChild(articulo);
             }
             self.porcentage=100;

             var porcentaje=new PIXI.Text(self.porcentage+"%",
             {fontSize:(self.height*28)/500,
              fill:'black',
              fontWeight:'bold',
              dropShadow:true,
              dropShadowColor:'white',
              wordWrap: true,
              wordWrapWidth: self.width*.2
            });
                 porcentaje.y=self.height*.72;
                 porcentaje.x=self.width*.82;
                 porcentaje.name="porcentaje";
                 contenedor_kpi.addChild(porcentaje);
             var red_triangle=new PIXI.Sprite(triangle_rg['Red_triangle.png']);

             red_triangle.position.set(self.width*.75,self.height*.7);
             red_triangle.scale.set(.045,.045);
             red_triangle.interactive=true;
             red_triangle.buttonMode=true;
             red_triangle.on('click',function(){
               if(self.porcentage>0){
                 var porcentaje_txt=contenedor_kpi.getChildByName("porcentaje");
                 var item=contenedor_kpi.getChildByName("item_porncentaje_"+porcentaje_txt.text);
                     item.visible=false;

                 self.porcentage=self.porcentage-10;


                      console.log(porcentaje_txt);
                      porcentaje_txt.text=self.porcentage+"%";
                      console.log("item_porncentaje_"+porcentaje_txt);


               }
             });

             var green_triangle=new PIXI.Sprite(triangle_rg['Green_triangle.png']);
             green_triangle.position.set(self.width*.9,self.height*.7);
             green_triangle.scale.set(.20,.20);
             green_triangle.interactive=true;
             green_triangle.buttonMode=true;
             green_triangle.on('click',function(){
               if(self.porcentage<100){
                 var porcentaje_txt=contenedor_kpi.getChildByName("porcentaje");
                 self.porcentage=self.porcentage+10;
                 porcentaje_txt.text=self.porcentage+"%";
                 var item=contenedor_kpi.getChildByName("item_porncentaje_"+porcentaje_txt.text);
                     item.visible=true;






               }
             });


             contenedor_kpi.addChild(red_triangle);
             contenedor_kpi.addChild(green_triangle);







          }

    }


    self.removeElements=function(){
		//debugger;

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
