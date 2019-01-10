function slider(appDiv, app, index) {
  let self = this;
  self.value = 4.9;


  // Create DOM
  let dom = document.createElement("div");
  dom.setAttribute("id", "slider_" + index);
  dom.className = "slider";
  //dom.style.left = app.width * 0.57 + "px";
  dom.style.top = app.height * 1.6 + "px";
  dom.style.width = "200px";
  dom.style.height = "50px";
  dom.style.position = "absolute";
  dom.style.display = "none";
  self.dom = dom;

  // Background
  let bg = document.createElement("div");
  bg.className = "slider_bg";
  bg.setAttribute("id", "sliderBackground");
  dom.appendChild(bg);

  // Knob
  let knob = document.createElement("div");
  knob.className = "slider_knob";
  knob.setAttribute("id", "knob");
  knob.style.left = ((200 - 30) / 2) + "px";
  dom.appendChild(knob);

  appDiv.appendChild(dom);

  var interactiveSquares = new PIXI.Container();
  interactiveSquares.name = "interactiveSquares" + index;
  var loader = PIXI.loader;
  let tc_square, cp_square, tcCts, tcPer, cpSls;

  if(index == 0) {
    tc_square = new PIXI.Sprite(loader.resources["assets/ui/bloque_3/tasa_indicador.png"].texture);
    tc_square.x = app.width * 0.54;
    tc_square.y = app.height * 1.3;
    tc_square.scale.set(factorScreen(0.8));
    tc_square.name = "tc_square";
    interactiveSquares.addChild(tc_square);

    dom.style.left = tc_square.x+"px";

    tcCts = document.createElement("p");
    tcCts.setAttribute("id", "tcCts");
    tcCts.innerHTML = "500<br>Clientes";
    tcCts.style.left = tc_square.x * 1.02 + "px";
    tcCts.style.top = tc_square.y+"px";
    tcCts.style.display = "none";
    appDiv.appendChild(tcCts);

    tcPer = document.createElement("p");
    tcPer.setAttribute("id", "tcPer");
    tcPer.innerHTML = "50%";
    tcPer.style.margin="0px";
    tcPer.style.left = tc_square.x * 1.25 + "px";
    tcPer.style.top = tc_square.y + "px";
    tcPer.style.display = "none";
    appDiv.appendChild(tcPer);
  }

  if(index == 1) {
    cp_square = new PIXI.Sprite(loader.resources["assets/ui/bloque_3/compraProm_indicador.png"].texture);
    cp_square.x = app.width * 0.57;
    cp_square.y = app.height * 1.3;
    cp_square.scale.set(factorScreen(1.7));
    cp_square.name = "cp_square";
    interactiveSquares.addChild(cp_square);

    dom.style.left = cp_square.x+"px";

    cpSls = document.createElement("p");
    cpSls.setAttribute("id", "cpSls");
    cpSls.innerHTML = "$1,000.00";
    cpSls.style.margin="0px";
    cpSls.style.left = cp_square.x * 1.02 + "px";
    cpSls.style.top = cp_square.y * 1.02 + "px";
    cpSls.style.display = "none";
    appDiv.appendChild(cpSls);
  }

  interactiveSquares.visible = false;
  app.addChild(interactiveSquares);

  var _isDragging = false;
  var _offsetX = 0;
  var _mouseToParam = function(event) {
    TweenLite.killTweensOf(knob);
    knob.style.opacity=1;
    var param = (event.clientX - dom.getBoundingClientRect().left - _offsetX) / 200;
    var newValue;
    if(param < 0) param = 0;
    if(param > 1) param = 1;
    if(param > 0 && param < 1){
      knob.style.left = (event.clientX - bg.getBoundingClientRect().x - 15) + "px";
      newValue = Math.round(param * 10);
    }

    // console.log(newValue);
    stage0 = document.getElementById("stage_0");
    stage1 = document.getElementById("stage_1");
    if (index == 0 && newValue!=null) {
      if (stage0.querySelector("#content_01").style.display == "block") {


          self.value = newValue;
          app.getChildByName("thing_0").setTexture(PIXI.Texture.fromFrame("tasa_" + self.value + ".png"));
          tcPer.innerHTML = self.value + "0%";
          tcCts.innerHTML = self.value + "00" + "<br>Clientes";

          stage0.querySelector("#content_01").innerHTML = "Como puedes observar, una mayor tasa de compra indica que más clientes están comprando y en sentido contrario, una menor tasa de compra indica menos clientes comprando.";
          stage0.querySelector("#arrow-point-to-right-01").style.display = "block";


      } else {
        if(stage0.querySelector("#content_02").style.display == "block") {
          //console.log("content_02");
          self.value = newValue;
          app.getChildByName("thing_0").setTexture(PIXI.Texture.fromFrame("tasa_" + self.value + ".png"));
          tcPer.innerHTML = self.value + "0%";
          tcCts.innerHTML = self.value + "00" + "<br>Clientes";
          /*
          if(newValue <= 4) {
            let arrowR=stage0.querySelector("#arrow-point-to-right-02");
            arrowR.style.display = "block";

            var tl=new TimelineMax({repeat:20,delay:1,onComplete:function(){
              TweenLite.to(arrowR,1,{opacity:1});
              }})
            tl.to(arrowR,.5,{opacity:.1});

          }
          */
        }
      }
    } else if (index == 1 && newValue!=null) {
      if (stage1.querySelector("#content_11").style.display == "block") {

          self.value = newValue;
          //knob.style.left = (event.clientX - bg.getBoundingClientRect().x - 15) + "px";
          cpSls.innerHTML = "$" + numberWithCommas(newValue * 1000 / 5) + ".00";
          app.getChildByName("thing_1").setTexture(PIXI.Texture.fromFrame("compra_" + self.value + ".png"));
          //stage0.querySelector("#content_02").innerHTML = "";
          stage1.querySelector("#content_11").innerHTML = "Claro, una mayor compra promedio indica más volumen de venta y en sentido contrario, menor compra promedio indica menos volumen de venta.";
          //if (newValue >= 6)
           {
            //stage1.querySelector("#content_11").innerHTML = "";
            let arrowR=stage1.querySelector("#arrow-point-to-right-11");
            arrowR.style.display = "block";
            /*
            var tl=new TimelineMax({repeat:5,delay:1,onComplete:function(){
              TweenLite.to(arrowR,1,{opacity:1});
              }})
            tl.to(arrowR,.5,{opacity:.1});
            //alert("En este ejercicio, solo puedes incrementar la compra promedio y haz llegado al maximo. Por favor da click en siguiente.");
            */
          }

      } else {
        if(stage1.querySelector("#content_12").style.display == "block") {
          self.value = newValue;
          //knob.style.left = (event.clientX - bg.getBoundingClientRect().x - 15) + "px";
          cpSls.innerHTML = "$" + numberWithCommas(newValue * 1000 / 5) + ".00";
          app.getChildByName("thing_1").setTexture(PIXI.Texture.fromFrame("compra_" + self.value + ".png"));

          //if(newValue <= 4)
           {
            let arrowR=stage1.querySelector("#arrow-point-to-right-12");
            arrowR.style.display = "block";
            var tl=new TimelineMax({repeat:5,delay:1,onComplete:function(){
              TweenLite.to(arrowR,1,{opacity:1});
              }})
            tl.to(arrowR,.5,{opacity:.1});
          }
        }
      }
    }
  };

	var _onDomMouseDown = function(event) {
    _mouseToParam(event);
		_isDragging = true;
		_offsetX = 0;
	};

	var _onKnobMouseDown = function(event) {
    _isDragging = true;
    _offsetX = event.clientX - knob.getBoundingClientRect().left;
  };

  var _onWindowMouseMove = function(event){
    if(_isDragging) _mouseToParam(event);
  };

  var _onWindowMouseUp = function(){
    _isDragging = false;
	};

	//dom.addEventListener("mousedown",_onDomMouseDown,false);
	//knob.addEventListener("mousedown",_onKnobMouseDown,false);
	//window.addEventListener("mousemove",_onWindowMouseMove,false);
	//window.addEventListener("mouseup",_onWindowMouseUp,false);

  dom.addEventListener("pointerdown", _onDomMouseDown, false);
  knob.addEventListener("pointerdown",_onKnobMouseDown, false);
	window.addEventListener("pointermove",_onWindowMouseMove,false);
	window.addEventListener("pointerup",_onWindowMouseUp,false);
}

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function factorScreen(value){
  return height*value/880;
}
//Slider();
