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
    //console.log(app.stage.getChildAt(0));
    var Loader=PIXI.loader;
    let door1 = new PIXI.Sprite(Loader.resources["assets/singleDoor.png"].texture);
    let background= new PIXI.Sprite(Loader.resources["assets/background_coppel.png"].texture);
    let storeEntrance = new PIXI.Sprite(Loader.resources["assets/coppel.png"].texture);
    //let door1 = new PIXI.Sprite(PIXI.Texture.fromImage("assets/singleDoor.png"));
    let door2 = new PIXI.Sprite(Loader.resources["assets/singleDoor.png"].texture);
    app.stage.addChild(background);
    app.stage.addChild(door1);
    app.stage.addChild(door2);
    app.stage.addChild(storeEntrance);

    var escala = (self.height * .4) / 950;

    background.x = app.screen.width / 2;
    background.y = app.screen.height / 1.52;
    background.anchor.set(0.5, 0.5);
    background.name = "background";
    background.scale.set(escala, escala);

    storeEntrance.scale.set(escala, escala);
    storeEntrance.x = app.screen.width / 2 - storeEntrance.width / 2;
    storeEntrance.y = app.screen.height / 14;
    //storeEntrance.anchor.set(0.5, 0.5);




    door1.scale.set(escala);
    door2.scale.set(escala);
    door1.x = storeEntrance.x+(storeEntrance.width/2)-door1.width;
    door2.x =  door1.x+door1.width;
    door1.y = storeEntrance.y+(storeEntrance.height)-door1.height;
    door2.y = door1.y;



    background.interactive = true;
    background.buttonMode = true;

    background
      .on("pointerover", onDoorsOver)
      .on("pointerout", onDoorsOut);

    function onDoorsOver() {
      TweenMax.to(door1, 1.3, {x: door1.x-door1.width, onComplete: tweenCompleted});
      TweenMax.to(door2, 1.3, {x: door2.x+door2.width});
    }

    function onDoorsOut() {
      TweenMax.to(door1, 1, {x:  storeEntrance.x+(storeEntrance.width/2)-door1.width});
      TweenMax.to(door2, 1, {x: storeEntrance.x+(storeEntrance.width/2)});
    }

    function tweenCompleted() {
      TweenMax.to([storeEntrance, door1, door2, background], 1, {pixi: {alpha: 0}, onComplete: fadeCompleted});
    }

    function fadeCompleted() {
      self.removeElements();
      app.stage.removeChild(app.stage.getChildByName("background"));

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
