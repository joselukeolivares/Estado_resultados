function story() {
	let self = {};
  self.frames;
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
    console.log("Destroying the story...");
    if(self.app == null) return self;
    		self.app.destroy(true);

    return self;
  };

  self.createApp = function () {
    self.frames = [];
    let app = document.getElementById("aplicacion");
    self.app = new PIXI.Application(width, height, {transparent: true});
		self.app.renderer.backgroundColor = 0xFFFFFF;
		console.log(width,height);
		//self.app.renderer.view.style.position = "absolute";
		//self.app.renderer.view.style.display = "block";
		self.app.renderer.autoResize = true;
		//self.app.renderer.resize(screen.width, screen.height);
    //elf.app.view.style.width = app.width;
    //self.app.view.style.height = app.height;
var	Width =	self.width=self.app.screen.width;
var Height = self.height=self.app.screen.height;
		self.escala_1=(self.height*.4)/950;
    self.escala_2=(self.height*.5)/950;

    app.appendChild(self.app.view);
    createSprite(self.app);

    return self;
  };

  function createSprite(app) {
    try {
      PIXI.loader
        .add("assets/ui/Bloque_2/interface.json")
        .add("assets/MONEDA DANDO VUELTAS (1)/spritesheet (2).json")
				.add('cliente_negro','assets/CTE NEGRITO LEVANTANDO LOS BRAZOS/CTE NEGRITO LEVANTANDO LOS BRAZOS/CTENEGROMANOSARRIBA.json')
        .load(setup);
    } catch(e) {
      setup();
    }
    function setup() {
			var loader_ctes=PIXI.loader;
			  debugger;

			let id = PIXI.loader.resources["assets/ui/Bloque_2/interface.json"].textures;


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
					/*
					coin.on('mouseout',function(){
						coin.state.setAnimation(0,'unhappy',false);
					});
          */
				}else{
					coin = new PIXI.extras.AnimatedSprite(self.frames);
					coin.play();
					coin.animationSpeed = .1;
					coin.anchor.set(0.5);
					coin.scale.set(	self.escala_2,	self.escala_2);

				}

				coin.x = (i % 11) *self.width*.1;
				coin.y =Math.floor(i / 11) * self.height*.1;
				coins.addChild(coin);
			}



			coins.x = (app.screen.width - coins.width) / 1;
			coins.y = (app.screen.height - coins.height) / 1;
/*
			let rombo = new PIXI.Sprite(id["assets/1. ROMBO AZUL.png"]);
			rombo.anchor.set(0.5, 0.5);
			rombo.position.set(app.screen.width / 2, app.screen.height / 2);
			rombo.scale.set(	self.escala_1,	self.escala_1);
			app.stage.addChild(rombo);


			var txt_historia=new PIXI.Text("¿Qué importancia tiene cada cliente en la rentabilidad en la empresa? tanto el cliente nuevo que realiza su primera compra, los clientes antiguos que siguen comprando, clientes que liquidaron su cuenta y los que deben a la empresa (clientes morosos) La generación, compra, recompra y morosidad del cliente son temas de gran importancia. Medir el impacto que tiene cada tipo de cliente conlleva a un estudio y creación de indicadores que nos permiten evaluar la importancia de cada cliente.",{
				fontSize:(self.height*15)/500,
	       fill:'white',
	       fontWeight:'bold',
	       wordWrap: true,
	       wordWrapWidth: rombo.width/1.95
			});
			txt_historia.x=self.width/2.8;
			txt_historia.y=self.height*.15;
			app.stage.addChild(txt_historia);
*/
/*

*/


/*
	var style = new PIXI.TextStyle({
		dropShadow: true,
		dropShadowAngle: 12.6,
		dropShadowColor: "#E7C82F",
		dropShadowDistance: 4,
		fill: "#2D5F96",
		fontFamily: "Arial Black",
		fontSize: 50,
		lineHeight: 6,
		miterLimit: 0,
		stroke: "white",
		whiteSpace: "normal",
		wordWrapWidth: 120
	});

	var text_titulo = new PIXI.Text('Estado de resultados de clientes', style);
	 text_titulo.x=(self.width*200)/950;
	 text_titulo.y=(self.height*48)/950;
	 app.stage.addChild(text_titulo);

	 var texture = PIXI.Texture.fromImage('assets/500 X 500.png');

	 var rombo = new PIXI.Sprite(texture);

					 rombo.x = self.app.screen.width / 2;
					 rombo.y = (self.app.screen.height / 1.8);
					 rombo.anchor.set(0.5,0.5);
					 rombo.scale.set((self.height*.45)/950,(self.height*.45)/950);

	app.stage.addChild(rombo);


}

*/



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
 var text_titulo = new PIXI.Text('Estado de resultados de clientes', style);
  text_titulo.x=(self.width*200)/950;
	text_titulo.y=(self.height*48)/950;
	app.stage.addChild(text_titulo);

	var texture = PIXI.Texture.fromImage('assets/1. ROMBO AZUL.png');

	var rombo = new PIXI.Sprite(texture);

					rombo.x = self.app.screen.width / 2;
					rombo.y = (self.app.screen.height / 1.8);
					rombo.anchor.set(0.5,0.5);
					rombo.scale.set((self.height*.45)/950,(self.height*.45)/950);
