function simulador_global(){

  var self = {};
  self.characters = [];
  self.createApp = function(){
var miapp = document.getElementById("aplicacion");
self.app = new PIXI.Application(width,height,{backgroundColor: 0x175383});
  miapp.appendChild(self.app.renderer.view);

  var Loader = PIXI.loader;


  var atlasBlock6  = Loader.resources['assets/ui/Bloque_5/bloque5_ctes.json'].textures;

//  var atlasBlock6_2 = Loader.resources['assets/ui/Bloque_5/spritesheet_bloque_5.json'].textures;

  var characters = ["10. N+15 500x350.png",
                    "2. GENERADOS 500x350.png",
                    "3. Z 500x350.png",
                    "4. QUEBRANTADOS  500x350.png",
                    "5. ASV 500x350.png",
                    "6. ACV 500x350.png",
                    "7. S-15 500x350.png",
                    "8. S+15 500x350.png",
                    "9. N-15 500x350.png"
                   ];



    var container_characters = new PIXI.Container();
        self.app.stage.addChild(container_characters);

       container_characters.x=self.app.screen.width/8;
       container_characters.y=self.app.screen.height/5;

       var estilo1={
         fontFamily:'Roboto-Bold',
         fontSize:self.app.screen.height * 100 / 950,
         fill:"#FFFFFF"
       }

       var estilo2={
         fontFamily:'Roboto-Bold',
         fontSize:self.app.screen.height * 50 / 950,
         fill:"#FFFFFF"
       }

          // tc_TXT.x=width*.18;
          //tc_TXT.y=height/2;
          // self.app.stage.addChild(tc_TXT);



for(var i = 0 ;i<characters.length;i++){

  var Loader = PIXI.loader;


   var character = new PIXI.Sprite(atlasBlock6[characters[i]]);
   var tc = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_5/botones/13. RECUADRO DE TASA DE COMPRA.png"].texture);
   var cpa =new PIXI.Sprite(Loader.resources["assets/ui/Bloque_5/botones/14. RECUADRO DE TASA DE C.P.A Y VENTA.png"].texture);
   var vta = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_5/botones/14. RECUADRO DE TASA DE C.P.A Y VENTA.png"].texture);
   var tc_TXT=new PIXI.Text("T.C",estilo1);
   var cpa_TXT=new PIXI.Text("C.P.A",estilo1);
   var venta_TXT = new PIXI.Text("VENTA",estilo1);
   var porcent = new PIXI.Text("%",estilo2);

     character.scale.set(self.app.screen.width*.15/950);
     character.x = (i % 3) * self.app.screen.width/3.5;
     character.y =Math.floor(i / 3) * self.app.screen.height/4;
     debugger;
     character.name ="character"+i;
     container_characters.addChild(character);


     tc_TXT.x=character.width+369;
     tc_TXT.name="tc_TXT"+i;
     character.addChild(tc_TXT);

     cpa_TXT.x=character.width+369;
     cpa_TXT.y=character.height*2;
     cpa_TXT.name="cpa_TXT"+i;
     character.addChild(cpa_TXT);

     venta_TXT.x=character.width+369;
     venta_TXT.y=character.height*4;
     venta_TXT.name="venta_TXT"+i;
     character.addChild(venta_TXT);

     tc.scale.set(self.app.screen.width*1.8/950);
     tc.x=tc_TXT.width+100;

     tc.name="tc"+i;
     tc_TXT.addChild(tc);

     cpa.scale.set(self.app.screen.width*1.8/950);
     cpa.x=cpa_TXT.width+100;
     cpa.name="cpa"+i;
     cpa_TXT.addChild(cpa);

     vta.scale.set(self.app.screen.width*1.8/950);
     vta.x=venta_TXT.width+40;
     vta.name="vta"+i;
     venta_TXT.addChild(vta);

     porcent.x=vta.width+200;
     //vta.addChild(porcent);
    debugger;
     SliderB5B6(document.getElementById("aplicacion"),document.createElement('p'),"slider1","slider_fam",(character.parent.x+character.x+character.width*1.5)/width,(character.y+character.height*.25+character.parent.y)/height,self);

}


 return self;
    }



self.updateTotal=function(){

};


return self;
}
