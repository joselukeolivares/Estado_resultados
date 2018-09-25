function Slider(father,indicador){


  var self = this;
  self.value=0;


  // Create DOM
  var dom = document.createElement("div");
  dom.className = "slider";
  dom.style.left = width*.68+"px";
  dom.style.top = height*.85+"px";
  dom.style.width = "200px";
  dom.style.height = "50px";
  dom.style.position = "absolute";
  self.dom = dom;

  // Background
  var bg = document.createElement("div");
  bg.className = "slider_bg";
  dom.appendChild(bg);

  // Knob
  var knob = document.createElement("div");
  knob.className = "slider_knob";
  knob.style.left=((200-30)/2)+"px";

  dom.appendChild(knob);

  father.appendChild(dom);

  var _isDragging = false;
  var _offsetX = 0;

  var _mouseToParam=function(event){


    var param= (event.clientX- dom.getBoundingClientRect().left - _offsetX)/200;

     if(param<0)param=0;
     if(param>1)param=1;
     if(param>0&&param<1)
     knob.style.left=(event.clientX - width*.7-230)+"px";

     self.value=Math.round(param*100);
     indicador.value=self.value;
     indicador.
     }

	var _onDomMouseDown = function(event){

		_mouseToParam(event);
		_isDragging = true;
		_offsetX = 0;
	};
	var _onKnobMouseDown = function(event){


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
//Slider();
