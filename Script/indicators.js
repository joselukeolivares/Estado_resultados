function indicators() {
  let self = {};
  let appDiv = document.getElementById("aplicacion");
  self.destroyApp = function() {
    var sliders = document.getElementsByClassName("slider");
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
    let tasaDeCompra = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/b_tasa_de_compra.png")].texture);
    let compraPromedio = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/b_compra_promedio.png")].texture);
    let venta = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/b_venta.png")].texture);

    tasaDeCompra.anchor.set(0.5);
    tasaDeCompra.x = app.screen.width / 5.5;
    tasaDeCompra.y = app.screen.height / 2;
    tasaDeCompra.scale.set(factorScreen(0.8));
    app.stage.addChild(tasaDeCompra);

    compraPromedio.anchor.set(0.5);
    compraPromedio.x = app.screen.width / 2;
    compraPromedio.y = app.screen.height / 2;
    compraPromedio.scale.set(factorScreen(0.8));
    app.stage.addChild(compraPromedio);

    venta.anchor.set(0.5);
    venta.x = app.screen.width / 1.22;
    venta.y = app.screen.height / 2;
    venta.scale.set(factorScreen(0.8));
    app.stage.addChild(venta);


    let title = document.createElement("h1");
    title.setAttribute("class", "title");
    title.innerHTML = "Estado de Resultados de Clientes";
    title.setAttribute("style", "top: " +  app.screen.height * 0.05 + "px;");
    appDiv.appendChild(title);

    let subTitle = document.createElement("h3");
    subTitle.setAttribute("class", "subTitle");
    subTitle.innerHTML = "Indicadores principales";
    subTitle.setAttribute("style", "top: " + app.screen.height * 0.13  + "px;");
    appDiv.appendChild(subTitle);

    let intro = document.createElement("div");
    intro.setAttribute("id", "intro");
    intro.setAttribute("style", "top: " + app.screen.height * 0.2 + "px;");

    let explanation = document.createElement("p");
    explanation.innerHTML = "El estado de resultados se conforma por una serie de indicadores los cuales monitorean la cantidad de Clientes que compran, cuantos nos compran y el volumen de ventas.";
    intro.appendChild(explanation);

    let letsGo = document.createElement("p");
    letsGo.innerHTML = "!Veamos como funciona!";
    letsGo.setAttribute("id", "lets_go");
    letsGo.setAttribute("style", "top: " + app.screen.height * 0.4 + "px;");
    intro.appendChild(letsGo);

    appDiv.appendChild(intro);

    let contButton = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/b-continue.png")].texture);
    contButton.x = app.screen.width*.9;
    contButton.y = app.screen.height*.9;
    //contButton.anchor.set(0.5);

    contButton.scale.set(factorScreen(.6));

    contButton.interactive = true;
    contButton.cursor = "pointer";
    app.stage.addChild(contButton);

    contButton.on("mouseover", function () {
      contButton.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/b-continue-selected.png")].texture);
    });
    contButton.on("mouseout", function () {
      contButton.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/b-continue.png")].texture);
    });

    let stage = [];
    let stages = [];

    let titles = ["Tasa de Compra", "Compra promedio", "Venta"];
    let subTitles = [["Indica el número total de Clientes que compra en un periodo determinado. Se calcula dividiendo el número de Clientes que compraron sobre el número de Clientes totales.",
                    "Imaginemos que a mes de Enero la empresa tiene 1,000 Clientes y para Julio nos han comprado el 50% de los Clientes (500). <br> Interactuemos y veamos el efecto que tiene un aumento en la Tasa de Compra.",
                    "Ahora, en sentido contrario veamos el efecto al disminuir la Tasa de Compra."],
                    ["Indica la compra promedio que realizaron los Clientes (que compraron) en un periodo. Se calcula dividiendo las ventas totales sobre el número de Clientes que compraron.",
                    "De los 500 Clientes que nos han comprado a mes de Julio, cada uno ha comprado en promedio $ 1,000.00 Pesos. <br> Interactuemos y veamos el efecto que tienen al aumentar la Compra Promedio.",
                    "Ahora, en sentido contrario veamos el efecto al disminuir la Compra Promedio."],
                    ["Indica las ventas totales de Clientes que compraron en un periodo.<br>Se calcula multiplicando la compra promedio por el número de Clientes que compraron.",
                    "En el ejemplo actual la compra total es de $500,000.00 Pesos.<br>En una estrategia enfocada al Cliente y planteando dos escenarios diferentes, ¿Cual seria la mejor opción para aumentar las Ventas?...",
                    "En el primer escenario mantenemos la Tasa de Compra igual pero aumentamos la Compra Promedio a $2,000.00.<br>En el segundo escenario aumentamos la Tasa de Compra al 80% y una Compra Promedio de $1,400.00."]];

    let interactive = [PIXI.Texture.fromFrame("tasa_5.png"),
                          PIXI.Texture.fromFrame("compra_5.png"),
                          PIXI.Texture.fromFrame("venta_50.png")];

    let slider0, slider1;

    //This is where the for loop starts

    for (let i = 0; i < 3; i++) {
      stages[i] = document.createElement("div");
      stages[i].setAttribute("id", "stage_" + i);
      stages[i].setAttribute("class", "stages");
      stages[i].setAttribute("style", "top: " + app.screen.height * 0.4  + "px; left: " + app.screen.width * 0.05  + "px;");

      let title = document.createElement("h2");
      title.innerHTML = titles[i];
      stages[i].appendChild(title);

      if(i != 2) {
        slider(appDiv, app.stage, i);
      }
      slider0 = document.getElementById("slider_0");
      slider1 = document.getElementById("slider_1");
      for(let j = 0; j < 3; j++) {
        let content = document.createElement("p");
        content.setAttribute("class", "content");
        content.setAttribute("id", "content_" + i + j);
        if(j != 0) {
          content.style.color = "#E7C82F";
          content.style.fontFamily = "Roboto-Regular";
        }
        content.innerHTML = subTitles[i][j];
        if(j != 0) {
          content.style.display = "none";
        }
        stages[i].appendChild(content);

        let icRightArrow = document.createElement("img");
        icRightArrow.setAttribute("src", "assets/ui/Bloque_3/ic-arrow-point-to-right.svg");
        icRightArrow.setAttribute("id", "arrow-point-to-right-" + i + j);
        icRightArrow.setAttribute("class", "arrow-point-to-right");
        icRightArrow.setAttribute("style", "top: " + app.screen.height * 0.1  + "px; left: " + app.screen.width * 0.82  + "px;");
        if(i == 2) {
          icRightArrow.style.width = "auto";
          icRightArrow.style.height = "30%";
        }
        icRightArrow.style.cursor = "pointer";
        if(j != 0) {
          icRightArrow.style.display = "none";
        }
        icRightArrow.addEventListener("click", function() {
          if(j != 2) {
            this.style.display = "none";
            //stages[i].querySelector("#arrow-point-to-right-" + i + (j+1)).style.display = "block";
            stages[i].querySelector("#content_" + i + j).style.display = "none";
            stages[i].querySelector("#content_" + i + (j+1)).style.display = "block";
            if(i == 0 && j == 0) {
              slider0.style.display = "block";
              app.stage.getChildByName("interactiveSquares0").visible = true;
              document.getElementById("tcCts").style.display = "block";
              document.getElementById("tcPer").style.display = "block";
            } else if(i == 1 && j == 0) {
              slider1.style.display = "block";
              app.stage.getChildByName("interactiveSquares1").visible = true;
              document.getElementById("cpSls").style.display = "block";
            } else if(i == 2 && j == 0) {
              stages[i].querySelector("#arrow-point-to-right-21").style.display = "block";
            } else if(i == 2 && j == 1) {
              circle1.style.display = "block";
              circle2.style.display = "block";
            }
          } else {
            slider0.style.display = "none";
            slider1.style.display = "none";
            app.stage.getChildByName("interactiveSquares0").visible = false;
            app.stage.getChildByName("interactiveSquares1").visible = false;
            stages[i].style.display = "none";
            document.getElementById("tcCts").style.display = "none";
            document.getElementById("tcPer").style.display = "none";
            document.getElementById("cpSls").style.display = "none";
            stages[i+1].style.display = "block";
            if(stages[i+1].querySelector("#arrow-point-to-right-" + (i+1) + 0).style.display == "none") {
              stages[i+1].querySelector("#arrow-point-to-right-" + (i+1) + 0).style.display = "block";
              stages[i+1].querySelector("#content_" + (i+1) + 0).style.display = "block";
            }
            if(i == 0) {
              compraPromedio.scale.set(factorScreen(0.9));
              compraPromedio.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_compra_promedio.png"].texture);
              tasaDeCompra.scale.set(factorScreen(0.8));
              venta.scale.set(factorScreen(0.8));
              tasaDeCompra.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_tasa_de_compra_gray.png"].texture);
              venta.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_venta_gray.png"].texture);
              app.stage.getChildByName("thing_0").visible = false;
              app.stage.getChildByName("thing_1").visible = true;
            } else if(i == 1) {
              venta.scale.set(factorScreen(0.9));
              venta.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_venta.png"].texture);
              tasaDeCompra.scale.set(factorScreen(0.8));
              compraPromedio.scale.set(factorScreen(0.8));
              tasaDeCompra.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_tasa_de_compra_gray.png"].texture);
              compraPromedio.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_compra_promedio_gray.png"].texture);
              app.stage.getChildByName("thing_1").visible = false;
              vSprites.visible = true;
              stages[2].style.top = app.screen.height * 0.33 + "px";
              stages[2].style.left = app.screen.height * 0.1 + "px";
            }
          }
        });
        stages[i].appendChild(icRightArrow);
      }

      let things = new PIXI.Sprite(interactive[i]);
      things.scale.set(scale2);
      things.anchor.set(0.5);
      things.x = app.screen.width / 1.55;
      things.y = app.screen.height / 1.9;
      things.visible = false;
      things.name = "thing_" + i;
      app.stage.addChild(things);

      let vSprites = new PIXI.Container();
      vSprites.name = "vSprites" + i;
      vSprites.visible = false;

      let tdc = new PIXI.Sprite(PIXI.Texture.fromFrame("tasa_5.png"));
      tdc.scale.set(scale1);
      tdc.anchor.set(0.5);
      tdc.x = app.screen.width / 5;
      tdc.y = app.screen.height / 1.4;
      vSprites.addChild(tdc);

      let tdcPer = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/tasa-50percent.png")].texture);
      tdcPer.scale.set(scale1 - 0.1);
      tdcPer.anchor.set(0.5);
      tdcPer.name = "tdcPer";
      tdcPer.x = app.screen.width / 5;
      tdcPer.y = app.screen.height / 1.2;
      vSprites.addChild(tdcPer);

      let timesIc = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/ic-times.png")].texture);
      timesIc.scale.set(scale1);
      timesIc.anchor.set(0.5);
      timesIc.x = app.screen.width / 2.7;
      timesIc.y = app.screen.height / 1.3;
      vSprites.addChild(timesIc);

      let cp = new PIXI.Sprite(PIXI.Texture.fromFrame("compra_5.png"));
      cp.scale.set(scale1);
      cp.anchor.set(0.5);
      cp.x = app.screen.width / 2;
      cp.y = app.screen.height / 1.4;
      vSprites.addChild(cp);

      cpnom = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/num-mil.png")].texture);
      cpnom.scale.set(scale1 - 0.1);
      cpnom.anchor.set(0.5);
      cpnom.name = "cpnom";
      cpnom.x = app.screen.width / 2;
      cpnom.y = app.screen.height / 1.15;
      vSprites.addChild(cpnom);

      let equalsIc = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/ic-equals.png")].texture);
      equalsIc.scale.set(scale1);
      equalsIc.anchor.set(0.5);
      equalsIc.x = app.screen.width / 1.6;
      equalsIc.y = app.screen.height / 1.3;
      vSprites.addChild(equalsIc);

      let v = new PIXI.Sprite(PIXI.Texture.fromFrame("venta_50.png"));
      v.scale.set(scale1);
      v.anchor.set(0.5);
      v.x = app.screen.width / 1.3;
      v.y = app.screen.height / 1.4;
      vSprites.addChild(v);

      vNum = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/num-500mil.png")].texture);
      vNum.scale.set(scale1 - 0.1);
      vNum.anchor.set(0.5);
      vNum.name = "vNum";
      vNum.x = app.screen.width / 1.3;
      vNum.y = app.screen.height / 1.15;
      vSprites.addChild(vNum);

      app.stage.addChild(vSprites);



      stages[i].style.display = "none";
      appDiv.appendChild(stages[i]);
    }

    let circle1 = document.createElement("img");
    circle1.setAttribute("src", "assets/ui/Bloque_3/ic-tick-inside-circle.svg");
    circle1.setAttribute("class", "circle-tick-inside");
    circle1.setAttribute("id", "circle-tick-inside-1");
    circle1.style.top = app.screen.height * 0.49 + "px";
    circle1.style.left = app.screen.width * 0.02 + "px";
    circle1.style.display = "none";
    appDiv.appendChild(circle1);

    let circle2 = document.createElement("img");
    circle2.setAttribute("src", "assets/ui/Bloque_3/ic-tick-inside-circle.svg");
    circle2.setAttribute("class", "circle-tick-inside");
    circle2.setAttribute("id", "circle-tick-inside-2");
    circle2.style.top = app.screen.height * 0.56 + "px";
    circle2.style.left = app.screen.width * 0.02 + "px";
    circle2.style.display = "none";
    appDiv.appendChild(circle2);

    circle1.addEventListener("click", function() {
      let vSprites = app.stage.getChildByName("vSprites1");
      vSprites.getChildByName("cpnom").setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/num-2mil.png")].texture);
      vSprites.getChildByName("vNum").setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/num-millon.png")].texture);
      let actualContent = document.getElementById("content_22");
      actualContent.style.lineHeight = "150%";
      actualContent.style.textAlign = "center";
      actualContent.style.textAlignLast = "center";
      actualContent.innerHTML = "Incorecto! Si nos enfocamos solamente a que el Cliente nos compre más, corremos el riesgo de no mantenerlo, esto por que no estamos otorgando un servicio adecuado para que más Clientes nos compren.";
      this.style.display = "none";
      circle2.style.display = "none";

      let icBack = new PIXI.Sprite(PIXI.loader.resources["assets/ui/Bloque_3/ic-left-arrow-circular.png"].texture);
      icBack.anchor.set(0.5);
      icBack.x = app.screen.width * 0.05;
      icBack.y = app.screen.height * 0.5;
      icBack.name = "icBack";
      icBack.interactive = true;
      icBack.buttonMode = true;
      vSprites.addChild(icBack);

      icBack.on("pointertap", function() {
        actualContent.style.lineHeight = "270%";
        actualContent.style.textAlign = "left";
        actualContent.style.textAlignLast = "left";
        actualContent.innerHTML = subTitles[2][2];
        circle1.style.display = "block";
        circle2.style.display = "block";
        vSprites.removeChild(icBack);
      });
    });

    circle2.addEventListener("click", function() {
      let vSprites = app.stage.getChildByName("vSprites1");
      vSprites.getChildByName("tdcPer").setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/tasa-80percent.png")].texture);
      vSprites.getChildByName("cpnom").setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/num-mil400.png")].texture);
      vSprites.getChildByName("vNum").setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/num-1millon120.png")].texture);
      let actualContent = document.getElementById("content_22");
      actualContent.style.lineHeight = "150%";
      actualContent.style.textAlign = "center";
      actualContent.style.textAlignLast = "center";
      actualContent.innerHTML = "Correcto! Si otorgamos un mejor servicio al cliente y aumentamos la Tasa de Compra y la Compra Promedio significativamente, el resultado es mejor, además tomamos en cuenta que la posibilidad de que un Cliente continue comprando es más alta.";
      stages[2].querySelector("#arrow-point-to-right-22").style.display = "block";
      this.style.display = "none";
      circle1.style.display = "none";

      document.getElementById("arrow-point-to-right-22").addEventListener("pointerdown", function() {
        toSlide("segmentacion");
      });

    });

    contButton.on("pointertap", function() {
      contButton.visible = false;
      TweenMax.to(intro, 0.2, {alpha: 0});
      TweenMax.to([tasaDeCompra, compraPromedio, venta], 0.7, {y: (app.screen.height * 62) / 220, onComplete: function () {
        intro.style.display = "none";
        stages[0].style.display = "block";
        TweenMax.fromTo(stages[0], 0.2, {alpha: 0}, {alpha: 1});
        tasaDeCompra.scale.set(factorScreen(0.9));
        compraPromedio.scale.set(factorScreen(0.8));
        venta.scale.set(factorScreen(0.8));
        compraPromedio.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_compra_promedio_gray.png"].texture);
        venta.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_venta_gray.png"].texture);
        app.stage.getChildByName("thing_0").visible = true;

        // Tasa de compra boton
        tasaDeCompra.interactive = true;
        tasaDeCompra.buttonMode = true;
        tasaDeCompra.on("click", function() {
          if(stages[1].style.display == "block") {
            slider1.style.display = "none";
            stages[1].querySelector("#arrow-point-to-right-10").style.display = "none";
            stages[1].querySelector("#arrow-point-to-right-11").style.display = "none";
            stages[1].querySelector("#arrow-point-to-right-12").style.display = "none";
            stages[1].style.display = "none";
            stages[1].querySelector("#content_10").style.display = "none";
            stages[1].querySelector("#content_11").style.display = "none";
            stages[1].querySelector("#content_12").style.display = "none";
            app.stage.getChildByName("thing_1").visible = false;
            app.stage.getChildByName("interactiveSquares1").visible = false;
            document.getElementById("cpSls").style.display = "none";


            app.stage.getChildByName("thing_0").visible = true;
            stages[0].style.display = "block";
            stages[0].querySelector("#arrow-point-to-right-02").style.display = "none";
            stages[0].querySelector("#arrow-point-to-right-00").style.display = "block";
            stages[0].querySelector("#content_02").style.display = "none";
            stages[0].querySelector("#content_00").style.display = "block";
            tasaDeCompra.scale.set(factorScreen(0.9));
            tasaDeCompra.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_tasa_de_compra.png"].texture);
            compraPromedio.scale.set(factorScreen(0.8));
            compraPromedio.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_compra_promedio_gray.png"].texture);
          } else if(stages[2].style.display == "block") {
            stages[2].querySelector("#arrow-point-to-right-20").style.display = "none";
            stages[2].querySelector("#arrow-point-to-right-21").style.display = "none";
            stages[2].querySelector("#arrow-point-to-right-22").style.display = "none";
            stages[2].style.display = "none";
            stages[2].querySelector("#content_20").style.display = "none";
            stages[2].querySelector("#content_21").style.display = "none";
            stages[2].querySelector("#content_22").style.display = "none";
            appDiv.querySelector("#circle-tick-inside-1").style.display = "none";
            appDiv.querySelector("#circle-tick-inside-2").style.display = "none";
            app.stage.getChildByName("vSprites1").visible = false;

            app.stage.getChildByName("thing_0").visible = true;
            stages[0].style.display = "block";
            stages[0].querySelector("#arrow-point-to-right-02").style.display = "none";
            stages[0].querySelector("#arrow-point-to-right-00").style.display = "block";
            stages[0].querySelector("#content_02").style.display = "none";
            stages[0].querySelector("#content_00").style.display = "block";
            stages[1].querySelector("#arrow-point-to-right-12").style.display = "none";
            stages[1].querySelector("#arrow-point-to-right-10").style.display = "block";
            stages[1].querySelector("#content_12").style.display = "none";
            stages[1].querySelector("#content_10").style.display = "block";

            tasaDeCompra.scale.set(factorScreen(0.9));
            tasaDeCompra.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_tasa_de_compra.png"].texture);
            venta.scale.set(factorScreen(0.8));
            venta.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_venta_gray.png"].texture);
          }
        });

        // Compra promedio boton
        compraPromedio.interactive = true;
        compraPromedio.buttonMode = true;
        compraPromedio.on("click", function() {
          if(stages[0].style.display == "block") {
            slider0.style.display = "none";
            stages[0].querySelector("#arrow-point-to-right-00").style.display = "none";
            stages[0].querySelector("#arrow-point-to-right-01").style.display = "none";
            stages[0].querySelector("#arrow-point-to-right-02").style.display = "none";
            stages[0].style.display = "none";
            stages[0].querySelector("#content_00").style.display = "none";
            stages[0].querySelector("#content_01").style.display = "none";
            stages[0].querySelector("#content_02").style.display = "none";
            app.stage.getChildByName("thing_0").visible = false;
            app.stage.getChildByName("interactiveSquares0").visible = false;
            document.getElementById("tcCts").style.display = "none";
            document.getElementById("tcPer").style.display = "none";

            app.stage.getChildByName("thing_1").visible = true;
            stages[1].style.display = "block";
            stages[1].querySelector("#arrow-point-to-right-12").style.display = "none";
            stages[1].querySelector("#arrow-point-to-right-10").style.display = "block";
            stages[1].querySelector("#content_12").style.display = "none";
            stages[1].querySelector("#content_10").style.display = "block";
            compraPromedio.scale.set(factorScreen(0.9));
            compraPromedio.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_compra_promedio.png"].texture);
            tasaDeCompra.scale.set(factorScreen(0.8));
            tasaDeCompra.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_tasa_de_compra_gray.png"].texture);
          } else if(stages[2].style.display == "block") {
            stages[2].querySelector("#arrow-point-to-right-20").style.display = "none";
            stages[2].querySelector("#arrow-point-to-right-21").style.display = "none";
            stages[2].querySelector("#arrow-point-to-right-22").style.display = "none";
            stages[2].style.display = "none";
            stages[2].querySelector("#content_20").style.display = "none";
            stages[2].querySelector("#content_21").style.display = "none";
            stages[2].querySelector("#content_22").style.display = "none";
            appDiv.querySelector("#circle-tick-inside-1").style.display = "none";
            appDiv.querySelector("#circle-tick-inside-2").style.display = "none";
            app.stage.getChildByName("vSprites1").visible = false;

            app.stage.getChildByName("thing_1").visible = true;
            stages[1].style.display = "block";
            stages[1].querySelector("#arrow-point-to-right-12").style.display = "none";
            stages[1].querySelector("#arrow-point-to-right-10").style.display = "block";
            stages[1].querySelector("#content_12").style.display = "none";
            stages[1].querySelector("#content_10").style.display = "block";
            // stages[1].querySelector("#arrow-point-to-right-12").style.display = "none";
            // stages[1].querySelector("#arrow-point-to-right-10").style.display = "block";
            // stages[1].querySelector("#content_12").style.display = "none";
            // stages[1].querySelector("#content_10").style.display = "block";

            compraPromedio.scale.set(factorScreen(0.9));
            compraPromedio.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_compra_promedio.png"].texture);
            venta.scale.set(factorScreen(0.8));
            venta.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_venta_gray.png"].texture);
          }
        });


        // Venta boton
        venta.interactive = true;
        venta.buttonMode = true;
        venta.on("click", function() {
          if(stages[0].style.display == "block") {
            slider0.style.display = "none";
            stages[0].querySelector("#arrow-point-to-right-00").style.display = "none";
            stages[0].querySelector("#arrow-point-to-right-01").style.display = "none";
            stages[0].querySelector("#arrow-point-to-right-02").style.display = "none";
            stages[0].style.display = "none";
            stages[0].querySelector("#content_00").style.display = "none";
            stages[0].querySelector("#content_01").style.display = "none";
            stages[0].querySelector("#content_02").style.display = "none";
            app.stage.getChildByName("thing_0").visible = false;
            app.stage.getChildByName("interactiveSquares0").visible = false;
            document.getElementById("tcCts").style.display = "none";
            document.getElementById("tcPer").style.display = "none";

            app.stage.getChildByName("vSprites1").visible = true;
            stages[2].style.display = "block";
            stages[2].querySelector("#arrow-point-to-right-22").style.display = "none";
            stages[2].querySelector("#arrow-point-to-right-20").style.display = "block";
            stages[2].querySelector("#content_22").style.display = "none";
            stages[2].querySelector("#content_20").style.display = "block";
            stages[2].style.top = app.screen.height * 0.33 + "px";
            stages[2].style.left = app.screen.height * 0.1 + "px";
            venta.scale.set(factorScreen(0.9));
            venta.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_venta.png"].texture);
            tasaDeCompra.scale.set(factorScreen(0.8));
            tasaDeCompra.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_tasa_de_compra_gray.png"].texture);
          } else if(stages[1].style.display == "block") {
            slider1.style.display = "none";
            stages[1].querySelector("#arrow-point-to-right-10").style.display = "none";
            stages[1].querySelector("#arrow-point-to-right-11").style.display = "none";
            stages[1].querySelector("#arrow-point-to-right-12").style.display = "none";
            stages[1].style.display = "none";
            stages[1].querySelector("#content_10").style.display = "none";
            stages[1].querySelector("#content_11").style.display = "none";
            stages[1].querySelector("#content_12").style.display = "none";
            app.stage.getChildByName("thing_1").visible = false;
            app.stage.getChildByName("interactiveSquares1").visible = false;
            document.getElementById("cpSls").style.display = "none";

            app.stage.getChildByName("vSprites1").visible = true;
            stages[2].style.display = "block";
            stages[2].querySelector("#arrow-point-to-right-22").style.display = "none";
            stages[2].querySelector("#arrow-point-to-right-20").style.display = "block";
            stages[2].querySelector("#content_22").style.display = "none";
            stages[2].querySelector("#content_20").style.display = "block";
            stages[2].style.top = app.screen.height * 0.33 + "px";
            stages[2].style.left = app.screen.height * 0.1 + "px";
            venta.scale.set(factorScreen(0.9));
            venta.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_venta.png"].texture);
            compraPromedio.scale.set(factorScreen(0.8));
            compraPromedio.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_compra_promedio_gray.png"].texture);
          }
        });
      }});
    });
  }
  return self;
}
