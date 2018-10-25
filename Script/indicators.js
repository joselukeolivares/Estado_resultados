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
    tasaDeCompra.scale.set(scale1);
    app.stage.addChild(tasaDeCompra);

    compraPromedio.anchor.set(0.5);
    compraPromedio.x = app.screen.width / 2;
    compraPromedio.y = app.screen.height / 2;
    compraPromedio.scale.set(scale1);
    app.stage.addChild(compraPromedio);

    venta.anchor.set(0.5);
    venta.x = app.screen.width / 1.22;
    venta.y = app.screen.height / 2;
    venta.scale.set(scale1);
    app.stage.addChild(venta);


    let title = document.createElement("h1");
    title.setAttribute("class", "title");
    title.innerHTML = "Estado de Resultados de Clientes";
    title.setAttribute("style", "top: " +  app.screen.height * -0.02 + "px;");
    appDiv.appendChild(title);

    let subTitle = document.createElement("h3");
    subTitle.setAttribute("class", "subTitle");
    subTitle.innerHTML = "Indicadores principales";
    subTitle.setAttribute("style", "top: " + app.screen.height * 0.08  + "px;");
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
    letsGo.setAttribute("style", "top: " + app.screen.height * 0.5 + "px;");
    intro.appendChild(letsGo);

    appDiv.appendChild(intro);

    let contButton = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/b-continue.png")].texture);
    contButton.x = app.screen.width - 100;
    contButton.y = app.screen.height - 50;
    contButton.anchor.set(0.5);
    contButton.scale.set(0.6);
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

    let slider0, slider1;

    //This is where the for loop starts

    for (let i = 0; i < 3; i++) {
      stages[i] = document.createElement("div");
      stages[i].setAttribute("id", "stage " + i);
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
        content.setAttribute("id", "content_" + j);
        content.innerHTML = subTitles[i][j];
        if(j != 0) {
          content.style.display = "none";
        }
        stages[i].appendChild(content);

        let icRightArrow = document.createElement("img");
        icRightArrow.setAttribute("src", "assets/ui/Bloque_3/ic-arrow-point-to-right.svg");
        icRightArrow.setAttribute("id", "arrow-point-to-right-" + j);
        icRightArrow.setAttribute("class", "arrow-point-to-right");
        icRightArrow.setAttribute("style", "top: " + app.screen.height * 0.1  + "px; left: " + app.screen.width * 0.82  + "px;");
        icRightArrow.style.cursor = "pointer";
        if(j != 0) {
          icRightArrow.style.display = "none";
        }
        icRightArrow.addEventListener("click", function() {
          if(j != 2) {
            this.style.display = "none";
            stages[i].querySelector("#arrow-point-to-right-" + (j+1)).style.display = "block";
            stages[i].querySelector("#content_" + j).style.display = "none";
            stages[i].querySelector("#content_" + (j+1)).style.display = "block";
            if(i == 0 && j == 0) {
              slider0.style.display = "block";
            } else if (i == 1 && j == 0) {
              slider0.style.display = "none";
              slider1.style.display = "block";
            }
          } else {
            stages[i].style.display = "none";
            stages[i+1].style.display = "block";
            if(i == 0) {
              compraPromedio.scale.set(0.5);
              compraPromedio.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_compra_promedio.png"].texture);
              tasaDeCompra.scale.set(0.45);
              venta.scale.set(0.45);
              tasaDeCompra.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_tasa_de_compra_gray.png"].texture);
              venta.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_venta_gray.png"].texture);
              app.stage.getChildByName("thing_0").visible = false;
              app.stage.getChildByName("thing_1").visible = true;
            } else {
              venta.scale.set(0.5);
              venta.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_venta.png"].texture);
              tasaDeCompra.scale.set(0.45);
              compraPromedio.scale.set(0.45);
              tasaDeCompra.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_tasa_de_compra_gray.png"].texture);
              compraPromedio.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_compra_promedio_gray.png"].texture);
              app.stage.getChildByName("thing_1").visible = false;
              app.stage.getChildByName("thing_2").visible = true;
            }
          }
        });
        stages[i].appendChild(icRightArrow);

        // if (i != 2) {
        //   app.stage.addChild(things);
        // } else {
        //   let tdc = new PIXI.Sprite(PIXI.Texture.fromFrame("tasa_5.png"));
        //   tdc.scale.set(scale1);
        //   tdc.anchor.set(0.5);
        //   tdc.x = app.screen.width / 5;
        //   tdc.y = app.screen.height / 1.4;
        //   app.stage.addChild(tdc);
        //
        //   let tdcPer = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/tasa-50percent.png")].texture);
        //   tdcPer.scale.set(scale1 - 0.1);
        //   tdcPer.anchor.set(0.5);
        //   tdcPer.x = app.screen.width / 5;
        //   tdcPer.y = app.screen.height / 1.2;
        //   app.stage.addChild(tdcPer);
        //
        //   let timesIc = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/ic-times.png")].texture);
        //   timesIc.scale.set(scale1);
        //   timesIc.anchor.set(0.5);
        //   timesIc.x = app.screen.width / 2.7;
        //   timesIc.y = app.screen.height / 1.3;
        //   app.stage.addChild(timesIc);
        //
        //   let cp = new PIXI.Sprite(PIXI.Texture.fromFrame("compra_5.png"));
        //   cp.scale.set(scale1);
        //   cp.anchor.set(0.5);
        //   cp.x = app.screen.width / 2;
        //   cp.y = app.screen.height / 1.4;
        //   app.stage.addChild(cp);
        //
        //   cpnom = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/num-mil.png")].texture);
        //   cpnom.scale.set(scale1 - 0.1);
        //   cpnom.anchor.set(0.5);
        //   cpnom.x = app.screen.width / 2;
        //   cpnom.y = app.screen.height / 1.15;
        //   app.stage.addChild(cpnom);
        //
        //   let equalsIc = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/ic-equals.png")].texture);
        //   equalsIc.scale.set(scale1);
        //   equalsIc.anchor.set(0.5);
        //   equalsIc.x = app.screen.width / 1.6;
        //   equalsIc.y = app.screen.height / 1.3;
        //   app.stage.addChild(equalsIc);
        //
        //   let v = new PIXI.Sprite(PIXI.Texture.fromFrame("venta_50.png"));
        //   v.scale.set(scale1);
        //   v.anchor.set(0.5);
        //   v.x = app.screen.width / 1.3;
        //   v.y = app.screen.height / 1.4;
        //   app.stage.addChild(v);
        //
        //   vNum = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/num-500mil.png")].texture);
        //   vNum.scale.set(scale1 - 0.1);
        //   vNum.anchor.set(0.5);
        //   vNum.x = app.screen.width / 1.3;
        //   vNum.y = app.screen.height / 1.15;
        //   app.stage.addChild(vNum);
        // }
      }
      let things = new PIXI.Sprite(interactive[i]);
      things.scale.set(scale2);
      things.anchor.set(0.5);
      things.x = app.screen.width / 1.55;
      things.y = app.screen.height / 1.8;
      things.visible = false;
      things.name = "thing_" + i;
      app.stage.addChild(things);
      console.log(app.stage);



      stages[i].style.display = "none";
      appDiv.appendChild(stages[i]);
    }

      // stage[i] = new PIXI.Container();
      // stage[i].visible = false;
      // stage[i].name = "stage " + i;
      // let title = new PIXI.Text(titles[i], indiStyle);
      // title.anchor.set(0.5);
      // title.x = app.screen.width / 3.5;
      // title.y = app.screen.height / 2;
      // if (i == 2) {
      //   title.x = app.screen.width / 2;
      //   title.y = app.screen.height / 2.5;
      // }
      // stage[i].addChild(title);

      // for (let j = 0; j < 3; j++) {
      //   scenes[j] = new PIXI.Container();
      //   scenes[j].visible = false;
      //   scenes[j].name= "scene " + j;
      //   if(j == 0) scenes[j].visible = true;
      //   // let sub = new PIXI.Text(subTitles[i][j], {
      //   //   fontFamily: "Roboto",
      //   //   fill: "#FFFFFF",
      //   //   fontSize: 18,
      //   //   wordWrap: true,
      //   //   wordWrapWidth: 350,
      //   //   align: "center"
      //   // });
      //   // sub.anchor.set(0.5);
      //   // sub.x = app.screen.width / 3.5;
      //   // sub.y = app.screen.height / 1.5;
      //   if (i == 2) {
      //     let color;
      //     j != 0 ? color = "#E7C82F" : color = "#FFFFFF";
      //
      //     if (j != 2) {
      //       // sub = new PIXI.Text(subTitles[i][j], {
      //       //   fontFamily: "Roboto-Regular",
      //       //   fill: color,
      //       //   fontSize: 18,
      //       //   wordWrap: true,
      //       //   wordWrapWidth: 650,
      //       //   align: "center"
      //       // });
      //     } else {
      //       // sub = new PIXI.Text(subTitles[i][j], {
      //       //   fontFamily: "Roboto-Regular",
      //       //   fill: color,
      //       //   fontSize: 18,
      //       //   wordWrap: true,
      //       //   wordWrapWidth: 650
      //       // });
      //     }
      //     // sub.anchor.set(0.5);
      //     // sub.x = app.screen.width / 2;
      //     // sub.y = app.screen.height / 2;
      //   }
      //   // scenes[j].addChild(sub);
      //
      //
      //
      //     if(j == 2) {
      //       let icBack = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/ic-left-arrow-circular.png")].texture);
      //       icBack.anchor.set(0.5);
      //       icBack.x = app.screen.width / 14;
      //       icBack.y = app.screen.height / 2.3;
      //       icBack.interactive = true;
      //       icBack.cursor = "pointer";
      //       icBack.visible = false;
      //       scenes[j].addChild(icBack);
      //
      //       icBack.on("click", function () {
      //         this.parent.children[0].text = "En el primer escenario mantenemos la Tasa de Compra igual pero aumentamos la Compra Promedio a $2,000.00.\n\nEn el segundo escenario aumentamos la Tasa de Compra al 80% y una Compra Promedio de $1,400.00.";
      //         this.parent.children[11].visible = true;
      //         this.parent.children[10].visible = true;
      //         icBack.visible = false;
      //       });
      //
      //       let circle1 = new PIXI.Graphics();
      //       circle1.beginFill(0x175383);
      //       circle1.lineStyle(2, 0xE7C82F);
      //       circle1.drawCircle(0, 0, 12);
      //       circle1.endFill();
      //       circle1.x = app.screen.width / 15;
      //       circle1.y = app.screen.height / 2.3;
      //       scenes[j].addChild(circle1);
      //       circle1.interactive = true;
      //       circle1.cursor = "pointer";
      //       circle1.on("click", function () {
      //         cpnom.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/num-2mil.png")].texture);
      //         vNum.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/num-millon.png")].texture);
      //         this.parent.children[0].text = "Incorecto! Si nos enfocamos solamente a que el Cliente nos compre más, corremos el riesgo de no mantenerlo, esto por que no estamos otorgando un servicio adecuado para que más Clientes nos compren.";
      //         this.parent.children[11].visible = false;
      //         this.parent.children[10].visible = false;
      //         icBack.visible = true;
      //       });
      //       circle1.on("mouseover", function () {
      //         circle1.clear();
      //         circle1.beginFill(0xE7C82F);
      //         circle1.lineStyle(2, 0xE7C82F);
      //         circle1.drawCircle(0, 0, 12);
      //         scenes[j].addChild(circle1);
      //       });
      //       circle1.on("mouseout", function () {
      //         circle1.clear();
      //         circle1.beginFill(0x175383);
      //         circle1.lineStyle(2, 0xE7C82F);
      //         circle1.drawCircle(0, 0, 12);
      //         scenes[j].addChild(circle1);
      //       });
      //
      //       let circle2 = new PIXI.Graphics();
      //       circle2.beginFill(0x175383);
      //       circle2.lineStyle(2, 0xE7C82F);
      //       circle2.drawCircle(0, 0, 12);
      //       circle2.endFill();
      //       circle2.x = app.screen.width / 15;
      //       circle2.y = app.screen.height / 1.83;
      //       scenes[j].addChild(circle2);
      //       circle2.interactive = true;
      //       circle2.cursor = "pointer";
      //       circle2.on("click", function () {
      //         tdcPer.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/tasa-80percent.png")].texture);
      //         cpnom.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/num-mil400.png")].texture);
      //         vNum.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/num-1millon120.png")].texture);
      //         this.parent.children[0].text = "Correcto! si otorgamos un mejor servicio al cliente y aumentamos la Tasa de Compra y la Compra Promedio significativamente, el resultado es mejor, además tomamos en cuenta que la posibilidad de que un Cliente continue comprando es más alta.";
      //         this.parent.children[11].visible = false;
      //         this.parent.children[10].visible = false;
      //         icBack.visible = true;
      //         var continue_button=new PIXI.Sprite(PIXI.loader.resources["assets/ui/Bloque_3/b-continue.png"].texture);
      //
      //             continue_button.x=app.screen.width*.85;
      //             continue_button.y=app.screen.height*.9;
      //             continue_button.buttonMode=true;
      //             continue_button.interactive=true;
      //             continue_button.scale.set(.6);
      //             continue_button.on("pointerdown",function(){
      //                   toSlide("segmentacion");
      //             });
      //             self.app.stage.addChild(continue_button);
      //       });
      //       circle2.on("mouseover", function () {
      //         circle2.clear();
      //         circle2.beginFill(0xE7C82F);
      //         circle2.lineStyle(2, 0xE7C82F);
      //         circle2.drawCircle(0, 0, 12);
      //         scenes[j].addChild(circle2);
      //       });
      //       circle2.on("mouseout", function () {
      //         circle2.clear();
      //         circle2.beginFill(0x175383);
      //         circle2.lineStyle(2, 0xE7C82F);
      //         circle2.drawCircle(0, 0, 12);
      //         scenes[j].addChild(circle2);
      //       });
      //     }
      //   }
      //   if(j == 1 && i != 2) {
      //     Slider(document.getElementById("aplicacion"), scenes[j], i);
      //   }
      //
      //   if (j == 1) {
      //     let retry;
      //     if (i != 2) {
      //       retry = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/ic-retry.png")].texture);
      //       retry.x = app.screen.width *.9;
      //       retry.y = app.screen.height / 1.3;
      //     } else {
      //       retry = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/ic-next.png")].texture);
      //       retry.scale.set(scale1);
      //       retry.x = app.screen.width *.9;
      //       retry.y = app.screen.height / 1.75;
      //       retry.on("mouseover", function() {
      //         retry.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/ic-next-selected.png")].texture);
      //       });
      //       retry.on("mouseout", function () {
      //         retry.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/ic-next.png")].texture);
      //       });
      //     }
      //
      //
      //     retry = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/Bloque_3/ic-next.png")].texture);
      //     retry.scale.set(scale1);
      //     retry.x = app.screen.width *.9;
      //     retry.y = app.screen.height / 1.75;
      //     retry.on("mouseover", function() {
      //       retry.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/ic-next-selected.png")].texture);
      //     });
      //     retry.on("mouseout", function () {
      //       retry.setTexture(PIXI.loader.resources[("assets/ui/Bloque_3/ic-next.png")].texture);
      //     });
      //
      //     retry.anchor.set(0.5);
      //     retry.interactive = true;
      //     retry.cursor = "pointer";
      //     scenes[j].addChild(retry);
      //     retry.on("click", function() {
      //
      //       TweenMax.to(this.parent, 0.2, {pixi: {alpha: 0}, onComplete: () => {
      //         this.parent.visible = false;
      //
      //         let uncle = this.parent.parent.getChildByName("scene " + (j + 1));
      //         uncle.visible = true;
      //
      //         if (i != 2) uncle.addChild(this.parent.getChildByName("rects_container"));
      //
      //         TweenMax.fromTo(uncle, 0.2, {pixi: {alpha: 0}}, {pixi: {alpha: 1}});
      //       }});
      //     });
      //   }
      //
      //   if(j == 0) {
      //     let rightArrow = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/Bloque_3/ic-right-arrow.png"));
      //     rightArrow.scale.set(0.5);
      //     rightArrow.anchor.set(0.5);
      //     rightArrow.name = "Arrow" + i + "_" + j;
      //     rightArrow.x = app.screen.width / 1.05;
      //     rightArrow.y = app.screen.height / 2;
      //     if (i == 2) {
      //       rightArrow.x = app.screen.width / 1.1;
      //       rightArrow.y = app.screen.height / 1.2;
      //     }
      //     rightArrow.interactive = true;
      //     rightArrow.buttonMode = true;
      //     scenes[j].addChild(rightArrow);
      //     rightArrow.on("click", function() {
      //       let uncle = this.parent.parent.getChildByName("scene " + (j + 1));
      //       TweenMax.to(this.parent, 0.2, {pixi: {alpha: 0}, onComplete: () => {
      //         this.parent.visible = false;
      //
      //         uncle.visible = true;
      //         TweenMax.fromTo(uncle, 0.2, {pixi: {alpha: 0}}, {pixi: {alpha: 1}});
      //       }});
      //
      //       if(i == 0) {
      //         slider0 = document.getElementById("slider_0");
      //         slider0.style.display = "block";
      //       } else if (i == 1) {
      //         slider1 = document.getElementById("slider_1");
      //
      //         uncle.children[2].children[0].visible=false;
      //         uncle.children[2].children[2].visible=false;
      //         uncle.children[2].children[3].visible=false;
      //         uncle.children[2].children[1].visible=true;
      //
      //         uncle.children[2].children[4].x=width*.67;
      //         uncle.children[2].children[4].y=height*.77;
      //         uncle.children[2].children[4].style={fill:"Black",fontSize:factorScreen(40),fontFamily:"Roboto-Regular"};
      //         uncle.children[2].children[4].text="$1,000.00";
      //         uncle.children[2].children[4].name="compraPromedioTXT";
      //         slider1.style.display = "block";
      //       }
      //
      //     });
      //   }
        //app.stage.addChild(scenes[j]);

    contButton.on("pointertap", function() {
      contButton.visible = false;
      TweenMax.to(intro, 0.2, {alpha: 0});
      TweenMax.to([tasaDeCompra, compraPromedio, venta], 0.7, {y: (app.screen.height * 62) / 220, onComplete: function () {
        intro.style.display = "none";
        stages[0].style.display = "block";
        TweenMax.fromTo(stages[0], 0.2, {alpha: 0}, {alpha: 1});
        tasaDeCompra.scale.set(0.5);
        compraPromedio.scale.set(0.45);
        venta.scale.set(0.45);
        compraPromedio.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_compra_promedio_gray.png"].texture);
        venta.setTexture(PIXI.loader.resources["assets/ui/Bloque_3/b_venta_gray.png"].texture);
        app.stage.getChildByName("thing_0").visible = true;
        //Tasa de compra boton
        // tasaDeCompra.interactive = true;
        // tasaDeCompra.buttonMode = true;
        // tasaDeCompra.on("click", function() {
        //   if(stage[1].visible) {
        //     if(stage[1].children[2].visible) {
        //       slider1.style.display = "none";
        //       stage[1].children[2].visible = false;
        //       stage[1].children[2].alpha = 0;
        //     } else if (stage[1].children[3].visible) {
        //       slider1.style.display = "none";
        //       stage[1].children[3].visible = false;
        //       stage[1].children[3].alpha = 0;
        //     }
        //     TweenMax.to(stage[1], 0.3, {pixi: {alpha: 0}, onComplete: function() {
        //       stage[1].visible = false;
        //       stage[0].visible = true;
        //       TweenMax.to(stage[0], 0.3, {pixi: {alpha: 1}});
        //       stage[0].children[1].visible = true;
        //       stage[0].children[1].alpha = 1;
        //     }});
        //     tasaDeCompra.alpha = 0.5;
        //     compraPromedio.alpha = 1;
        //   } else if(stage[2].visible) {
        //     if(stage[2].children[2].visible) {
        //       //slider2.style.display = "none";
        //       stage[2].children[2].visible = false;
        //       stage[2].children[2].alpha = 0;
        //     } else if(stage[2].children[3].visible) {
        //       //slider2.style.display = "none";
        //       stage[2].children[3].visible = false;
        //       stage[2].children[3].alpha = 0;
        //     }
        //     TweenMax.to(stage[2], 0.3, {pixi: {alpha: 0}, onComplete: function() {
        //       stage[2].visible = false;
        //       stage[0].visible = true;
        //       TweenMax.to(stage[0], 0.3, {pixi: {alpha: 1}});
        //
        //       stage[0].children[1].visible = true;
        //       stage[0].children[1].alpha = 1;
        //     }});
        //     tasaDeCompra.alpha = 0.5;
        //     venta.alpha = 1;
        //   }
        // });

        //Compra promedio boton
        compraPromedio.interactive = true;
        compraPromedio.buttonMode = true;
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
        venta.buttonMode = true;
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
          compraPromedio.interactive = false;
          compraPromedio.buttonMode = false;
        });

      }});
    });
  }
  return self;
}
