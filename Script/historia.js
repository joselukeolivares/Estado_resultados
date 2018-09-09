
function historia(){
      self={};

      self.removeElements=function(){

        if(self.app.stage==null)
           return false;

         var app=self.app;
         while(app.stage.getChildAt[0]) {
           console.log("Elemntos restantes: "+app.stage.children.length +" de la app de PIXI:Historia")
           app.stage.removeChildAt(0); }



       return self;
      }

   self.destroyApp=function(){
     console.log("destruyendo la app Historia");

     if(self.app==null)
        return self;
        debugger;
 /*
        self.app.stage.destroy=true;
        self.app.stage=null;
        self.app.render.destroy=true;
        self.app.render=null;
 */
        self.app.destroy(true);

     return self;
   }

    self.createApp=function()

    {
    console.log("Este script ejecuta la historia");


    var aplicacion=document.getElementById('aplicacion');
  	self.app = new PIXI.Application(width,height,{transparent:true});

  	self.app.view.style.width = aplicacion.width;
  	self.app.view.style.height = aplicacion.height;

  	aplicacion.appendChild(self.app.view);

    var anim;

    var textureShop_1 = PIXI.Texture.fromImage('assets/ui/dungeon.png');

    var shop = new PIXI.Sprite(textureShop_1);

            shop.x = self.app.screen.width / 2;
            shop.y = (self.app.screen.height / 2);
            shop.anchor.set(0.5,0.5);

            shop.interactive = true;
            shop.buttonMode = true;


      //scratcher(document.body);

      self.app.stage.addChild(shop);

      return self

  }

return self;
};
