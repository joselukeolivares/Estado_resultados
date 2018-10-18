function SliderB5B6(divApp,target1,id,className,left,top,divWidth,DivHeight,update) {
  //divApp es el div padre en el que se insertará el div con Slider(dom.name="slider")
  //target1 es el elemento objetivo donde se reflejará el valor al mover el slider(Este elemento debe contener un atributo que indique el tipo de elemento:
 // 1:<p>,2:PIXI.Text, más proximamente)
 //id es la clave ID del elemento <DIV> dom del slider, se pude obtener y modificar mediante el DOM ó document.getElementById('id').slider0.childNodes[1];
//className NO MODIFICAR a menos se desee cambiar el background y manibela de Slider (Buscar en slider.css reglas default)
//left es el porcentaje (.0->1) estableciendo el borde izquierdo del slider <div> colocado a X% desde el borde izquierdo de su elemento padre posicionado más cercano.
//top es el porcentaje (.0->1) estableciendo el borde superior del slider <div> colocado a X% desde el borde superior de su elemento padre posicionado más cercano.
//divWidth es el ancho en px deseado para el <div> dom con el slider
//DivHeight es el alto en px deseado para el <div> dom con el slider
//update es el objeto que tiene un metodo llamado updateTotal, se invoca cada vez que se mueve el slider y actualizar la información con el nuevo valor del slider.
  var self = this;
  self.value=4.9;
  DivHeight=factorScreen(DivHeight);
  //divWidth=factorScreen(divWidth);


  // Create DOM
  var dom = document.createElement("div");
  dom.setAttribute("id",id);
  dom.className = "slider";
  dom.style.left = width * left + "px";
  dom.style.top = height * top + "px";
  dom.style.width = divWidth+"px";
  dom.style.height = DivHeight+"px";
  dom.style.position = "absolute";
  self.dom = dom;

  // Background
  var bg = document.createElement("div");
  bg.className = "slider_bg";
  bg.style.height=factorScreen(30)+"px";
  dom.appendChild(bg);

  // Knob
  var knob = document.createElement("div");
  knob.className = "slider_knob";
  knob.style.height=factorScreen(30)+"px";
  knob.style.width=knob.style.height;
  knob.style.left=((divWidth-(DivHeight*.6))/2)+"px";

  dom.appendChild(knob);

  divApp.appendChild(dom);

  var _isDragging = false;
  var _offsetX = 0;
  var nevalue=4;
  var _mouseToParam = function(event) {


    var param= (event.clientX- dom.getBoundingClientRect().left - _offsetX)/divWidth;

     if(param<0)param=0;
     if(param>1)param=1;
     if(param>0&&param<1){
       var newValue=Math.round(param*100);
       knob.style.left=(event.clientX - bg.getBoundingClientRect().x-(DivHeight*.6/2))+"px";

       console.log("SliderB5B6: "+newValue);
       console.log("SliderB5B6: "+param);

       if(target1.typeObj==1)
       target1.innerHTML=newValue;

       try{update.updateTotal(newValue);}catch(e){console.log("No se encontro funcion updateTotal:\n"+e)}
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
