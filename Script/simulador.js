function simulador(){

var self={};
    self.characters=[];
    var estilo1={
      fontFamily:'Roboto-Bold',
      fontSize:factorScreen(30),
      fill:"#FFFFFF"
    }
    var estilo2={
      fontFamily:'Roboto-Bold',
      fontSize:factorScreen(30),
      fill:"#27ad1b"
    }
    var estilo3={
      fontFamily:'Roboto-Bold',
      fontSize:factorScreen(30),
      fill:"#d82215"
    }

    var segmentos=[
  "Nunca015",
  "Nunca+15",
  "Activos SinVdo",
  "Vencidos1",
  "Saldado015",
  "Saldado+15",
  "ClientesZ",
  "Quebrantados",
  "Generados"
  ]


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
    descript_txt.name="descript_txt";


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
        buttons_container.name="buttons_container";
    self.app.stage.addChild(buttons_container);
var b_x=width/8;
var b_y=height/2;

    for(var i=0;i<buttons.length;i++){

         var buttonOK=new PIXI.Sprite(atlasBlock5[buttons[i]]);
             buttonOK.scale.set(factorScreen(.65));
             buttonOK.y=b_y;
             buttonOK.x=b_x;
             b_x+=(buttonOK.width+(15));
             //buttonOK.interactive=true;
             //buttonOK.buttonMode=true;
             buttonOK.name="buttonOK"+i;
             buttonOK.numero=i;
             buttons_container.addChild(buttonOK);

         var button_pressed=new PIXI.Sprite(atlasBlock5[buttons_pressed[i]]);
             button_pressed.scale.set(factorScreen(.65));
             button_pressed.y=buttonOK.y;
             button_pressed.x=buttonOK.x;
             //button_pressed.buttonMode=true;
             //button_pressed.interactive=true;
             button_pressed.visible=false;
             button_pressed.name="button_pressed"+i;
             button_pressed.numero=i;
             buttons_container.addChild(button_pressed);

             buttonOK.on("click",function(){
               if(self.characters.length<2){
                   this.visible=false;
               var brother=this.parent.getChildAt(this.parent.getChildIndex(this)+1);
                   brother.visible=true;
                   addCharacter(this.numero);}else{
                     alert("Solo puedes seleccionar 2 Perfiles de cliente a la vez,haz click en su boton para liberarlo o presiona el boton 'Reiniciar.'");
                   }
             });


             button_pressed.on("click",function(){
               this.visible=false;
               this.parent.getChildAt(this.parent.getChildIndex(this)-1).visible=true;
               removeCharacter(this.numero);
             });

             var button_palomita=new PIXI.Sprite(atlasBlock5['10.PALOMITA.png']);
                 button_palomita.scale.set(factorScreen(.65));
                 button_palomita.y=buttonOK.y;
                 button_palomita.x=buttonOK.x;
                 button_palomita.visible=false;
                 button_palomita.name="button_palomita"+i;
                 button_palomita.numero=i;
                 buttons_container.addChild(button_palomita);

             var button_tacha=new PIXI.Sprite(atlasBlock5['11. TACHA.png']);
                 button_tacha.scale.set(factorScreen(.65));
                 button_tacha.y=buttonOK.y;
                 button_tacha.x=buttonOK.x;
                 button_tacha.visible=false;
                 button_tacha.name="button_tacha"+i;
                 button_tacha.numero=i;
                 buttons_container.addChild(button_tacha);


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
     contButton.name="continue_button"
     contButton.x = width*.9;
     contButton.y = height*.95;
     contButton.anchor.set(0.5);
     contButton.scale.set(factorScreen(0.6));
     contButton.interactive = true;
     contButton.cursor = "pointer";

     var contButton2=new PIXI.Sprite(PIXI.loader.resources['assets/ui/Bloque_3/b-continue-selected.png'].texture);
     contButton2.name="continue_button_pressed"
     contButton2.x = width*.9;
     contButton2.y = height*.95;
     contButton2.anchor.set(0.5);
     contButton2.scale.set(factorScreen(0.6));
     contButton2.visible=false;

     contButton.on('pointerdown',function(){
       this.buttonMode=false;
       this.interactive=false;

       TweenMax.to([followme_txt,descript_txt],1,{pixi:{alpha:0},onComplete:function(){
         self.app.stage.removeChild(followme_txt);
         descript_txt.text="Seleccionemos dos perfiles de clientes y manteniendo una compra promedio interactuaremos con su tasa de compra para ver el efecto que este tiene sobre la venta total."
         TweenMax.to(descript_txt,1,{pixi:{alpha:1,y:height/5.3}});
       }})

       TweenMax.to(buttons_container.children,2,{pixi:{y:height/4},onComplete:function(){
            var container_buttons=self.app.stage.getChildByName("buttons_container");
                debugger;
                for(var i=0;i<container_buttons.children.length;i++){
                  container_buttons.children[i].interactive=true;
                  container_buttons.children[i].buttonMode=true;
                }
            this.visible=false;

            contButton2.visible=true;
            simulacion();

       }})

     });
     self.app.stage.addChild(contButton);
     self.app.stage.addChild(contButton2);

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
     var atlasCtes5=PIXI.loader.resources['assets/ui/Bloque_5/bloque5_ctes.json'].textures;

         //Espacios para indicar la selección de personajes con botones con nombre de la segmentacion
         //Solo podrán seleccionar dos segmentos
         var grayCte=new PIXI.Sprite(atlasBlock5['16. MONITO GRIS 1.png']);
                  grayCte.x=width*.10;
                  grayCte.y=height/2;
                  grayCte.scale.set(factorScreen(.6));
                  grayCte.name="leftCteGray";
                  self.app.stage.addChild(grayCte);
              var grayCte_2=new PIXI.Sprite(atlasBlock5['17. MONITO GRIS 2.png']);
                  grayCte_2.x=width*.85;
                  grayCte_2.y=height/2;
                  grayCte_2.scale.set(factorScreen(.6));
                  grayCte_2.name="rightCteGray";
                  self.app.stage.addChild(grayCte_2);
         var ctes=[
           "9. N-15 500x350",
           "10. N+15 500x350",
           "5. ASV 500x350",
           "6. ACV 500x350",
           "7. S-15 500x350",
           "8. S+15 500x350",
           "3. Z 500x350",
           "4. QUEBRANTADOS  500x350",
           "2. GENERADOS 500x350"

         ]

for(var i=0;i<ctes.length;i++){
  debugger;
  var leftCte=new PIXI.Sprite(atlasCtes5[ctes[i]+".png"]);
         leftCte.x=width*.10;
         leftCte.y=height/2;
         leftCte.scale.set(factorScreen(.3));
         leftCte.name="leftCte"+i;
         //leftCte.positionG="leftCte"+i;
         leftCte.visible=false;
         self.app.stage.addChild(leftCte);
     var rightCte=new PIXI.Sprite(atlasCtes5[ctes[i]+" 2.png"]);
         rightCte.x=width*.85;
         rightCte.y=height/2;
         rightCte.scale.set(factorScreen(.3));
         rightCte.name="rightCte"+i;
         //rightCte.positionG="rightCte"+i;
         rightCte.visible=false;
         self.app.stage.addChild(rightCte);}

         //Botones para Iniciar simulación (botones activo e inactivo)
     var iniciarButton=new PIXI.Sprite(atlasBlock5['15. RECUADRO DE INICIAR.png']);
         iniciarButton.x=width*.45;
         iniciarButton.y=height/2;
         iniciarButton.scale.set(factorScreen(.6));
         self.app.stage.addChild(iniciarButton);
     var iniciarButtonOff=new PIXI.Sprite(atlasBlock5['15. RECUADRO DE INICIAR 2.png']);
         iniciarButtonOff.x=width*.45;
         iniciarButtonOff.y=height/2;
         iniciarButtonOff.scale.set(factorScreen(.6));
         iniciarButtonOff.visible=false;
         self.app.stage.addChild(iniciarButtonOff);

         //Botones para Reiniciar simulación (botones activo e inactivo)
     var reIniciarButton=new PIXI.Sprite(atlasBlock5['15. RECUADRO DE REINICIAR.png']);
         reIniciarButton.x=width*.45;
         reIniciarButton.y=height*.6;
         reIniciarButton.scale.set(factorScreen(.6));
         reIniciarButton.buttonMode=true;
         reIniciarButton.interactive=true;
         reIniciarButton.on('pointerdown',function(){
           debugger;

              while(self.characters.length!=0){
                  removeCharacter(self.characters[0].name);
              }

         })
         self.app.stage.addChild(reIniciarButton);
     var fontSizeVTATC=factorScreen(40);
     var reIniciarButtonOff=new PIXI.Sprite(atlasBlock5['15. RECUADRO DE REINICIAR 2.png']);
         reIniciarButtonOff.x=width*.45;
         reIniciarButtonOff.y=height*.6;
         reIniciarButtonOff.scale.set(factorScreen(.6));
         reIniciarButtonOff.visible=false;
         self.app.stage.addChild(reIniciarButtonOff);

         //Recuadros donde se colocará la Tasa de Compra de dos diferentes segmentos desde CSV al ultimo mes
     var tc_sprite=new PIXI.Sprite(atlasBlock5['13. RECUADRO DE TASA DE COMPRA.png']);
         tc_sprite.x=width*.22;
         tc_sprite.y=height/2;
         tc_sprite.scale.set(factorScreen(1));
         self.app.stage.addChild(tc_sprite);
        //<p>con TC, numero de clientes y "clientes" tag de primer personaje seleccionado
         var aplicacion=document.getElementById("aplicacion");

         var tc_pTag=document.createElement("p");
         tc_pTag.innerHTML="0%";
         tc_pTag.setAttribute("id","tc_pTag0")
         tc_pTag.setAttribute("class","recuadro_blanco sin_margen");
         tc_pTag.setAttribute("style","font-size:"+factorScreen(40)+"px;position:absolute;top:"+tc_sprite.y+"px;left:"+(tc_sprite.x+tc_sprite.width*.5)+"px;");
         tc_pTag.typeObj=1;

         var ctes_numero=document.createElement("p");
         ctes_numero.innerHTML="0";
         ctes_numero.setAttribute("id","ctes_numero0")
         ctes_numero.setAttribute("class","recuadro_blanco sin_margen");
         ctes_numero.setAttribute("style","position:absolute;top:"+tc_sprite.y+"px;left:"+(tc_sprite.x+tc_sprite.width*.05)+"px;font-size:"+factorScreen(16)+"px");
         ctes_numero.typeObj=1;

         var ctes_pTag=document.createElement("p");
         ctes_pTag.innerHTML="Clientes";
         ctes_pTag.setAttribute("id","ctes_pTag0")
         ctes_pTag.setAttribute("class","recuadro_blanco sin_margen");
         ctes_pTag.setAttribute("style","position:absolute;top:"+(tc_sprite.y+tc_sprite.height/2)+"px;left:"+(tc_sprite.x+tc_sprite.width*.1)+"px;font-size:"+factorScreen(16)+"px");
         ctes_pTag.typeObj=1;


             aplicacion.appendChild(tc_pTag);
             aplicacion.appendChild(ctes_numero);
             aplicacion.appendChild(ctes_pTag);
        //Se inserta slider en div id:"aplciacion" (informacion de los parametros en el script sliderB5B6)
        SliderB5B6(document.getElementById("aplicacion"),tc_pTag,"slider0","slider_fam",tc_sprite.x/width,.56,tc_sprite.width,50,self);

     var tc_base2=new PIXI.Sprite(atlasBlock5['13. RECUADRO DE TASA DE COMPRA.png']);
         tc_base2.x=width*.63;
         tc_base2.y=height/2;
         tc_base2.scale.set(factorScreen(1));
         self.app.stage.addChild(tc_base2);
         //<p>con TC, numero de clientes y "clientes" tag de segundo personaje seleccionado
         var tc_pTag2=document.createElement("p");
         tc_pTag2.innerHTML="0%";
         tc_pTag2.setAttribute("id","tc_pTag1")
         tc_pTag2.setAttribute("class","recuadro_blanco sin_margen");
         tc_pTag2.setAttribute("style","font-size:"+factorScreen(40)+"px;position:absolute;top:"+tc_base2.y+"px;left:"+(tc_base2.x+tc_base2.width*.5)+"px;");
         tc_pTag2.typeObj=1;
         var ctes_numero2=document.createElement("p");
         ctes_numero2.innerHTML="0";
         ctes_numero2.setAttribute("id","ctes_numero1")
         ctes_numero2.setAttribute("class","recuadro_blanco sin_margen");
         ctes_numero2.setAttribute("style","position:absolute;top:"+tc_base2.y+"px;left:"+(tc_base2.x+tc_base2.width*.05)+"px;font-size:"+factorScreen(16)+"px");
         ctes_numero2.typeObj=1;

         var ctes_pTag2=document.createElement("p");
         ctes_pTag2.innerHTML="Clientes";
         ctes_pTag2.setAttribute("id","ctes_pTag1")
         ctes_pTag2.setAttribute("class","recuadro_blanco sin_margen");
         ctes_pTag2.setAttribute("style","position:absolute;top:"+(tc_base2.y+tc_base2.height/2)+"px;left:"+(tc_base2.x+tc_base2.width*.1)+"px;font-size:"+factorScreen(16)+"px");
         ctes_pTag2.typeObj=1;


             aplicacion.appendChild(tc_pTag2);
             aplicacion.appendChild(ctes_numero2);
             aplicacion.appendChild(ctes_pTag2);

        //Se inserta slider en div id:"aplciacion" (informacion de los parametros en el script sliderB5B6)
        debugger;
        SliderB5B6(document.getElementById("aplicacion"),tc_pTag2,"slider1","slider_fam",tc_base2.x/width,.56,tc_base2.width,50,self);

         //Textos para recuadros de Tasa de Compra
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
     var CPA_sprite=new PIXI.Sprite(atlasBlock5['14. RECUADRO DE TASA DE C.P.A Y VENTA.png']);
         CPA_sprite.x=width*.3;
         CPA_sprite.y=height*.6;
         CPA_sprite.scale.set(factorScreen(1));
         self.app.stage.addChild(CPA_sprite);
         //<p> CPA para 1er personaje seleccionado
         var fontSizeCPAVta=factorScreen(24);
         var cpa_pTag=document.createElement("p");
         cpa_pTag.innerHTML="0";
         cpa_pTag.setAttribute("id","cpa_pTag0")
         cpa_pTag.setAttribute("class","recuadro_blanco sin_margen");
         cpa_pTag.setAttribute("style","position:absolute;top:"+CPA_sprite.y+"px;left:"+(CPA_sprite.x+CPA_sprite.width*.05)+"px;font-size:"+fontSizeCPAVta+"px;");
                  aplicacion.appendChild(cpa_pTag);

     var Vta_sprite=new PIXI.Sprite(atlasBlock5['14. RECUADRO DE TASA DE C.P.A Y VENTA.png']);
         Vta_sprite.x=width*.3;
         Vta_sprite.y=height*.70;
         Vta_sprite.scale.set(factorScreen(1));
         self.app.stage.addChild(Vta_sprite);
         //<p> vta para 1er personaje seleccionado
         var vta_pTag=document.createElement("p");
         vta_pTag.innerHTML="0";
         vta_pTag.setAttribute("id","vta_pTag0")
         vta_pTag.setAttribute("class","recuadro_blanco sin_margen");
         vta_pTag.setAttribute("style","position:absolute;top:"+Vta_sprite.y+"px;left:"+(Vta_sprite.x+Vta_sprite.width*.05)+"px;font-size:"+fontSizeCPAVta+"px;");
         vta_pTag.typeObj=1;
         aplicacion.appendChild(vta_pTag);

         //Segundo Segmento seleccionado por usuario
     var CPA_sprite2=new PIXI.Sprite(atlasBlock5['14. RECUADRO DE TASA DE C.P.A Y VENTA.png']);
         CPA_sprite2.x=width*.7;
         CPA_sprite2.y=height*.6;
         CPA_sprite2.scale.set(factorScreen(1));
         self.app.stage.addChild(CPA_sprite2);
         //<p> CPA para 2do personaje seleccionado
         var cpa_pTag2=document.createElement("p");
         cpa_pTag2.innerHTML="0";
         cpa_pTag2.setAttribute("id","cpa_pTag1")
         cpa_pTag2.setAttribute("class","recuadro_blanco sin_margen");
         cpa_pTag2.setAttribute("style","position:absolute;top:"+CPA_sprite2.y+"px;left:"+(CPA_sprite2.x+CPA_sprite2.width*.05)+"px;font-size:"+fontSizeCPAVta+"px;");
                  aplicacion.appendChild(cpa_pTag2);

         var Vta_sprite2=new PIXI.Sprite(atlasBlock5['14. RECUADRO DE TASA DE C.P.A Y VENTA.png']);
         Vta_sprite2.x=width*.7;
         Vta_sprite2.y=height*.7;
         Vta_sprite2.scale.set(factorScreen(1));
         self.app.stage.addChild(Vta_sprite2);
         //<p> CPA para 2do personaje seleccionado
         var vta_pTag2=document.createElement("p");
         vta_pTag2.innerHTML="0";
         vta_pTag2.setAttribute("id","vta_pTag1")
         vta_pTag2.setAttribute("class","recuadro_blanco sin_margen");
         vta_pTag2.setAttribute("style","position:absolute;top:"+Vta_sprite2.y+"px;left:"+(Vta_sprite2.x+Vta_sprite2.width*.05)+"px;font-size:"+fontSizeCPAVta+"px;");
                  aplicacion.appendChild(vta_pTag2);
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
             vta_TXT.x=width*.22;
             vta_TXT.y=height*.7;
             self.app.stage.addChild(vta_TXT);
         var vta_TXT2=new PIXI.Text("VENTA",estilo1);
             vta_TXT2.x=width*.62;
             vta_TXT2.y=height*.7;
             self.app.stage.addChild(vta_TXT2);

          //Texto para variaciones en personajes seleccionados
             var vta_TXT=new PIXI.Text("0%",estilo1);
                 vta_TXT.x=Vta_sprite.x+Vta_sprite.width*1.05;
                 vta_TXT.y=Vta_sprite.y;
                 vta_TXT.name="vtaTXT_PIXI0";
                 self.app.stage.addChild(vta_TXT);
             var vta_TXT2=new PIXI.Text("0%",estilo1);
                 vta_TXT2.x=Vta_sprite2.x+Vta_sprite2.width*1.05;
                 vta_TXT2.y=Vta_sprite2.y;
                 vta_TXT2.name="vtaTXT_PIXI1";
                 self.app.stage.addChild(vta_TXT2);


         //Recuadro blanco donde se colocará resultado final de simulación entre 2 segmentos seleccionados por usuario
     var resultado_caja=new PIXI.Sprite(atlasBlock5['12. RECUADRO DE RESULTADOS FINALES.png']);
         resultado_caja.x=width*.45;
         resultado_caja.y=height*.8;
         resultado_caja.scale.set(factorScreen(1));
         self.app.stage.addChild(resultado_caja);
         //<p> para Vento Total
         var vtaTotal=document.createElement("p");
         vtaTotal.innerHTML="0";
         vtaTotal.setAttribute("id","vtaTotal_pTag")
         vtaTotal.setAttribute("class","recuadro_blanco sin_margen");
         vtaTotal.setAttribute("style","position:absolute;top:"+resultado_caja.y+"px;left:"+(resultado_caja.x)+"px;font-size:"+fontSizeVTATC+"px;");
                  aplicacion.appendChild(vtaTotal);
         //Texto para recuadros de resultados


         var vta_TXT=new PIXI.Text("VENTA",estilo1);
             vta_TXT.x=resultado_caja.x+resultado_caja.width/3;
             vta_TXT.y=height*.75;
             //vta_TXT.name="vtaTXT_PIXI0";
             self.app.stage.addChild(vta_TXT);
         var vta_TXT2=new PIXI.Text("TOTAL",estilo1);
             vta_TXT2.x=width*.38;
             vta_TXT2.y=height*.8;
             //vta_TXT2.name="vtaTXT_PIXI1"
             self.app.stage.addChild(vta_TXT2);

        var var_vtaTotal=document.createElement("p");
            var_vtaTotal.innerHTML="0%";
            var_vtaTotal.setAttribute("id","varVtaTotal");
            var_vtaTotal.setAttribute("class","recuadro_blanco sin_margen");
            var_vtaTotal.setAttribute("style","fontFamily;font-size:"+factorScreen(40)+"px;position:absolute;top:"+resultado_caja.y+"px;left:"+(resultado_caja.x+resultado_caja.width)+"px");

            aplicacion.appendChild(var_vtaTotal);




  }

  function addCharacter(index){

    var segmentos=[
      "Nunca015",
      "Nunca+15",
      "Activos SinVdo",
      "Vencidos1",
      "Saldado015",
      "Saldado+15",
      "ClientesZ",
      "Quebrantados",
      "Generados"
    ]


    if(self.characters.length<2){

      var toDate=(dataCSV[dataCSV.length-1]);

      var mmAA=(dataCSV[dataCSV.length-13]);//mismo mes año anterior
      var character=new characters_erc(
        index,
        toDate["TC \n"+segmentos[index]],
        toDate["CPA \n"+segmentos[index]],
        "NA",
        toDate["Numero de clientes \n"+segmentos[index]],
        mmAA["Venta \n"+segmentos[index]],
        toDate["Venta \n"+segmentos[index]]

      );
      debugger;
      var flag=false;//Bandera para indicar que aunque será agregado un segundo personaje,
                    // debe agregarse como personaje a la ziquierda y el primero en el arreglo self.characters

      if(self.characters.length==1&&self.characters[0].side=="rightCte"){
        self.characters.push("");
        self.characters[1]=self.characters[0];
        self.characters[0]=character;
        flag=true;
        debugger;
      }

      if(!flag)
      self.characters.push(character);



      if(self.characters.length==1||flag){
        var cte1=self.app.stage.getChildByName("leftCte"+index);
        self.characters[0].side="leftCte";
            cte1.visible=true;
            document.getElementById("ctes_numero0").innerHTML=numberWithCommas(self.characters[0].countCtes);
            document.getElementById("ctes_numero0").innerHTML=numberWithCommas(self.characters[0].countCtes);
            document.getElementById("cpa_pTag0").innerHTML="$"+numberWithCommas(self.characters[0].cpa);
            document.getElementById("vta_pTag0").innerHTML="$"+numberWithCommas(Math.round(self.characters[0].sale()));
            document.getElementById("tc_pTag0").innerHTML=self.characters[0].tc+"%";

        var slider0=document.getElementById("slider0");
        var SlideBG=slider0.childNodes[0];
        var knob=slider0.childNodes[1];
        knob.style.left=((slider0.getBoundingClientRect().width*self.characters[0].tc/100)-(parseInt(knob.style.width)/2))+"px";
        self.app.stage.getChildByName("leftCteGray").visible=false;

      }else if(self.characters.length==2){
        self.characters[1].side="rightCte";
        self.app.stage.getChildByName("rightCte"+index).visible=true;
        document.getElementById("ctes_numero1").innerHTML=numberWithCommas(self.characters[1].countCtes);
        document.getElementById("cpa_pTag1").innerHTML="$"+numberWithCommas(self.characters[1].cpa);
        document.getElementById("vta_pTag1").innerHTML="$"+numberWithCommas(Math.round(self.characters[1].sale()));
        document.getElementById("tc_pTag1").innerHTML=self.characters[1].tc+"%";
        var slider0=document.getElementById("slider1");
        var SlideBG=slider0.childNodes[0];
        var knob=slider0.childNodes[1];
        knob.style.left=((slider0.getBoundingClientRect().width*self.characters[1].tc/100)-(parseInt(knob.style.width)/2))+"px";
        self.app.stage.getChildByName("rightCteGray").visible=false;


      }

      if(self.characters.length==2){
        var continue_button=self.app.stage.getChildByName("continue_button");
        var continue_button_pressed=self.app.stage.getChildByName("continue_button_pressed");
            continue_button.visible=true;
            continue_button.interactive=true;
            continue_button.buttonMode=true;
            continue_button_pressed.visible=false;
            continue_button.removeAllListeners();
            continue_button.on('pointerdown',function(){
              var buttonsContainer=self.app.stage.getChildByName("continue_button_pressed");
              var indexContainer=self.app.stage.getChildIndex(buttonsContainer);
              for(var i=indexContainer+1;i<self.app.stage.children.length;i++){
                self.app.stage.removeChildren(i);
                self.remove_p_tags();
                self.remove_Sliders();
                cuestionario();
              }
            })
      }

      var vtaTotal=0;
      var vtaTotalMMAA=0;
      for(var i=0;i<self.characters.length;i++){
        var cte=self.characters[i];

        var variacion=(parseInt(cte.sale())-parseInt(cte.vtaMMAA))/parseInt(cte.vtaMMAA)*100;
            vtaTotalMMAA+=parseInt(cte.vtaMMAA);
            debugger;
        var txtPIXI=self.app.stage.getChildByName("vtaTXT_PIXI"+i);
            if(variacion<0)
            {txtPIXI.style=estilo3;}else{txtPIXI.style=estilo2;}
            txtPIXI.text=(Math.round(variacion))+"%";
        vtaTotal+=self.characters[i].sale();
      }
      var variacionTotal=((vtaTotal-vtaTotalMMAA)/vtaTotalMMAA)*100;
      var varTotal_p=document.getElementById("varVtaTotal");
      varTotal_p.style.color="green";
      if(variacionTotal<0)
      varTotal_p.style.color="red";
     debugger;
      varTotal_p.innerHTML=numberWithCommas(Math.round(variacionTotal))+"%";
      document.getElementById("vtaTotal_pTag").innerHTML="$"+numberWithCommas(Math.round(vtaTotal));

    }
    //console.log(self.characters);
  }

  function removeCharacter(index){

    for(var i=0;i<self.characters.length;i++){
        if(self.characters[i].name==index){

          var cteSide=0;
          if(self.characters[i].side=="rightCte")
            cteSide=1;

          self.app.stage.getChildByName(self.characters[i].side+index).visible=false;
          self.app.stage.getChildByName(self.characters[i].side+"Gray").visible=true;
          var buttonContainer=self.app.stage.getChildByName("buttons_container");
          buttonContainer.getChildByName(("button_pressed"+self.characters[i].name)).visible=false;
          buttonContainer.getChildByName(("buttonOK"+self.characters[i].name)).visible=true;
          self.app.stage.getChildByName("vtaTXT_PIXI"+cteSide).text="0%";
          document.getElementById("ctes_numero"+cteSide).innerHTML=0;
          document.getElementById("cpa_pTag"+cteSide).innerHTML=0;
          document.getElementById("vta_pTag"+cteSide).innerHTML=0;
          document.getElementById("tc_pTag"+cteSide).innerHTML="0%";
          document.getElementById("varVtaTotal").innerHTML="";

          var vta=document.getElementById("vtaTotal_pTag");
          var a=Math.round(vta.innerHTML.replace(/[,$]/g, ''));
          var b=Math.round(self.characters[i].sale());
          debugger;
          if(a-b<0)
              {vta.innerHTML=0;}else{vta.innerHTML="$"+numberWithCommas(a-b)}


              self.characters.splice(i,1);
        }
    }

    var buttonContainer=self.app.stage;

    var continue_button=buttonContainer.getChildByName("continue_button");
    var continue_button_pressed=buttonContainer.getChildByName("continue_button_pressed");
        continue_button.visible=false;
        continue_button_pressed.visible=true;


  }

  self.updateTotal=function(value){
      console.log("updating total")

      let vtaTotal=0,vtaTotalMMAA=0,CtesBuyTotal=0,CtesBuyTotalOriginal=0,ctesTotal=0;
      for(var i=0;i<self.characters.length;i++){

        //obtenemos la tasa de compra modificada por slider
        var tc=document.getElementById('tc_pTag'+i);

        //Calculamos datos para cada personaje seleccionado
          var cte=self.characters[i];
              cte.tc=parseFloat(tc.innerHTML);
              vtaTotalMMAA+=parseInt(cte.vtaMMAA);
              var vta=document.getElementById('vta_pTag'+i).innerHTML="$"+numberWithCommas(Math.round(cte.sale()));

              var variacion=(parseInt(cte.sale())/parseInt(cte.vtaOriginal)-1)*100;
              if(cte.tc==cte.tcOriginal)
                variacion=(parseInt(cte.sale())/parseInt(cte.vtaMMAA)-1)*100;
              var txtPIXI=self.app.stage.getChildByName("vtaTXT_PIXI"+i);
              if(variacion<0)
              {txtPIXI.style=estilo3;}else{txtPIXI.style=estilo2;}
              txtPIXI.text=(Math.round(variacion))+"%";
              vtaTotal+=cte.sale();
              debugger;
              CtesBuyTotal+=cte.tc/100*cte.countCtes;
              ctesTotal+=cte.countCtes;
              CtesBuyTotalOriginal+=cte.tcOriginal/100*cte.countCtes;

          tc.innerHTML=cte.tc+"%";
      }


      var ponderadores=[],ponderadoresReal=[];
      for(var j=0;j<self.characters.length;j++){
          var cte=self.characters[j];
          ponderadores[j]=(cte.tc/100*cte.countCtes)/CtesBuyTotal;
          ponderadoresReal[j]=(cte.tcOriginal/100*cte.countCtes)/CtesBuyTotalOriginal;

      }

      var TotalCPA=0,TotalCPAOriginal=0;
      for(var j=0;j<self.characters.length;j++){
        var cte=self.characters[j];
          TotalCPA+=ponderadores[j]*cte.cpa;
          TotalCPAOriginal+=ponderadoresReal[j]*cte.cpa;
      }

      if(self.characters.length>0){
        var variacionTotal=(((CtesBuyTotal*TotalCPA)/(CtesBuyTotalOriginal*TotalCPAOriginal))-1)*100;
        var varTotal_p=document.getElementById("varVtaTotal");
        varTotal_p.style.color="#27ad1b";
        if(variacionTotal<0)
          varTotal_p.style.color="#d82215";
          varTotal_p.innerHTML=numberWithCommas(Math.round(variacionTotal))+"%";}
          debugger;
      document.getElementById("vtaTotal_pTag").innerHTML="$"+numberWithCommas(Math.round(TotalCPA*CtesBuyTotal));

      return self;
  }



  self.destroyApp=function(){


    if(self.app == null) return self;

		self.app.destroy(true);
    self.removeText();

    return self;
  }

  self.removeElements=function(){
    return self;
  }

  self.removeText=function(){
    debugger;

    var app=document.getElementById("aplicacion");
    while(app.firstChild){
      app.removeChild(app.firstChild);
    }
  }

  self.remove_p_tags=function(){

        var p=document.getElementsByTagName('p');
        var sliders
        var app=document.getElementById("aplicacion");
        while(p.length!=0){

            p[0].parentNode.removeChild(p[0]);


        }
  }

  self.remove_Sliders=function(){
        var app=document.getElementById("aplicacion");
        var sliders=app.getElementsByClassName('slider');
        while(sliders.length!=0){
          app.removeChild(sliders[0]);
        }
  }

  function cuestionario(){
    var app=self.app.stage;
    var descript_txt=app.getChildByName("descript_txt");
    var respuesta=document.createElement('p');
        respuesta.innerHTML="Responde a la pregunta superior presionando los botones!";
        respuesta.setAttribute("id","respuesta_p")
        respuesta.setAttribute("class","sin_margen")
        respuesta.setAttribute("style","font-size:"+factorScreen(30)+"px;position:absolute;top:70%;left:20%;");
        respuesta.style.color="rgb(231,200,47)"
        document.getElementById("aplicacion").appendChild(respuesta);


     var tcAll=[];

     var toDate=(dataCSV[dataCSV.length-1]);
     for(var i=0;i<segmentos.length;i++){
       var obj={tc:parseFloat(toDate["TC \n"+segmentos[i]]),index:i,segmento:segmentos[i]};
       tcAll.push(obj);
     }

     tcAll.sort(function(a,b){
          if (a.tc > b.tc) {
            return 1;
          }
          if (a.tc < b.tc) {
            return -1;
          }
          // a must be equal to b
          return 0;
     });
     console.log(tcAll);

var mayores=tcAll[tcAll.length-1].segmento+","+tcAll[tcAll.length-2].segmento+","+tcAll[tcAll.length-3].segmento;
var menores=tcAll[0].segmento+","+tcAll[1].segmento+","+tcAll[2].segmento;
    var bateria=[
      {pregunta:"¿Cuáles son los 3 Perfiles de Clientes  con mayor Tasa de Compra?",respuesta1:"Correcto: "+mayores,respuesta2:"Incorecto: la respuesta correcta es "+mayores,botonOk:[tcAll[tcAll.length-1].index,tcAll[tcAll.length-2].index,tcAll[tcAll.length-3].index]},
      {pregunta:"¿Cuáles son los 3 Perfiles de Clientes con menor Tasa de Compra? ",respuesta1:"Correcto: "+menores,respuesta2:"Incorecto: la respuesta correcta es "+menores,botonOk:[tcAll[0].index,tcAll[1].index,tcAll[2].index]}

    ],index=0;


    var container_buttons=app.getChildByName("buttons_container");
    var button_continue=app.getChildByName("continue_button");
        button_continue.visible=false;
        button_continue.removeAllListeners();
        button_continue.on('pointerdown',function(){
          index++;
          descript_txt.text=bateria[index].pregunta;
          respuesta.innerHTML="Responde a la pregunta superior presionando los botones!";
          for(var i=0;i<9;i++){

            var buttonOK=container_buttons.getChildByName("buttonOK"+i).visible=true;
            var buttonOK=container_buttons.getChildByName("button_pressed"+i).visible=false;
            var buttonOK=container_buttons.getChildByName("button_palomita"+i).visible=false;
            var buttonOK=container_buttons.getChildByName("button_tacha"+i).visible=false;
            this.visible=false;
            app.getChildByName("continue_button_pressed").visible=true;

          }
        })
        var continue_pressed=app.getChildByName("continue_button_pressed");
        continue_pressed.visible=true;


    descript_txt.text=bateria[index].pregunta;
    TweenMax.to(container_buttons,1,{pixi:{y:height*.2},onComplete:function(){
      var aciertos=0;
        for(var j=0;j<9;j++){
          var buttonOK=container_buttons.getChildByName("buttonOK"+j);
          buttonOK.visible=true;
          buttonOK.removeAllListeners();
          var button_pressed=container_buttons.getChildByName("button_pressed"+j);
          button_pressed.visible=false;
          button_pressed.removeAllListeners();
          buttonOK.on('pointerdown',function(){
            this.visible=false;
            container_buttons.getChildByName("button_pressed"+this.numero).visible=true;
            if(bateria[index].botonOk[0]==this.numero||bateria[index].botonOk[1]==this.numero||bateria[index].botonOk[2]==this.numero){
              container_buttons.getChildByName("button_palomita"+this.numero).visible=true;
              document.getElementById("respuesta_p").innerHTML=bateria[index].respuesta1;

               if(index==bateria.length-1){
                 var continue_button=self.app.stage.getChildByName("continue_button");
                 continue_button.visible=true;
                 continue_button.removeAllListeners();
                 continue_button.on('pointerdown',function(){
                   self.remove_p_tags();
                   toSlide('simulador_global');});

               }
               aciertos++;
               if(aciertos==3){
                 aciertos=0;
                 app.getChildByName("continue_button").visible=true;
                 app.getChildByName("continue_button_pressed").visible=false;}

            }else{
              document.getElementById("respuesta_p").innerHTML=bateria[index].respuesta2;
              container_buttons.getChildByName("button_tacha"+this.numero).visible=true;
            }
          })
        }
    }})


  }



return self;

}

function characters_erc(name,tc,cpa,position,numCtes,vtaMMAA,vtaOriginal){
  this.name=name;
  this.cpa=parseInt(cpa);
  this.tc=parseFloat(tc);
  this.position=position;
  this.countCtes=parseInt(numCtes);
  this.vtaMMAA=vtaMMAA;
  this.vtaOriginal=vtaOriginal;
  this.tcOriginal=parseFloat(tc);
  this.sale=function(){
        return this.cpa*((this.tc)/100)*this.countCtes;
  };


}
