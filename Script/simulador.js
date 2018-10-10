function simulador(){

var self={};
    self.characters=[];
  self.createApp=function(){
    var aplicacion=document.getElementById("aplicacion");
    self.app=new PIXI.Application(width,height,{backgroundColor: 0x175383});
    aplicacion.appendChild(self.app.renderer.view);

    var title=new PIXI.Text("Estado de resultados de clientes",{
      fontSize: factorScreen(60),
      fontFamily: "Roboto-Black",
      fill: "#FFFFFF",
      dropShadow: true,
      dropShadowColor: "#09102C",
      dropShadowDistance: 5,
      dropShadowAngle: Math.PI / 20
    })

    var subtitle=new PIXI.Text("Simulador",{
      fontSize: factorScreen(24),
      fontFamily: "Roboto-Black",
      fill: "#FFFFFF"
        })

    var descript_txt=new PIXI.Text("Ahora, ya que entendemos como está compuesto el Estado de Resultados de Cliente de Coppel (Indicadores de venta y perfiles de clientes) pasamos al siguiente bloque, en donde vvamos a simular con datos reales como se comportan cada uno de los perfiles de clientes.",
    {
      fontSize: factorScreen(22),
      fontFamily: "Roboto-Regular",
      fill: "#FFFFFF",
      wordWrap:true,
      wordWrapWidth:width*.7,
      align:"center"
    });

    title.x=width/5;
    title.y=height/20;
    subtitle.x=width/2.2;
    subtitle.y=height/8;
    descript_txt.x=width/5.5;
    descript_txt.y=height/3;


    self.app.stage.addChild(title);
    self.app.stage.addChild(subtitle);
    self.app.stage.addChild(descript_txt);

    var Loader=PIXI.loader;


    var atlasBlock5=Loader.resources['assets/ui/Bloque_5/spritesheet_bloque_5.json'].textures;

    var buttons=[
                "4. N-15 1 500X500.png",
                "5. N+15 1 500X500.png",
                "8. ASV 1 500X500.png",
                "9. ACV 1 500X500.png",
                "7. S-15 1 500X500.png",
                "6. S+15 1 500X500.png",
                "2. Z 1 500X500.png",
                "3. Q 1 500X500.png",
                "1. G 1 500X500.png"
    ];
    var buttons_pressed=[
                "4. N-15 2 500X500.png",
                "5. N+15 2 500X500.png",
                "8. ASV 2 500X500.png",
                "9. ACV 2 500X500.png",
                "6. S+15 2 500X500.png",
                "6. S+15 2 500X500.png",
                "2. Z 2 500X500.png",
                "3. Q 2 500X500.png",
                "1. G 2 500X500.png"
    ] ;

    var buttons_container=new PIXI.Container();
    self.app.stage.addChild(buttons_container);
var b_x=width/6;
var b_y=height/2;

    for(var i=0;i<buttons.length;i++){

         var buttonOK=new PIXI.Sprite(atlasBlock5[buttons[i]]);
             buttonOK.scale.set(factorScreen(.65));
             buttonOK.y=b_y;
             buttonOK.x=b_x;
             b_x+=(buttonOK.width+(15));
             buttonOK.interactive=true;
             buttonOK.buttonMode=true;
             buttonOK.name="buttonOK"+i;
             buttonOK.numero=i;
             buttons_container.addChild(buttonOK);

         var button_pressed=new PIXI.Sprite(atlasBlock5[buttons_pressed[i]]);
             button_pressed.scale.set(factorScreen(.65));
             button_pressed.y=buttonOK.y;
             button_pressed.x=buttonOK.x;
             button_pressed.buttonMode=true;
             button_pressed.interactive=true;
             button_pressed.visible=false;
             button_pressed.name=i;
             button_pressed.numero=i;
             buttons_container.addChild(button_pressed);

             buttonOK.on("click",function(){
               this.visible=false;
               this.parent.getChildAt(this.parent.getChildIndex(this)+1).visible=true;
               debugger;
               addCharacter(this.numero);
             });

             button_pressed.on("click",function(){
               this.visible=false;
               this.parent.getChildAt(this.parent.getChildIndex(this)-1).visible=true;
               removeCharacter(this.numero);
             });






    }

    var followme_txt=new PIXI.Text("¡Acompañeme a conocerlos!",{
      fontSize: factorScreen(50),
      fontFamily: "Roboto-Black",
      fill: "#FFFFFF"
    })

     followme_txt.x=width/3.5;
     followme_txt.y=height*.8;
     self.app.stage.addChild(followme_txt);

     var contButton=new PIXI.Sprite(PIXI.loader.resources['assets/ui/Bloque_3/b-continue.png'].texture);

     contButton.x = width*.9;
     contButton.y = height*.95;
     contButton.anchor.set(0.5);
     contButton.scale.set(0.6);
     contButton.interactive = true;
     contButton.cursor = "pointer";
     contButton.on('click',function(){


       TweenMax.to([followme_txt,descript_txt],1,{pixi:{alpha:0},onComplete:function(){
         self.app.stage.removeChild(followme_txt);
         descript_txt.text="Seleccionemos dos perfiles de clientes y manteniendo una compra promedio interactuaremos con su tasa de compra para ver el efecto que este tiene sobre la venta total."
         TweenMax.to(descript_txt,1,{pixi:{alpha:1,y:height/5.3}});
       }})

       TweenMax.to(buttons_container.children,2,{pixi:{y:height/4},onComplete:function(){
            simulacion();

       }})

     });
     self.app.stage.addChild(contButton);

   console.log(dataCSV);
   return self;
  }

  function slider(){


  }


  function simulacion(){
/*
    15. RECUADRO DE INICIAR
    15. RECUADRO DE INICIAR 2
    15. RECUADRO DE REINICIAR 2
    15. RECUADRO DE REINICIAR
    16. MONITO GRIS 1
    17. MONITO GRIS 2
    13. RECUADRO DE TASA DE COMPRA
    14. RECUADRO DE TASA DE C.P.A Y VENTA
    12. RECUADRO DE RESULTADOS FINALES
*/

     var atlasBlock5=PIXI.loader.resources['assets/ui/Bloque_5/spritesheet_bloque_5.json'].textures;
         //Espacios para indicar la selección de personajes con botones con nombre de la segmentacion
         //Solo podrán seleccionar dos segmentos
     var grayCte=new PIXI.Sprite(atlasBlock5['16. MONITO GRIS 1.png']);
         grayCte.x=width*.10;
         grayCte.y=height/2;
         grayCte.scale.set(.6);
         self.app.stage.addChild(grayCte);
     var grayCte_2=new PIXI.Sprite(atlasBlock5['17. MONITO GRIS 2.png']);
         grayCte_2.x=width*.85;
         grayCte_2.y=height/2;
         grayCte_2.scale.set(.6);
         self.app.stage.addChild(grayCte_2);

         //Botones para Iniciar simulación (botones activo e inactivo)
     var iniciarButton=new PIXI.Sprite(atlasBlock5['15. RECUADRO DE INICIAR.png']);
         iniciarButton.x=width*.45;
         iniciarButton.y=height/2;
         iniciarButton.scale.set(.6);
         self.app.stage.addChild(iniciarButton);
     var iniciarButtonOff=new PIXI.Sprite(atlasBlock5['15. RECUADRO DE REINICIAR.png']);
         iniciarButtonOff.x=width*.45;
         iniciarButtonOff.y=height/2;
         iniciarButtonOff.scale.set(.6);
         iniciarButtonOff.visible=false;
         self.app.stage.addChild(iniciarButtonOff);

         //Botones para Reiniciar simulación (botones activo e inactivo)
     var reIniciarButton=new PIXI.Sprite(atlasBlock5['15. RECUADRO DE REINICIAR.png']);
         reIniciarButton.x=width*.45;
         reIniciarButton.y=height*.6;
         reIniciarButton.scale.set(.6);
         self.app.stage.addChild(reIniciarButton);
     var reIniciarButtonOff=new PIXI.Sprite(atlasBlock5['15. RECUADRO DE REINICIAR 2.png']);
         reIniciarButtonOff.x=width*.45;
         reIniciarButtonOff.y=height*.6;
         reIniciarButtonOff.scale.set(.6);
         reIniciarButtonOff.visible=false;
         self.app.stage.addChild(reIniciarButtonOff);

         //Recuadros donde se colocará la Tasa de Compra de dos diferentes segmentos desde CSV al ultimo mes
     var tc_base=new PIXI.Sprite(atlasBlock5['13. RECUADRO DE TASA DE COMPRA.png']);
         tc_base.x=width*.22;
         tc_base.y=height/2;
         tc_base.scale.set(1);
         self.app.stage.addChild(tc_base);

         var tc_test=document.createElement("p");
         tc_test.innerHTML="100";
         tc_test.setAttribute("id","tc_test")
         tc_test.setAttribute("style","position:absolute;top:"+tc_base.y+"px;left:"+tc_base.x+"px;");
         tc_test.typeObj=1;
         var aplicacion=document.getElementById("aplicacion");
             aplicacion.appendChild(tc_test);
        SliderB5B6(document.getElementById("aplicacion"),tc_test,"slider1","slider_fam",.25,.56,self);

     var tc_base2=new PIXI.Sprite(atlasBlock5['13. RECUADRO DE TASA DE COMPRA.png']);
         tc_base2.x=width*.63;
         tc_base2.y=height/2;
         tc_base2.scale.set(1);
         self.app.stage.addChild(tc_base2);

         var tc_test2=document.createElement("p");
         tc_test2.innerHTML="100";
         tc_test2.setAttribute("id","tc_test2")
         tc_test2.setAttribute("style","position:absolute;top:"+tc_base2.y+"px;left:"+tc_base2.x+"px;");
         tc_test2.typeObj=1;
         var aplicacion=document.getElementById("aplicacion");
             aplicacion.appendChild(tc_test2);
        SliderB5B6(document.getElementById("aplicacion"),tc_test2,"slider1","slider_fam",.67,.56,self);

         //Textos para recuadros de Tasa de Compra
         var estilo1={
           fontFamily:'Roboto-Bold',
           fontSize:30,
           fill:"#FFFFFF"
         }

         var tc_TXT=new PIXI.Text("T.C",estilo1);
             tc_TXT.x=width*.18;
             tc_TXT.y=height/2;
             self.app.stage.addChild(tc_TXT);
         var tc_TXT2=new PIXI.Text("T.C",estilo1);
             tc_TXT2.x=width*.59;
             tc_TXT2.y=height/2;
             self.app.stage.addChild(tc_TXT2);

         //Recuadros para colocar cifras de CPA y Venta de 2 diferentes segmentos de datos precargados desde CSV
         //Primer Segmento seleccionado por usuario
     var CPA_caja1=new PIXI.Sprite(atlasBlock5['14. RECUADRO DE TASA DE C.P.A Y VENTA.png']);
         CPA_caja1.x=width*.3;
         CPA_caja1.y=height*.6;
         CPA_caja1.scale.set(.7);
         self.app.stage.addChild(CPA_caja1);

         var tc_test3=document.createElement("p");
         tc_test3.innerHTML="100";
         tc_test3.setAttribute("id","tc_test3")
         tc_test3.setAttribute("style","position:absolute;top:"+CPA_caja1.y+"px;left:"+CPA_caja1.x+"px;");
         var aplicacion=document.getElementById("aplicacion");
             aplicacion.appendChild(tc_test3);

     var CPA_caja2=new PIXI.Sprite(atlasBlock5['14. RECUADRO DE TASA DE C.P.A Y VENTA.png']);
         CPA_caja2.x=width*.3;
         CPA_caja2.y=height*.65;
         CPA_caja2.scale.set(.7);
         self.app.stage.addChild(CPA_caja2);
         //Segundo Segmento seleccionado por usuario
     var VTA_caja3=new PIXI.Sprite(atlasBlock5['14. RECUADRO DE TASA DE C.P.A Y VENTA.png']);
         VTA_caja3.x=width*.7;
         VTA_caja3.y=height*.6;
         VTA_caja3.scale.set(.7);
         self.app.stage.addChild(VTA_caja3);
     var VTA_caja4=new PIXI.Sprite(atlasBlock5['14. RECUADRO DE TASA DE C.P.A Y VENTA.png']);
         VTA_caja4.x=width*.7;
         VTA_caja4.y=height*.65;
         VTA_caja4.scale.set(.7);
         self.app.stage.addChild(VTA_caja4);
         //Texto para recuadros de CPA y Venta en ambos personajes seleccionados
         var cpa_TXT=new PIXI.Text("C.P.A",estilo1);
             cpa_TXT.x=width*.23;
             cpa_TXT.y=height*.6;
             self.app.stage.addChild(cpa_TXT);
         var cpa_TXT2=new PIXI.Text("C.P.A",estilo1);
             cpa_TXT2.x=width*.63;
             cpa_TXT2.y=height*.6;
             self.app.stage.addChild(cpa_TXT2);
         var vta_TXT=new PIXI.Text("VENTA",estilo1);
             vta_TXT.x=width*.23;
             vta_TXT.y=height*.65;
             self.app.stage.addChild(vta_TXT);
         var vta_TXT2=new PIXI.Text("VENTA",estilo1);
             vta_TXT2.x=width*.63;
             vta_TXT2.y=height*.65;
             self.app.stage.addChild(vta_TXT2);

          //Texto para variaciones en personajes seleccionados
             var vta_TXT=new PIXI.Text("0%",estilo1);
                 vta_TXT.x=width*.4;
                 vta_TXT.y=height*.65;
                 self.app.stage.addChild(vta_TXT);
             var vta_TXT2=new PIXI.Text("0%",estilo1);
                 vta_TXT2.x=width*.8;
                 vta_TXT2.y=height*.65;
                 self.app.stage.addChild(vta_TXT2);


         //Recuadro blanco donde se colocará resultado final de simulación entre 2 segmentos seleccionados por usuario
     var resultado_caja=new PIXI.Sprite(atlasBlock5['12. RECUADRO DE RESULTADOS FINALES.png']);
         resultado_caja.x=width*.45;
         resultado_caja.y=height*.8;
         resultado_caja.scale.set(.6);
         self.app.stage.addChild(resultado_caja);
         //Texto para recuadros de resultados
         var vta_TXT=new PIXI.Text("VENTA",estilo1);
             vta_TXT.x=resultado_caja.x+resultado_caja.width/3;
             vta_TXT.y=height*.75;
             self.app.stage.addChild(vta_TXT);
         var vta_TXT2=new PIXI.Text("TOTAL",estilo1);
             vta_TXT2.x=width*.38;
             vta_TXT2.y=height*.8;
             self.app.stage.addChild(vta_TXT2);




  }

  function addCharacter(index){
    //alert(index);
    if(self.characters.length<2){
      self.characters.push(new characters_erc("C1",.50,1900))
    }
    console.log(self.characters);
  }

  function removeCharacter(index){
    //alert(index);
  }

  self.updateTotal=function(value){
      console.log("updating total")

      var tc=document.getElementById('tc_test3');
          tc.innerHTML=value*2;

      return self;
  }



  self.destroyApp=function(){
    return self;
  }

return self;

}

function characters_erc(name,tc,cpa){
  this.name=name;
  this.cpa=cpa;
  this.tc=tc;
  this.sale=function(){
    return this.cpa*this.cp;
  };


}
