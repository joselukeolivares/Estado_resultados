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
     contButton.scale.set(factorScreen(0.6));
     contButton.interactive = true;
     contButton.cursor = "pointer";

     var contButton2=new PIXI.Sprite(PIXI.loader.resources['assets/ui/Bloque_3/b-continue-selected.png'].texture);

     contButton2.x = width*.9;
     contButton2.y = height*.95;
     contButton2.anchor.set(0.5);
     contButton2.scale.set(factorScreen(0.6));
     contButton2.visible=false;

     contButton.on('click',function(){
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
        SliderB5B6(document.getElementById("aplicacion"),tc_pTag,"slider0","slider_fam",.25,.56,200,50,self);

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
        SliderB5B6(document.getElementById("aplicacion"),tc_pTag2,"slider1","slider_fam",.67,.56,200,50,self);

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




  }

  function addCharacter(index){
    //alert(index);
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
        mmAA["Venta \n"+segmentos[index]]

      );

      var flag=false;//Bandera para indicar que aunque será agregado un segundo personaje,
                    // debe agregarse como personaje a la ziquierda y el primero en el arreglo self.characters
       debugger;
      if(self.characters.length==1&&self.characters[0].side=="rightCte"){
        self.characters.push("");
        self.characters[1]=self.characters[0];
        self.characters[0]=character;
        flag=true;
      }

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

      var vtaTotal=0;
      for(var i=0;i<self.characters.length;i++){
        var cte=self.characters[i];

        var variacion=(parseInt(cte.sale())-parseInt(cte.vtaMMAA))/parseInt(cte.vtaMMAA)*100;

        var txtPIXI=self.app.stage.getChildByName("vtaTXT_PIXI"+i);
            if(variacion<0)
            {txtPIXI.style=estilo3;}else{txtPIXI.style=estilo2;}
            txtPIXI.text=(Math.round(variacion))+"%";
        vtaTotal+=self.characters[i].sale();
      }
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

          document.getElementById("ctes_numero"+cteSide).innerHTML=0;
          document.getElementById("cpa_pTag"+cteSide).innerHTML=0;
          document.getElementById("vta_pTag"+cteSide).innerHTML=0;
          document.getElementById("tc_pTag"+cteSide).innerHTML="0%";

          var vta=document.getElementById("vtaTotal_pTag");
          var a=Math.round(vta.innerHTML.replace(/[,$]/g, ''));
          var b=Math.round(self.characters[i].sale());
          debugger;
          if(a-b<0)
              {vta.innerHTML=0;}else{vta.innerHTML="$"+numberWithCommas(a-b)}


              self.characters.splice(i,1);
        }
    }

  }

  self.updateTotal=function(value){
      console.log("updating total")

      let vtaTotal=0;
      for(var i=0;i<self.characters.length;i++){
        debugger;
        //obtenemos la tasa de compra modificada por slider
        var tc=document.getElementById('tc_pTag'+i);

        //Calculamos datos para cada personaje seleccionado
          var cte=self.characters[i];
              cte.tc=parseInt(tc.innerHTML);
              debugger;
              var vta=document.getElementById('vta_pTag'+i).innerHTML="$"+numberWithCommas(Math.round(cte.sale()));

              var variacion=(parseInt(cte.sale())-parseInt(cte.vtaMMAA))/parseInt(cte.vtaMMAA)*100;

              var txtPIXI=self.app.stage.getChildByName("vtaTXT_PIXI"+i);
              if(variacion<0)
              {txtPIXI.style=estilo3;}else{txtPIXI.style=estilo2;}
              txtPIXI.text=(Math.round(variacion))+"%";
              vtaTotal+=cte.sale();


          tc.innerHTML=cte.tc+"%";
      }

      document.getElementById("vtaTotal_pTag").innerHTML="$"+numberWithCommas(Math.round(vtaTotal));

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

return self;

}

function characters_erc(name,tc,cpa,position,numCtes,vtaMMAA){
  this.name=name;
  this.cpa=parseInt(cpa);
  this.tc=parseFloat(tc);
  this.position=position;
  this.countCtes=parseInt(numCtes);
  this.vtaMMAA=vtaMMAA;
  this.sale=function(){
    debugger;
    return this.cpa*((this.tc)/100)*this.countCtes;
  };


}