debugger;


app.stage.addChild(rombo);


const style_2_2 = new PIXI.TextStyle({
	align: "center",
	fill: "white",
	fontSize: screen.height * 30 / 880,
	whiteSpace: "pre-line",
	wordWrap: true,
	wordWrapWidth: 440
});


const text_parrafo_1_1 = new PIXI.Text('HISTORIA',style_2_2);
text_parrafo_1_1.x=self.width*.43;
text_parrafo_1_1.y=self.height*.12;

const style_2 = new PIXI.TextStyle({
	align: "center",
	fill: "white",
	fontSize:  screen.height * 12 / 880,
	whiteSpace: "pre-line",
	wordWrap: true,
	wordWrapWidth: rombo.width * 420 / .42
});

console.log(rombo.width);

const text_parrafo_1 = new PIXI.Text('Los clientes representan el activo más importante para las empresas, en el siguiente proyecto queremos ayudarte a entender que los clientes son los que conforman y dan vida a la estructura de una organización.',style_2);
text_parrafo_1.x=self.width*.32;
text_parrafo_1.y=self.height/4.2;

const style_3 = new PIXI.TextStyle({
	align: "center",
	fill: "white",
	fontFamily:"Arial",
	fontSize: screen.height * 12 / 880,
	whiteSpace: "pre-line",
	wordWrap: true,
	wordWrapWidth: rombo.width * 420 / .42
});

const text_parrafo_2 = new PIXI.Text('Actualmente las empresas miden sus resultados a través de los estados financieros que reflejan sólo el incremento en ventas de un periodo (ganancias monetarias / entras y salidas de dinero a la caja).\n\n', style_3);
text_parrafo_2.x=self.width*.32;
text_parrafo_2.y=self.height/2.8;

const style_4 = new PIXI.TextStyle({
	align: "center",
	fill: "white",
	fontSize:  screen.height * 12 / 880,
	whiteSpace: "pre-line",
	wordWrap: true,
	wordWrapWidth: rombo.width * 440 / .42
});

const text_parrafo_3 = new PIXI.Text('Pero, ¿y qué pasa con los clientes? ¿Cuántos clientes se quedan con nosotros?', style_4);
text_parrafo_3.x=self.width*.32;
text_parrafo_3.y=self.height/2.15;

const text_parrafo_4 = new PIXI.Text('Hablar de clientes se vuelve un tema mucho más complejo, principalmente por el cambio en el estilo de vida de los clientes.', style_4);
text_parrafo_4.x=self.width*.32;
text_parrafo_4.y=self.height/1.95;

const text_parrafo_5 = new PIXI.Text('Un negocio que crece de manera exitosa no se basa solo en generar nuevos clientes, sino también en los que ya tiene. Deben estar lo suficientemente satisfechos como para seguir comprando.', style_4);
text_parrafo_5.x=self.width*.32;
text_parrafo_5.y=self.height/1.7;

const text_parrafo_6 = new PIXI.Text('Por lo que evaluar la pérdida y ganancia de clientes en la empresa se vuelve muy relevante para el futuro de la organización, además contar con la ayuda de diferentes indicadores de monitoreo que nos brinde información para la toma de decisiones en una estrategia enfocada al cliente.', style_4);
text_parrafo_6.x=self.width*.32;
text_parrafo_6.y=self.height/1.45;

const text_parrafo_7 = new PIXI.Text('El estado de resultados de clientes nos puede ayudar con esto.', style_4);
text_parrafo_7.x=self.width*.32;
text_parrafo_7.y=self.height/1.2;


text_parrafo_1_1.scale.set(1.2,1.2);
text_parrafo_1.scale.set(1.2,1.2);
text_parrafo_2.scale.set(1.2,1.2);
text_parrafo_3.scale.set(1.2,1.2);
text_parrafo_4.scale.set(1.2,1.2);
text_parrafo_5.scale.set(1.2,1.2);
text_parrafo_6.scale.set(1.2,1.2);
text_parrafo_7.scale.set(1.2,1.2);

app.stage.addChild(text_parrafo_1_1);
app.stage.addChild(text_parrafo_1);
app.stage.addChild(text_parrafo_2);
app.stage.addChild(text_parrafo_3);
app.stage.addChild(text_parrafo_4);
app.stage.addChild(text_parrafo_5);
app.stage.addChild(text_parrafo_6);
app.stage.addChild(text_parrafo_7);

    }
  }
  return self;
}
