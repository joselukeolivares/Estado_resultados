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

  self.showBaloon=function(target){
    //
    let p_tagCte=document.getElementById("p_tagCte");
    p_tagCte.innerHTML=target.tagInDiv;
    p_tagCte.parentNode.style.display="block";
    //p_tagCte.parentNode.style.left=(event.target.x)+"px";//+(parseFloat(this.parent.offsetLeft))-(this.width/2)+"px";
    //p_tagCte.parentNode.style.top=(event.target.y)+"px";//+(parseFloat(this.parent.offsetTop))-(this.height)+"px";
    p_tagCte.parentNode.style.left=(target.x+(target.width/2)-(p_tagCte.clientWidth/2))+"px";
    p_tagCte.parentNode.style.top=(target.y+target.parent.y-(target.height))+"px";

  }


  self.createApp=function(){
    var aplicacion=document.getElementById("aplicacion");
    self.app=new PIXI.Application(width,height,{backgroundColor: 0x175383});
    aplicacion.appendChild(self.app.renderer.view);





    var leftCent=(parseInt(aplicacion.clientWidth)/2);
    //
    var title=document.createElement('p')
        title.innerHTML="Estado de Resultados de Clientes";
        title.setAttribute("class","title erase")
        title.style.top = self.app.screen.height * 0.05+"px";
        aplicacion.appendChild(title);
        title.style.left=(leftCent-(title.clientWidth/2))+"px";

    var subtitle=document.createElement('p')
            subtitle.setAttribute("id","subTitle");
            subtitle.setAttribute("class","subTitle");
            subtitle.innerHTML="Simulador"
            subtitle.style.top = self.app.screen.height * 0.13+"px";
            aplicacion.appendChild(subtitle);
            subtitle.style.left=(leftCent-(subtitle.clientWidth/2))+"px";

    var descript_txt=document.createElement('p')
            descript_txt.setAttribute("id","descript_txt");
            descript_txt.innerHTML="Ahora, ya que entendemos como está compuesto el Estado de Resultados de Clientes Coppel (Indicadores de venta y perfiles de clientes) pasamos al siguiente bloque, en donde vamos a simular con datos reales como se comportan cada uno de los perfiles de clientes."
            //descript_txt.setAttribute("style","margin: 0 10% 0 10%;position: absolute;top: 30%;font-size: "+factorScreen(22)+"px;font-family: roboto-regular;color: #FFFFFF;width: 80%;text-align: center;");
            aplicacion.appendChild(descript_txt);
            //descript_txt.style.left=(leftCent-(descript_txt.clientWidth/2))+"px";



    title.x=width/5;
    title.y=height/20;
    subtitle.x=width/2.2;
    subtitle.y=height/8;
    descript_txt.x=width/5.5;
    descript_txt.y=height/3;
    descript_txt.name="descript_txt";



    var Loader=PIXI.loader;


    var atlasBlock5=Loader.resources['assets/ui/bloque_5/spritesheet_bloque_5.json'].textures;

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

    var ctesNombre=[
                "Ctes Nunca 0-15",
                "Ctes Nunca +15",
                "Activos Sin Vencido",
                "Activos Con Vencido",
                "Saldado 0-15",
                "Saldado +15",
                "Ctes Z",
                "Quebrantados",
                "Generados"
    ];
    var buttons_pressed=[
                "4. N-15 2 500X500.png",
                "5. N+15 2 500X500.png",
                "8. ASV 2 500X500.png",
                "9. ACV 2 500X500.png",
                "7. S-15 2 500X500.png",
                "6. S+15 2 500X500.png",
                "2. Z 2 500X500.png",
                "3. Q 2 500X500.png",
                "1. G 2 500X500.png"
    ] ;

    var buttons_container=new PIXI.Container();
        buttons_container.name="buttons_container";
    self.app.stage.addChild(buttons_container);
    var buttonNull=new PIXI.Sprite(atlasBlock5[buttons[0]]);
        buttonNull.scale.set(factorScreen(.65));
var b_x=(width/2)-(buttonNull.width*4)-75;
//
var b_y=height/2;

var cteNameDiv=document.createElement('div');
    cteNameDiv.setAttribute("id","globosVdo");
    cteNameDiv.setAttribute("class","sin_margen");
    cteNameDiv.setAttribute("style","border:1px;border-style:solid;border-color:black;text-align:center;font-family:'Roboto-regular';position:absolute;width:200px;height:50px;top:100px;left:400px;background-color:white;border-radius:25px;");
var p_tagCte=document.createElement('p');
    p_tagCte.setAttribute("id","p_tagCte");
    aplicacion.appendChild(cteNameDiv);
    cteNameDiv.appendChild(p_tagCte);
    cteNameDiv.style.display="none";




    self.hideBaloon=function(){
      ////
      let p_tagCte=document.getElementById("p_tagCte");
      p_tagCte.parentNode.style.display="none";

    }

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
             buttonOK.tagInDiv=ctesNombre[i];
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

             buttonOK.on("pointertap",btnOkClick);

             function btnOkClick(){
               if(self.characters.length<2){
                   this.visible=false;
               var brother=this.parent.getChildAt(this.parent.getChildIndex(this)+1);
                   brother.visible=true;
                   addCharacter(this.numero);}else{
                     alert("Solo puedes seleccionar 2 Perfiles de cliente a la vez,haz click en su boton para liberarlo o presiona el boton 'Reiniciar.'");
                   }
             };



             buttonOK.on("mouseover",function(){
               self.showBaloon(this);

             });
             buttonOK.on("mouseout",self.hideBaloon);


             button_pressed.on("pointertap",function(){
               this.visible=false;
               this.parent.getChildAt(this.parent.getChildIndex(this)-1).visible=true;
               removeCharacter(this.numero);
             });

             button_pressed.on("mouseout",function(event){
               //
               let p_tagCte=document.getElementById("p_tagCte");
               p_tagCte.parentNode.style.display="none";


             })

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



    var followMe=document.createElement("p");
    followMe.innerHTML="¡Acompañeme a conocerlos!";
    followMe.setAttribute("id","followMe")
    followMe.setAttribute("class","recuadro_blanco sin_margen");
    followMe.setAttribute("style","color:white;font-size:"+factorScreen(50)+"px;position:absolute;top:"+(height*.8)+"px;");
    aplicacion.appendChild(followMe);
    followMe.style.left=(leftCent-(followMe.clientWidth/2))+"px";


     var contButton=new PIXI.Sprite(PIXI.loader.resources['assets/ui/bloque_3/b-continue.png'].texture);
     contButton.name="continue_button"
     contButton.x = width*.9;
     contButton.y = height*.95;
     contButton.anchor.set(0.5);
     contButton.scale.set(factorScreen(0.6));
     contButton.interactive = true;
     contButton.cursor = "pointer";


     var contButton2=new PIXI.Sprite(PIXI.loader.resources['assets/ui/bloque_3/b-continue-selected.png'].texture);
     contButton2.name="continue_button_pressed"
     contButton2.x = width*.9;
     contButton2.y = height*.95;
     contButton2.anchor.set(0.5);
     contButton2.scale.set(factorScreen(0.6));
     contButton2.visible=false;


     contButton.on('pointertap',function(){
       //this.buttonMode=true;
       //this.interactive=false;

       TweenMax.to([followMe,descript_txt],1,{pixi:{alpha:0},onComplete:function(){
         aplicacion.removeChild(followMe);
         descript_txt.innerHTML="Selecciona dos perfiles de clientes dando clic en los botones, a continuación se visualiza la Tasa de Compra, Compra Promedio Anual, Venta y Venta Total de los perfiles seleccionados.<br>Analiza los indicadores de cada perfil e interactúa con la Tasa de compra para visualizar las variaciones en  Venta y Venta Total."
         let subTitle=document.getElementById("subTitle");
         debugger;
         TweenMax.to(descript_txt,1,{alpha:1,top:"16%"});
       }})

       TweenMax.to(buttons_container.children,2,{pixi:{y:height/3},onComplete:function(){
            var container_buttons=self.app.stage.getChildByName("buttons_container");

                for(var i=0;i<container_buttons.children.length;i++){
                  container_buttons.children[i].interactive=true;
                  container_buttons.children[i].buttonMode=true;
                }
            //this.visible=false;

            //contButton2.visible=true;
            simulacion();

       }})
       this.removeAllListeners();
       this.on('pointertap',function(){
         var buttonsContainer=self.app.stage.getChildByName("continue_button_pressed");
         var indexContainer=self.app.stage.getChildIndex(buttonsContainer);
         for(var i=indexContainer+1;i<self.app.stage.children.length;i++){
           self.app.stage.removeChildren(i);
           self.remove_p_tags();
           self.remove_Sliders();
           cuestionario();
         }
       })

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

     var atlasBlock5=PIXI.loader.resources['assets/ui/bloque_5/spritesheet_bloque_5.json'].textures;
     var atlasCtes5=PIXI.loader.resources['assets/ui/bloque_5/bloque5_ctes.json'].textures;

         //Espacios para indicar la selección de personajes con botones con nombre de la segmentacion
         //Solo podrán seleccionar dos segmentos
         var grayCte=new PIXI.Sprite(atlasBlock5['16. MONITO GRIS 1.png']);
                  //grayCte.x=width*.10;
                  grayCte.y=height/2;
                  grayCte.scale.set(factorScreen(.6));
                  grayCte.name="leftCteGray";
                  self.app.stage.addChild(grayCte);
              var grayCte_2=new PIXI.Sprite(atlasBlock5['17. MONITO GRIS 2.png']);

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
     var iniciarButtonOff=new PIXI.Sprite(atlasBlock5['15. RECUADRO DE INICIAR 2.png']);
         iniciarButtonOff.x=width*.45;
         iniciarButtonOff.y=height/2;
         iniciarButtonOff.scale.set(factorScreen(.6));
         iniciarButtonOff.visible=false;
         self.app.stage.addChild(iniciarButtonOff);

         //Botones para Reiniciar simulación (botones activo e inactivo)
     var reIniciar_1 = PIXI.loader.resources["assets/ui/bloque_6/22. BOTON REGRESAR UN PASO PARA ATRAS 1.png"].texture;
     var reIniciar_2 =PIXI.loader.resources["assets/ui/bloque_6/22. BOTON REGRESAR UN PASO PARA ATRAS 2.png"].texture;
     var reIniciarButton=new PIXI.Sprite(reIniciar_1);
         reIniciarButton.x = self.app.screen.width*.75;
         reIniciarButton.y = self.app.screen.height/1.1;
         reIniciarButton.scale.set(self.app.screen.width*.35/950);
         reIniciarButton.buttonMode=true;
         reIniciarButton.interactive=true;
         reIniciarButton.tagInDiv="Reiniciar Simulador"
         reIniciarButton.on('mouseover',function(){
          self.showBaloon(this);
           mouseover_regresar();
         });
         reIniciarButton.on('mouseout',borrar_regresar);

         function mouseover_regresar(){

           this.Over = true;
            if(this.isdown){
            return;
            }
            this.texture = reIniciar_2;


         }

         function borrar_regresar(){
           this.Over = false;
           if(this.isdown){
           return;
           }
           this.texture = reIniciar_1;
           self.hideBaloon();
         }

         reIniciarButton.on('pointertap',function(){


              while(self.characters.length!=0){
                  removeCharacter(self.characters[0].name);
              }

         })
         self.app.stage.addChild(reIniciarButton);
     var fontSizeVTATC=factorScreen(35);
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
         grayCte.x+=tc_sprite.x-(grayCte.width*2);

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
         grayCte_2.x=tc_base2.x+tc_base2.width+grayCte_2.width;

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

        SliderB5B6(document.getElementById("aplicacion"),tc_pTag2,"slider1","slider_fam",tc_base2.x/width,.56,tc_base2.width,50,self);

         //Textos para recuadros de Tasa de Compra
         var tc_TXT=new PIXI.Text("T.C",estilo1);
             tc_TXT.x=width*.18;
             tc_TXT.y=height/2;
             //self.app.stage.addChild(tc_TXT);
        var tc_pTag=document.createElement('p');
            tc_pTag.setAttribute("id","tc_pTag");
            tc_pTag.setAttribute("class","sin_margen");
            tc_pTag.innerHTML="T.C";
            tc_pTag.style.position="absolute";
            tc_pTag.style.color="#FFFFFF";
            tc_pTag.style.fontSize=factorScreen(40)+"px";
            tc_pTag.style.fontFamily='Roboto-Bold';
            tc_pTag.style.top=(leftCte.y+leftCte.parent.y)+"px";
            aplicacion.appendChild(tc_pTag);
            tc_pTag.style.left=(tc_sprite.x-tc_pTag.clientWidth)+"px";


            self.app.stage.getChildByName("leftCteGray").x-=parseInt(tc_pTag.clientWidth);


        var tc_pTag2=document.createElement('p');
            tc_pTag2.setAttribute("id","tc_pTag");
            tc_pTag2.setAttribute("class","sin_margen");
            tc_pTag2.innerHTML="T.C";
            tc_pTag2.style.position="absolute";
            tc_pTag2.style.color="#FFFFFF";
            tc_pTag2.style.fontSize=factorScreen(40)+"px";
            tc_pTag2.style.fontFamily='Roboto-Bold';
            aplicacion.appendChild(tc_pTag2);


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
         cpa_pTag.setAttribute("style","width:"+(CPA_sprite.width*.9)+"px;text-align:right;position:absolute;top:"+CPA_sprite.y+"px;left:"+(CPA_sprite.x+CPA_sprite.width*.05)+"px;font-size:"+fontSizeCPAVta+"px;");
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
         vta_pTag.setAttribute("style","width:"+(Vta_sprite.width*.9)+"px;text-align:right;position:absolute;top:"+Vta_sprite.y+"px;left:"+(Vta_sprite.x+Vta_sprite.width*.05)+"px;font-size:"+fontSizeCPAVta+"px;");
         vta_pTag.typeObj=1;
         aplicacion.appendChild(vta_pTag);

         //Segundo Segmento seleccionado por usuario
     var CPA_sprite2=new PIXI.Sprite(atlasBlock5['14. RECUADRO DE TASA DE C.P.A Y VENTA.png']);
         CPA_sprite2.x=width*.7;
         CPA_sprite2.y=height*.6;
         CPA_sprite2.scale.set(factorScreen(1));
         self.app.stage.addChild(CPA_sprite2);

         tc_pTag2.style.left=(tc_base2.x-tc_pTag2.clientWidth*1.1)+"px";
         tc_pTag2.style.top=(leftCte.y+leftCte.parent.y)+"px";

         //<p> CPA para 2do personaje seleccionado
         var cpa_pTag2=document.createElement("p");
         cpa_pTag2.innerHTML="0";
         cpa_pTag2.setAttribute("id","cpa_pTag1")
         cpa_pTag2.setAttribute("class","recuadro_blanco sin_margen");
         cpa_pTag2.setAttribute("style","width:"+(CPA_sprite2.width*.9)+"px;text-align:right;position:absolute;top:"+CPA_sprite2.y+"px;left:"+(CPA_sprite2.x+CPA_sprite2.width*.05)+"px;font-size:"+fontSizeCPAVta+"px;");
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
         vta_pTag2.setAttribute("style","width:"+(Vta_sprite2.width*.9)+"px;text-align:right;position:absolute;top:"+Vta_sprite2.y+"px;left:"+(Vta_sprite2.x+Vta_sprite2.width*.05)+"px;font-size:"+fontSizeCPAVta+"px;");
                  aplicacion.appendChild(vta_pTag2);
         //Texto para recuadros de CPA y Venta en ambos personajes seleccionados
         var cpa_pTag=document.createElement('p');
             cpa_pTag.setAttribute("id","cpa_pTag");
             cpa_pTag.setAttribute("class","sin_margen");
             cpa_pTag.innerHTML="C.P.A";
             cpa_pTag.style.position="absolute";
             cpa_pTag.style.color="#FFFFFF";
             cpa_pTag.style.fontSize=factorScreen(40)+"px";
             cpa_pTag.style.fontFamily='Roboto-Bold';
             aplicacion.appendChild(cpa_pTag);
             cpa_pTag.style.left=(CPA_sprite.x-cpa_pTag.clientWidth+CPA_sprite.parent.x)+"px";
             cpa_pTag.style.top=(CPA_sprite.y+CPA_sprite.parent.y)+"px";

         var cpa_pTag2=document.createElement('p');
             cpa_pTag2.setAttribute("id","cpa_pTag");
             cpa_pTag2.setAttribute("class","sin_margen");
             cpa_pTag2.innerHTML="C.P.A";
             cpa_pTag2.style.position="absolute";
             cpa_pTag2.style.color="#FFFFFF";
             cpa_pTag2.style.fontSize=factorScreen(40)+"px";
             cpa_pTag2.style.fontFamily='Roboto-Bold';
             aplicacion.appendChild(cpa_pTag2);
             cpa_pTag2.style.left=(CPA_sprite2.x-cpa_pTag2.clientWidth+CPA_sprite2.parent.x)+"px";
             cpa_pTag2.style.top=(CPA_sprite2.y+CPA_sprite2.parent.y)+"px";

         var vta_pTag=document.createElement('p');
             vta_pTag.setAttribute("id","cpa_pTag");
             vta_pTag.setAttribute("class","sin_margen");
             vta_pTag.innerHTML="VENTA";
             vta_pTag.style.position="absolute";
             vta_pTag.style.color="#FFFFFF";
             vta_pTag.style.fontSize=factorScreen(40)+"px";
             vta_pTag.style.fontFamily='Roboto-Bold';
             aplicacion.appendChild(vta_pTag);
             vta_pTag.style.left=(Vta_sprite.x-vta_pTag.clientWidth+Vta_sprite.parent.x)+"px";
             vta_pTag.style.top=(Vta_sprite.y+Vta_sprite.parent.y)+"px";

         var vta_pTag2=document.createElement('p');
             vta_pTag2.setAttribute("id","cpa_pTag");
             vta_pTag2.setAttribute("class","sin_margen");
             vta_pTag2.innerHTML="VENTA";
             vta_pTag2.style.position="absolute";
             vta_pTag2.style.color="#FFFFFF";
             vta_pTag2.style.fontSize=factorScreen(40)+"px";
             vta_pTag2.style.fontFamily='Roboto-Bold';
             aplicacion.appendChild(vta_pTag2);
             vta_pTag2.style.left=(Vta_sprite2.x-vta_pTag2.clientWidth+Vta_sprite2.parent.x)+"px";
             vta_pTag2.style.top=(Vta_sprite2.y+Vta_sprite2.parent.y)+"px";

          //Texto para variaciones en personajes seleccionados
             var var_pTag=document.createElement('p');
                 var_pTag.setAttribute("id","var_pTag1");
                 var_pTag.setAttribute("class","sin_margen");
                 var_pTag.innerHTML="0%";
                 var_pTag.style.position="absolute";
                 var_pTag.style.color="#FFFFFF";
                 var_pTag.style.fontSize=factorScreen(40)+"px";
                 var_pTag.style.fontFamily='Roboto-regular';
                 aplicacion.appendChild(var_pTag);
                 var_pTag.style.left=(Vta_sprite.x+Vta_sprite.width+Vta_sprite.parent.x)+"px";
                 var_pTag.style.top=(Vta_sprite.y+Vta_sprite.parent.y)+"px";

             var var_pTag2=document.createElement('p');
                 var_pTag2.setAttribute("id","var_pTag2");
                 var_pTag2.setAttribute("class","sin_margen");
                 var_pTag2.innerHTML="0%";
                 var_pTag2.style.position="absolute";
                 var_pTag2.style.color="#FFFFFF";
                 var_pTag2.style.fontSize=factorScreen(40)+"px";
                 var_pTag2.style.fontFamily='Roboto-regular';
                 aplicacion.appendChild(var_pTag2);
                 var_pTag2.style.left=(Vta_sprite2.x+Vta_sprite2.width+Vta_sprite2.parent.x)+"px";
                 var_pTag2.style.top=(Vta_sprite2.y+Vta_sprite2.parent.y)+"px";


         //Recuadro blanco donde se colocará resultado final de simulación entre 2 segmentos seleccionados por usuario
     var resultado_caja=new PIXI.Sprite(atlasBlock5['12. RECUADRO DE RESULTADOS FINALES.png']);
         resultado_caja.scale.set(factorScreen(1));
         resultado_caja.y=height*.85;
         self.app.stage.addChild(resultado_caja);
         resultado_caja.x=(self.app.renderer.screen.width/2)-resultado_caja.width/2;

         //<p> para Vento Total
         var vtaTotal=document.createElement("p");
         vtaTotal.innerHTML="0";
         vtaTotal.setAttribute("id","vtaTotal_pTag")
         vtaTotal.setAttribute("class","recuadro_blanco sin_margen");
         vtaTotal.setAttribute("style","width:"+(resultado_caja.width*.95)+"px;text-align:right;position:absolute;top:"+resultado_caja.y+"px;left:"+(resultado_caja.x)+"px;font-size:"+fontSizeVTATC+"px;");
                  aplicacion.appendChild(vtaTotal);

         //Texto para recuadros de resultados


         var total_pTagf=document.createElement('p');
             total_pTagf.setAttribute("id","total_pTagf");
             total_pTagf.setAttribute("class","sin_margen");
             total_pTagf.innerHTML="VENTA TOTAL";
             total_pTagf.style.position="absolute";
             total_pTagf.style.color="#FFFFFF";
             total_pTagf.style.fontSize=factorScreen(40)+"px";
             total_pTagf.style.fontFamily='Roboto-Bold';
             aplicacion.appendChild(total_pTagf);
             total_pTagf.style.left=(resultado_caja.x-total_pTagf.clientWidth+resultado_caja.parent.x)+"px";
             total_pTagf.style.top=(resultado_caja.y+resultado_caja.parent.y)+"px";




        var var_vtaTotal=document.createElement("p");
            var_vtaTotal.innerHTML="0%";
            var_vtaTotal.setAttribute("id","varVtaTotal");
            var_vtaTotal.setAttribute("class","recuadro_blanco sin_margen");
            var_vtaTotal.setAttribute("style","fontFamily;font-size:"+factorScreen(40)+"px;position:absolute;top:"+resultado_caja.y+"px;left:"+(resultado_caja.x+resultado_caja.width)+"px;color:#FFFFFF");

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

      var flag=false;//Bandera para indicar que aunque será agregado un segundo personaje,
                    // debe agregarse como personaje a la ziquierda y el primero en el arreglo self.characters

      if(self.characters.length==1&&self.characters[0].side=="rightCte"){
        self.characters.push("");
        self.characters[1]=self.characters[0];
        self.characters[0]=character;
        flag=true;

      }

      if(!flag)
      self.characters.push(character);



      if(self.characters.length==1||flag){
        var cte1=self.app.stage.getChildByName("leftCte"+index);
        self.characters[0].side="leftCte";
            cte1.visible=true;
            document.getElementById("ctes_numero0").innerHTML=numberWithCommas(self.characters[0].countCtes);
            document.getElementById("ctes_numero0").innerHTML=numberWithCommas(self.characters[0].countCtes);
            document.getElementById("cpa_pTag0").innerHTML="$"+numberWithCommas(Math.round(self.characters[0].cpa));
            document.getElementById("vta_pTag0").innerHTML="$"+numberWithCommas(Math.round(self.characters[0].sale()));
            document.getElementById("tc_pTag0").innerHTML=(self.characters[0].tc).toFixed(1)+"%";

        var slider0=document.getElementById("slider0");
        debugger;
        var SlideBG=slider0.childNodes[0];
        var knob=slider0.childNodes[1];
        knob.style.left="calc("+(self.characters[0].tc)+"% - 12.5px)";
        //knob.style.left=((slider0.getBoundingClientRect().width*self.characters[0].tc/100)-(parseInt(knob.style.width)/2))+"px";
        self.app.stage.getChildByName("leftCteGray").visible=false;

      }else if(self.characters.length==2){
        self.characters[1].side="rightCte";
        self.app.stage.getChildByName("rightCte"+index).visible=true;
        document.getElementById("ctes_numero1").innerHTML=numberWithCommas(self.characters[1].countCtes);
        document.getElementById("cpa_pTag1").innerHTML="$"+numberWithCommas((self.characters[1].cpa).toFixed(1));
        document.getElementById("vta_pTag1").innerHTML="$"+numberWithCommas(Math.round(self.characters[1].sale()));
        document.getElementById("tc_pTag1").innerHTML=(self.characters[1].tc).toFixed(1)+"%";
        var slider0=document.getElementById("slider1");
        var SlideBG=slider0.childNodes[0];
        var knob=slider0.childNodes[1];
        debugger;
        //knob.style.left=((slider0.getBoundingClientRect().width*self.characters[1].tc/100)-(parseInt(knob.style.width)/2))+"px";
        knob.style.left="calc("+(self.characters[1].tc)+"% - 12.5px)";
        self.app.stage.getChildByName("rightCteGray").visible=false;


      }
/*
      if(self.characters.length==2){
        var continue_button=self.app.stage.getChildByName("continue_button");
        var continue_button_pressed=self.app.stage.getChildByName("continue_button_pressed");
            continue_button.visible=true;
            continue_button.interactive=true;
            continue_button.buttonMode=true;
            continue_button_pressed.visible=false;
            continue_button.removeAllListeners();
            continue_button.on('pointertap',function(){

            })
      }
*/
      var vtaTotal=0;
      var vtaRealTotal=0;
      for(var i=0;i<self.characters.length;i++){
        var cte=self.characters[i];

        var variacion=0;//=(parseFloat(cte.sale())/parseFloat(cte.vtaOriginal)-1)*100;
            vtaRealTotal+=parseFloat(cte.vtaOriginal);
        var txtPIXI=document.getElementById("var_pTag"+(i+1));
        /*

            txtPIXI.style.color="#27ad1b";
            if(variacion>-1){
            txtPIXI.style.color="#d82215";
          }else if(variacion<1&&variacion<-1){
            txtPIXI.style.color="#FFFFFF";
          }
        */


        txtPIXI.innerHTML=(Math.round(variacion))+"%";
        vtaTotal+=self.characters[i].sale();
      }
      var variacionTotal=0;//((vtaTotal/vtaRealTotal)-1)*100;
      var varTotal_p=document.getElementById("varVtaTotal");

      /*
      varTotal_p.style.color="#27ad1b";
      if(variacionTotal<0)
      varTotal_p.style.color="#d82215";
      */
      varTotal_p.innerHTML=numberWithCommas((variacionTotal).toFixed(0))+"%";
      document.getElementById("vtaTotal_pTag").innerHTML="$"+numberWithCommas((vtaTotal).toFixed(1));

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
          document.getElementById("var_pTag"+(cteSide+1)).innerHTML="0%";
          document.getElementById("ctes_numero"+cteSide).innerHTML=0;
          document.getElementById("cpa_pTag"+cteSide).innerHTML=0;
          document.getElementById("vta_pTag"+cteSide).innerHTML=0;
          document.getElementById("tc_pTag"+cteSide).innerHTML="0%";
          document.getElementById("varVtaTotal").innerHTML="";

          var vta=document.getElementById("vtaTotal_pTag");
          var a=Math.round(vta.innerHTML.replace(/[,$]/g, ''));
          var b=Math.round(self.characters[i].sale());

          if(a-b<0)
              {vta.innerHTML=0;}else{vta.innerHTML="$"+numberWithCommas(a-b)}


              self.characters.splice(i,1);
        }
    }

    /*
    var buttonContainer=self.app.stage;

    var continue_button=buttonContainer.getChildByName("continue_button");
    var continue_button_pressed=buttonContainer.getChildByName("continue_button_pressed");
        continue_button.visible=false;
        continue_button_pressed.visible=true;
   */

  }

  self.updateTotal=function(value,target){
      console.log("updating total")

      let vtaTotal=0,vtaTotalMMAA=0,CtesBuyTotal=0,CtesBuyTotalOriginal=0,ctesTotal=0;
      for(var i=0;i<self.characters.length;i++){

        //obtenemos la tasa de compra modificada por slider


        //Calculamos datos para cada personaje seleccionado
          var cte=self.characters[i];
              if(target==i){
                cte.tc=value;
                var tc=document.getElementById("tc_pTag"+target);
                    tc.innerHTML=((cte.tc).toFixed(1))+"%";
              }

              vtaTotalMMAA+=parseInt(cte.vtaMMAA);
              var vta=document.getElementById('vta_pTag'+i).innerHTML="$"+numberWithCommas(Math.round(cte.sale()));

              var variacion=(parseInt(cte.sale())/parseInt(cte.vtaOriginal)-1)*100;
              var txtPIXI=document.getElementById("var_pTag"+(i+1));
                  txtPIXI.style.color="#27ad1b";
              if(variacion<0)
              txtPIXI.style.color="#d82215";
              txtPIXI.innerHTML=(Math.round(variacion))+"%";
              vtaTotal+=cte.sale();

              CtesBuyTotal+=cte.tc/100*cte.countCtes;
              ctesTotal+=cte.countCtes;
              CtesBuyTotalOriginal+=cte.tcOriginal/100*cte.countCtes;


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
        debugger;
        if(variacionTotal<=-1)

          varTotal_p.style.color="#d82215";
          if(isNaN(variacionTotal)){
            variacionTotal=0;
          }
          varTotal_p.innerHTML=numberWithCommas(Math.round(variacionTotal))+"%";
          //varTotal_p.innerHTML=(variacionTotal)+"%";

          if(variacionTotal>=0 && variacionTotal<1 )
          varTotal_p.style.color="#ffffff";

        }


      var vta_total=(Math.round(TotalCPA*CtesBuyTotal));
      if(isNaN(vta_total)){
        vta_total=0;
      }

      document.getElementById("vtaTotal_pTag").innerHTML="$"+numberWithCommas(vta_total);
      console.log("vtaTotal: "+vta_total)

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
    var aplicacion=document.getElementById("aplicacion");
    var app=self.app.stage;
    var leftCent=((parseInt(aplicacion.parentNode.style.left)/100)*parseInt(screen.width))+(app.width/2);

    /*
    var white_arrow=document.createElement('DIV');
        white_arrow.setAttribute("id","white_arrow");
        white_arrow.setAttribute("class","white_arrow arrow_animation");
        aplicacion.appendChild(white_arrow);
    */


    var descript_txt=document.createElement('p')
        descript_txt.setAttribute("id","descript_txt");
        descript_txt.setAttribute("class","question0");
        descript_txt.innerHTML="Ahora, ya que entendemos como está compuesto el Estado de Resultados de Cliente de Coppel (Indicadores de venta y perfiles de clientes) pasamos al siguiente bloque, en donde vamos a simular con datos reales como se comportan cada uno de los perfiles de clientes."
        //descript_txt.setAttribute("style","position: absolute;top: 30%;left: 25%;font-size: "+factorScreen(22)+"px;font-family: roboto-black;color: #FFFFFF;width: 50%;text-align: center;display: inline-block;");
        aplicacion.appendChild(descript_txt);



    var leftCent=(parseInt(aplicacion.clientWidth)/2);
    var aplicacion=document.getElementById("aplicacion");
    var title=document.createElement('p')
        title.setAttribute("class","title");
        title.innerHTML="Estado de Resultados de Clientes"
        title.style.top=self.app.screen.height * 0.05+"px";
        aplicacion.appendChild(title);
        title.style.left=(leftCent-(title.clientWidth/2))+"px";

        var subtitle=document.createElement('p')
                subtitle.setAttribute("id","subTitle");
                subtitle.setAttribute("class","subTitle");
                subtitle.innerHTML="Simulador"
                subtitle.style.top=self.app.screen.height * 0.13+"px";
                aplicacion.appendChild(subtitle);
                subtitle.style.left=(leftCent-(subtitle.clientWidth/2))+"px";


    var respuesta=document.createElement('p');
        respuesta.innerHTML="Responde correctamente y continua con la siguiente pregunta.!";
        respuesta.setAttribute("id","respuesta_p")
        respuesta.setAttribute("class","sin_margen")
        respuesta.setAttribute("style","font-size:"+factorScreen(30)+"px;position:absolute;top:70%;");
        respuesta.style.color="rgb(231,200,47)"
        document.getElementById("aplicacion").appendChild(respuesta);
        respuesta.style.left=leftCent-(respuesta.clientWidth/2)+"px";


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

        button_continue.on('pointertap',function(){

          descript_txt.classList.remove('question'+(index))
          //white_arrow.classList.remove("arrow_animation");
          index++;
          descript_txt.classList.add('question'+(index))

          descript_txt.innerHTML=bateria[index].pregunta;
          respuesta.innerHTML="Responde correctamente para avanzar.!";

          //white_arrow.classList.add("arrow_animation2");
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


    descript_txt.innerHTML=bateria[index].pregunta;
    TweenMax.to(container_buttons,1,{pixi:{y:height*.2},onComplete:function(){
      var aciertos=0;
      var globos=document.getElementById("globosVdo");
      var cte_ptag=document.createElement('p')
          cte_ptag.setAttribute("id","p_tagCte");
          globos.appendChild(cte_ptag);
        for(var j=0;j<9;j++){
          var buttonOK=container_buttons.getChildByName("buttonOK"+j);
          buttonOK.visible=true;
          //
          //buttonOK.removeAllListeners();
          buttonOK.removeListener('pointertap')

          var button_pressed=container_buttons.getChildByName("button_pressed"+j);
          button_pressed.visible=false;
          button_pressed.removeAllListeners();
          buttonOK.on('pointertap',function(){


            this.visible=false;
            container_buttons.getChildByName("button_pressed"+this.numero).visible=true;
            if(bateria[index].botonOk[0]==this.numero||bateria[index].botonOk[1]==this.numero||bateria[index].botonOk[2]==this.numero){
              container_buttons.getChildByName("button_palomita"+this.numero).visible=true;
              //document.getElementById("respuesta_p").innerHTML=bateria[index].respuesta1;

               if(index==bateria.length-1){

                 var continue_button=self.app.stage.getChildByName("continue_button");
                 continue_button.visible=true;
                 continue_button.removeAllListeners();
                 continue_button.on('pointertap',function(){
                   self.remove_p_tags();
                   toSlide('simulador_global');});
                   circle6.style.backgroundColor = "white";
                   circle1.style.backgroundColor = "gray";
           		    circle2.style.backgroundColor = "gray";
                  circle3.style.backgroundColor = "gray";
           		    circle4.style.backgroundColor = "gray";
           		    circle5.style.backgroundColor = "gray";
           		    circle7.style.backgroundColor = "gray";

               }
               aciertos++;
               if(aciertos==3){
                 aciertos=0;
                 app.getChildByName("continue_button").visible=true;
                 app.getChildByName("continue_button_pressed").visible=false;}

            }else{
              //document.getElementById("respuesta_p").innerHTML=bateria[index].respuesta2;
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
  this.cpa=parseFloat(cpa);
  this.tc=parseFloat(tc);
  this.position=position;
  this.countCtes=parseInt(numCtes);
  this.vtaMMAA=vtaMMAA;
  this.vtaOriginal=parseFloat(vtaOriginal);
  this.tcOriginal=parseFloat(tc);
  this.sale=function(){

        return this.cpa*((this.tc)/100)*this.countCtes;
  };


}
