var aplicacion=document.getElementById("aplicacion");
var div=document.createElement("div");
    div.setAttribute("class","Scratcher_div");
    div.style.width=screen.width;
    //div.style.left="7.4%";
    div.style.display="none";
    div.style.height=aplicacion.style.height;
    



    document.body.appendChild(div);





var scratching=function (num){
    div.style.display="block";

    return  new Promise(function(resolve,reject){

            var frame=0;

            var interval=setInterval(function(){
                  frame++;
                  if(frame>18){
                     clearInterval(interval);
                     div.style.display="none";
                     resolve("SCRATCHER OK: "+num);
                  }

                  div.style.backgroundPosition=(num==1?0:100)+"%"+(frame*-100)+"%";

                },40);

        });


};

 var print=function(status){


    actual_app.removeElements();
    actual_app.destroyApp();



};

  var secondS=function(cadena){
    return function(){

      return scratching(cadena);
    }
  }
/*
    scratching(1)
      .then(print)
      .then(secondS(2))
      .then(print);
*/
