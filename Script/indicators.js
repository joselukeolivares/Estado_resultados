function indicators() {
  let self = {};

  self.destroyApp = function() {
    var sliders=document.getElementsByClassName("slider");
    if(sliders!=null){
      for(var i=0;i<sliders.length;i++){
        var parent=sliders[i].parentNode;
         while(parent.firstChild){
           parent.removeChild(parent.firstChild);
         }
       }
    }

    if(self.app == null) return self;
    self.app.destroy(true);
    return self;
  };

  self.createApp = function() {
    let appDiv = document.getElementById("aplicacion");
    self.app = new PIXI.Application(width, height, {backgroundColor: 0x175383});
    self.width = width;
    self.height = height;
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
    let scale1 = factorScreen(.8);
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
      fontFamily: "Roboto-Regular",
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
      fontFamily: "Roboto-Regular",
      fill: "#FFFFFF",
      fontSize: 22
    });
    subTitle.x = app.screen.width / 2;
    subTitle.y = app.screen.height / 7;
    subTitle.anchor.set(0.5);
    app.stage.addChild(subTitle);

    let intro = new PIXI.Container();
    let explanation = new PIXI.Text("El estado de resultados se conforma por una serie de indicadores los cuales monitorean la cantidad de clientes que compran, cuantos nos compran y el volmen de ventas",{
      fontFamily: "Roboto-Regular",
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
      fontFamily: "Roboto-Regular",
      fill: "#FFFFFF",
      fontSize: 28,
    });
    letsGo.x = app.screen.width / 2;
    letsGo.y = app.screen.height / 1.3;
    letsGo.anchor.set(0.5);
    intro.addChild(letsGo);

    let contButton = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/b-continue.png")].texture);
    contButton.x = app.screen.width - 100;
    contButton.y = app.screen.height - 50;
    contButton.anchor.set(0.5);
    contButton.scale.set(0.6);
    contButton.interactive = true;
    contButton.cursor = "pointer";
    intro.addChild(contButton);
    app.stage.addChild(intro);

    contButton.on("mouseover", function () {
      contButton.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/b-continue-selected.png")].texture);
    });
    contButton.on("mouseout", function () {
      contButton.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/b-continue.png")].texture);
    });


    // contButton.on("mouseover", function () {
    //   contButton.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/b-continue-selected.png")]);
    // });
    //
    // contButton.on("mouseout", function () {
    //   contButton.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/b-continue.png")]);
    // });

    //Interactivity

    let stage = [];
    let scenes = [];
    let indiStyle = new PIXI.TextStyle({
      fontFamily: "Roboto-Regular",
      fill: "#FFFFFF",
      fontSize: 28
    });

    let titles = ["Tasa de Compra", "Compra promedio", "Venta"];
    let subTitles = [["Indica el número total de Clientes que compra en un periodo determinado. Se calcula dividiendo el número de Clientes que compraron sobre el número de Clientes totales.",
                    "Imagine que a mes de Enero la empresa tiene 1,000 Clientes y para Julio nos han comprado el 50% de los Clientes (500). \n Interactuemos y veamos el efecto que tiene un aumento en la Tasa de Compra.",
                    "Ahora, en sentido contrario veamos el efecto al disminuir la Tasa de Compra."],
                    ["Indica la compra promedio que realizaron los Clientes (que compraron) en un periodo. Se calcula dividiendo las ventas totales sobre el número de Clientes que compraron.",
                    "De los 500 Clientes que nos han comprado a mes de Julio, cada uno ha comprado en promedio $ 1,000.00 Pesos. \n Interactuemos y veamos el efecto que tienen al aumentar la Compra Promedio.",
                    "Ahora, en sentido contrario veamos el efecto al disminuir la Compra Promedio."],
                    ["Indica las ventas totales de Clientes que compraron en un periodo.\nSe calcula multiplicando la compra promedio por el número de Clientes que compraron.",
                    "En el ejemplo actual la compra total es de $500,000.00 Pesos.\nEn una estrategia enfocada al Cliente y planteando dos escenarios diferentes, ¿Cual seria la mejor opción para aumentar las Ventas?...",
                    "En el primer escenario mantenemos la Tasa de Compra igual pero aumentamos la Compra Promedio a $2,000.00.\n\nEn el segundo escenario aumentamos la Tasa de Compra al 80% y una Compra Promedio de $1,400.00."]];
    let interactive = [PIXI.Texture.fromFrame("tasa_5.png"),
                          PIXI.Texture.fromFrame("compra_5.png"),
                          PIXI.Texture.fromFrame("venta_50.png")];

    let slider0, slider1, slider2;

    for (let i = 0; i < 3; i++) {
      stage[i] = new PIXI.Container();
      stage[i].visible = false;
      stage[i].name = "stage " + i;
      let title = new PIXI.Text(titles[i], indiStyle);
      title.anchor.set(0.5);
      title.x = app.screen.width / 3.5;
      title.y = app.screen.height / 2;
      if (i == 2) {
        title.x = app.screen.width / 2;
        title.y = app.screen.height / 2.5;
      }
      stage[i].addChild(title);

      for (let j = 0; j < 3; j++) {
        scenes[j] = new PIXI.Container();
        scenes[j].visible = false;
        scenes[j].name= "scene " + j;
        if(j == 0) scenes[j].visible = true;
        let sub = new PIXI.Text(subTitles[i][j], {
          fontFamily: "Roboto",
          fill: "#FFFFFF",
          fontSize: 18,
          wordWrap: true,
          wordWrapWidth: 350,
          align: "center"
        });
        sub.anchor.set(0.5);
        sub.x = app.screen.width / 3.5;
        sub.y = app.screen.height / 1.5;
        if (i == 2) {
          let color;
          j != 0 ? color = "#E7C82F" : color = "#FFFFFF";

          if (j != 2) {
            sub = new PIXI.Text(subTitles[i][j], {
              fontFamily: "Roboto-Regular",
              fill: color,
              fontSize: 18,
              wordWrap: true,
              wordWrapWidth: 650,
              align: "center"
            });
          } else {
            sub = new PIXI.Text(subTitles[i][j], {
              fontFamily: "Roboto-Regular",
              fill: color,
              fontSize: 18,
              wordWrap: true,
              wordWrapWidth: 650
            });
          }
          sub.anchor.set(0.5);
          sub.x = app.screen.width / 2;
          sub.y = app.screen.height / 2;
        } /*else {
          sub = new PIXI.Text(subTitles[i][j], {
            fontFamily: "Roboto",
            fill: "#E7C82F",
            fontSize: 18,
            wordWrap: true,
            wordWrapWidth: 750,
            align: "center"
          });
          sub.anchor.set(0.5);
          sub.x = app.screen.width / 2;
          sub.y = app.screen.height / 1.8;
        } */
        scenes[j].addChild(sub);

        let things = new PIXI.Sprite(interactive[i]);
        things.scale.set(scale2);
        things.anchor.set(0.5);
        things.x = app.screen.width / 1.35;
        things.y = app.screen.height / 1.7;
        things.name = "thing_" + i;
        if (i != 2) {
          scenes[j].addChild(things);
        } else {
          let tdc = new PIXI.Sprite(PIXI.Texture.fromFrame("tasa_5.png"));
          tdc.scale.set(scale1);
          tdc.anchor.set(0.5);
          tdc.x = app.screen.width / 5;
          tdc.y = app.screen.height / 1.4;
          scenes[j].addChild(tdc);

          let tdcPer = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/tasa-50percent.png")].texture);
          tdcPer.scale.set(scale1 - 0.1);
          tdcPer.anchor.set(0.5);
          tdcPer.x = app.screen.width / 5;
          tdcPer.y = app.screen.height / 1.2;
          scenes[j].addChild(tdcPer);

          let timesIc = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/ic-times.png")].texture);
          timesIc.scale.set(scale1);
          timesIc.anchor.set(0.5);
          timesIc.x = app.screen.width / 2.7;
          timesIc.y = app.screen.height / 1.3;
          scenes[j].addChild(timesIc);

          let cp = new PIXI.Sprite(PIXI.Texture.fromFrame("compra_5.png"));
          cp.scale.set(scale1);
          cp.anchor.set(0.5);
          cp.x = app.screen.width / 2;
          cp.y = app.screen.height / 1.4;
          scenes[j].addChild(cp);

          cpnom = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/num-mil.png")].texture);
          cpnom.scale.set(scale1 - 0.1);
          cpnom.anchor.set(0.5);
          cpnom.x = app.screen.width / 2;
          cpnom.y = app.screen.height / 1.15;
          scenes[j].addChild(cpnom);

          let equalsIc = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/ic-equals.png")].texture);
          equalsIc.scale.set(scale1);
          equalsIc.anchor.set(0.5);
          equalsIc.x = app.screen.width / 1.6;
          equalsIc.y = app.screen.height / 1.3;
          scenes[j].addChild(equalsIc);

          let v = new PIXI.Sprite(PIXI.Texture.fromFrame("venta_50.png"));
          v.scale.set(scale1);
          v.anchor.set(0.5);
          v.x = app.screen.width / 1.3;
          v.y = app.screen.height / 1.4;
          scenes[j].addChild(v);

          vNum = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/num-500mil.png")].texture);
          vNum.scale.set(scale1 - 0.1);
          vNum.anchor.set(0.5);
          vNum.x = app.screen.width / 1.3;
          vNum.y = app.screen.height / 1.15;
          scenes[j].addChild(vNum);

          if(j == 2) {
            let icBack = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/ic-left-arrow-circular.png")].texture);
            icBack.anchor.set(0.5);
            icBack.x = app.screen.width / 14;
            icBack.y = app.screen.height / 2.3;
            icBack.interactive = true;
            icBack.cursor = "pointer";
            icBack.visible = false;
            scenes[j].addChild(icBack);

            icBack.on("click", function () {
              this.parent.children[0].text = "En el primer escenario mantenemos la Tasa de Compra igual pero aumentamos la Compra Promedio a $2,000.00.\n\nEn el segundo escenario aumentamos la Tasa de Compra al 80% y una Compra Promedio de $1,400.00.";
              this.parent.children[11].visible = true;
              this.parent.children[10].visible = true;
              icBack.visible = false;
            });

            let circle1 = new PIXI.Graphics();
            circle1.beginFill(0x175383);
            circle1.lineStyle(2, 0xE7C82F);
            circle1.drawCircle(0, 0, 12);
            circle1.endFill();
            circle1.x = app.screen.width / 15;
            circle1.y = app.screen.height / 2.3;
            scenes[j].addChild(circle1);
            circle1.interactive = true;
            circle1.cursor = "pointer";
            circle1.on("click", function () {
              cpnom.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/num-2mil.png")].texture);
              vNum.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/num-millon.png")].texture);
              this.parent.children[0].text = "Incorecto! Si nos enfocamos solamente a que el Cliente nos compre más, corremos el riesgo de no mantenerlo, esto por que no estamos otorgando un servicio adecuado para que más Clientes nos compren.";
              this.parent.children[11].visible = false;
              this.parent.children[10].visible = false;
              icBack.visible = true;
            });
            circle1.on("mouseover", function () {
              circle1.clear();
              circle1.beginFill(0xE7C82F);
              circle1.lineStyle(2, 0xE7C82F);
              circle1.drawCircle(0, 0, 12);
              scenes[j].addChild(circle1);
            });
            circle1.on("mouseout", function () {
              circle1.clear();
              circle1.beginFill(0x175383);
              circle1.lineStyle(2, 0xE7C82F);
              circle1.drawCircle(0, 0, 12);
              scenes[j].addChild(circle1);
            });

            let circle2 = new PIXI.Graphics();
            circle2.beginFill(0x175383);
            circle2.lineStyle(2, 0xE7C82F);
            circle2.drawCircle(0, 0, 12);
            circle2.endFill();
            circle2.x = app.screen.width / 15;
            circle2.y = app.screen.height / 1.83;
            scenes[j].addChild(circle2);
            circle2.interactive = true;
            circle2.cursor = "pointer";
            circle2.on("click", function () {
              tdcPer.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/tasa-80percent.png")].texture);
              cpnom.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/num-mil400.png")].texture);
              vNum.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/num-1millon120.png")].texture);
              this.parent.children[0].text = "Correcto! si otorgamos un mejor servicio al cliente y aumentamos la Tasa de Compra y la Compra Promedio significativamente, el resultado es mejor, además tomamos en cuenta que la posibilidad de que un Cliente continue comprando es más alta.";
              this.parent.children[11].visible = false;
              this.parent.children[10].visible = false;
              icBack.visible = true;
              var continue_button=new PIXI.Sprite(PIXI.loader.resources["assets/ui/Bloque_3/b-continue.png"].texture);

                  continue_button.x=app.screen.width*.85;
                  continue_button.y=app.screen.height*.9;
                  continue_button.buttonMode=true;
                  continue_button.interactive=true;
                  continue_button.scale.set(.6);
                  continue_button.on("pointerdown",function(){
                        toSlide('segmentacion');
                  });
                  self.app.stage.addChild(continue_button);
            });
            circle2.on("mouseover", function () {
              circle2.clear();
              circle2.beginFill(0xE7C82F);
              circle2.lineStyle(2, 0xE7C82F);
              circle2.drawCircle(0, 0, 12);
              scenes[j].addChild(circle2);
            });
            circle2.on("mouseout", function () {
              circle2.clear();
              circle2.beginFill(0x175383);
              circle2.lineStyle(2, 0xE7C82F);
              circle2.drawCircle(0, 0, 12);
              scenes[j].addChild(circle2);
            });
          }
        }
        if(j == 1 && i != 2) {
          Slider(document.getElementById("aplicacion"), scenes[j], i);
        }

        if (j == 1) {
          let retry;
          if (i != 2) {
            retry = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/ic-retry.png")].texture);
            retry.x = app.screen.width *.9;
            retry.y = app.screen.height / 1.3;
          } else {
            retry = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/ic-next.png")].texture);
            retry.scale.set(scale1);
            retry.x = app.screen.width *.9;
            retry.y = app.screen.height / 1.75;
            retry.on("mouseover", function() {
              retry.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/ic-next-selected.png")].texture);
            });
            retry.on("mouseout", function () {
              retry.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/ic-next.png")].texture);
            });
          }


          retry = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/ic-next.png")].texture);
          retry.scale.set(scale1);
          retry.x = app.screen.width *.9;
          retry.y = app.screen.height / 1.75;
          retry.on("mouseover", function() {
            retry.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/ic-next-selected.png")].texture);
          });
          retry.on("mouseout", function () {
            retry.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/ic-next.png")].texture);
          });

          retry.anchor.set(0.5);
          retry.interactive = true;
          retry.cursor = "pointer";
          scenes[j].addChild(retry);
          retry.on("click", function() {

            TweenMax.to(this.parent, 0.2, {pixi: {alpha: 0}, onComplete: () => {
              this.parent.visible = false;

              let uncle = this.parent.parent.getChildByName("scene " + (j + 1));
              uncle.visible = true;

              if (i != 2) uncle.addChild(this.parent.getChildByName("rects_container"));

              TweenMax.fromTo(uncle, 0.2, {pixi: {alpha: 0}}, {pixi: {alpha: 1}});
            }});
          });
        }

        if(j == 0) {
          let rightArrow = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/Bloque_3/ic-right-arrow.png"));
          rightArrow.scale.set(0.5);
          rightArrow.anchor.set(0.5);
          rightArrow.name = "Arrow" + i + "_" + j;
          rightArrow.x = app.screen.width / 1.05;
          rightArrow.y = app.screen.height / 2;
          if (i == 2) {
            rightArrow.x = app.screen.width / 1.1;
            rightArrow.y = app.screen.height / 1.2;
          }
          rightArrow.interactive = true;
          rightArrow.buttonMode = true;
          scenes[j].addChild(rightArrow);
          rightArrow.on("click", function() {
            let uncle = this.parent.parent.getChildByName("scene " + (j + 1));
            TweenMax.to(this.parent, 0.2, {pixi: {alpha: 0}, onComplete: () => {
              this.parent.visible = false;

              uncle.visible = true;
              TweenMax.fromTo(uncle, 0.2, {pixi: {alpha: 0}}, {pixi: {alpha: 1}});
            }});

            if(i == 0) {
              slider0 = document.getElementById("slider_0");
              slider0.style.display = "block";
            } else if (i == 1) {
              slider1 = document.getElementById("slider_1");

              uncle.children[2].children[0].visible=false;
              uncle.children[2].children[2].visible=false;
              uncle.children[2].children[3].visible=false;
              uncle.children[2].children[1].visible=true;

              uncle.children[2].children[4].x=width*.67;
              uncle.children[2].children[4].y=height*.77;
              uncle.children[2].children[4].style={fill:"Black",fontSize:factorScreen(40),fontFamily:"Roboto-Regular"};
              uncle.children[2].children[4].text="$1,000.00";
              uncle.children[2].children[4].name="compraPromedioTXT";
              slider1.style.display = "block";
            }

          });
        }
        stage[i].addChild(scenes[j]);
      }
      app.stage.addChild(stage[i]);
    }

    contButton.on("pointertap", function() {
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
            if(stage[1].children[2].visible) {
              slider1.style.display = "none";
              stage[1].children[2].visible = false;
              stage[1].children[2].alpha = 0;
            } else if (stage[1].children[3].visible) {
              slider1.style.display = "none";
              stage[1].children[3].visible = false;
              stage[1].children[3].alpha = 0;
            }
            TweenMax.to(stage[1], 0.3, {pixi: {alpha: 0}, onComplete: function() {
              stage[1].visible = false;
              stage[0].visible = true;
              TweenMax.to(stage[0], 0.3, {pixi: {alpha: 1}});
              stage[0].children[1].visible = true;
              stage[0].children[1].alpha = 1;
            }});
            tasaDeCompra.alpha = 0.5;
            compraPromedio.alpha = 1;
          } else if(stage[2].visible) {
            if(stage[2].children[2].visible) {
              //slider2.style.display = "none";
              stage[2].children[2].visible = false;
              stage[2].children[2].alpha = 0;
            } else if(stage[2].children[3].visible) {
              //slider2.style.display = "none";
              stage[2].children[3].visible = false;
              stage[2].children[3].alpha = 0;
            }
            TweenMax.to(stage[2], 0.3, {pixi: {alpha: 0}, onComplete: function() {
              stage[2].visible = false;
              stage[0].visible = true;
              TweenMax.to(stage[0], 0.3, {pixi: {alpha: 1}});

              stage[0].children[1].visible = true;
              stage[0].children[1].alpha = 1;
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
            if(stage[0].children[2].visible) {
              slider0.style.display = "none";
              stage[0].children[2].visible = false;
              stage[0].children[2].alpha = 0;
              //var yellow_rect=stage[0].children[2].children[2].getChildByName("yellowNumRec")
            } else if (stage[0].children[3].visible) {
              slider0.style.display = "none";
              stage[0].children[3].visible = false;
              stage[0].children[3].alpha = 0;
            }
            TweenMax.to(stage[0], 0.3, {pixi: {alpha: 0}, onComplete: function() {
              stage[0].visible = false;
              stage[1].visible = true;
              TweenMax.to(stage[1], 0.3, {pixi: {alpha: 1}});

              stage[1].children[1].visible = true;
              stage[1].children[1].alpha = 1;
            }});
            compraPromedio.alpha = 0.5;
            tasaDeCompra.alpha = 1;
          } else if(stage[2].visible) {
            if(stage[2].children[2].visible) {
              //slider2.style.display = "none";
              stage[2].children[2].visible = false;
              stage[2].children[2].alpha = 0;
            } else if (stage[2].children[3].visible) {
              //slider2.style.display = "none";
              stage[2].children[3].visible = false;
              stage[2].children[3].alpha = 0;
            }
            TweenMax.to(stage[2], 0.3, {pixi: {alpha: 0}, onComplete: function() {
              stage[2].visible = false;
              stage[1].visible = true;
              TweenMax.to(stage[1], 0.3, {pixi: {alpha: 1}});

              stage[1].children[1].visible = true;
              stage[1].children[1].alpha = 1;
            }});
            compraPromedio.alpha = 0.5;
            venta.alpha = 1;
          }
        });


        //Venta boton
        venta.interactive = true;
        venta.cursor = "pointer";
        venta.on("click", function() {
          if(stage[0].visible) {
            if(stage[0].children[2].visible) {
              slider0.style.display = "none";
              stage[0].children[2].visible = false;
              stage[0].children[2].alpha = 0;
            } else if (stage[0].children[3].visible) {
              slider0.style.display = "none";
              stage[0].children[3].visible = false;
              stage[0].children[3].alpha = 0;
            }
            TweenMax.to(stage[0], 0.3, {pixi: {alpha: 0}, onComplete: function() {
              stage[0].visible = false;
              stage[2].visible = true;
              TweenMax.to(stage[2], 0.3, {pixi: {alpha: 1}});

              stage[2].children[1].visible = true;
              stage[2].children[1].alpha = 1;
            }});
            venta.alpha = 0.5;
            tasaDeCompra.alpha = 1;
          } else if(stage[1].visible) {
            if (stage[1].children[2].visible) {
              slider1.style.display = "none";
              stage[1].children[2].visible = false;
              stage[1].children[2].alpha = 0;
            } else if (stage[1].children[3].visible) {
              slider1.style.display = "none";
              stage[1].children[3].visible = false;
              stage[1].children[3].alpha = 0;
            }
            TweenMax.to(stage[1], 0.3, {pixi: {alpha: 0}, onComplete: function() {
              stage[1].visible = false;
              stage[2].visible = true;
              TweenMax.to(stage[2], 0.3, {pixi: {alpha: 1}});

              stage[2].children[1].visible = true;
              stage[2].children[1].alpha = 1;
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
