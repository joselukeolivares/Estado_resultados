function conclusiones(){

var self = {};

self.createApp = function(){

  var app = document.getElementById("aplicacion");
  self.app = new PIXI.Application(width,height,{backgroundColor: 0xFFFFFF});
    app.appendChild(self.app.renderer.view);


    var Loader = PIXI.loader;



    var background = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_7/2 FONDO.png"].texture);

    background.x=self.app.screen.width/16;
    background.scale.set(self.app.screen.width*.25/950);
    self.app.stage.addChild(background);


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

    var subtitle=new PIXI.Text("conclusiones",{
      fontSize: screen.height * 24 / 880,
      fontFamily: "Roboto-Black",
      fill: "#FFFFFF"
    });
    subtitle.x=(self.app.screen.width/2.4);
    subtitle.y=(self.app.screen.height/10);

    self.app.stage.addChild(title);
     self.app.stage.addChild(subtitle);



      var box = document.createElement("div");
          box.innerHTML='aaaaaaaaaaaaaaaaaaaaaaa<br />bbbbbbbbbbbbbbbbbbbbbbb<br />cccccccccccccccccccc<br />dddddddddddddddddddddd<br />eeeeeeeeeeeeeeeeeee<br />fffffffffffffffffffffffffffffffffffff<br />gggggggggggggggggggg<br />hhhhhhhhhhhhhhhhhhhhhhh<br />iiiiiiiiiiiiiiiiiii<br />jjjjjjjjjjjjjjjjjjjj<br />kkkkkkkkkkkkkkkkkkkkkk';
          box.setAttribute("style","position:absolute;left: 50%;top: 55%;transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%);background:#ffffff;color : #ffffff;width : 39%;height : 39%;overflow : auto;color:#000000;font-Family:Roboto-bold;font-Size:2vw;overflow-x: hidden;");
          box.setAttribute("id","box");
          box.typeObj=1;
     var aplicacion=document.getElementById("aplicacion");
     aplicacion.appendChild(box);


     var contButton = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/Bloque_3/b-continue.png"));
     contButton.x = self.app.screen.width-175;
     contButton.y = self.app.screen.height-50;
     contButton.anchor.set(0.5);
     contButton.scale.set(0.6);
     contButton.interactive = true;
     contButton.buttonMode = true;

     self.app.stage.addChild(contButton);

     contButton
     .on("click",click);

     function click(){

             var node = document.getElementById("box");
                 node.parentNode.removeChild(node);

                  self.app.stage.removeChild(background);

                  self.app.stage.removeChild(title);

                  self.app.stage.removeChild(subtitle);

                 self.app.stage.removeChild(contButton);

                var Loader = PIXI.loader;


                var stars = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_7/EQUIPOCREADO FONDO.png"].texture);

                stars.scale.set(self.app.screen.width*.30/950);
                self.app.stage.addChild(stars);

                var creado=new PIXI.Text("CREADO POR",{
                  fontSize: screen.width * 35 / 880,
                  fontFamily: "Roboto-Black",
                  fill: "#175383",
                  dropShadow: true,
                  dropShadowColor: "#FFFFFF",
                  dropShadowDistance: 5,
                  dropShadowAngle: Math.PI / 20
                });
                creado.x=(self.app.screen.width/3);
              creado.y=(self.app.screen.height/1);

              self.app.stage.addChild(creado);

              var character_1 = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_7/EQUIPOCREADO 1.png"].texture);
              var character_2 = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_7/EQUIPOCREADO 2.png"].texture);
              var character_3 = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_7/EQUIPOCREADO 3.png"].texture);
              var character_4 = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_7/EQUIPOCREADO 4.png"].texture);
              var character_5 = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_7/EQUIPOCREADO 5.png"].texture);
              var character_6 = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_7/EQUIPOCREADO 6.png"].texture);
              var character_7 = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_7/EQUIPOCREADO 7.png"].texture);
              var character_8 = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_7/EQUIPOCREADO 8.png"].texture);



                   character_2.scale.set(self.app.screen.width*.25/950);
                   character_2.x=(self.app.screen.width/1);
                   character_2.y=(self.app.screen.width/7);
                   self.app.stage.addChild(character_2);

                   character_4.scale.set(self.app.screen.width*.25/950);
                   character_4.x=(self.app.screen.width/1);
                   character_4.y=(self.app.screen.width/7);
                   self.app.stage.addChild(character_4);


                   character_6.scale.set(self.app.screen.width*.25/950);
                   character_6.x=(self.app.screen.width/1);
                   character_6.y=(self.app.screen.width/7);
                   self.app.stage.addChild(character_6);


                   character_3.scale.set(self.app.screen.width*.25/950);
                   character_3.x=(self.app.screen.width/128);
                   character_3.y=(self.app.screen.width/3.5);
                   self.app.stage.addChild(character_3);


                   character_5.scale.set(self.app.screen.width*.25/950);
                   character_5.x=(self.app.screen.width/128);
                   character_5.y=(self.app.screen.width/3.5);
                   self.app.stage.addChild(character_5);



                   character_7.scale.set(self.app.screen.width*.25/950);
                   character_7.x=(self.app.screen.width/128);
                   character_7.y=(self.app.screen.width/3.5);
                   self.app.stage.addChild(character_7);

                   character_1.scale.set(self.app.screen.width*.25/950);
                   character_1.x=(self.app.screen.width/1);
                   character_1.y=(self.app.screen.width/4.5);
                   self.app.stage.addChild(character_1);


                   character_8.scale.set(self.app.screen.width*.25/950);
                   character_8.x=(self.app.screen.width/128);
                   character_8.y=(self.app.screen.width/4.5);
                   self.app.stage.addChild(character_8);


//twenns
                 TweenMax.to(creado,2, {x:self.app.screen.width/3,y:self.app.screen.height/24});

                 TweenMax.to(character_2,2, {x:self.app.screen.width/3.5,y:self.app.screen.width/7});
                 TweenMax.to(character_4,2, {x:self.app.screen.width/2.1,y:self.app.screen.width/7});
                 TweenMax.to(character_6,2, {x:self.app.screen.width/1.6,y:self.app.screen.width/7});
                 TweenMax.to(character_3,2, {x:self.app.screen.width/3.5,y:self.app.screen.width/3.5});
                 TweenMax.to(character_5,2, {x:self.app.screen.width/2.1,y:self.app.screen.width/3.5});
                 TweenMax.to(character_7,2, {x:self.app.screen.width/1.55,y:self.app.screen.width/3.5});
                 TweenMax.to(character_1,2, {x:self.app.screen.width/5.5,y:self.app.screen.width/4.5});
                 TweenMax.to(character_8,2, {x:self.app.screen.width/1.35,y:self.app.screen.width/4.5});



                  var text = document.createElement("div");
                  text.innerHTML="EDICIÓN DE IMÁGENES";
                  text.setAttribute("style","position:absolute;left: 50%;top: 100%;transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%);background:#ffffff;color : #ffffff;color:#483d8b;font-Family:Roboto-bold;font-Size:1vw;");
                  text.setAttribute("id","text");
                  text.typeObj=1;
                  var aplicacion=document.getElementById("aplicacion");
                  aplicacion.appendChild(text);

                  var text2 = document.createElement("div");
                  text2.innerHTML="Licencia: Photoshop (Crear  y editar imágenes)";
                  text2.setAttribute("style","position:absolute;left: 50%;top: 100%;transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%);background:#ffffff;color : #ffffff;color:#000000;font-Family:Roboto-bold;font-Size:.80vw;");
                  text2.setAttribute("id","text2");
                  text2.typeObj=1;
                  var aplicacion=document.getElementById("aplicacion");
                  aplicacion.appendChild(text2);

                  var text3 = document.createElement("div");
                  text3.innerHTML="EMPAQUETAR IMÁGENES";
                  text3.setAttribute("style","position:absolute;left: 50%;top: 100%;transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%);background:#ffffff;color : #ffffff;color:#483d8b;font-Family:Roboto-bold;font-Size:1vw;");
                  text3.setAttribute("id","text3");
                  text3.typeObj=1;
                  var aplicacion=document.getElementById("aplicacion");
                  aplicacion.appendChild(text3);

                  var text4 = document.createElement("div");
                  text4.innerHTML="Licencia: Texture Package (Crear sprites y atlas de imágenes)";
                  text4.setAttribute("style","position:absolute;left: 50%;top: 100%;transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%);background:#ffffff;color : #ffffff;color:#000000;font-Family:Roboto-bold;font-Size:.80vw;");
                  text4.setAttribute("id","text4");
                  text4.typeObj=1;
                  var aplicacion=document.getElementById("aplicacion");
                  aplicacion.appendChild(text4);

                  var text5 = document.createElement("div");
                  text5.innerHTML="BIBLIOTECA GRÁFICOS HTML";
                  text5.setAttribute("style","position:absolute;left: 50%;top: 100%;transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%);background:#ffffff;color : #ffffff;color:#483d8b;font-Family:Roboto-bold;font-Size:1vw;");
                  text5.setAttribute("id","text5");
                  text5.typeObj=1;
                  var aplicacion=document.getElementById("aplicacion");
                  aplicacion.appendChild(text5);

                  var text6 = document.createElement("div");
                  text6.innerHTML="Libre: Pixi.js (Graficación de imágenes en pantalla) ";
                  text6.setAttribute("style","position:absolute;left: 50%;top: 100%;transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%);background:#ffffff;color : #ffffff;color:#000000;font-Family:Roboto-bold;font-Size:.80vw;");
                  text6.setAttribute("id","text6");
                  text6.typeObj=1;
                  var aplicacion=document.getElementById("aplicacion");
                  aplicacion.appendChild(text6);

                  var text7 = document.createElement("div");
                  text7.innerHTML="ANIMACIÓN 2d y Manipulación de elementos HTML";
                  text7.setAttribute("style","position:absolute;left: 50%;top: 100%;transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%);background:#ffffff;color : #ffffff;color:#483d8b;font-Family:Roboto-bold;font-Size:1vw;");
                  text7.setAttribute("id","text7");
                  text7.typeObj=1;
                  var aplicacion=document.getElementById("aplicacion");
                  aplicacion.appendChild(text7);

                  var text8 = document.createElement("div");
                  text8.innerHTML="Libre: DragonBones(animacion2d) ";
                  text8.setAttribute("style","position:absolute;left: 50%;top: 100%;transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%);background:#ffffff;color : #ffffff;color:#000000;font-Family:Roboto-bold;font-Size:.80vw;");
                  text8.setAttribute("id","text8");
                  text8.typeObj=1;
                  var aplicacion=document.getElementById("aplicacion");
                  aplicacion.appendChild(text8);

                  var text9 = document.createElement("div");
                  text9.innerHTML="licencia: GreenSock (manipulacion eficiente de elementos HTML) ";
                  text9.setAttribute("style","position:absolute;left: 50%;top: 100%;transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%);background:#ffffff;color : #ffffff;color:#000000;font-Family:Roboto-bold;font-Size:.80vw;");
                  text9.setAttribute("id","text9");
                  text9.typeObj=1;
                  var aplicacion=document.getElementById("aplicacion");
                  aplicacion.appendChild(text9);

                  var text10 = document.createElement("div");
                  text10.innerHTML="DESARROLLO PÁGINAS WEB";
                  text10.setAttribute("style","position:absolute;left: 50%;top: 100%;transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%);background:#ffffff;color : #ffffff;color:#483d8b;font-Family:Roboto-bold;font-Size:1vw;");
                  text10.setAttribute("id","text10");
                  text10.typeObj=1;
                  var aplicacion=document.getElementById("aplicacion");
                  aplicacion.appendChild(text10);

                  var text11 = document.createElement("div");
                  text11.innerHTML="Libre: HTML5 y JavaScript (Web), CSS (Hojas de estilo),JQuery. ";
                  text11.setAttribute("style","position:absolute;left: 50%;top: 100%;transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%);background:#ffffff;color : #ffffff;color:#000000;font-Family:Roboto-bold;font-Size:.80vw;");
                  text11.setAttribute("id","text11");
                  text11.typeObj=1;
                  var aplicacion=document.getElementById("aplicacion");
                  aplicacion.appendChild(text11);


                TweenMax.to(text,2, {left:self.app.screen.width/2,top:self.app.screen.width/2.5});
                  TweenMax.to(text2,1.9, {left:self.app.screen.width/2,top:self.app.screen.width/2.4});
                    TweenMax.to(text3,1.8, {left:self.app.screen.width/2,top:self.app.screen.width/2.3});
                      TweenMax.to(text4,1.7, {left:self.app.screen.width/2,top:self.app.screen.width/2.2});
                        TweenMax.to(text5,1.6, {left:self.app.screen.width/2,top:self.app.screen.width/2.1});
                          TweenMax.to(text6,1.5, {left:self.app.screen.width/2,top:self.app.screen.width/2});
                            TweenMax.to(text7,1.4, {left:self.app.screen.width/2,top:self.app.screen.width/1.9});
                              TweenMax.to(text8,1.3, {left:self.app.screen.width/2,top:self.app.screen.width/1.85});
                                TweenMax.to(text9,1.2, {left:self.app.screen.width/2,top:self.app.screen.width/1.8});
                                  TweenMax.to(text10,1.1, {left:self.app.screen.width/2,top:self.app.screen.width/1.7});
                                    TweenMax.to(text11,1, {left:self.app.screen.width/2,top:self.app.screen.width/1.65});




       }
      return self;
     }

     self.updateTotal=function(){

     };


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



return self;
}
