
function historia(){
      self={};

      self.removeElements=function(){
try{
  if(self.app.stage==null)
     return false;

   var app=self.app;
   while(app.stage.getChildAt[0]) {
     console.log("Elemntos restantes: "+app.stage.children.length +" de la app de PIXI:Historia")
     app.stage.removeChildAt(0); }
}catch(err){

}




       return self;
      }

   self.destroyApp=function(){
     console.log("destruyendo la app Historia");

    var div_video=document.getElementById("div_video");
        div_video.parentNode.removeChild(div_video);
    var div_button=document.getElementById("div_button");
        div_button.parentNode.removeChild(div_button)



     return self;
   }

    self.createApp=function()

    {
    console.log("Este script ejecuta la historia");



    var videoElement=document.createElement('video');
    var close_button=document.createElement('div');
    close_button.style='background-image: url("assets/ui/Bloque_2/close_video.png");width: 50px;height: 50px;position: fixed;top: 50px;right: 15%;background-size: 50px 50px;background-repeat: no-repeat;cursor: pointer;'
    close_button.title="Cerrar video!";
    close_button.setAttribute("id","div_button");
    debugger;
    close_button.onclick=function(){


      videoElement.parentNode.removeChild(videoElement);
      this.parentNode.removeChild(this);
    };


    videoElement.src='assets/video/videoplayback.mp4';
    videoElement.setAttribute("id","div_video");
    videoElement.width=width;
    videoElement.height=height;
    videoElement.controls=true;
    videoElement.load();
  	aplicacion.appendChild(videoElement);
    document.body.appendChild(close_button);


      return self

  }

return self;
};
