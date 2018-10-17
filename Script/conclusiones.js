function conclusiones(){

var self = {};

self.createApp = function(){

  var app = document.getElementById("aplicacion");
  self.app = new PIXI.Application(width,height,{backgroundColor: 0xFFFFFF});
    app.appendChild(self.app.renderer.view);


    var Loader = PIXI.loader;



    var background = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_6/2 FONDO.png"].texture);

    background.x=self.app.screen.width/16;
    background.scale.set(self.app.screen.width*.25/950);
    self.app.stage.addChild(background);


    var title=new PIXI.Text("Estado de resultados de clientes",{
      fontSize: screen.height * 40 / 880,
      fontFamily: "Roboto-Black",
      fill: "#FFFFFF",
      dropShadow: true,
      dropShadowColor: "#09102C",
      dropShadowDistance: 5,
      dropShadowAngle: Math.PI / 20
    });
    title.x=(self.app.screen.width/4);
    title.y=(self.app.screen.height/24);

    var subtitle=new PIXI.Text("conclusiones",{
      fontSize: screen.height * 24 / 880,
      fontFamily: "Roboto-Black",
      fill: "#FFFFFF"
    });
    subtitle.x=(self.app.screen.width/2.4);
    subtitle.y=(self.app.screen.height/10);

    self.app.stage.addChild(title);
     self.app.stage.addChild(subtitle);



      var box = document.createElement("div");
          box.innerHTML='aaaaaaaaaaaaaaaaaaaaaaa<br />bbbbbbbbbbbbbbbbbbbbbbb<br />cccccccccccccccccccc<br />dddddddddddddddddddddd<br />eeeeeeeeeeeeeeeeeee<br />fffffffffffffffffffffffffffffffffffff<br />gggggggggggggggggggg<br />hhhhhhhhhhhhhhhhhhhhhhh<br />iiiiiiiiiiiiiiiiiii<br />jjjjjjjjjjjjjjjjjjjj<br />kkkkkkkkkkkkkkkkkkkkkk';
          box.setAttribute("style","position:absolute;left: 50%;top: 55%;transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%);background:#ffffff;color : #ffffff;width : 39%;height : 39%;overflow : auto;color:#000000;font-Family:Roboto-bold;font-Size:2vw");
          box.setAttribute("id","box");
          box.typeObj=1;
     var aplicacion=document.getElementById("aplicacion");
     aplicacion.appendChild(box);

      return self;
     }

return self;
}
