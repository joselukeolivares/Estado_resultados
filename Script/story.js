function story() {
	let self = {};
  self.frames;
	self.t;

	self.hideShowTxt=function(){

		var texts =  document.getElementsByClassName("intro");
				debugger;
				if(texts!=null)
				{
					for(var i=0;i<texts.length;i++){
						  if(texts[i].style.display=='none')
							{
								texts[i].style.display='block';
							}else{
								texts[i].style.display='none';
							}
					}
				}

	}

  self.removeElements = function () {

		        if(self.app.stage==null)
		           return false;

		         var app=self.app;
		         while(app.stage.getChildAt[0]) {
		           //console.log("Elemntos restantes: "+app.stage.children.length +" de la app de PIXI:Historia")
		           app.stage.removeChildAt(0); }



		       return self;
  };

  self.destroyApp = function () {

    self.hideShowTxt();
		console.log("Destroying the story...");
    if(self.app == null) return self;

		var child_video=self.app.stage.getChildByName("video_sprite");
		if(child_video!=null)
		child_video.texture.baseTexture.destroy();

    		self.app.destroy(true);

    return self;
  };

  self.createApp = function () {
    self.frames = [];
    let app = document.getElementById("aplicacion");
    self.app = new PIXI.Application(width, height, {transparent: true});
		self.app.renderer.backgroundColor = 0xFFFFFF;
		self.app.renderer.autoResize = true;
		self.app.renderer.plugins.interaction.moveWhenInside = true;

    var	Width =	self.width=self.app.screen.width;
    var Height = self.height=self.app.screen.height;
		self.escala_1=(self.height*.4)/950;
    self.escala_2=(self.height*.5)/950;

    app.appendChild(self.app.view);
		self.t=new Tink(PIXI,self.app.view);

    createSprite(self.app);

    return self;
  };

  function createSprite(app) {
/*
		try {
      PIXI.loader
        .add("assets/ui/bloque_2/interface.json")
        .add("assets/MONEDA DANDO VUELTAS (1)/spritesheet (2).json")
				.add('cliente_negro','assets/CTE NEGRITO LEVANTANDO LOS BRAZOS/CTE NEGRITO LEVANTANDO LOS BRAZOS/CTENEGROMANOSARRIBA.json')
        .load(setup);
    } catch(e) {
			console.log(e);

    }
		*/
		setup();
    function setup() {
			var loader_ctes=PIXI.loader;
			  debugger;

			let id = PIXI.loader.resources["assets/ui/bloque_2/interface.json"].textures;


      for(let i=1; i<=6; i++) {
        self.frames.push(PIXI.Texture.fromFrame("COIN"+i+".png"));
      }
			let coins = new PIXI.Container();
			app.stage.addChild(coins);
			for(let i = 0; i < 99; i++) {

				var p = i * (self.width/10);
				var q = i * (self.height/10);

				let coin;

				if(i%2==0){
					coin= new PIXI.spine.Spine(loader_ctes.resources.cliente_negro.spineData);
					coin.scale.set((self.height*.2)/950,(self.height*.2)/950);
					coin.interactive = true;

					//clientes_t[i].state.setAnimation(0,'walk',true);
					coin.on('mouseover',function(){


					  coin.state.setAnimation(0,'animtion0',false);
					});

				}else{
					coin = new PIXI.extras.AnimatedSprite(self.frames);
					coin.play();
					coin.animationSpeed = .1;
					coin.anchor.set(0.5);
					coin.scale.set(	self.escala_2,	self.escala_2);
					coin.interactive=true;

				}

				coin.x = (i % 11) * self.width*.1;
				coin.y =Math.floor(i / 11) * self.height*.1;
				coins.addChild(coin);
			}


			coins.x = (app.screen.width - coins.width) / 1;
			coins.y = (app.screen.height - coins.height) / 1;


	var texture = PIXI.Texture.fromImage('assets/1. ROMBO AZUL.png');

	var rombo = new PIXI.Sprite(texture);


					rombo.y = (self.app.screen.height / 6);
					rombo.scale.set((self.height*.40)/950,(self.height*.40)/950);



			coins.x = (app.screen.width - coins.width) / 1;
			coins.y = (app.screen.height - coins.height) / 1;

app.stage.addChild(rombo);
rombo.x = (rombo.parent.width/2)-(rombo.width/2);

var style = new PIXI.TextStyle({



	dropShadow: true,
	dropShadowAngle: 12.6,
	dropShadowColor: "#E7C82F",
	dropShadowDistance: 4,
	fill: "#2D5F96",
	fontFamily: "Roboto-Black",
  fontSize: screen.height * 35 / 880,
	lineHeight: 6,
	miterLimit: 0,
	stroke: "white",
	whiteSpace: "normal",
	wordWrapWidth: screen.width * 120 / 1420


});



if(document.getElementsByClassName('intro').length==0){

	$(function() {
	$('#main').append('<div class="title intro" align="center" style="width:'+rombo.width+'px;text-align:left;font-size:'+factorScreen(50)+'px;font-Family:roboto-regular;color:#FFFFFF;position: absolute;left:'+(rombo.x)+'px;top:'+(height*.02)+'px;text-shadow:'+factorScreen(5)+'px 0px #E7C82F;color:#2D5F96"><p style="margin:0px;">Estado de Resultados de Clientes</p></div>');

	$('#main').append('<div class="title intro" align="center" style="width:30%;text-align:left;font-size:'+factorScreen(40)+'px;font-Family:roboto-regular;color:#FFFFFF;position: absolute;left:'+(rombo.x+(rombo.width/2.5))+'px;top: '+rombo.y+'px;"><p>HISTORIA</p></div>');

	$('#main').append('<div class="intro" align="center" style="font-Family:roboto-regular;color:#FFFFFF;font-Size:'+factorScreen(16)+'px;position: absolute;left: '+(rombo.x+rombo.width/6)+'px;top:'+(rombo.y+rombo.width/8)+'px;width:'+(rombo.width/1.5)+'px;"><p>Los clientes representan el activo <strong>más importante</strong> para las empresas, en el siguiente proyecto queremos ayudarte a entender que los clientes son los que conforman y dan vida a la estructura de una organización.<br><br>Actualmente las empresas miden sus resultados a través de los <strong>estados<br>financieros</strong> que reflejan sólo el incremento en ventas de un periodo (ganancias monetarias / entradas y salidas de dinero a la caja).<br><br>Pero, ¿y qué pasa con los clientes? ¿Cuántos clientes se quedan con nosotros?<br><br>Hablar de clientes se vuelve un tema mucho más complejo, principalmente por el cambio en el estilo de vida de los clientes.<br><br>Un negocio que crece de manera exitosa no se basa solo en generar nuevos clientes, sino también en los que ya tiene. Deben estar lo suficientemente satisfechos como para seguir comprando.<br><br>Por lo que evaluar la <strong>pérdida</strong> y <strong>ganancia</strong> de <strong>clientes</strong> en la empresa se vuelve muy relevante para el futuro de la organización, además contar con la ayuda de diferentes <strong>indicadores de monitoreo</strong> que nos brinde información para la toma de decisiones en una estrategia enfocada al cliente. <br><br>El estado de resultados de clientes nos puede ayudar con esto.</p></div>');

	});

}else{
	self.hideShowTxt();
}



			var button_video_1=new PIXI.Sprite(PIXI.Texture.fromImage('assets/ui/bloque_2/ERC_video_1.png'));
			    button_video_1.scale.set(factorScreen(.8));
					button_video_1.x=width*.05;
					button_video_1.y=height*.9;



			let paused=new PIXI.Sprite(PIXI.Texture.fromImage('assets/ui/bloque_2/pause_play.png'));
			let next_block=new PIXI.Sprite(PIXI.Texture.fromImage('assets/ui/bloque_2/explorar_1.png'));
			let close=new PIXI.Sprite(PIXI.Texture.fromImage('assets/ui/bloque_2/close_video_2.png'));
			paused.position.set(width/2,height/2);
			paused.scale.set(factorScreen(.25));
			paused.anchor.set(.5,.5);
			paused.alpha=0;
			paused.name="paused_button";

			next_block.scale.set(factorScreen(.6));
			next_block.x=width*.9;

			next_block.y=height*.9;
			next_block.name="next_block";
			next_block.interactive = true;
			next_block.cursor = "pointer";
			app.stage.addChild(next_block);
			next_block.on("pointertap", function() {
				toSlide("indicators");
			});

			close.position.set(width*.98,height*.02);
			close.scale.set(.15,.15);
			close.anchor.set(.5,.5);
      close.interactive=true;
			close.buttonMode=true;
			close.name="close_video";
			close.on("pointertap", deleteVideo);



			let button_video=new PIXI.Container();
			button_video.addChild(button_video_1);
			button_video.draggable=true;
			button_video.interactive=true;
			button_video.buttonMode=true;






			button_video.on('pointertap',function(e){


				self.hideShowTxt();


				var texture=PIXI.Texture.fromVideo('assets/video/ESTADO DE RESULTADO.mp4');
				var videoSprite=new PIXI.Sprite(texture);
				    videoSprite.width=self.width;
						videoSprite.height=self.height;
            videoSprite.interactive=true;
	  				videoSprite.buttonMode=true;
						videoSprite.name="video_sprite"
		  			videoSprite.on('pointertap',pause);

          videoSprite.texture.baseTexture.source.onended=
					function(){
						self.hideShowTxt();
							app.stage.removeChild(videoSprite);
					};
    				app.stage.addChild(videoSprite);
						app.stage.addChild(paused);
						app.stage.addChild(close);

			});



			app.stage.addChild(button_video);

			function pause(){
				 var source=this.texture.baseTexture.source;

			 if(source.paused){
				 source.play();
				 TweenMax.to(paused,2,{pixi:{alpha:0}});
			 }else{
				 source.pause();
				 TweenMax.to(paused,2,{pixi:{alpha:.9}});
			 }

		}

		function deleteVideo(){

      self.hideShowTxt();
			var child_video=app.stage.getChildByName("video_sprite");
			var child_close=app.stage.getChildByName("close_video");
			var paused_button=app.stage.getChildByName("paused_button");
			debugger;
			child_video.texture.baseTexture.destroy();

			app.stage.removeChild(child_close);
		  app.stage.removeChild(child_video);
			app.stage.removeChild(paused_button);

		}




    }
  }
  return self;
}
