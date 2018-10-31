function segmentacion(){
let self = {};

self.destroyApp = function() {
var tags_div=document.getElementsByClassName('tags_div');

  while(tags_div.length!=0) {
    //console.log("Elemntos restantes: "+app.stage.children.length +" de la app de PIXI:Historia")
    tags_div[0].parentNode.removeChild(tags_div[0]); }


  jQuery(document).ready(function($){

    var $startAnim = $("#start-anim");
    var $exitAnim = $("#exit-anim");
    var $demoText = $("#gsap-anim-text-1");
    var $postTitleText = $("#post-title-text");

    startAnimation2();
    function startAnimation2(){
        TweenLite.set($startAnim, {autoAlpha:0});
        TweenMax.staggerFromTo( $demoText.find("span"), 0.09, {autoAlpha:1, scale:1}, {autoAlpha:0, scale:2}, 0.001, reset2);
        TweenMax.staggerFromTo( $postTitleText.find("span"), 0.09, {autoAlpha:1, scale:1}, {autoAlpha:0, scale:2}, 0.001, reset2 );}

   function reset2(){
       TweenMax.to($demoText, 1, {autoAlpha:0});
       TweenMax.to($postTitleText, 1, {autoAlpha:0});}

  });

  if ( document.getElementById('contenedor') ){

document.body.removeChild(contenedor);

}

if ( document.getElementById('contenedor_2') ){

document.body.removeChild(contenedor_2);

}
  if(self.app == null) return self;
  self.app.destroy(true);

  return self;
};



self.createApp = function(appDiv) {
  let app = document.getElementById("aplicacion");
  self.app = new PIXI.Application(width, height, {backgroundColor: 0x175383});
  self.width = self.app.screen.width;
  self.height = self.app.screen.height;
  self.app.view.style.width = self.width;
  self.app.view.style.height = self.height;
  self.app.renderer.plugins.interaction.moveWhenInside = true;

  app.appendChild(self.app.view);

  createSprite(self.app);



  return self;
};

self.removeElements = function() {
  if(self.app.stage == null) return false;
  let app = self.app;

  while(app.stage.getChildAt[0]) {
     app.stage.removeChildAt(0);
  }

  return self;
};


function createSprite(app){

  var style = new PIXI.TextStyle({

  	dropShadow: true,
  	dropShadowAngle: 12.6,
  	dropShadowColor: "#E7C82F",
  	dropShadowDistance: 4,
  	fill: "#2D5F96",
  	fontFamily: "Arial Black",
    fontSize: screen.height * 40 / 880,
  	lineHeight: 6,
  	miterLimit: 0,
  	stroke: "white",
  	whiteSpace: "normal",
  	wordWrapWidth: screen.width * 120 / 1420


  });

  var style_alter = new PIXI.TextStyle({

    dropShadow: true,
    dropShadowAngle: 12.6,
    dropShadowColor: "#000000",
    dropShadowDistance: 4,
    fill: "#FFFFFF",
    fontFamily: "Arial Black",
    fontSize: screen.height * 40 / 880,
    lineHeight: 6,
    miterLimit: 0,
    stroke: "white",
    whiteSpace: "normal",
    wordWrapWidth: screen.width * 120 / 1420


  });
   var text_titulo = new PIXI.Text('Estado de resultados de clientes', style_alter);
    text_titulo.x=(self.app.screen.width*200)/950;
  	text_titulo.y=(self.app.screen.height*48)/950;

  	app.stage.addChild(text_titulo);

    var style_2 = new PIXI.TextStyle({


    	fill: "#175383",
    	fontFamily: "Arial Black",
      fontSize: screen.height * 24 / 880,
    	lineHeight: 6,
    	miterLimit: 0,
    	stroke: "white",
    	whiteSpace: "normal",
    	wordWrapWidth: screen.width * 120 / 1420


    });


    var style_2_alter = new PIXI.TextStyle({


    	fill: "#FFFFFF",
    	fontFamily: "Arial Black",
      fontSize: screen.height * 24 / 880,
    	lineHeight: 6,
    	miterLimit: 0,
    	stroke: "white",
    	whiteSpace: "normal",
    	wordWrapWidth: screen.width * 120 / 1420


    });
     var text_titulo_2 = new PIXI.Text('Perfil de clientes', style_2_alter);
      text_titulo_2.x=self.app.screen.width/2.5;
    	text_titulo_2.y=self.app.screen.height/8.5;

    	app.stage.addChild(text_titulo_2);

      var contButton = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/Bloque_3/b-continue.png"));
      contButton.x = self.app.screen.width-100;
      contButton.y = self.app.screen.height-50;
      contButton.anchor.set(0.5);
      contButton.scale.set(factorScreen(0.6));
      contButton.interactive = true;
      contButton.buttonMode = true;


      app.stage.addChild(contButton);


    var Loader = PIXI.loader;
     var background  = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/LEVANTANDO_LA_ MANO.png"].texture);
     background.scale.set(self.app.screen.width*.40/950);
     background.y = self.app.screen.height/4;
     background.x = self.app.screen.height/16;
     app.stage.addChild(background);


      contButton
      .on("click",click);


      if ( !document.getElementById('contenedor') ){

        var contenedor = document.createElement("DIV");
         contenedor.setAttribute("id","contenedor");
         contenedor.setAttribute("style","height: 40%;width: 36%;position: absolute;left:"+(self.app.view.width/2)+"px;top: 25%;");
         document.body.appendChild(contenedor);
         debugger;

           var x = document.createElement("DIV");
           var br= document.createElement("br");
           x.setAttribute("id","gsap-anim-text-1");
           var t = document.createTextNode("Con el objetivo de profundizar en el estudio y análisis de nuestros  clientes, se crearon perfiles en base al ciclo de vida del cliente.        Esto nos ayudara a monitorear y crear estrategias especializadas  para cada tipo de cliente Coppel.");
           x.appendChild(t);
           document.body.appendChild(x);
           contenedor.appendChild(x);

}

    if ( !document.getElementById('contenedor_2') ){

           var contenedor_2 = document.createElement("DIV");
            contenedor_2.setAttribute("id","contenedor_2");
            debugger;
            contenedor_2.setAttribute("style","word-break: keep-all;width:40%;position: absolute;right:0%;top:"+(parseInt(contenedor.style.top)+(parseInt(contenedor.style.height)/2))+"%;");
            document.body.appendChild(contenedor_2);


           var y = document.createElement("DIV");
           y.setAttribute("id","post-title-text");
           var s = document.createTextNode("¡Acompáñame a conocer a nuestros clientes...!");
           y.appendChild(s);
           document.body.appendChild(y);
           contenedor_2.appendChild(y);
}


          jQuery(document).ready(function($){
          var $startAnim = $("#start-anim");
          var $exitAnim = $("#exit-anim");
          var $demoText = $("#gsap-anim-text-1");
          var $postTitleText = $("#post-title-text");
          $demoText.html ( $demoText.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
          $postTitleText.html( $postTitleText.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
          //$startAnim.ready(startAnimation);
          //$startAnim.on("click", startAnimation);
          //$exitAnim.on("click", startAnimation2);
          startAnimation();
          function startAnimation(){
          TweenLite.set($startAnim, {autoAlpha:0});
          TweenMax.staggerFromTo( $demoText.find("span"), 0.09, {autoAlpha:0, scale:2}, {autoAlpha:1, scale:1}, 0.01, reset );
          TweenMax.staggerFromTo( $postTitleText.find("span"), 0.09, {autoAlpha:0, scale:2}, {autoAlpha:1, scale:1}, 0.09, reset );
          //TweenMax.staggerFromTo( $postTitleText.find("span"), 0.4, {autoAlpha:0, rotationX:-90, top:"-30px"}, {autoAlpha:1, rotationX:0, top:"0px"}, 0.1, reset );
        }

          function reset(){
          TweenMax.to($startAnim, 1, {autoAlpha:1});
        }

          });

          var i=0;

    function click(){

      app.stage.removeChild(background);

          i = i + 1;
          console.log(i);
        if(i==1){

          //app.renderer.backgroundColor = 0x175383;

             text_titulo = new PIXI.Text('Estado de resultados de clientes', style_alter);
              text_titulo.x=(self.app.screen.width*200)/950;
            	text_titulo.y=(self.app.screen.height*48)/950;

              //app.stage.addChild(text_titulo);

               text_titulo_2 = new PIXI.Text('Perfil de clientes', style_2_alter);
               text_titulo_2.x=self.app.screen.width/2.5;
             	 text_titulo_2.y=self.app.screen.height/8.5;

             	//app.stage.addChild(text_titulo_2);

       jQuery(document).ready(function($){

           var $startAnim = $("#start-anim");
           var $exitAnim = $("#exit-anim");
           var $demoText = $("#gsap-anim-text-1");
           var $postTitleText = $("#post-title-text");

           startAnimation2();
           function startAnimation2(){
               TweenLite.set($startAnim, {autoAlpha:0});
               TweenMax.staggerFromTo( $demoText.find("span"), 0.09, {autoAlpha:1, scale:1}, {autoAlpha:0, scale:2}, 0.0001, reset2);
               TweenMax.staggerFromTo( $postTitleText.find("span"), 0.09, {autoAlpha:1, scale:1}, {autoAlpha:0, scale:2}, 0.0001, reset2 );}

          function reset2(){
              TweenMax.to($demoText, 1, {autoAlpha:0});
              TweenMax.to($postTitleText, 1, {autoAlpha:0});}

         });


         document.body.removeChild(contenedor);
         document.body.removeChild(contenedor_2);

         var Loader = PIXI.loader;
         var ctesAtlas=PIXI.loader.resources['assets/ui/bloque_4/clientes_min/clientes_min.json'].textures;

         var cliente_nunca_entre15 = new PIXI.Sprite(ctesAtlas["4.-N-15 125X193.png"]);
         cliente_nunca_entre15.x = self.app.screen.width*.1;
         cliente_nunca_entre15.y = self.app.screen.height/6;
         //cliente_nunca_entre15.anchor.set(0.5);
         cliente_nunca_entre15.scale.set(factorScreen(.99));
         app.stage.addChild(cliente_nunca_entre15);
         var aplicacionDiv=document.getElementById('main');
         var mainDiv={};
             mainDiv.left=(parseFloat(aplicacionDiv.style.left)/100)*screen.width;
         var charDiv1=document.createElement('div');
             charDiv1.setAttribute("class","tags_div");
             charDiv1.setAttribute("style","color:rgb(174,108,178);position:absolute;width:200px;height:100px;top:"+cliente_nunca_entre15.y+"px;left:"+((mainDiv.left)+cliente_nunca_entre15.x+cliente_nunca_entre15.width)+"px;")
              debugger;
         var char1_p1=document.createElement('p');

             char1_p1.innerHTML="Nunca 0-15";
         var char1_p2=document.createElement('p');
                 char1_p2.innerHTML="Cliente sin primer compra, entrega de tarjeta hace 0-15 meses.";
              charDiv1.appendChild(char1_p1);
              charDiv1.appendChild(char1_p2);
         document.body.appendChild(charDiv1);


         var activo_sin_vencido = new PIXI.Sprite(ctesAtlas["6.-ASV 163X193.png"]);
         activo_sin_vencido.x = self.app.screen.width*.4;
         activo_sin_vencido.y = self.app.screen.height/6;
         //activo_sin_vencido.anchor.set(0.5);
         activo_sin_vencido.scale.set(factorScreen(.99));
         app.stage.addChild(activo_sin_vencido);

         var charDiv2=document.createElement('div');
             charDiv2.setAttribute("class","tags_div");
             charDiv2.setAttribute("style","color:rgb(73,160,78);position:absolute;width:200px;height:100px;top:"+activo_sin_vencido.y+"px;left:"+((mainDiv.left)+activo_sin_vencido.x+activo_sin_vencido.width)+"px;")
              debugger;
         var char2_p1=document.createElement('p');

             char2_p1.innerHTML="Activo Sin Vencido";
         var char2_p2=document.createElement('p');
                 char2_p2.innerHTML="Cliente con saldo en algunas de sus cuentas, sin saldo vencido.";
              charDiv2.appendChild(char2_p1);
              charDiv2.appendChild(char2_p2);
         document.body.appendChild(charDiv2);

         var cliente_saldado_entre15 = new PIXI.Sprite(ctesAtlas["8.-S-15 168X196.png"]);
         cliente_saldado_entre15.x = self.app.screen.width*.7;
         cliente_saldado_entre15.y = self.app.screen.height/6;
         //cliente_saldado_entre15.anchor.set(0.5);
         cliente_saldado_entre15.scale.set(factorScreen(.99));
         app.stage.addChild(cliente_saldado_entre15);

         var charDiv3=document.createElement('div');
             charDiv3.setAttribute("class","tags_div");
             charDiv3.setAttribute("style","color:rgb(45,154,191);position:absolute;width:200px;height:100px;top:"+cliente_saldado_entre15.y+"px;left:"+((mainDiv.left)+cliente_saldado_entre15.x+cliente_saldado_entre15.width)+"px;")
              debugger;
         var char3_p1=document.createElement('p');

             char3_p1.innerHTML="Saldado 0-15";
         var char3_p2=document.createElement('p');
                 char3_p2.innerHTML="Cliente que saldo su cuenta, y que no ha vuelto a comprar en un periodo de 0 a 15 meses.";
              charDiv3.appendChild(char3_p1);
              charDiv3.appendChild(char3_p2);
         document.body.appendChild(charDiv3);

         var cliente_nunca_mas15 = new PIXI.Sprite(ctesAtlas["5.-N+15 147X273.png"]);
         cliente_nunca_mas15.x = cliente_nunca_entre15.x;
         cliente_nunca_mas15.y = cliente_nunca_entre15.y+cliente_nunca_entre15.height*1.2;
         //cliente_nunca_mas15.anchor.set(0.5);
         cliente_nunca_mas15.scale.set(factorScreen(.8));
         app.stage.addChild(cliente_nunca_mas15);

         var charDiv4=document.createElement('div');
             charDiv4.setAttribute("class","tags_div");
             charDiv4.setAttribute("style","color:rgb(141,74,143);position:absolute;width:200px;height:100px;top:"+cliente_nunca_mas15.y+"px;left:"+((mainDiv.left)+cliente_nunca_entre15.x+cliente_nunca_entre15.width)+"px;")
              debugger;
         var char4_p1=document.createElement('p');

             char4_p1.innerHTML="Nunca +15";
         var char4_p2=document.createElement('p');
                 char4_p2.innerHTML="Cliente sin primera compra,entrega de tarjeta hace más de 15 meses.";
              charDiv4.appendChild(char4_p1);
              charDiv4.appendChild(char4_p2);
         document.body.appendChild(charDiv4);







         var activo_con_vencido=new PIXI.Sprite(ctesAtlas["7.-ACV 163X193.png"]);
         activo_con_vencido.x = activo_sin_vencido.x;
         activo_con_vencido.y = activo_sin_vencido.y+activo_sin_vencido.height*1.2;
         //activo_con_vencido.anchor.set(.5);
         activo_con_vencido.scale.set(factorScreen(.99));
         activo_con_vencido.interactive = true;
         activo_con_vencido.buttonMode = true;

         var charDiv5=document.createElement('div');
             charDiv5.setAttribute("class","tags_div");
             charDiv5.setAttribute("style","color:rgb(24,93,46);position:absolute;width:200px;height:100px;top:"+activo_con_vencido.y+"px;left:"+((mainDiv.left)+activo_sin_vencido.x+activo_sin_vencido.width)+"px;")
              debugger;
         var char5_p1=document.createElement('p');

             char5_p1.innerHTML="Activo con Vencido";
         var char5_p2=document.createElement('p');
                 char5_p2.innerHTML="Cliente con saldo en alguna de sus cuentas, con saldo vencido.";
              charDiv5.appendChild(char5_p1);
              charDiv5.appendChild(char5_p2);
         document.body.appendChild(charDiv5);


         var x=44;
         var y=44;
         var w=140;
         var h=30;
         /*     var x=.18;
              var y=.15;
              var w=.52;
              var h=.20;*/
         activo_con_vencido.hitArea = new PIXI.Rectangle(x,y,w,h);
        console.log("rect: WH")
        console.log(activo_con_vencido.width,activo_con_vencido.height);
        console.log(activo_con_vencido.hitArea.width,activo_con_vencido.hitArea.height);
        console.log("cliente XY")
        console.log(activo_con_vencido.x,activo_con_vencido.y);
        console.log(activo_con_vencido.hitArea.x,activo_con_vencido.hitArea.y);



        var rect=new PIXI.Graphics();
            rect.lineStyle(2,0x4286f4,1)
            rect.beginFill("red")
            rect.drawRect(x,y,w,h)
            rect.name="rectVisible";
            rect.endFill()


            var rect2=new PIXI.Graphics();
                rect2.lineStyle(2,0x4286f4,1)
                rect2.beginFill("red")
                rect2.drawRect(0,0,50,50)
                //rect2.scale.set(self.app.screen.width*.45/866)
                rect2.endFill()

         //app.stage.addChild(rect);
         app.stage.addChild(activo_con_vencido);
         //activo_con_vencido.addChild(rect2);

/*
         activo_con_vencido.addChild(rect);
         var rect_1=activo_con_vencido.getChildByName("rectVisible");
         console.log("rect")
         console.log(rect_1.x,rect_1.y);
         console.log(rect_1.width,rect_1.height);
*/


        activo_con_vencido.on('pointermove',MouseOver)
          activo_con_vencido.on('pointerout',MouseOut);
/*
          var globo_1 = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/Bloque_4/clientes/globo1.png"));
          globo_1.x = self.app.screen.width/1.89;
          globo_1.y = self.app.screen.height/1.666;
          globo_1.anchor.set(0.5);
          globo_1.scale.set(self.app.screen.width*.45/950);
          app.stage.addChild(globo_1);

          var globo_2 = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/Bloque_4/clientes/globo2.png"));
          globo_2.x = self.app.screen.width/1.84;
          globo_2.y = self.app.screen.height/1.666;
          globo_2.anchor.set(0.5);
          globo_2.scale.set(self.app.screen.width*.45/950);
          app.stage.addChild(globo_2);

          var globo_3 = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/Bloque_4/clientes/globo3.png"));
          globo_3.x = self.app.screen.width/1.785;
          globo_3.y = self.app.screen.height/1.666;
          globo_3.anchor.set(0.5);
          globo_3.scale.set(self.app.screen.width*.45/950);
          app.stage.addChild(globo_3);

          var globo_4 = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/Bloque_4/clientes/globo4.png"));
          globo_4.x = self.app.screen.width/1.73;
          globo_4.y = self.app.screen.height/1.666;
          globo_4.anchor.set(0.5);
          globo_4.scale.set(self.app.screen.width*.45/950);
          app.stage.addChild(globo_4);
*/debugger;




         var clientes_saldado_mas15 = new PIXI.Sprite(ctesAtlas["9.-S+15 180X196.png"]);
         clientes_saldado_mas15.x = cliente_saldado_entre15.x;
         clientes_saldado_mas15.y = cliente_saldado_entre15.y+cliente_saldado_entre15.height*1.2;
         //clientes_saldado_mas15.anchor.set(0.5);
         clientes_saldado_mas15.scale.set(factorScreen(.99));
         app.stage.addChild(clientes_saldado_mas15);

         var charDiv6=document.createElement('div');
             charDiv6.setAttribute("class","tags_div");
             charDiv6.setAttribute("style","color:rgb(11,84,92);position:absolute;width:200px;height:100px;top:"+clientes_saldado_mas15.y+"px;left:"+((mainDiv.left)+cliente_saldado_entre15.x+cliente_saldado_entre15.width)+"px;")
              debugger;
         var char6_p1=document.createElement('p');

             char6_p1.innerHTML="Saldado +15";
         var char6_p2=document.createElement('p');
                 char6_p2.innerHTML="Cliente que ha saldado sus cuentas y no ha vuelto comprar en un periodo de más de 15 meses.";
              charDiv6.appendChild(char6_p1);
              charDiv6.appendChild(char6_p2);
         document.body.appendChild(charDiv6);

         var generados = new PIXI.Sprite(ctesAtlas["1.-G 134x193.png"]);
         generados.x = cliente_nunca_entre15.x;
         generados.y = activo_con_vencido.y+activo_con_vencido.height*1.2;
         //generados.anchor.set(0.5);
         generados.scale.set(factorScreen(.99));
         app.stage.addChild(generados);

         var charDiv7=document.createElement('div');
             charDiv7.setAttribute("class","tags_div");
             charDiv7.setAttribute("style","color:rgb(229,172,57);position:absolute;width:200px;height:100px;top:"+generados.y+"px;left:"+((mainDiv.left)+cliente_nunca_entre15.x+cliente_nunca_entre15.width)+"px;")
              debugger;
         var char7_p1=document.createElement('p');

             char7_p1.innerHTML="Generados";
         var char7_p2=document.createElement('p');
                 char7_p2.innerHTML="Generación de clientes nuevos en un periodo (Tarjetas entregadas).";
              charDiv7.appendChild(char7_p1);
              charDiv7.appendChild(char7_p2);
         document.body.appendChild(charDiv7);

         var z = new PIXI.Sprite(ctesAtlas["2.-Z 135X193.png"]);
         z.x = activo_con_vencido.x
         z.y = generados.y
         //z.anchor.set(0.5);
         z.scale.set(factorScreen(.99));
         app.stage.addChild(z);

         var charDiv8=document.createElement('div');
             charDiv8.setAttribute("class","tags_div");
             charDiv8.setAttribute("style","color:rgb(204,29,65);position:absolute;width:200px;height:100px;top:"+z.y+"px;left:"+((mainDiv.left)+activo_sin_vencido.x+activo_sin_vencido.width)+"px;")
              debugger;
         var char8_p1=document.createElement('p');

             char8_p1.innerHTML="Clientes Z";
         var char8_p2=document.createElement('p');
                 char8_p2.innerHTML="Cliente en cuenta perdida.";
              charDiv8.appendChild(char8_p1);
              charDiv8.appendChild(char8_p2);
         document.body.appendChild(charDiv8);

         var quebrantados = new PIXI.Sprite(ctesAtlas["3.-Q 143X193.png"]);
         quebrantados.x = clientes_saldado_mas15.x;
         quebrantados.y = generados.y
         //quebrantados.anchor.set(0.5);
         quebrantados.scale.set(factorScreen(.99));
         app.stage.addChild(quebrantados);

         var charDiv9=document.createElement('div');
             charDiv9.setAttribute("class","tags_div");
             charDiv9.setAttribute("style","color:rgb(159,16,29);position:absolute;width:200px;height:100px;top:"+quebrantados.y+"px;left:"+((mainDiv.left)+cliente_saldado_entre15.x+cliente_saldado_entre15.width)+"px;")
              debugger;
         var char9_p1=document.createElement('p');

             char9_p1.innerHTML="Quebrantados";
         var char9_p2=document.createElement('p');
                 char9_p2.innerHTML="Clientes vendidos por Bancoppel.";
              charDiv9.appendChild(char9_p1);
              charDiv9.appendChild(char9_p2);
         document.body.appendChild(charDiv9);



    var un_vencido = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/globos/1 VDO.png"].texture);
    var dos_vencido = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/globos/2 VDO.png"].texture);
    var tres_vencido = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/globos/3 VDO.png"].texture);
    var cuatro_vencido = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/globos/4 VDO.png"].texture);

           function MouseOver(event){

              var uno = activo_con_vencido.hitArea.width/4;
              var dos = activo_con_vencido.hitArea.width/3;
              var tres = activo_con_vencido.hitArea.width/2;
              var cuatro = activo_con_vencido.hitArea.width/1;


        var pos = event.data.getLocalPosition(activo_con_vencido);
         console.log('x:' + pos.x + 'y:' + pos.y);

         if(pos.x <= 69.7949921752737){

             un_vencido.x = activo_sin_vencido.x;
             un_vencido.y = self.app.screen.height/1.5;
             //un_vencido.anchor.set(0.5);
             un_vencido.scale.set(factorScreen(.99));
             app.stage.addChild(un_vencido);
             app.stage.removeChild(dos_vencido);
             app.stage.removeChild(tres_vencido);
             app.stage.removeChild(cuatro_vencido);

           }

         else if(pos.x <= 103.67605633802816){

           dos_vencido.x = self.app.screen.width/1.75;
           dos_vencido.y = self.app.screen.height/1.5;
           dos_vencido.anchor.set(0.5);
           dos_vencido.scale.set(self.app.screen.width*.25/950);
           app.stage.addChild(dos_vencido);
            app.stage.removeChild(un_vencido);
           app.stage.removeChild(tres_vencido);
           app.stage.removeChild(cuatro_vencido);



         }

         else if(pos.x <= 136.20187793427215){

           tres_vencido.x = self.app.screen.width/1.85;
           tres_vencido.y = self.app.screen.height/1.5;
           //tres_vencido.anchor.set(0.5);
           tres_vencido.scale.set(self.app.screen.width*.25/950);
           app.stage.addChild(tres_vencido);
           app.stage.removeChild(un_vencido);
           app.stage.removeChild(dos_vencido);
            app.stage.removeChild(cuatro_vencido);

         }

         else if(pos.x <= 183.63536776212834){

           cuatro_vencido.x = self.app.screen.width/1.9;
           cuatro_vencido.y = self.app.screen.height/1.5;
           //cuatro_vencido.anchor.set(0.5);
           cuatro_vencido.scale.set(self.app.screen.width*.25/950);
           app.stage.addChild(cuatro_vencido);
           app.stage.removeChild(un_vencido);
           app.stage.removeChild(dos_vencido);
           app.stage.removeChild(tres_vencido);

         }

     }
           function MouseOut(){

             app.stage.removeChild(un_vencido);
             app.stage.removeChild(dos_vencido);
             app.stage.removeChild(tres_vencido);
             app.stage.removeChild(cuatro_vencido);

           }


        }



        else if(i==2){

          jQuery(document).ready(function($){

            var $startAnim = $("#start-anim");
            var $exitAnim = $("#exit-anim");
            var $demoText = $("#gsap-anim-text-1");
            var $postTitleText = $("#post-title-text");

            startAnimation2();
            function startAnimation2(){
                TweenLite.set($startAnim, {autoAlpha:0});
                TweenMax.staggerFromTo( $demoText.find("span"), 0.09, {autoAlpha:1, scale:1}, {autoAlpha:0, scale:2}, 0.001, reset2);
                TweenMax.staggerFromTo( $postTitleText.find("span"), 0.09, {autoAlpha:1, scale:1}, {autoAlpha:0, scale:2}, 0.001, reset2 );}

           function reset2(){
               TweenMax.to($demoText, 1, {autoAlpha:0});
               TweenMax.to($postTitleText, 1, {autoAlpha:0});}

          });



                   toSlide("simulador");




        }

    }

}

return self;
}
