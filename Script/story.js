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
		//self.app.renderer.view.style.position = "absolute";
		//self.app.renderer.view.style.display = "block";
		self.app.renderer.autoResize = true;
		//self.app.renderer.resize(screen.width, screen.height);
    //elf.app.view.style.width = app.width;
    //self.app.view.style.height = app.height;
		self.width=self.app.screen.width;
		self.height=self.app.screen.height;
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
        .add("assets/ui/Bloque_2/coin.json")
				.add('cliente_negro','assets/ui/Bloque_3/cliente_negro.json')
        .load(setup);
    } catch(e) {
      setup();
    }
    function setup() {
			var loader_ctes=PIXI.loader;
			  debugger;

			let id = PIXI.loader.resources["assets/ui/Bloque_2/interface.json"].textures;


      for(let i=1; i<=6; i++) {
        self.frames.push(PIXI.Texture.fromFrame("coin_" + i +".png"));
      }
			let coins = new PIXI.Container();
			app.stage.addChild(coins);
			for(let i = 0; i < 30; i++) {
				let coin;
				if(i%2==0){
					coin= new PIXI.spine.Spine(loader_ctes.resources.cliente_negro.spineData);
					coin.scale.set((self.height*.07)/950,(self.height*.07)/950);
					coin.interactive = true;
					//clientes_t[i].state.setAnimation(0,'walk',true);
					coin.on('mouseover',function(){
					  coin.state.setAnimation(0,'happy',false);
					});
					coin.on('mouseout',function(){
						coin.state.setAnimation(0,'happy',false);
					});

				}else{
					coin = new PIXI.extras.AnimatedSprite(self.frames);
					coin.play();
					coin.animationSpeed = .1;
					coin.anchor.set(0.5);
					coin.scale.set(	self.escala_2,	self.escala_2);

				}

				coin.x = (i % 10) *self.width*.1;
				coin.y =Math.floor(i / 10) * self.height*.3;
				coins.addChild(coin);
			}

			coins.x = (app.screen.width - coins.width) / 2;
			coins.y = (app.screen.height - coins.height) / 2;

			let rombo = new PIXI.Sprite(id["rombo.png"]);
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

    }
  }
  return self;
}
