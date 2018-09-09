function story() {
	let self = {};
  self.frames;
  self.removeElements = function () {
    if(self.app.stage == null) return false;

    let app = self.app;
    while(app.stage.children[0]) {
      app.stage.removeChild(app.stage.children[0]);
    }

    return self;
  };

  self.destroyApp = function () {
    console.log("Destroying the story...");
    if(self.app == null) return self;

    self.app.destroy(true);
    let canvas = document.getElementsByTagName("canvas");
    let parent = document.getElementById("aplicacion");
    parent.removeChild(canvas[0]);

    return self;
  };

  self.createApp = function () {
    self.frames = [];
    let app = document.getElementById("aplicacion");
    self.app = new PIXI.Application(width, height, {transparent: true});
		self.app.renderer.backgroundColor = 0xFFFFFF;
		self.app.renderer.view.style.position = "absolute";
		self.app.renderer.view.style.display = "block";
		self.app.renderer.autoResize = true;
		self.app.renderer.resize(screen.width, screen.height);
    //elf.app.view.style.width = app.width;
    //self.app.view.style.height = app.height;
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
				coin.scale.set(0.5, 0.5);
				coin.x = (i % 10) * 130;
				coin.y = Math.floor(i / 10) * 300;
				coins.addChild(coin);
			}

			coins.x = (app.screen.width - coins.width) / 2;
			coins.y = (app.screen.height - coins.height) / 2;

			let rombo = new PIXI.Sprite(id["rombo.png"]);
			rombo.anchor.set(0.5, 0.5);
			rombo.position.set(app.screen.width / 2, app.screen.height / 2);
			rombo.scale.set(0.3, 0.3);
			app.stage.addChild(rombo);
    }
  }
  return self;
}
