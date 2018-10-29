function slider(appDiv, app, index) {
  let self = this;
  self.value = 4.9;


  // Create DOM
  let dom = document.createElement("div");
  dom.setAttribute("id", "slider_" + index);
  dom.className = "slider";
  dom.style.left = app.width * 0.57 + "px";
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
    tc_square = new PIXI.Sprite(loader.resources["assets/ui/Bloque_3/tasa_indicador.png"].texture);
    tc_square.x = app.width * 0.54;
    tc_square.y = app.height * 1.3;
    tc_square.scale.set(factorScreen(0.8));
    tc_square.name = "tc_square";
    interactiveSquares.addChild(tc_square);

    tcCts = document.createElement("p");
    tcCts.setAttribute("id", "tcCts");
    tcCts.innerHTML = "500<br>Clientes";
    tcCts.style.left = tc_square.x * 1.02 + "px";
    tcCts.style.top = tc_square.x * 0.91 + "px";
    tcCts.style.display = "none";
    appDiv.appendChild(tcCts);

    tcPer = document.createElement("p");
    tcPer.setAttribute("id", "tcPer");
    tcPer.innerHTML = "50%";
    tcPer.style.left = tc_square.x * 1.3 + "px";
    tcPer.style.top = tc_square.x * 0.83 + "px";
    tcPer.style.display = "none";
    appDiv.appendChild(tcPer);
  }

  if(index == 1) {
    cp_square = new PIXI.Sprite(loader.resources["assets/ui/Bloque_3/compraProm_indicador.png"].texture);
    cp_square.x = app.width * 0.57;
    cp_square.y = app.height * 1.3;
    cp_square.scale.set(factorScreen(1.7));
    cp_square.name = "cp_square";
    interactiveSquares.addChild(cp_square);

    cpSls = document.createElement("p");
    cpSls.setAttribute("id", "cpSls");
    cpSls.innerHTML = "$1,000.00";
    cpSls.style.left = cp_square.x * 1.02 + "px";
    cpSls.style.top = cp_square.x * 0.81 + "px";
    cpSls.style.display = "none";
    appDiv.appendChild(cpSls);
  }

  interactiveSquares.visible = false;
  app.addChild(interactiveSquares);

  var _isDragging = false;
  var _offsetX = 0;
  var _mouseToParam = function(event) {
    var param = (event.clientX - dom.getBoundingClientRect().left - _offsetX) / 200;

    if(param < 0) param = 0;
    if(param > 1) param = 1;
    if(param > 0 && param < 1) var newValue = Math.round(param * 10);

    // console.log(newValue);
    stage0 = document.getElementById("stage_0");
    stage1 = document.getElementById("stage_1");
    if (index == 0) {
      if (stage0.querySelector("#content_01").style.display == "block") {
        if(newValue > self.value) {
          knob.style.left = (event.clientX - bg.getBoundingClientRect().x - 15) + "px";
          self.value = newValue;
          app.getChildByName("thing_0").setTexture(PIXI.Texture.fromFrame("tasa_" + self.value + ".png"));
          tcPer.innerHTML = self.value + "0%";
          tcCts.innerHTML = self.value + "00" + "<br>Clientes";
        } else if(newValue >= 9) {
          stage0.querySelector("#content_01").innerHTML = "Mayor Tasa de Compra indica que más clientes nos están comprando.";
          stage0.querySelector("#arrow-point-to-right-01").style.display = "block";
        }
      } else {
        if(newValue < self.value) {
          knob.style.left = (event.clientX - bg.getBoundingClientRect().x - 15) + "px";
          self.value = newValue;
          app.getChildByName("thing_0").setTexture(PIXI.Texture.fromFrame("tasa_" + self.value + ".png"));
          tcPer.innerHTML = self.value + "0%";
          tcCts.innerHTML = self.value + "00" + "<br>Clientes";
        } else if(newValue <= 1) {
          stage0.querySelector("#content_02").innerHTML = "Menor Tasa de Compra indica que menos clientes nos están comprando.";
          stage0.querySelector("#arrow-point-to-right-02").style.display = "block";
        }
      }
    } else if (index == 1) {
      if (stage1.querySelector("#content_11").style.display == "block") {
        if(newValue > self.value) {
          self.value = newValue;
          knob.style.left = (event.clientX - bg.getBoundingClientRect().x - 15) + "px";
          cpSls.innerHTML = "$" + numberWithCommas(newValue * 1000 / 5) + ".00";
          app.getChildByName("thing_1").setTexture(PIXI.Texture.fromFrame("compra_" + self.value + ".png"));
        } else if (newValue >= 9) {
          stage1.querySelector("#content_11").innerHTML = "Mayor Compra Promedio indica un mayor volumen de compra.";
          stage1.querySelector("#arrow-point-to-right-11").style.display = "block";
          //alert("En este ejercicio, solo puedes incrementar la compra promedio y haz llegado al maximo. Por favor da click en siguiente.");
        }
      } else {
        if(newValue < self.value) {
          self.value = newValue;
          knob.style.left = (event.clientX - bg.getBoundingClientRect().x - 15) + "px";
          cpSls.innerHTML = "$" + numberWithCommas(newValue * 1000 / 5) + ".00";
          app.getChildByName("thing_1").setTexture(PIXI.Texture.fromFrame("compra_" + self.value + ".png"));
        } else if(newValue <= 1) {
          stage1.querySelector("#content_12").innerHTML = "Menor Compra Promedio indica un menor volumen de compra.";
          stage1.querySelector("#arrow-point-to-right-12").style.display = "block";
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

	dom.addEventListener("mousedown",_onDomMouseDown,false);
	knob.addEventListener("mousedown",_onKnobMouseDown,false);
	window.addEventListener("mousemove",_onWindowMouseMove,false);
	window.addEventListener("mouseup",_onWindowMouseUp,false);
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
