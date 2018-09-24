function Slider(father){


  var self = this;


  // Create DOM
  var dom = document.createElement("div");
  dom.className = "slider";
  dom.style.left = "0px";
  dom.style.top = "500px";
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


    var param= (event.clientX - _offsetX-200)/200+"px";

     console.log(event.clientX);
     console.log(knob.getBoundingClientRect().left);
     console.log(param);

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
