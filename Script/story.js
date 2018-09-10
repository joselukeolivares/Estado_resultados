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
        .load(setup);
    } catch(e) {
      setup();
    }
    function setup() {
			let id = PIXI.loader.resources["assets/ui/Bloque_2/interface.json"].textures;
      for(let i=1; i<=6; i++) {
        self.frames.push(PIXI.Texture.fromFrame("coin_" + i +".png"));
      }
			let coins = new PIXI.Container();
			app.stage.addChild(coins);
			for(let i = 0; i < 30; i++) {
				let coin = new PIXI.extras.AnimatedSprite(self.frames);
				coin.play();
				coin.animationSpeed = .1;
				coin.anchor.set(0.5);
				coin.scale.set(	self.escala_2,	self.escala_2);
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
    }
  }
  return self;
}
