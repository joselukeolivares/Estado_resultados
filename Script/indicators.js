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
    let scale1 = factorScreen(.6);
    let scale2 = factorScreen(1);
    let tasaDeCompra = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/bloque_3/b_tasa_de_compra.png")].texture);
    let compraPromedio = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/bloque_3/b_compra_promedio.png")].texture);
    let venta = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/bloque_3/b_venta.png")].texture);

    tasaDeCompra.anchor.set(0.5);
    tasaDeCompra.name = "tasaDeCompraSprite";
    tasaDeCompra.x = app.screen.width / 5.5;
    tasaDeCompra.y = app.screen.height *.45;
    tasaDeCompra.scale.set(factorScreen(0.7));
    app.stage.addChild(tasaDeCompra);

    compraPromedio.anchor.set(0.5);
    compraPromedio.name="compraPromedioSprite";
    compraPromedio.x = app.screen.width / 2;
    compraPromedio.y = tasaDeCompra.y
    compraPromedio.scale.set(factorScreen(0.6));
    app.stage.addChild(compraPromedio);

    venta.anchor.set(0.5);
    venta.name = "ventaSprite";
    venta.x = app.screen.width / 1.22;
    venta.y = tasaDeCompra.y
    venta.scale.set(factorScreen(0.6));
    app.stage.addChild(venta);


    let title = document.createElement("h1");
    title.setAttribute("class", "title");
    title.setAttribute("id", "titleIndicator");
    title.innerHTML = "Estado de Resultados de Clientes";
    title.setAttribute("style", "top: " +  (app.screen.height * 0.05) + "px;");
    appDiv.appendChild(title);

    let subTitle = document.createElement("h3");
    subTitle.setAttribute("class", "subTitle");
    subTitle.innerHTML = "Indicadores Principales";
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

    let contButton = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/bloque_3/b-continue.png")].texture);

    contButton.x = self.app.screen.width-100;
    contButton.y = self.app.screen.height-50;
    contButton.anchor.set(0.5);
    contButton.scale.set(factorScreen(0.6));
    contButton.interactive = true;
    contButton.cursor = "pointer";
    app.stage.addChild(contButton);
    //contButton.x = app.screen.width-contButton.width;

    contButton.on("mouseover", function () {
      contButton.setTexture(PIXI.loader.resources[("assets/ui/bloque_3/b-continue-selected.png")].texture);
    });
    contButton.on("mouseout", function () {
      contButton.setTexture(PIXI.loader.resources[("assets/ui/bloque_3/b-continue.png")].texture);
    });

    let stage = [];
    let stages = [];

    let titles = ["Tasa de Compra", "Compra Promedio", "Venta"];
    let subTitles = [["Indica el número total de Clientes que compra en un periodo determinado. Se calcula dividiendo el número de Clientes que compraron sobre el número de Clientes totales.",
                    "Imagina que, en enero la empresa tiene un total de 1,000 clientes y para el mes de Junio 500  clientes han realizado al menos una compra, esto significa una tasa de compra del 50%.",
                    "Como puedes observar, una mayor tasa de compra indica que más clientes están comprando y en sentido contrario, una menor tasa de compra indica menos clientes comprando."],
                    ["Indica la compra promedio que realizaron los Clientes (que compraron) en un periodo. Se calcula dividiendo las ventas totales sobre el número de Clientes que compraron.",
                    "De los 500 clientes que han comprado, en conjunto generan una compra promedio de $1,000.00.",
                    "Claro, una mayor compra promedio indica más volumen de venta y en sentido contrario, menor compra promedio indica menos volumen de venta."],
                    ["Indica las ventas totales de clientes que compraron en un periodo.<br>Se calcula multiplicando la Tasa de Compra (Número de clientes) por la Compra Promedio.",
                    "Teniendo una Tasa de Compra del 50% (500 Clientes) y Compra Promedio de $1,000.00 se generan ventas por $500,000.00. En este caso, pensando en crear una estrategia enfocada al cliente, ¿Qué indicador manipularías para incrementar las ventas? ....",
                    "Escenario 1. Aumentar la Tasa de Compra a 80%. (Incremento de Clientes comprando)","Escenario 2. Aumentar la Compra Promedio Anual a $2,000.00. (Incremento de la compra)"]];

    let interactive = [PIXI.Texture.fromFrame("tasa_5.png"),
                          PIXI.Texture.fromFrame("compra_5.png"),
                          PIXI.Texture.fromFrame("venta_50.png")];

    let slider0, slider1;

    //This is where the for loop starts

    for (let i = 0; i < 3; i++) {
      stages[i] = document.createElement("div");
      stages[i].setAttribute("id", "stage_" + i);
      stages[i].setAttribute("class", "stages");
      //stages[i].setAttribute("style", "top: " + app.screen.height * 0.35  + "px;");

      let title = document.createElement("h2");
      if(i != 2) {
        //title.setAttribute("class", "content");
      }
      title.innerHTML = titles[i];
      stages[i].appendChild(title);

      if(i != 2) {
        slider(appDiv, app.stage, i);
      }
      slider0 = document.getElementById("slider_0");
      slider1 = document.getElementById("slider_1");
      var tope=2;
      if(i==2){
        tope=3;
        title.style.marginBottom="0px";
      }
      for(let j = 0; j < tope; j++) {
        let content = document.createElement("p");
        content.setAttribute("class", "content");
        content.setAttribute("id", "content_" + i + j);
        content.innerHTML = subTitles[i][j];
        if(j != 0) {
          content.style.display = "none";
        }
        stages[i].appendChild(content);

        let icRightArrow = document.createElement("img");
        icRightArrow.setAttribute("src", "assets/ui/bloque_3/ic-arrow-point-to-right.png");
        icRightArrow.setAttribute("id", "arrow-point-to-right-" + i + j);
        icRightArrow.setAttribute("class", "arrow-point-to-right parpadeo arrow-anim");
        //icRightArrow.setAttribute("style", "top: " + app.screen.height * 0.1  + "px; left: calc(200% - 5rem)");

        // icRightArrow.addEventListener("mouseover", function() {
        //   this.ClassList.toggle("arrow-anim");
        // });

        if(i == 2) {
          icRightArrow.style.right="-4rem";
          icRightArrow.style.left="";
        }

        icRightArrow.indicator_i = i;
        icRightArrow.indicator_j = j;

        let stepBack = document.createElement("img");
        stepBack.setAttribute("src", "assets/ui/bloque_3/ic-arrow-point-to-right.png");
        stepBack.setAttribute("id", "stepBack" + i + j);
        stepBack.indicator_i=i;
        stepBack.indicator_j=j;
        stepBack.setAttribute("class", "step-back-arrow parpadeo");
        stepBack.setAttribute("style", "display: none;");
        stepBack.addEventListener('pointerdown',function(){
          let indicator_i = this.indicator_i;
          let indicator_j = this.indicator_j;
          //debugger;
          if(indicator_j-1>0) {

            goToIndicator(this.indicator_i,j,1)
          }else{
            if(indicator_j-1<=0){
              appDiv.querySelector("#stepBack" + i +""+ (1)).style.display = "none";
              stages[i].querySelector("#content_"+i+""+j).innerHTML=subTitles[i][j];
              if(indicator_i==0){
                self.tasaCompra_();
              }else if(indicator_i==1){
                self.compraPromedio_();
              }else if(indicator_i==2){
                self.venta_();
              }
            }
          }

        })


        if(i == 2) {
          var arrow0=document.getElementById('arrow-point-to-right-00');
        }
        if(j != 0) {
          icRightArrow.style.display = "none";
        }
        if(i==2 && j==2){

        }else{
          icRightArrow.addEventListener("click",function(){
            goToIndicator(icRightArrow.indicator_i,icRightArrow.indicator_j,0)
          } )

        }

        function goToIndicator(i,j,direction) {
          //debugger;
          if(i<2 && j!=0 && !direction){
            j=2;
          }

          let alter=0;
          if(direction){
            alter=-2;
          }

          if(j != 2 ||direction) {

            appDiv.querySelector("#arrow-point-to-right-" + i + (j)).style.display = "none";
            if(!direction){
              //if(i==2)
              appDiv.querySelector("#stepBack" + i + (j+1+alter)).style.display = "block";
              if(j!=0)
              appDiv.querySelector("#stepBack" + i + (j)).style.display = "none";
            }else {
              appDiv.querySelector("#stepBack" + i + (j)).style.display = "none";
              if(j!=1)
              appDiv.querySelector("#stepBack" + i + (j+1+alter)).style.display = "block";

              if(i==2 && j==2){
                let arrowR=appDiv.querySelector("#arrow-point-to-right-21");
                arrowR.style.display = "block";

              }
            }

            stages[i].querySelector("#content_" + i + j).style.display = "none";
            stages[i].querySelector("#content_" + i + (j+1+alter)).style.display = "block";

            if(i==2 && j==2 && direction){
              circle1.style.display = "none";
              circle2.style.display = "none";
              //var divparent=document.getElementById("content_2"+(j+1+alter)).parentNode;
              //var divobt=document.getElementById("content_2"+(j+1+alter));
              var content=document.getElementById("content_23")
                  content.style.display="none";
            }

            /*
            if(i==0 && j==1){
              let arrowR=stages[i].querySelector("#arrow-point-to-right-0"+(j+1+alter));
              arrowR.style.display = "block";
            }else if(i==1 && j==1){
              let arrowR=stages[i].querySelector("#arrow-point-to-right-1"+(j+1+alter));
              arrowR.style.display = "block";
            }
            */


            //if(i == 0 && j == 0) {
            let tutor_hand;
            if(i == 0) {
              tutor_hand=slider0.childNodes[2];
              slider0.style.display = "block";
                  //tutor_hand.classList.add("tutor_hand_anima");
                  tutor_hand.addEventListener("animationend",function(){
                    tutor_hand.classList.remove("tutor_hand_anima");
                  });
                  tutor_hand.addEventListener("mouseover",()=>{
                    tutor_hand.classList.add("tutor_hand_anima");
                  })


              app.stage.getChildByName("interactiveSquares"+i).visible = true;
              document.getElementById("tcCts").style.display = "block";
              document.getElementById("tcPer").style.display = "block";
            //} else if(i == 0 && j == 1){

              var tl=new TimelineMax({repeat:5,delay:1,onComplete:function(){
                TweenLite.to(slider0.childNodes[1],1,{opacity:1});
                }})
              tl.to(slider0.childNodes[1],.5,{opacity:.1});
            } else if (i == 1 && j == 0) {
              slider1.style.display = "block";
              tutor_hand=slider1.childNodes[2];

                  //tutor_hand.classList.add("tutor_hand_anima");
                  tutor_hand.addEventListener("animationend",function(){
                    tutor_hand.classList.remove("tutor_hand_anima");
                  });
                  tutor_hand.addEventListener("mouseover",()=>{
                    tutor_hand.classList.add("tutor_hand_anima");
                  })

              var tl=new TimelineMax({repeat:5,delay:1,onComplete:function(){
                TweenLite.to(slider1.childNodes[1],1,{opacity:1});
                }})
              tl.to(slider1.childNodes[1],.5,{opacity:.1});

              app.stage.getChildByName("interactiveSquares1").visible = true;
              document.getElementById("cpSls").style.display = "block";
            }else if(i == 1 && j == 1){
              var tl=new TimelineMax({repeat:5,delay:1,onComplete:function(){
                TweenLite.to(slider1.childNodes[1],1,{opacity:1});
                }})
              tl.to(slider1.childNodes[1],.5,{opacity:.1});
            }else if(i == 2 && j == 0) {
              appDiv.querySelector("#arrow-point-to-right-2"+(j+1+alter)).style.display = "block";
              var vSprites=app.stage.getChildByName("vSprites"+(j+1+alter));
              vSprites.visible=true;
              app.stage.getChildByName("vSprites"+j).visible=false;
            } else if(i == 2 && j == 1) {
              circle1.style.display = "block";
              circle2.style.display = "block";

              /*
              var tl=new TimelineMax({repeat:5,delay:1,onComplete:function(){
                TweenLite.to([circle1,circle2],1,{opacity:1});
                }})
              tl.to([circle1,circle2],.5,{opacity:.1});
              */
              var divparent=document.getElementById("content_2"+(j+1+alter)).parentNode;
              var divobt=document.getElementById("content_2"+(j+1+alter));
              var content=document.getElementById("content_2"+(j+2+alter))
                  content.style.display="block";



              //circle1.style.left = circle1.parentNode.clientWidth * 0.33 - circle1.clientWidth + "px";
              //circle1.style.marginTop="1%";
              circle1.style.top=divobt.offsetTop+"px";
              //debugger;
              //circle2.style.left =circle1.style.left;
              //circle2.style.marginTop="1%";
              circle2.style.top = content.offsetTop+"px";




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

            if(i!=2){
               stages[i+1].style.display = "block";

               if(appDiv.querySelector("#arrow-point-to-right-" + (i+1) + 0).style.display == "none") {
                 appDiv.querySelector("#arrow-point-to-right-" + (i+1) + 0).style.display = "block";
                 stages[i+1].querySelector("#content_" + (i+1) + 0).style.display = "block";
               }
            }

            if(i == 0) {
              compraPromedio.scale.set(factorScreen(0.7));
              compraPromedio.setTexture(PIXI.loader.resources["assets/ui/bloque_3/b_compra_promedio.png"].texture);
              tasaDeCompra.scale.set(factorScreen(0.6));
              venta.scale.set(factorScreen(0.6));
              tasaDeCompra.setTexture(PIXI.loader.resources["assets/ui/bloque_3/b_tasa_de_compra_gray.png"].texture);
              venta.setTexture(PIXI.loader.resources["assets/ui/bloque_3/b_venta_gray.png"].texture);
              app.stage.getChildByName("thing_0").visible = false;
              app.stage.getChildByName("thing_1").visible = true;
            } else if(i == 1) {
              venta.scale.set(factorScreen(0.7));
              venta.setTexture(PIXI.loader.resources["assets/ui/bloque_3/b_venta.png"].texture);
              tasaDeCompra.scale.set(factorScreen(0.6));
              compraPromedio.scale.set(factorScreen(0.6));
              tasaDeCompra.setTexture(PIXI.loader.resources["assets/ui/bloque_3/b_tasa_de_compra_gray.png"].texture);
              compraPromedio.setTexture(PIXI.loader.resources["assets/ui/bloque_3/b_compra_promedio_gray.png"].texture);
              app.stage.getChildByName("thing_1").visible = false;
              //vSprites.visible = true;
              //stages[2].style.top = app.screen.height * 0.4 + "pfx";
              //stages[2].style.left = app.screen.height * 0.1 + "px";
            }

          }
        };
        appDiv.appendChild(icRightArrow);
        if(j!=0)
        appDiv.appendChild(stepBack);
      }

      let things = new PIXI.Sprite(interactive[i]);
      things.scale.set(scale2);
      things.anchor.set(0.5);
      things.visible = false;
      things.name = "thing_" + i;

      if(i == 0) {
        let container = app.stage.getChildByName("interactiveSquares0");
        let tcSquare = container.getChildByName("tc_square");
        things.x = tcSquare.x + (tcSquare.width * 0.5);
        things.y = tcSquare.y - (tcSquare.height * 1.1);
      } else if(i == 1) {
        let container = app.stage.getChildByName("interactiveSquares1");
        let cpSquare = container.getChildByName("cp_square");
        things.x = cpSquare.x + (cpSquare.width * 0.5);
        things.y = cpSquare.y - (cpSquare.height * 1.3);
      }

      app.stage.addChild(things);

      let vSprites = new PIXI.Container();
      vSprites.name = "vSprites" + i;
      vSprites.visible = false;

      let tdc = new PIXI.Sprite(PIXI.Texture.fromFrame("tasa_5.png"));
      tdc.scale.set(scale1);
      tdc.anchor.set(0.5);
      tdc.x = app.screen.width / 5;
      tdc.y = app.screen.height / 1.3;
      vSprites.addChild(tdc);

      let tdcPer = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/bloque_3/tasa-50percent.png")].texture);
      tdcPer.scale.set(scale1 - 0.1);
      tdcPer.anchor.set(0.5);
      tdcPer.name = "tdcPer";
      tdcPer.x = app.screen.width / 5;
      tdcPer.y = app.screen.height / 1.15;
      vSprites.addChild(tdcPer);

      let timesIc = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/bloque_3/ic-times.png")].texture);
      timesIc.scale.set(scale1);
      timesIc.anchor.set(0.5);
      timesIc.x = app.screen.width / 2.7;
      timesIc.y = tdc.y;
      vSprites.addChild(timesIc);

      let cp = new PIXI.Sprite(PIXI.Texture.fromFrame("compra_5.png"));
      cp.scale.set(scale1);
      cp.anchor.set(0.5);
      cp.x = app.screen.width / 2;
      cp.y = tdc.y;
      vSprites.addChild(cp);

      cpnom = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/bloque_3/num-mil.png")].texture);
      cpnom.scale.set(scale1 - 0.1);
      cpnom.anchor.set(0.5);
      cpnom.name = "cpnom";
      cpnom.x = app.screen.width / 2;
      cpnom.y = app.screen.height / 1.12;
      vSprites.addChild(cpnom);


      let equalsIc = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/bloque_3/ic-equals.png")].texture);
      equalsIc.scale.set(scale1);
      equalsIc.anchor.set(0.5);
      equalsIc.x = app.screen.width / 1.6;
      equalsIc.y = tdc.y;
      vSprites.addChild(equalsIc);

      let v = new PIXI.Sprite(PIXI.Texture.fromFrame("venta_50.png"));
      v.scale.set(scale1);
      v.anchor.set(0.5);
      v.x = app.screen.width / 1.3;
      v.y = tdc.y;
      vSprites.addChild(v);

      vNum = new PIXI.Sprite(PIXI.loader.resources[("assets/ui/bloque_3/num-500mil.png")].texture);
      vNum.scale.set(scale1 - 0.1);
      vNum.anchor.set(0.5);
      vNum.name = "vNum";
      vNum.x = app.screen.width / 1.3;
      vNum.y = cpnom.y;
      vSprites.addChild(vNum);

      app.stage.addChild(vSprites);



      stages[i].style.display = "none";
      appDiv.appendChild(stages[i]);
    }

    let circle1 = document.createElement("img");
    circle1.setAttribute("src", "assets/ui/bloque_3/ic-tick-inside-circle.svg");
    circle1.setAttribute("class", "circle-tick-inside parpadeo");
    circle1.setAttribute("id", "circle-tick-inside-1");



    circle1.style.display = "none";

    document.getElementById('stage_2').appendChild(circle1);

    let circle2 = document.createElement("img");
    circle2.setAttribute("src", "assets/ui/bloque_3/ic-tick-inside-circle.svg");
    circle2.setAttribute("class", "circle-tick-inside parpadeo");
    circle2.setAttribute("id", "circle-tick-inside-2");
    circle2.style.display = "none";
    document.getElementById('stage_2').appendChild(circle2);

    let titleContent = document.getElementById("titleIndicator");
    let actualContent = document.getElementById("content_22");
    //actualContent.ClassList.add("parpadeo")
    //actualContent.style.top=(titleContent.clientTop+titleContent.clientHeight)+"px;";
    //actualContent.style.left="32%";
    //actualContent.style.margin="1%";
    //actualContent.style.width="44%";
    // actualContent.style.position="absolute";
    actualContent.style.cursor="pointer";
    actualContent.style.textAlignLast="left";
    actualContent.style.textAlign="left";
    //debugger;

    let content = document.createElement("p");
    //content.setAttribute("class", "content");
    content.setAttribute("id", "content_23");
    content.innerHTML=subTitles[2][3];
    content.style.left = document.getElementById("content_22").style.left;

    content.style.color="rgb(231, 200, 47)";
    content.style.display="none";
    document.getElementById('stage_2').appendChild(content);


    circle1.addEventListener("click",circle_1);
    actualContent.addEventListener("click",circle_1);

      function circle_1() {
      self.offStepBack();
      let vSprites = app.stage.getChildByName("vSprites1");

      vSprites.getChildByName("tdcPer").setTexture(PIXI.loader.resources[("assets/ui/bloque_3/tasa-80percent.png")].texture);
      vSprites.getChildByName("cpnom").setTexture(PIXI.loader.resources[("assets/ui/bloque_3/num-mil.png")].texture);
      vSprites.getChildByName("vNum").setTexture(PIXI.loader.resources[("assets/ui/bloque_3/num-800mil.png")].texture);
      let actualContent = document.getElementById("content_22");
      actualContent.innerHTML = "Bien, aumentar a 80% la Tasa de Compra incrementa las ventas a $800,000.00.<br>No debemos olvidar, que para incrementar las ventas es muy importante una estrategia integral e impulsar ambos indicadores, combinada por un mayor volumen de clientes y cantidad de compra, potencializando un incremento en ventas.";
      circle1.style.display = "none";
      circle2.style.display = "none";
      content.style.display = "none";

      let icBack = document.createElement("img");
      icBack.setAttribute("src", "assets/ui/bloque_3/ic-arrow-point-to-right.png");
      icBack.setAttribute("class", "step-back-arrow parpadeo");
      icBack.setAttribute("id", "icBack");
      appDiv.appendChild(icBack);
      icBack.style.display = "block";

      icBack.addEventListener("pointerdown", function() {
        var back = appDiv.querySelector("#stepBack22");
            back.style.display = "block";
        actualContent.innerHTML = subTitles[2][2];

        circle1.style.display = "block";
        content.style.display = "block";
        circle2.style.display = "block";
        appDiv.querySelector("#arrow-point-to-right-22").style.display = "block";
        icBack.style.display = "none";
        vSprites.getChildByName("tdcPer").setTexture(PIXI.loader.resources[("assets/ui/bloque_3/tasa-50percent.png")].texture);
        vSprites.getChildByName("cpnom").setTexture(PIXI.loader.resources[("assets/ui/bloque_3/num-mil.png")].texture);
        vSprites.getChildByName("vNum").setTexture(PIXI.loader.resources[("assets/ui/bloque_3/num-500mil.png")].texture);

      });

      appDiv.querySelector("#arrow-point-to-right-22").style.display = "block";
      document.getElementById("arrow-point-to-right-22").addEventListener("pointerdown", function() {
        toSlide("segmentacion");
        circle4.style.backgroundColor = "white";
		    circle2.style.backgroundColor = "gray";
		    circle1.style.backgroundColor = "gray";
		    circle3.style.backgroundColor = "gray";
		    circle5.style.backgroundColor = "gray";
		    circle6.style.backgroundColor = "gray";
		    circle7.style.backgroundColor = "gray";
      });
    };

    circle2.addEventListener("click",circle_2);
    content.addEventListener("click",circle_2);

    document.getElementById("arrow-point-to-right-22").addEventListener("pointerdown", function() {
      toSlide("segmentacion");
    });

     function circle_2() {
       self.offStepBack();
      let vSprites = app.stage.getChildByName("vSprites1");
      //vSprites.getChildByName("tdcPer").setTexture(PIXI.loader.resources[("assets/ui/bloque_3/tasa-80percent.png")].texture);
      vSprites.getChildByName("cpnom").setTexture(PIXI.loader.resources[("assets/ui/bloque_3/num-2mil.png")].texture);
      vSprites.getChildByName("vNum").setTexture(PIXI.loader.resources[("assets/ui/bloque_3/num-millon.png")].texture);
      let actualContent = document.getElementById("content_22");
      /*
      actualContent.style.lineHeight = "150%";
      actualContent.style.textAlign = "center";
      actualContent.style.textAlignLast = "center";
      */
      actualContent.innerHTML = "Bien, un aumento en la Compra Promedio Anual a $2,000.00 incrementa las ventas a $1,000,000.00<br>No debemos olvidar, que para incrementar las ventas es muy importante una estrategia integral e impulsar ambos indicadores, combinada por un mayor volumen de clientes y cantidad de compra, potencializando un incremento en ventas.";
      appDiv.querySelector("#arrow-point-to-right-22").style.display = "block";
      circle2.style.display = "none";
      circle1.style.display = "none";
      content.style.display = "none";

      document.getElementById("arrow-point-to-right-22").addEventListener("pointerdown", function() {
        toSlide("segmentacion");
        circle4.style.backgroundColor = "white";
		    circle2.style.backgroundColor = "gray";
		    circle1.style.backgroundColor = "gray";
		    circle3.style.backgroundColor = "gray";
		    circle5.style.backgroundColor = "gray";
		    circle6.style.backgroundColor = "gray";
		    circle7.style.backgroundColor = "gray";
      });

      let icBack = document.createElement("img");
      icBack.setAttribute("src", "assets/ui/bloque_3/ic-arrow-point-to-right.png");
      icBack.setAttribute("class", "step-back-arrow parpadeo");
      icBack.setAttribute("id", "icBack");
      appDiv.appendChild(icBack);
      icBack.style.display = "block";

      icBack.addEventListener("pointerdown", function() {
        var back = appDiv.querySelector("#stepBack22").style.display = "block";

        actualContent.innerHTML = subTitles[2][2];
        appDiv.querySelector("#arrow-point-to-right-22").style.display = "block";
        circle1.style.display = "block";
        circle2.style.display = "block";
        content.style.display = "block";
        icBack.style.display = "none";
        //vSprites.getChildByName("tdcPer").setTexture(PIXI.loader.resources[("assets/ui/bloque_3/tasa-50percent.png")].texture);
        vSprites.getChildByName("cpnom").setTexture(PIXI.loader.resources[("assets/ui/bloque_3/num-mil.png")].texture);
        vSprites.getChildByName("vNum").setTexture(PIXI.loader.resources[("assets/ui/bloque_3/num-500mil.png")].texture);

      });

    };

    self.offStepBack=function(){
      for(var i = 0; i < 3; i++){
        appDiv.querySelector("#stepBack" + ( i + "" + 1)).style.display = "none";
        if(i==2)
        appDiv.querySelector("#stepBack" + ( i + "" + 2)).style.display = "none";
      }
    }

    let rightArrow01 = appDiv.querySelector("#arrow-point-to-right-01");
    let rightArrow11 = appDiv.querySelector("#arrow-point-to-right-11");

    rightArrow01.addEventListener("pointerdown", function() {
      self.compraPromedio_();
    });

    rightArrow11.addEventListener("pointerdown", function() {
      self.venta_();
    });



    contButton.on("pointerdown", function() {

      contButton.visible = false;
      TweenMax.to(intro, 0.2, {alpha: 0});
      TweenMax.to([tasaDeCompra, compraPromedio, venta], 0.7, {y: (app.screen.height * .3), onComplete: function () {
        intro.style.display = "none";
        stages[0].style.display = "block";
        appDiv.querySelector("#arrow-point-to-right-00").style.display = "block";
        TweenMax.fromTo(stages[0], 0.2, {alpha: 0}, {alpha: 1});
        tasaDeCompra.scale.set(factorScreen(0.7));
        compraPromedio.scale.set(factorScreen(0.6));
        venta.scale.set(factorScreen(0.6));
        compraPromedio.setTexture(PIXI.loader.resources["assets/ui/bloque_3/b_compra_promedio_gray.png"].texture);
        venta.setTexture(PIXI.loader.resources["assets/ui/bloque_3/b_venta_gray.png"].texture);
        app.stage.getChildByName("thing_0").visible = true;

        // Tasa de compra boton
        tasaDeCompra.interactive = true;
        tasaDeCompra.buttonMode = true;

        tasaDeCompra.on("pointerdown",function(){
          self.tasaCompra_();
        });

        self.tasaCompra_= function() {
          //debugger;
          self.offStepBack();

          if(stages[1].style.display == "block") {

            self.turnOff_CP();
            //self.turnOn_TC();

            tasaDeCompra.scale.set(factorScreen(0.7));
            tasaDeCompra.setTexture(PIXI.loader.resources["assets/ui/bloque_3/b_tasa_de_compra.png"].texture);
            compraPromedio.scale.set(factorScreen(0.6));
            compraPromedio.setTexture(PIXI.loader.resources["assets/ui/bloque_3/b_compra_promedio_gray.png"].texture);
          } else if(stages[2].style.display == "block") {
            /*
            stages[2].querySelector("#arrow-point-to-right-20").style.display = "none";
            stages[2].querySelector("#arrow-point-to-right-21").style.display = "none";
            stages[2].querySelector("#arrow-point-to-right-22").style.display = "none";
            stages[2].style.display = "none";
            stages[2].querySelector("#content_20").style.display = "none";
            stages[2].querySelector("#content_21").style.display = "none";
            stages[2].querySelector("#content_22").style.display = "none";
            stages[2].querySelector("#content_23").style.display = "none";
            appDiv.querySelector("#circle-tick-inside-1").style.display = "none";

            appDiv.querySelector("#circle-tick-inside-2").style.display = "none";
            app.stage.getChildByName("vSprites0").visible = false;
            app.stage.getChildByName("vSprites1").visible = false;
            app.stage.getChildByName("vSprites2").visible = false;

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
            */
            self.turnOff_VTA();
            self.turnOn_TC();
            tasaDeCompra.scale.set(factorScreen(0.7));
            tasaDeCompra.setTexture(PIXI.loader.resources["assets/ui/bloque_3/b_tasa_de_compra.png"].texture);
            venta.scale.set(factorScreen(0.6));
            venta.setTexture(PIXI.loader.resources["assets/ui/bloque_3/b_venta_gray.png"].texture);
          }else{
          }
          self.turnOff_TC();
          self.turnOn_TC();
          slider1 = document.getElementById("slider_1");
          slider1.childNodes[1].style.left="calc(50% - 12.5px)";
          slider0 = document.getElementById("slider_0");
          slider0.childNodes[1].style.left="calc(50% - 12.5px)";
          self.app.stage.getChildByName("thing_0").setTexture(PIXI.Texture.fromFrame("tasa_5.png"));
          self.app.stage.getChildByName("thing_1").setTexture(PIXI.Texture.fromFrame("compra_5.png"));
          document.getElementById("tcCts").innerHTML = "500<br>Clientes";
          document.getElementById("tcPer").innerHTML = "50%";
          document.getElementById("cpSls").innerHTML ="$1,000.00";
          let actualContent = document.getElementById("content_22");
          actualContent.innerHTML = subTitles[2][2];

        };

        self.turnOff_TC=function(){
          slider0.style.display = "none";
          appDiv.querySelector("#arrow-point-to-right-00").style.display = "none";
          appDiv.querySelector("#arrow-point-to-right-01").style.display = "none";
          //appDiv.querySelector("#arrow-point-to-right-02").style.display = "none";
          stages[0].style.display = "none";
          stages[0].querySelector("#content_00").style.display = "none";
          stages[0].querySelector("#content_01").style.display = "none";
          //stages[0].querySelector("#content_02").style.display = "none";
          app.stage.getChildByName("thing_0").visible = false;
          app.stage.getChildByName("interactiveSquares0").visible = false;
          document.getElementById("tcCts").style.display = "none";
          document.getElementById("tcPer").style.display = "none";
          }

        self.turnOn_TC=function(){
          app.stage.getChildByName("thing_0").visible = true;
          stages[0].style.display = "block";
          //stages[0].querySelector("#arrow-point-to-right-02").style.display = "none";
          appDiv.querySelector("#arrow-point-to-right-00").style.display = "block";
          //stages[0].querySelector("#content_02").style.display = "none";
          stages[0].querySelector("#content_00").style.display = "block";
          stages[0].querySelector("#content_01").innerHTML=subTitles[0][1];

          }

          self.turnOff_CP=function(){
            slider1.style.display = "none";
            appDiv.querySelector("#arrow-point-to-right-10").style.display = "none";
            appDiv.querySelector("#arrow-point-to-right-11").style.display = "none";
            //stages[1].querySelector("#arrow-point-to-right-12").style.display = "none";
            stages[1].style.display = "none";
            stages[1].querySelector("#content_10").style.display = "none";
            stages[1].querySelector("#content_11").style.display = "none";
            //stages[1].querySelector("#content_12").style.display = "none";
            app.stage.getChildByName("thing_1").visible = false;
            app.stage.getChildByName("interactiveSquares1").visible = false;
            document.getElementById("cpSls").style.display = "none";
          }

          self.turnOn_CP=function(){
            app.stage.getChildByName("thing_1").visible = true;
            stages[1].style.display = "block";
            appDiv.querySelector("#arrow-point-to-right-11").style.display = "none";
            appDiv.querySelector("#arrow-point-to-right-10").style.display = "block";
            stages[1].querySelector("#content_11").style.display = "none";
            stages[1].querySelector("#content_11").innerHTML=subTitles[1][1];
            stages[1].querySelector("#content_10").style.display = "block";


            slider1 = document.getElementById("slider_1");
            slider1.childNodes[1].style.left="calc(50% - 12.5px)";
            slider0 = document.getElementById("slider_0");
            slider0.childNodes[1].style.left="calc(50% - 12.5px)";
            self.app.stage.getChildByName("thing_0").setTexture(PIXI.Texture.fromFrame("tasa_5.png"));
            self.app.stage.getChildByName("thing_1").setTexture(PIXI.Texture.fromFrame("compra_5.png"));
            document.getElementById("tcCts").innerHTML = "500<br>Clientes";
            document.getElementById("tcPer").innerHTML = "50%";
            document.getElementById("cpSls").innerHTML ="$1,000.00";


          }

          self.turnOff_VTA=function(){
            appDiv.querySelector("#arrow-point-to-right-20").style.display = "none";
            appDiv.querySelector("#arrow-point-to-right-21").style.display = "none";
            appDiv.querySelector("#arrow-point-to-right-22").style.display = "none";
            stages[2].style.display = "none";
            stages[2].querySelector("#content_20").style.display = "none";
            stages[2].querySelector("#content_21").style.display = "none";
            stages[2].querySelector("#content_22").style.display = "none";
            stages[2].querySelector("#content_23").style.display = "none";
            appDiv.querySelector("#circle-tick-inside-1").style.display = "none";

            appDiv.querySelector("#circle-tick-inside-2").style.display = "none";
            app.stage.getChildByName("vSprites0").visible = false;
            app.stage.getChildByName("vSprites1").visible = false;
            app.stage.getChildByName("vSprites2").visible = false;
          }

          self.turnOn_VTA=function(){
            stages[2].style.display = "block";
            appDiv.querySelector("#arrow-point-to-right-22").style.display = "none";
            appDiv.querySelector("#arrow-point-to-right-20").style.display = "block";
            stages[2].querySelector("#content_22").style.display = "none";
            stages[2].querySelector("#content_23").style.display = "none";
            stages[2].querySelector("#content_20").style.display = "block";
            //stages[2].style.top = app.screen.height * 0.33 + "px";
            //stages[2].style.left = app.screen.height * 0.1 + "px";


          }

        // Compra promedio boton
        compraPromedio.interactive = true;
        compraPromedio.buttonMode = true;
        compraPromedio.on("pointerdown",function(){
          self.compraPromedio_();
        });

        self.compraPromedio_ = function() {
          self.offStepBack();
          if(stages[0].style.display == "block") {
            self.turnOff_TC();
            //self.turnOn_CP();
            compraPromedio.scale.set(factorScreen(0.7));
            compraPromedio.setTexture(PIXI.loader.resources["assets/ui/bloque_3/b_compra_promedio.png"].texture);
            tasaDeCompra.scale.set(factorScreen(0.6));
            tasaDeCompra.setTexture(PIXI.loader.resources["assets/ui/bloque_3/b_tasa_de_compra_gray.png"].texture);

          } else if(stages[2].style.display == "block") {
            /*
            stages[2].querySelector("#arrow-point-to-right-20").style.display = "none";
            stages[2].querySelector("#arrow-point-to-right-21").style.display = "none";
            stages[2].querySelector("#arrow-point-to-right-22").style.display = "none";
            stages[2].style.display = "none";
            stages[2].querySelector("#content_20").style.display = "none";
            stages[2].querySelector("#content_21").style.display = "none";
            stages[2].querySelector("#content_22").style.display = "none";
            stages[2].querySelector("#content_23").style.display = "none";
            appDiv.querySelector("#circle-tick-inside-1").style.display = "none";
            appDiv.querySelector("#circle-tick-inside-2").style.display = "none";
            app.stage.getChildByName("vSprites0").visible = false;
            app.stage.getChildByName("vSprites1").visible = false;
            app.stage.getChildByName("vSprites2").visible = false;


            // stages[1].querySelector("#arrow-point-to-right-12").style.display = "none";
            // stages[1].querySelector("#arrow-point-to-right-10").style.display = "block";
            // stages[1].querySelector("#content_12").style.display = "none";
            // stages[1].querySelector("#content_10").style.display = "block";
            */
            self.turnOff_VTA();
            self.turnOn_CP();
            compraPromedio.scale.set(factorScreen(0.7));
            compraPromedio.setTexture(PIXI.loader.resources["assets/ui/bloque_3/b_compra_promedio.png"].texture);
            venta.scale.set(factorScreen(0.6));
            venta.setTexture(PIXI.loader.resources["assets/ui/bloque_3/b_venta_gray.png"].texture);
            let actualContent = document.getElementById("content_22");
            actualContent.innerHTML = subTitles[2][2];
          }
            self.turnOff_CP();
            self.turnOn_CP();





        };


        // Venta boton
        venta.interactive = true;
        venta.buttonMode = true;

        venta.on("pointerdown",function(){
          self.venta_();
        });
        self.venta_=function() {
          self.offStepBack();

          if(stages[0].style.display == "block") {
            self.turnOff_TC();
            self.turnOn_VTA();

            venta.scale.set(factorScreen(0.7));
            venta.setTexture(PIXI.loader.resources["assets/ui/bloque_3/b_venta.png"].texture);
            tasaDeCompra.scale.set(factorScreen(0.6));
            tasaDeCompra.setTexture(PIXI.loader.resources["assets/ui/bloque_3/b_tasa_de_compra_gray.png"].texture);
          } else if(stages[1].style.display == "block") {
            self.turnOff_CP();
            self.turnOn_VTA();

            venta.scale.set(factorScreen(0.7));
            venta.setTexture(PIXI.loader.resources["assets/ui/bloque_3/b_venta.png"].texture);
            compraPromedio.scale.set(factorScreen(0.6));
            compraPromedio.setTexture(PIXI.loader.resources["assets/ui/bloque_3/b_compra_promedio_gray.png"].texture);
          }
            self.turnOff_VTA();
            self.turnOn_VTA();

          var icBack = app.stage.getChildByName("vSprites1").getChildByName("icBack");
          //debugger;
          app.stage.getChildByName("vSprites1").removeChild(icBack);
        };
      }});
    });
  }
  return self;
}
