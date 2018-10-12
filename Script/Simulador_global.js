function simulador_global(){

  var self = {};
  self.characters = [];
  self.createApp = function(){
var miapp = document.getElementById("aplicacion");
self.app = new PIXI.Application(width,height,{backgroundColor: 0x175383});
  miapp.appendChild(self.app.renderer.view);

  var Loader = PIXI.loader;


  var atlasBlock6  = Loader.resources['assets/ui/Bloque_5/bloque5_ctes.json'].textures;
  var vta = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_5/botones/14. RECUADRO DE TASA DE C.P.A Y VENTA.png"].texture);


//  var atlasBlock6_2 = Loader.resources['assets/ui/Bloque_5/spritesheet_bloque_5.json'].textures;

  var characters = ["9. N-15 500x350.png",
                    "5. ASV 500x350.png",
                    "7. S-15 500x350.png",
                    "10. N+15 500x350.png",
                    "6. ACV 500x350.png",
                    "8. S+15 500x350.png",
                    "2. GENERADOS 500x350.png",
                    "3. Z 500x350.png",
                    "4. QUEBRANTADOS  500x350.png"
                   ];


                   var title=new PIXI.Text("Estado de resultados de clientes",{
                     fontSize: screen.height * 40 / 880,
                     fontFamily: "Roboto-Black",
                     fill: "#FFFFFF",
                     dropShadow: true,
                     dropShadowColor: "#09102C",
                     dropShadowDistance: 5,
                     dropShadowAngle: Math.PI / 20
                   });
                   title.x=(self.app.screen.width/4);
                 	 title.y=(self.app.screen.height/24);

                   var subtitle=new PIXI.Text("Simulador global",{
                     fontSize: screen.height * 24 / 880,
                     fontFamily: "Roboto-Black",
                     fill: "#FFFFFF"
                   });
                   subtitle.x=(self.app.screen.width/2.5);
                 	 subtitle.y=(self.app.screen.height/10);

                   var estrategia=new PIXI.Text("Ahora , te invitamos a crear tu propia estrategia de clientes. Visualiza y analiza el comportamiento de la Tasa de Compra y Venta Total al interactuar con uno o más perfiles de clientes.",{
                     fontSize: screen.height * 12 / 880,
                     fontFamily: "Roboto-Black",
                     fill: "#FFFFFF"
                   });
                   estrategia.x=(self.app.screen.width/10);
                 	 estrategia.y=(self.app.screen.height/6);

                   self.app.stage.addChild(title);
                    self.app.stage.addChild(subtitle);
                    self.app.stage.addChild(estrategia);


    var container_characters = new PIXI.Container();
        self.app.stage.addChild(container_characters);



       var estilo1={
         fontFamily:'Roboto-Bold',
         fontSize:self.app.screen.width*18/950,
         fill:"#FFFFFF"
       }

       var estilo2={
         fontFamily:'Roboto-Bold',
         fontSize:40,
         fill:"#FFFFFF"
       }

          // tc_TXT.x=width*.18;
          //tc_TXT.y=height/2;
          // self.app.stage.addChild(tc_TXT);



for(var i = 0 ;i<characters.length;i++){

  var Loader = PIXI.loader;

  //container_characters.x=self.app.screen.width/8;
  //container_characters.y=self.app.screen.height/5;


   var character = new PIXI.Sprite(atlasBlock6[characters[i]]);
   var tc = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_5/botones/13. RECUADRO DE TASA DE COMPRA.png"].texture);
   var cpa =new PIXI.Sprite(Loader.resources["assets/ui/Bloque_5/botones/14. RECUADRO DE TASA DE C.P.A Y VENTA.png"].texture);
   var vta = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_5/botones/14. RECUADRO DE TASA DE C.P.A Y VENTA.png"].texture);
   var tc_TXT=new PIXI.Text("T.C",estilo1);
   var cpa_TXT=new PIXI.Text("C.P.A",estilo1);
   var venta_TXT = new PIXI.Text("VENTA",estilo1);
   var porcent = new PIXI.Text("%",estilo2);

     var subContainer=new PIXI.Container();
         subContainer.width=200;
         //subContainer.height=200;
     var subContainer2=new PIXI.Container();
             subContainer.width=200;
          //   subContainer.height=200;

     character.scale.set(self.app.screen.width*.15/950)
      if(i==0)
     character.scale.set(self.app.screen.width*.145/950);
     character.x = (i % 3) * self.app.screen.width/3.5+width/10;
     character.y =Math.floor(i / 3) * self.app.screen.height/4.5+height/4;

     character.name ="character"+i;

     self.app.stage.addChild(subContainer);
     self.app.stage.addChild(subContainer2);
     subContainer.addChild(character);


     tc_TXT.x=(i % 3) * self.app.screen.width/3.5+width/6;
     tc_TXT.name="tc_TXT"+i;
     tc_TXT.y=Math.floor(i / 3) * self.app.screen.height/4.5+height/4;
     subContainer2.addChild(tc_TXT);

     cpa_TXT.x=(i % 3) * self.app.screen.width/3.5+width/6;
     cpa_TXT.y=Math.floor(i / 3) * self.app.screen.height/4.5+height/3.3;

     cpa_TXT.name="cpa_TXT"+i;
     subContainer2.addChild(cpa_TXT);

     venta_TXT.x=(i % 3) * self.app.screen.width/3.5+width/6;
     venta_TXT.y=Math.floor(i / 3) * self.app.screen.height/4.5+height/2.8;
     venta_TXT.name="venta_TXT"+i;
     subContainer2.addChild(venta_TXT);

     tc.scale.set(self.app.screen.width*.45/950);
     tc.x=tc_TXT.x+tc_TXT.width*1.1;
     tc.y=tc_TXT.y;
     tc.name="tc"+i;
     subContainer2.addChild(tc);


     cpa.scale.set(self.app.screen.width*.45/950);
     cpa.x=cpa_TXT.x+cpa_TXT.width*1.1;
     cpa.y=cpa_TXT.y;
     cpa.name="cpa"+i;
     subContainer2.addChild(cpa);

     vta.scale.set(self.app.screen.width*.45/950);
     vta.x=venta_TXT.x+venta_TXT.width*1.1;
     vta.y=venta_TXT.y;
     vta.name="vta"+i;
     subContainer2.addChild(vta);

     //porcent.x=vta.width+200;
     //vta.addChild(porcent);


     var tc_test=document.createElement("p");
     tc_test.innerHTML="0"+"%";
     tc_test.setAttribute("id","tc_test"+i);
     tc_test.setAttribute("style","position:absolute;top:"+(tc.y-16)+"px;left:"+(tc.x+tc.width/2)+"px;font-Family:roboto-regular;font-Size:1.10vw;font-weight:bold;");
     tc_test.typeObj=1;
      var aplicacion=document.getElementById("aplicacion");
         aplicacion.appendChild(tc_test);

         var tc_clientes=document.createElement("p");
         tc_clientes.innerHTML="0";
         tc_clientes.setAttribute("id","tc_clientes"+i)
         tc_clientes.setAttribute("style","position:absolute;top:"+(tc.y-(tc.height/4))+"px;left:"+(tc.x+tc.width/5)+"px;font-Family:roboto-regular;font-Size:.50vw;font-weight:bold;color:#175383;");
         tc_clientes.typeObj=1;
         var aplicacion=document.getElementById("aplicacion");
             aplicacion.appendChild(tc_clientes);

             var tc_clientestxt=document.createElement("p");
             tc_clientestxt.innerHTML="Clientes";
             tc_clientestxt.setAttribute("id","tc_clientestxt"+i)
             tc_clientestxt.setAttribute("style","position:absolute;top:"+(tc.y)+"px;left:"+(tc.x+tc.width/8)+"px;font-Family:roboto-regular;font-Size:.50vw;font-weight:bold;color:#175383;");
             tc_clientestxt.typeObj=1;
             var aplicacion=document.getElementById("aplicacion");
                 aplicacion.appendChild(tc_clientestxt);

         var cpa_test=document.createElement("p");
         cpa_test.innerHTML="$"+"0";
         cpa_test.setAttribute("id","cpa_test2"+i)
         cpa_test.setAttribute("style","position:absolute;top:"+(cpa.y-16)+"px;left:"+(cpa.x+cpa.width/2.5)+"px;font-Family:roboto-regular;font-Size:1.10vw;font-weight:bold;");
         cpa_test.typeObj=1;
         var aplicacion=document.getElementById("aplicacion");
             aplicacion.appendChild(cpa_test);

             var vta_test=document.createElement("p");
             vta_test.innerHTML="$"+"9,999,00";
             vta_test.setAttribute("id","cpa_test2"+i)
             vta_test.setAttribute("style","position:absolute;top:"+(vta.y-16)+"px;left:"+(vta.x+vta.width/8)+"px;font-Family:roboto-regular;font-Size:1.10vw;font-weight:bold;");
             vta_test.typeObj=1;
             var aplicacion=document.getElementById("aplicacion");
                 aplicacion.appendChild(vta_test);



     SliderB5B6(document.getElementById("aplicacion"),document.createElement('p'),"slider1","slider_fam",(character.parent.x+character.x+character.width*1.5)/width,(character.y+character.height*.25+character.parent.y)/height,self);

}



var total_tc = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_5/botones/12. RECUADRO DE RESULTADOS FINALES 1.png"].texture);
var total_vta =new PIXI.Sprite(Loader.resources["assets/ui/Bloque_5/botones/12. RECUADRO DE RESULTADOS FINALES.png"].texture);

total_tc.x = self.app.screen.width/4;
total_tc.y =self.app.screen.height/1.1;
total_tc.scale.set(self.app.screen.width*.45/950);


total_vta.x = self.app.screen.width/2;
total_vta.y =self.app.screen.height/1.1;
total_vta.scale.set(self.app.screen.width*.45/950);

var total_ptxt=new PIXI.Text("TOTAL",{
  fontSize: screen.height * 30 / 880,
  fontFamily: "Roboto-Black",
  fill: "#FFFFFF",
  dropShadowColor: "#09102C",
  dropShadowDistance: 5,
  dropShadowAngle: Math.PI / 20
});
total_ptxt.x=(self.app.screen.width/8);
total_ptxt.y=(self.app.screen.height/1.1);
self.app.stage.addChild(total_ptxt);


var tc_ptxt=new PIXI.Text("T.C",{
  fontSize: screen.height * 15 / 880,
  fontFamily: "Roboto-Black",
  fill: "#FFFFFF",
  dropShadowColor: "#09102C",
  dropShadowDistance: 5,
  dropShadowAngle: Math.PI / 20
});
tc_ptxt.x=(self.app.screen.width/2.5);
tc_ptxt.y=(self.app.screen.height/1.15);
self.app.stage.addChild(tc_ptxt);

var venta_ptxt=new PIXI.Text("VENTA",{
  fontSize: screen.height * 15 / 880,
  fontFamily: "Roboto-Black",
  fill: "#FFFFFF",
  dropShadowColor: "#09102C",
  dropShadowDistance: 5,
  dropShadowAngle: Math.PI / 20
});
venta_ptxt.x=(self.app.screen.width/1.8);
venta_ptxt.y=(self.app.screen.height/1.15);
self.app.stage.addChild(venta_ptxt);


var tctotal_test=document.createElement("p");
tctotal_test.innerHTML="0"+"%";
tctotal_test.setAttribute("id","tctotal_test")
tctotal_test.setAttribute("style","position:absolute;top:"+(total_tc.y-16)+"px;left:"+(total_tc.x+total_tc.width/2)+"px;font-Family:roboto-regular;font-Size:1.50vw;font-weight:bold;");
tctotal_test.typeObj=1;
var aplicacion=document.getElementById("aplicacion");
    aplicacion.appendChild(tctotal_test);


    var totalventa_test=document.createElement("p");
    totalventa_test.innerHTML="0"+"%";
    totalventa_test.setAttribute("id","tctotal_test")
    totalventa_test.setAttribute("style","position:absolute;top:"+(total_vta.y-16)+"px;left:"+(total_vta.x+total_vta.width/2.5)+"px;font-Family:roboto-regular;font-Size:1.50vw;font-weight:bold;");
  totalventa_test.typeObj=1;
    var aplicacion=document.getElementById("aplicacion");
        aplicacion.appendChild(totalventa_test);

self.app.stage.addChild(total_tc);
self.app.stage.addChild(total_vta);



 return self;
    }



self.updateTotal=function(){

};


return self;
}
