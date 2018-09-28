function Slider(father, indicator, iteration) {
  var self = this;
  self.value=4.9;


  // Create DOM
  var dom = document.createElement("div");
  dom.setAttribute("id","slider_"+iteration);
  dom.className = "slider";
  dom.style.left = width * .66 + "px";
  dom.style.top = height * .85 + "px";
  dom.style.width = "200px";
  dom.style.height = "50px";
  dom.style.position = "absolute";
  dom.style.display="none";
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

  var rects_container=new PIXI.Container();
  rects_container.name="rects_container";

  //PIXI RECTS
  var yellow_rect=new PIXI.Graphics();
      yellow_rect.lineStyle(1,0X6a8678);
      yellow_rect.beginFill(0xe7c82f,.8);
      yellow_rect.drawRoundedRect(width * .66,height * .74,factorScreen(200),height *.10,35);
      yellow_rect.name="yellow_rect";
      yellow_rect.endFill();

      rects_container.addChild(yellow_rect);

      var white_rect=new PIXI.Graphics();
          white_rect.lineStyle(1,0xFFFFFF);
          white_rect.beginFill(0xFFFFFF,.95);
          white_rect.drawRoundedRect(width * .73,height * .74,factorScreen(200),height *.10,35);
          white_rect.name="white_rect";
          white_rect.endFill();

      rects_container.addChild(white_rect);

      //PIXI Text and Styles
      let txt_rects_Style = new PIXI.TextStyle({
        fontFamily: "Roboto-Regular",
        fontSize: factorScreen(20),
        fill: "0x175383"

      });

      var txt_yellow_style={
      fontFamily: "Roboto-Regular",
      fill:0xe7c82f,
      fontSize: factorScreen(30),
      wordWrap: true,
      wordWrapWidth: 450,
      align: "center"};

      var yellowTxtRec=new PIXI.Text("Clientes",txt_rects_Style);
         yellowTxtRec.x=(width * .67);
         yellowTxtRec.y=(height * .795);
         yellowTxtRec.name="yellowTxtRec";
         rects_container.addChild(yellowTxtRec);

     var yellowNumRec=new PIXI.Text("500",txt_rects_Style);
        yellowNumRec.x=(width * .68);
        yellowNumRec.y=(height *.77);
        yellowNumRec.name="yellowNumRec";
        rects_container.addChild(yellowNumRec);

    var whiteNumRec=new PIXI.Text("50%",{fontFamily: "Roboto-Regular",fontSize: factorScreen(60),fill: "0x175383"});
       whiteNumRec.x=(width * .77);
       whiteNumRec.y=(height *.75);
       rects_container.addChild(whiteNumRec);

       indicator.addChild(rects_container);






  var _isDragging = false;
  var _offsetX = 0;
  var nevalue=4;
  var _mouseToParam = function(event) {


    var param= (event.clientX- dom.getBoundingClientRect().left - _offsetX)/200;

     if(param<0)param=0;
     if(param>1)param=1;
     if(param>0&&param<1)

     var newValue=Math.round(param*10);

     //indicator.value=self.value;


     if (iteration == 0) {
       if (indicator.visible) {
         if(newValue>self.value){
           knob.style.left=(event.clientX - bg.getBoundingClientRect().x-15)+"px";
           debugger;
           self.value=newValue;
           indicator.children[1].setTexture(PIXI.Texture.fromFrame("tasa_" + self.value + ".png"));
           whiteNumRec.text=self.value+"0%";
           yellowNumRec.text=self.value+"00"
         }else if(newValue>=10){
           indicator.children[0].text="Mayor Tasa de Compra indica que más clientes nos estan comprando.";
           indicator.children[0].style=txt_yellow_style;
           var tl=new TimelineMax({repeat:5,repeatDelay:1});
           tl.to(indicator.children[3],1,{pixi:{alpha:.5}});
         }

       } else {
         var brother=indicator.parent.getChildByName("scene 2");
         if(newValue<self.value){
           knob.style.left=(event.clientX - bg.getBoundingClientRect().x-15)+"px";
           self.value=newValue;
           brother.children[1].setTexture(PIXI.Texture.fromFrame("tasa_" + self.value + ".png"));
           whiteNumRec.text=self.value+"0%";
           yellowNumRec.text=self.value+"00"
         }else if(newValue<1){
           brother.children[0].text="Menor Tasa de Compra indica que menos clientes nos estan comprando.";
           brother.children[0].style=txt_yellow_style;
           var tl=new TimelineMax({repeat:5,repeatDelay:1});

           tl.to(indicator.parent.parent.children[1],1,{pixi:{alpha:.5},onComplete:function(){
             this.reverse();
           }});
         }



       }
     } else if (iteration == 1) {
       if (indicator.visible) {
         var brother=indicator.parent.getChildByName("scene 2");
           if(newValue>self.value){
             self.value=newValue;
             knob.style.left=(event.clientX - bg.getBoundingClientRect().x-15)+"px";
             whiteNumRec.text="$"+numberWithCommas(newValue*1000/5)+".00";
             indicator.children[1].setTexture(PIXI.Texture.fromFrame("compra_" + self.value + ".png"));


           }else if(newValue>=10){
             console.log(newValue);
             indicator.children[0].text="Mayor Compra Promedio indica un mayor volumen de compra.Presiona el boton siguiente para continuar (flecha amarrilla)";
             indicator.children[0].style=txt_yellow_style;
             alert("En este ejercicio, solo puedes incrementar la compra promedio y haz llegado al maximo. Por favor da click en siguiente.")
             var tl=new TimelineMax({repeat:5,repeatDelay:1});
             tl.to(indicator.children[3],1,{pixi:{alpha:.5}});
           }
       } else {
         var brother=indicator.parent.getChildByName("scene 2");
         if(newValue<self.value){
           self.value=newValue;
           knob.style.left=(event.clientX - bg.getBoundingClientRect().x-15)+"px";
           whiteNumRec.text="$"+numberWithCommas(newValue*1000/5)+".00";
           brother.children[1].setTexture(PIXI.Texture.fromFrame("compra_" + self.value + ".png"));


         }else if(newValue<1){
           console.log(newValue);
           brother.children[0].text="Menor Compra Promedio indica un menor volumen de compra. Presiona el boton 'Venta' para continuar con el siguiente indicador.";
           brother.children[0].style=txt_yellow_style;
           alert("En este ejercicio, solo puedes decrementar la compra promedio y haz llegado al minimo. Por favor da click 'Venta'.")
           var tl=new TimelineMax({repeat:5,repeatDelay:1});
           tl.to(brother.children[3],1,{pixi:{alpha:.5}});
         }


       }
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
