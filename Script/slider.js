function Slider(father){
  
  config={x:height/2,y:width/2,width:200,height:300};
  var self = this;
  self.id = config.id;

  // Create DOM
  var dom = document.createElement("div");
  dom.className = "slider";
  dom.style.left = config.x+"px";
  dom.style.top = config.y+"px";
  dom.style.width = config.width+"px";
  dom.style.height = config.width+"px";
  self.dom = dom;

  // Background
  var bg = document.createElement("div");
  bg.className = "slider_bg";
  dom.appendChild(bg);

  // Knob
  var knob = document.createElement("div");
  knob.className = "slider_knob";
  dom.appendChild(knob);

  father.appendChild(dom);


}
//Slider();
