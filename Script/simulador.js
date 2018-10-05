function simulador(){
var self={};
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

  function simulacion(){
/*
    15. RECUADRO DE INICIAR
    15. RECUADRO DE INICIAR 2
    15. RECUADRO DE REINICIAR 2
    15. RECUADRO DE REINICIAR
    16. MONITO GRIS 1
    17. MONITO GRIS 2
    13. RECUADRO DE TASA DE COMPRA
*/

     var atlasBlock5=PIXI.loader.resources['assets/ui/Bloque_5/spritesheet_bloque_5.json'].textures;
     var grayCte=new PIXI.Sprite(atlasBlock5['16. MONITO GRIS 1.png']);
         grayCte.x=width*.2;
         grayCte.y=height/2;
         grayCte.scale.set(.6);
         self.app.stage.addChild(grayCte);
     var grayCte_2=new PIXI.Sprite(atlasBlock5['17. MONITO GRIS 2.png']);
         grayCte_2.x=width*.8;
         grayCte_2.y=height/2;
         grayCte_2.scale.set(.6);
         self.app.stage.addChild(grayCte_2);
         



  }

  function addCharacter(index){
    alert(index);
  }

  function removeCharacter(index){
    alert(index);
  }



  self.destroyApp=function(){
    return self;
  }

return self;
}
