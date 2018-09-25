function indicators() {
  let self = {};

  self.destroyApp = function() {
    if(self.app == null) return self;
    self.app.destroy(true);
    return self;
  };

  self.createApp = function() {
    let appDiv = document.getElementById("aplicacion");
    self.app = new PIXI.Application(width, height, {backgroundColor: 0x175383});
    self.width = self.app.screen.width;
    self.height = self.app.screen.height;
    self.app.view.style.width = self.width;
    self.app.view.style.height = self.height;

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
    let scale1 = (self.height * 1) / 950;
    let scale2 = (self.height * 1.5) / 950;
    let tasaDeCompra = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/Bloque_3/tasa_de_compra.png"));
    let compraPromedio = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/Bloque_3/compra_promedio.png"));
    let venta = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/Bloque_3/venta.png"));

    tasaDeCompra.anchor.set(0.5);
    tasaDeCompra.x = app.screen.width / 5;
    tasaDeCompra.y = app.screen.height / 2;
    tasaDeCompra.scale.set(scale1);
    tasaDeCompra.interactive = true;
    //tasaDeCompra.buttonMode = true;
    app.stage.addChild(tasaDeCompra);

    compraPromedio.anchor.set(0.5);
    compraPromedio.x = app.screen.width / 2;
    compraPromedio.y = app.screen.height / 2;
    compraPromedio.scale.set(scale1);
    compraPromedio.interactive = true;
    //compraPromedio.buttonMode = true;
    app.stage.addChild(compraPromedio);

    venta.anchor.set(0.5);
    venta.x = app.screen.width / 1.25;
    venta.y = app.screen.height / 2;
    venta.scale.set(scale1);
    venta.interactive = true;
    //venta.buttonMode = true;
    app.stage.addChild(venta);

    let titleStyle = new PIXI.TextStyle({
      fontFamily: "Roboto",
      fontSize: 34,
      fontWeight: "bold",
      fill: "#FFFFFF",
      dropShadow: true,
      dropShadowColor: "#09102C",
      dropShadowDistance: 5,
      dropShadowAngle: Math.PI / 20
    });
    let title = new PIXI.Text("Estado de resultados de clientes", titleStyle);
    title.x = app.screen.width / 2;
    title.y = app.screen.height / 11;
    title.anchor.set(0.5);
    app.stage.addChild(title);

    let subTitle = new PIXI.Text("Indicadores principales", {
      fontFamily: "Roboto",
      fill: "#FFFFFF",
      fontSize: 22
    });
    subTitle.x = app.screen.width / 2;
    subTitle.y = app.screen.height / 7;
    subTitle.anchor.set(0.5);
    app.stage.addChild(subTitle);

    let intro = new PIXI.Container();
    let explanation = new PIXI.Text("El estado de resultados se conforma por una serie de indicadores los cuales monitorean la cantidad de clientes que compran, cuantos nos compran y el volmen de ventas",{
      fontFamily: "Roboto",
      fill: "#FFFFFF",
      fontSize: 18,
      wordWrap: true,
      wordWrapWidth: 750,
      align: "center"
    });
    explanation.x = app.screen.width / 2;
    explanation.y = app.screen.height / 3;
    explanation.anchor.set(0.5);
    intro.addChild(explanation);

    let letsGo = new PIXI.Text("¡Veamos como funciona!", {
      fontFamily: "Roboto",
      fill: "#FFFFFF",
      fontSize: 28,
    });
    letsGo.x = app.screen.width / 2;
    letsGo.y = app.screen.height / 1.3;
    letsGo.anchor.set(0.5);
    intro.addChild(letsGo);

    let contButton = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/Bloque_3/continue.png"));
    contButton.x = app.screen.width - 100;
    contButton.y = app.screen.height - 50;
    contButton.anchor.set(0.5);
    contButton.scale.set(0.6);
    contButton.interactive = true;
    contButton.buttonMode = true;
    intro.addChild(contButton);
    app.stage.addChild(intro);

    //Interactivity

    let stage = [];
    let scenes = [];
    let indiStyle = new PIXI.TextStyle({
      fontFamily: "Roboto",
      fill: "#FFFFFF",
      fontSize: 28
    });
    let indiStyleSub = new PIXI.TextStyle({
      fontFamily: "Roboto",
      fill: "#FFFFFF",
      fontSize: 18,
      wordWrap: true,
      wordWrapWidth: 350,
      align: "center"
    });
    let titles = ["Tasa de Compra", "Compra promedio", "Venta"];
    let subTitles = [["Indica el número total de Clientes que compra en un periodo determinado. Se calcula dividiendo el número de Clientes que compraron sobre el número de Clientes totales.",
                    "Imagine que a mes de Enero la empresa tiene 1,000 Clientes y para Julio nos han comprado el 50% de los Clientes (500). \n Interactuemos y veamos el efecto que tiene un aumento en la Tasa de Compra.",
                    "Ahora, en sentido contrario veamos el efecto al disminuir la Tasa de Compra."],
                    ["Indica la compra promedio que realizaron los Clientes (que compraron) en un perido. Se calcula dividiendo las ventas totales sobre el número de Clientes que compraron.",
                    "De los 500 Clietes que nos han comprado a mes de Julio, cada uno ha comprado en promedio $ 1,000.00 Pesos. \n Interactuemos y veamos el efecto que tienen al aumentar la Compra Promedio.",
                    "Ahora, en sentido contrario veamos el efecto al disminuir la Compra Promedio."],
                    ["Iiahjw asj whfwhe fhwfhwh wh wjfwoioeihf asuihqpwup aiodupaoi awpoidfuu pwoiefupasiodufpawoiu oapufupowi",
                    "fñlajeijoi oawijfeoiaslkdf woifj wofij   awoiijw fpajsdfi wijfajj djfpoqje faisdfwioq ´0ij aposijdf qp aspoief. \n ajskljdfwiojfowjefioasoñdifjwo dlfj  woijf qj jaowjef qj oije fioaeji.",
                    "lajeijf dkflwjf owiejfw o qu oawjfjoiwej foai qu qu eoifjjaoisjf dwue qeifj aoief uwe que que foaijsdofijw eufqpoei"]];
    //let interactive = [PIXI.Texture.fromImage("assets/ui/Bloque_3/tasa_50.png"),
      //                PIXI.Texture.fromImage("assets/ui/Bloque_3/arts.png")];
    try {
      PIXI.loader
          .add("assets/ui/Bloque_3/persons.json")
          .add("assets/ui/Bloque_3/arts.json")
          .add("assets/ui/Bloque_3/ventaCoins.json")
          .load(setup);
    } catch(e) {
      setup();
    }

    function setup() {
      let interactive = [PIXI.Texture.fromFrame("tasa_5.png"),
                          PIXI.Texture.fromFrame("tasa_5.png"),
                          PIXI.Texture.fromFrame("venta_50.png")];
      let incPercent = 60,
          decPercent = 40;

      for (let i = 0; i < 3; i++) {
        stage[i] = new PIXI.Container();
        stage[i].visible = false;
        stage[i].name = "stage " + i;
        let title = new PIXI.Text(titles[i], indiStyle);
        title.anchor.set(0.5);
        title.x = app.screen.width / 3.5;
        title.y = app.screen.height / 2;
        stage[i].addChild(title);

        for (let j = 0; j < 3; j++) {
          scenes[j] = new PIXI.Container();
          scenes[j].visible = false;
          scenes[j].name= "scene " + j;
          if(j == 0) scenes[j].visible = true;
          let sub = new PIXI.Text(subTitles[i][j], indiStyleSub);
          sub.anchor.set(0.5);
          sub.x = app.screen.width / 3.5;
          sub.y = app.screen.height / 1.5;
          scenes[j].addChild(sub);

          let things = new PIXI.Sprite(interactive[i]);
          things.scale.set(scale2);
          things.anchor.set(0.5);
          things.x = app.screen.width / 1.35;
          things.y = app.screen.height / 1.7;
          things.name = "thing_" + i;
          scenes[j].addChild(things);

          if(j == 1){
            var slider=document.getElementById("slider_0");
            let appDiv = document.getElementById("aplicacion");
            Slider(appDiv,scenes[j], i);
                //slider.style.display="block";
          }

          if (j == 1) {
            let increment = new PIXI.Graphics();
            increment.beginFill(0xFFFFFF);
            increment.drawCircle(0, 0, 15);
            increment.x = app.screen.width / 1.35;
            increment.y = app.screen.height / 1.3;
            increment.interactive = true;
            increment.cursor = "pointer";
            //scenes[j].addChild(increment);



            increment.on("click", function() {
              slide(incPercent, things);
              incPercent += 10;
            });

            let retry = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/Bloque_3/retry.png"));
            retry.anchor.set(0.5);
            retry.x = app.screen.width / 1.2;
            retry.y = app.screen.height / 1.3;
            retry.interactive = true;
            retry.cursor = "pointer";
            scenes[j].addChild(retry);
            retry.on("click", function() {
              TweenMax.to(this.parent, 0.2, {pixi: {alpha: 0}, onComplete: () => {
                this.parent.visible = false;
                let uncle = this.parent.parent.getChildByName("scene " + (j + 1));
                uncle.visible = true;
                TweenMax.fromTo(uncle, 0.2, {pixi: {alpha: 0}}, {pixi: {alpha: 1}});
              }});
            });
          }

          if (j == 2) {
            let decrement = new PIXI.Graphics();
            decrement.beginFill(0xFFFFFF);
            decrement.drawCircle(0, 0, 15);
            decrement.x = app.screen.width / 1.35;
            decrement.y = app.screen.height / 1.3;
            decrement.interactive = true;
            decrement.cursor = "pointer";
            scenes[j].addChild(decrement);
            decrement.on("click", function () {
              slide(decPercent, things);
              decPercent -= 10;
            });
          }

          if(j==0) {
            let rightArrow = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/Bloque_3/rightArrow.png"));
            rightArrow.scale.set(0.5);
            rightArrow.anchor.set(0.5);
            rightArrow.name="Arrow"+i+"_"+j;
            rightArrow.x = app.screen.width / 1.05;
            rightArrow.y = app.screen.height / 2;
            rightArrow.interactive = true;
            rightArrow.buttonMode = true;
            scenes[j].addChild(rightArrow);
            rightArrow.on("click", function() {

              if(i == 0) {
                var slider=document.getElementById("slider_0");
                slider.style.display = "block";
              }
              TweenMax.to(this.parent, 0.2, {pixi: {alpha: 0}, onComplete: () => {
                this.parent.visible = false;
                let uncle = this.parent.parent.getChildByName("scene " + (j + 1));
                uncle.visible = true;
                TweenMax.fromTo(uncle, 0.2, {pixi: {alpha: 0}}, {pixi: {alpha: 1}});
              }});
            });
          }
          stage[i].addChild(scenes[j]);
        }
        app.stage.addChild(stage[i]);
      }

      function slide(per, thing) {
        let n = thing.name;
        if (n === "thing_0") {
          thing.setTexture(PIXI.Texture.fromFrame("tasa_" + per + ".png"));
        } else if (n === "thing_1") {
          console.log("lacking of sprites");
        } else {
          thing.setTexture(PIXI.Texture.fromFrame("venta_" + per + ".png"));
        }
      }
    }

    contButton.on("click", function() {



      TweenMax.to(intro, 0.2, {pixi: {alpha: 0}});
      TweenMax.to([tasaDeCompra, compraPromedio, venta], 0.8, {y: (app.screen.height * 62) / 220, onComplete: function () {
        intro.visible = false;
        stage[0].visible = true;
        TweenMax.fromTo(stage[0], 0.2, {pixi: {alpha: 0}}, {pixi: {alpha: 1}});
        tasaDeCompra.alpha = 0.5;

        //Tasa de compra boton
        tasaDeCompra.interactive = true;
        tasaDeCompra.cursor = "pointer";
        tasaDeCompra.on("click", function() {
          if(stage[1].visible) {


            TweenMax.to(stage[1], 0.3, {pixi: {alpha: 0}, onComplete: function() {
              stage[1].visible = false;
              stage[0].visible = true;
              TweenMax.to(stage[0], 0.3, {pixi: {alpha: 1}});

              scenes[0].visible = true;
              scenes[0].alpha = 1;

              scenes[1].visible = false;
              scenes[1].alpha = 0;
            }});
            tasaDeCompra.alpha = 0.5;
            compraPromedio.alpha = 1;
          } else if(stage[2].visible) {
            TweenMax.to(stage[2], 0.3, {pixi: {alpha: 0}, onComplete: function() {
              stage[2].visible = false;
              stage[0].visible = true;
              TweenMax.to(stage[0], 0.3, {pixi: {alpha: 1}});

              scenes[0].visible = true;
              scenes[0].alpha = 1;

              scenes[1].visible = false;
              scenes[1].alpha = 0;
            }});
            tasaDeCompra.alpha = 0.5;
            venta.alpha = 1;
          }
        });

        //Compra promedio boton
        compraPromedio.interactive = true;
        compraPromedio.cursor = "pointer";
        compraPromedio.on("click", function() {
          if(stage[0].visible) {
            TweenMax.to(stage[0], 0.3, {pixi: {alpha: 0}, onComplete: function() {
              stage[0].visible = false;
              stage[1].visible = true;
              TweenMax.to(stage[1], 0.3, {pixi: {alpha: 1}});

              scenes[0].visible = true;
              scenes[0].alpha = 1;

              scenes[1].visible = false;
              scenes[1].alpha = 0;
            }});
            compraPromedio.alpha = 0.5;
            tasaDeCompra.alpha = 1;
          } else if(stage[2].visible) {
            TweenMax.to(stage[2], 0.3, {pixi: {alpha: 0}, onComplete: function() {
              stage[2].visible = false;
              stage[1].visible = true;
              TweenMax.to(stage[1], 0.3, {pixi: {alpha: 1}});

              scenes[0].visible = true;
              scenes[0].alpha = 1;

              scenes[1].visible = false;
              scenes[1].alpha = 0;
            }});
            compraPromedio.alpha = 0.5;
            venta.alpha = 1;
          }
        });

        //Venta boton
        venta.interactive = true;
        venta.cursor = "pointer";
        venta.on("click", function() {
          var slider=document.getElementById("slider_2");
              slider.style.display="block";
          if(stage[0].visible) {
            TweenMax.to(stage[0], 0.3, {pixi: {alpha: 0}, onComplete: function() {
              stage[0].visible = false;
              stage[2].visible = true;
              TweenMax.to(stage[2], 0.3, {pixi: {alpha: 1}});

              scenes[0].visible = true;
              scenes[0].alpha = 1;

              scenes[1].visible = false;
              scenes[1].alpha = 0;
            }});
            venta.alpha = 0.5;
            tasaDeCompra.alpha = 1;
          } else if(stage[1].visible) {
            TweenMax.to(stage[1], 0.3, {pixi: {alpha: 0}, onComplete: function() {
              stage[1].visible = false;
              stage[2].visible = true;
              TweenMax.to(stage[2], 0.3, {pixi: {alpha: 1}});

              scenes[0].visible = true;
              scenes[0].alpha = 1;

              scenes[1].visible = false;
              scenes[1].alpha = 0;
            }});
            venta.alpha = 0.5;
            compraPromedio.alpha = 1;
          }
        });
      }});







    });
  }
  return self;
}
