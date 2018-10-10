function SliderB5B6(divApp,target1,id,className,left,top,update) {
  var self = this;
  self.value=4.9;

   debugger;

  // Create DOM
  var dom = document.createElement("div");
  dom.setAttribute("id",id);
  dom.className = "slider";
  dom.style.left = width * left + "px";
  dom.style.top = height * top + "px";
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

  divApp.appendChild(dom);

  var _isDragging = false;
  var _offsetX = 0;
  var nevalue=4;
  var _mouseToParam = function(event) {


    var param= (event.clientX- dom.getBoundingClientRect().left - _offsetX)/200;

     if(param<0)param=0;
     if(param>1)param=1;
     if(param>0&&param<1){
       var newValue=Math.round(param*100);
       knob.style.left=(event.clientX - bg.getBoundingClientRect().x-15)+"px";

       console.log("SliderB5B6: "+newValue);
       console.log("SliderB5B6: "+param);
       if(target1.typeObj==1)
       target1.innerHTML=newValue;
       update.updateTotal(newValue);
     }



  };

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
