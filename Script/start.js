function start() {
  let self = {};

  self.destroyApp = function() {
    if(self.app == null) return self;
    self.app.destroy(true);

    return self;
  };



  self.createApp = function() {
    let appDiv = document.getElementById("aplicacion");
    self.app = new PIXI.Application(width, height, {transparent: true});
    self.width = self.app.screen.width;
    self.height = self.app.screen.height;

    self.app.view.style.width = appDiv.width;
    self.app.view.style.height = appDiv.height;

    appDiv.appendChild(self.app.view);


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

  function createSprite(app) {
    var Loader=PIXI.loader;
    let door1=new PIXI.Sprite(Loader.resources["assets/singleDoor.png"].texture);
    console.log(door1.width);
    

    let background= new PIXI.Sprite(PIXI.Texture.fromImage("assets/background_coppel.png"));
    let storeEntrance = new PIXI.Sprite(PIXI.Texture.fromImage("assets/coppel.png"));
    //let door1 = new PIXI.Sprite(PIXI.Texture.fromImage("assets/singleDoor.png"));
    let door2 = new PIXI.Sprite(PIXI.Texture.fromImage("assets/singleDoor.png"));
    app.stage.addChild(background);
    app.stage.addChild(door1);
    app.stage.addChild(door2);
    app.stage.addChild(storeEntrance);

    var escala = (self.height * .4) / 950;

    background.x = app.screen.width / 2;
    background.y = app.screen.height / 1.52;
    background.anchor.set(0.5, 0.5);
    background.scale.set(escala, escala);

    storeEntrance.x = app.screen.width / 2;
    storeEntrance.y = app.screen.height / 2;
    storeEntrance.anchor.set(0.5, 0.5);
    storeEntrance.scale.set(escala, escala);

    door1.anchor.set(0.5);
    door2.anchor.set(0.5);
    door1.x = app.screen.width / 2.35;
    door2.x = app.screen.width / 1.75;
    door1.y = app.screen.height / 1.5;
    door2.y = app.screen.height / 1.5;
    door1.scale.set(escala, escala);
    door2.scale.set(escala, escala);

    background.interactive = true;
    background.buttonMode = true;

    background
      .on("pointerover", onDoorsOver)
      .on("pointerout", onDoorsOut);

    function onDoorsOver() {
      TweenMax.to(door1, 1.3, {x: (app.screen.width * 62) / 220, onComplete: tweenCompleted});
      TweenMax.to(door2, 1.3, {x: (app.screen.width * 400) / 560});
    }

    function onDoorsOut() {
      TweenMax.to(door1, 1, {x: app.screen.width / 2.35});
      TweenMax.to(door2, 1, {x: app.screen.width / 1.75});
    }

    function tweenCompleted() {
      TweenMax.to([storeEntrance, door1, door2, background], 1, {pixi: {alpha: 0}, onComplete: fadeCompleted});
    }

    function fadeCompleted() {
      self.removeElements();

      try {
        shopping().build(app);
      } catch(e) {
        console.log(e);
        return e;
      }
    }
  }
  return self;
}
