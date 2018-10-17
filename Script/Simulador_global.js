function simulador_global(){

  var self = {};
  self.characters = [];
  let app = document.getElementById("aplicacion");


  self.createApp = function(){
    self.app = new PIXI.Application(width,height,{backgroundColor: 0x175383});
    app.appendChild(self.app.renderer.view);

  var Loader = PIXI.loader;


  var atlasBlock6  = Loader.resources["assets/ui/Bloque_5/spritesheet.json"].textures;


//  var atlasBlock6_2 = Loader.resources['assets/ui/Bloque_5/spritesheet_bloque_5.json'].textures;

  var characters = ["9. N-15 500x350.png",
                    "5. ASV 500x350.png",
                    "7. S-15 500x350.png",
                    "10. N+15 500x350.png",
                    "6. ACV 500x350.png",
                    "8. S+15 500x350.png",
                    "2. GENERADOS 500x350.png",
                    "3. Z 500x350.png",
                    "4. QUEBRANTADOS  500x350.png"
                   ];


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

                   var subtitle=new PIXI.Text("Simulador global",{
                     fontSize: screen.height * 24 / 880,
                     fontFamily: "Roboto-Black",
                     fill: "#FFFFFF"
                   });
                   subtitle.x=(self.app.screen.width/2.5);
                 	 subtitle.y=(self.app.screen.height/10);

                   var estrategia=new PIXI.Text("Ahora , te invitamos a crear tu propia estrategia de clientes. Visualiza y analiza el comportamiento de la Tasa de Compra y Venta Total al interactuar con uno o más perfiles de clientes.",{
                     fontSize: screen.height * 12 / 880,
                     fontFamily: "Roboto-Black",
                     fill: "#FFFFFF"
                   });
                   estrategia.x=(self.app.screen.width/10);
                 	 estrategia.y=(self.app.screen.height/6);

                   self.app.stage.addChild(title);
                    self.app.stage.addChild(subtitle);
                    self.app.stage.addChild(estrategia);


    var container_characters = new PIXI.Container();
        self.app.stage.addChild(container_characters);



       var estilo1={
         fontFamily:"Roboto-Bold",
         fontSize:self.app.screen.width*16/950,
         fill:"#FFFFFF"
       };

       var estilo2={
         fontFamily:"Roboto-Bold",
         fontSize:40,
         fill:"#FFFFFF"
       };

       var estilo3 = {
         fontFamily:"Roboto-Bold",
         fontSize:factorScreen(30),
         fill:"#d82215"
       };

          // tc_TXT.x=width*.18;
          //tc_TXT.y=height/2;
          // self.app.stage.addChild(tc_TXT);

          var total_tc = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_5/botones/12. RECUADRO DE RESULTADOS FINALES 1.png"].texture);
          var total_vta =new PIXI.Sprite(Loader.resources["assets/ui/Bloque_5/botones/12. RECUADRO DE RESULTADOS FINALES.png"].texture);



          total_tc.x = self.app.screen.width/4;
          total_tc.y =self.app.screen.height/1.1;
          total_tc.scale.set(self.app.screen.width*.45/950);


          total_vta.x = self.app.screen.width/2;
          total_vta.y =self.app.screen.height/1.1;
          total_vta.scale.set(self.app.screen.width*.45/950);

          var total_ptxt=new PIXI.Text("TOTAL",{
            fontSize: screen.height * 30 / 880,
            fontFamily: "Roboto-Black",
            fill: "#FFFFFF",
            dropShadowColor: "#09102C",
            dropShadowDistance: 5,
            dropShadowAngle: Math.PI / 20
          });
          total_ptxt.x=(self.app.screen.width/8);
          total_ptxt.y=(self.app.screen.height/1.1);
          self.app.stage.addChild(total_ptxt);


          var tc_ptxt=new PIXI.Text("T.C",{
            fontSize: screen.height * 15 / 880,
            fontFamily: "Roboto-Black",
            fill: "#FFFFFF",
            dropShadowColor: "#09102C",
            dropShadowDistance: 5,
            dropShadowAngle: Math.PI / 20
          });
          tc_ptxt.x=(self.app.screen.width/2.5);
          tc_ptxt.y=(self.app.screen.height/1.15);
          self.app.stage.addChild(tc_ptxt);

          var venta_ptxt=new PIXI.Text("VENTA",{
            fontSize: screen.height * 15 / 880,
            fontFamily: "Roboto-Black",
            fill: "#FFFFFF",
            dropShadowColor: "#09102C",
            dropShadowDistance: 5,
            dropShadowAngle: Math.PI / 20
          });
          venta_ptxt.x=(self.app.screen.width/1.8);
          venta_ptxt.y=(self.app.screen.height/1.15);
          self.app.stage.addChild(venta_ptxt);


          var tctotal_test=document.createElement("p");
          tctotal_test.innerHTML="0"+"%";
          tctotal_test.setAttribute("id","tctotal_test");
          tctotal_test.setAttribute("style","position:absolute;top:"+(total_tc.y-16)+"px;left:"+(total_tc.x+total_tc.width/2)+"px;font-Family:roboto-regular;font-Size:1.50vw;font-weight:bold;");
          tctotal_test.typeObj=1;
          app.appendChild(tctotal_test);


              var totalventa_test=document.createElement("p");
              totalventa_test.innerHTML="0"+"%";
              totalventa_test.setAttribute("id","total-vta-tag");
              totalventa_test.setAttribute("style","position:absolute;top:"+(total_vta.y-16)+"px;left:"+(total_vta.x+total_vta.width/2.5)+"px;font-Family:roboto-regular;font-Size:1.50vw;font-weight:bold;");
              totalventa_test.typeObj=1;
              app.appendChild(totalventa_test);

                  var tctotalclientes_test=document.createElement("p");
                  tctotalclientes_test.innerHTML="0";
                  tctotalclientes_test.setAttribute("id","ctes-total-tag");
                  tctotalclientes_test.setAttribute("style","position:absolute;top:"+(total_tc.y)+"px;left:"+(total_tc.x+total_tc.width/6)+"px;font-Family:roboto-regular;font-Size:.50vw;font-weight:bold;color:#175383;");
                  tctotalclientes_test.typeObj=1;
                  app.appendChild(tctotalclientes_test);

                      var clientes_test=document.createElement("p");
                      clientes_test.innerHTML="Clientes";
                      clientes_test.setAttribute("id","clientes_test");
                      clientes_test.setAttribute("style","position:absolute;top:"+(total_tc.y+16)+"px;left:"+(total_tc.x+total_tc.width/8)+"px;font-Family:roboto-regular;font-Size:.50vw;font-weight:bold;color:#175383;");
                      clientes_test.typeObj=1;
                      app.appendChild(clientes_test);

                          var venta_increment=document.createElement("p");
                          venta_increment.innerHTML="0%";
                          venta_increment.setAttribute("id","venta_increment");
                          venta_increment.setAttribute("style","position:absolute;top:"+(total_vta.y-16)+"px;left:"+(total_vta.x+total_vta.width)+"px;font-Family:roboto-regular;font-Size:1.50vw;font-weight:bold;color:#008000;");
                          venta_increment.typeObj=1;
                          app.appendChild(venta_increment);

          self.app.stage.addChild(total_tc);
          self.app.stage.addChild(total_vta);

for(var i = 0 ;i<characters.length;i++){

  var Loader = PIXI.loader;

  //container_characters.x=self.app.screen.width/8;
  //container_characters.y=self.app.screen.height/5;



   var character = new PIXI.Sprite(atlasBlock6[characters[i]]);
   var tc = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_5/botones/13. RECUADRO DE TASA DE COMPRA.png"].texture);
   var cpa =new PIXI.Sprite(Loader.resources["assets/ui/Bloque_5/botones/14. RECUADRO DE TASA DE C.P.A Y VENTA.png"].texture);
   var vta = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_5/botones/14. RECUADRO DE TASA DE C.P.A Y VENTA.png"].texture);
   var tc_TXT=new PIXI.Text("T.C",estilo1);
   var cpa_TXT=new PIXI.Text("C.P.A",estilo1);
   var venta_TXT = new PIXI.Text("VENTA",estilo1);
   var porcent = new PIXI.Text("%",estilo2);

     var subContainer=new PIXI.Container();
         subContainer.width=200;
         //subContainer.height=200;
     var subContainer2=new PIXI.Container();
             subContainer.width=200;
          //   subContainer.height=200;

     character.scale.set(self.app.screen.width*.15/950);
      if(i==0)
     character.scale.set(self.app.screen.width*.145/950);
     character.x = (i % 3) * self.app.screen.width/3.5+width/10;
     character.y =Math.floor(i / 3) * self.app.screen.height/4.5+height/4;

     character.name ="character"+i;

     self.app.stage.addChild(subContainer);
     self.app.stage.addChild(subContainer2);
     subContainer.addChild(character);


     tc_TXT.x=(i % 3) * self.app.screen.width/3.5+width/6;
     tc_TXT.name="tc_TXT"+i;
     tc_TXT.y=Math.floor(i / 3) * self.app.screen.height/4.5+height/4;
     subContainer2.addChild(tc_TXT);

     cpa_TXT.x=(i % 3) * self.app.screen.width/3.5+width/6;
     cpa_TXT.y=Math.floor(i / 3) * self.app.screen.height/4.5+height/3.1;
     cpa_TXT.name="cpa_TXT"+i;
     subContainer2.addChild(cpa_TXT);

     venta_TXT.x=(i % 3) * self.app.screen.width/3.5+width/6;
     venta_TXT.y=Math.floor(i / 3) * self.app.screen.height/4.5+height/2.6  ;
     venta_TXT.name="venta_TXT"+i;
     subContainer2.addChild(venta_TXT);

     tc.scale.set(self.app.screen.width*.45/950);
     tc.x=tc_TXT.x+tc_TXT.width*1.1;
     tc.y=tc_TXT.y;
     tc.name="tc"+i;
     subContainer2.addChild(tc);


     cpa.scale.set(self.app.screen.width*.45/950);
     cpa.x=cpa_TXT.x+cpa_TXT.width*1.1;
     cpa.y=cpa_TXT.y;
     cpa.name="cpa"+i;
     subContainer2.addChild(cpa);

     vta.scale.set(self.app.screen.width*.50/950);
     vta.x=venta_TXT.x+venta_TXT.width*1.1;
     vta.y=venta_TXT.y;
     vta.name="vta"+i;
     subContainer2.addChild(vta);

     var tc_test=document.createElement("p");
     tc_test.innerHTML="0%";
     tc_test.setAttribute("id","tc-tag-" + i);
     tc_test.setAttribute("style","position:absolute;top:"+(tc.y-8)+"px;left:"+(tc.x+tc.width/2)+"px;font-Family:roboto-regular;font-Size:.75vw;font-weight:bold;");
     tc_test.typeObj=1;
     app.appendChild(tc_test);

         var tc_clientes=document.createElement("p");
         tc_clientes.innerHTML="0";
         tc_clientes.setAttribute("id","tc_clientes"+i);
         tc_clientes.setAttribute("style","position:absolute;top:"+(tc.y-(tc.height/4))+"px;left:"+(tc.x+tc.width/5)+"px;font-Family:roboto-regular;font-Size:.50vw;font-weight:bold;color:#175383;");
         tc_clientes.typeObj=1;
             app.appendChild(tc_clientes);

             var tc_clientestxt=document.createElement("p");
             tc_clientestxt.innerHTML="Clientes";
             tc_clientestxt.setAttribute("id","tc_clientestxt" + i);
             tc_clientestxt.setAttribute("style","position:absolute;top:"+(tc.y)+"px;left:"+(tc.x+tc.width/8)+"px;font-Family:roboto-regular;font-Size:.50vw;font-weight:bold;color:#175383;");
             tc_clientestxt.typeObj=1;
             app.appendChild(tc_clientestxt);

         var cpa_test=document.createElement("p");
         cpa_test.innerHTML="$"+"0";
         cpa_test.setAttribute("id","cpa-tag-"+i);
         cpa_test.setAttribute("style","position:absolute;top:"+(cpa.y-8)+"px;left:"+(cpa.x+cpa.width/2.5)+"px;font-Family:roboto-regular;font-Size:.75vw;font-weight:bold;");
         cpa_test.typeObj=1;
             app.appendChild(cpa_test);

             var vta_test=document.createElement("p");
             vta_test.innerHTML = "$" + "0";
             vta_test.setAttribute("id","vta-tag-" + i);
             vta_test.setAttribute("style","position:absolute;top:"+(vta.y-16)+"px;left:"+(vta.x+vta.width/8)+"px;font-Family:roboto-regular;font-Size:1.10vw;font-weight:bold;");
             vta_test.typeObj=1;
             app.appendChild(vta_test);

                 var vta_porcent=document.createElement("p");
                 vta_porcent.innerHTML=""+"%";
                 vta_porcent.setAttribute("id","vta_porcent"+i);
                 vta_porcent.setAttribute("style","position:absolute;top:"+(vta.y-8)+"px;left:"+(vta.x+vta.width+8)+"px;font-Family:roboto-regular;font-Size:.75vw;font-weight:bold;color:#FFFFFF");
                 vta_porcent.typeObj=1;
                 app.appendChild(vta_porcent);

    addCharacter(i);
    SliderB5B6(app, tc_test, "slider1", "slider_fam", (character.parent.x+character.x+character.width*1.5)/width,(character.y+character.height*.25+character.parent.y)/height,cpa.width,cpa.height,self);
}





var contButton = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/Bloque_3/b-continue.png"));
contButton.x = self.app.screen.width-100;
contButton.y = self.app.screen.height-50;
contButton.anchor.set(0.5);
contButton.scale.set(self.app.screen.width*.45/950);
contButton.interactive = true;
contButton.buttonMode = true;


var globo_1 = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/clientes/globo1.png"].texture);
var globo_2 =new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/clientes/globo2.png"].texture);
var globo_3 = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/clientes/globo3.png"].texture);
var globo_4 =new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/clientes/globo4.png"].texture);

var globo1_click = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/clientes/globo1_click.png"].texture);
var globo2_click =new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/clientes/globo2_click.png"].texture);
var globo3_click = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/clientes/globo3_click.png"].texture);
var globo4_click =new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/clientes/globo4_click.png"].texture);

var un_vencido = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/globos/1 VDO.png"].texture);
var dos_vencido = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/globos/2 VDO.png"].texture);
var tres_vencido = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/globos/3 VDO.png"].texture);
var cuatro_vencido = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/globos/4 VDO.png"].texture);


var container_globos = new PIXI.Container();


self.app.stage.addChild(container_globos);

//container_globos.scale.set(self.app.screen.width*.35/950);
container_globos.width=100;
container_globos.x=self.app.screen.width/2.6;
container_globos.y=self.app.screen.height/1.65;
container_globos.scale.set(self.app.screen.width*.50/950);

globo_1.x=25;
globo_1.scale.set(self.app.screen.width*.45/950);
globo_1.interactive = true;
globo_1.buttonMode = true;

globo_2.x=50;
globo_2.scale.set(self.app.screen.width*.45/950);
globo_2.interactive = true;
globo_2.buttonMode = true;

globo_3.x=75;
globo_3.scale.set(self.app.screen.width*.45/950);
globo_3.interactive = true;
globo_3.buttonMode = true;

globo_4.x=100;
globo_4.scale.set(self.app.screen.width*.45/950);
globo_4.interactive = true;
globo_4.buttonMode = true;

globo_1
.on("click",click_1)
.on("mouseover",mouseover_1)
.on("mouseout",MouseOut);

globo_2
.on("click",click_2)
.on("mouseover",mouseover_2)
.on("mouseout",MouseOut);

globo_3
.on("click",click_3)
.on("mouseover",mouseover_3)
.on("mouseout",MouseOut);

globo_4
.on("click",click_4)
.on("mouseover",mouseover_4)
.on("mouseout",MouseOut);

function click_1(){



globo1_click.x=25;
globo1_click.scale.set(self.app.screen.width*.45/950);
globo1_click.interactive = true;
globo1_click.buttonMode = true;
container_globos.addChild(globo1_click);


 container_globos.removeChild(globo2_click);
  container_globos.removeChild(globo3_click);
   container_globos.removeChild(globo4_click);

}

function mouseover_1(){

  un_vencido.x = self.app.screen.width/2.3;
  un_vencido.y = self.app.screen.height/1.5;
  un_vencido.anchor.set(0.5);
  un_vencido.scale.set(self.app.screen.width*.15/950);
  self.app.stage.addChild(un_vencido);



}


function click_2(){


  globo2_click.x=50;
  globo2_click.scale.set(self.app.screen.width*.45/950);
  globo2_click.interactive = true;
  globo2_click.buttonMode = true;
  container_globos.addChild(globo2_click);

  container_globos.removeChild(globo1_click);
   container_globos.removeChild(globo3_click);
    container_globos.removeChild(globo4_click);




}

function mouseover_2(){

  dos_vencido.x = self.app.screen.width/2.35;
  dos_vencido.y = self.app.screen.height/1.5;
  dos_vencido.anchor.set(0.5);
  dos_vencido.scale.set(self.app.screen.width*.15/950);
  self.app.stage.addChild(dos_vencido);



}


function click_3(){


globo3_click.x=75;
globo3_click.scale.set(self.app.screen.width*.45/950);
globo3_click.interactive = true;
globo3_click.buttonMode = true;
container_globos.addChild(globo3_click);

container_globos.removeChild(globo1_click);
 container_globos.removeChild(globo2_click);
  container_globos.removeChild(globo4_click);

}

function mouseover_3(){


  tres_vencido.x = self.app.screen.width/2.4;
  tres_vencido.y = self.app.screen.height/1.5;
  tres_vencido.anchor.set(0.5);
  tres_vencido.scale.set(self.app.screen.width*.15/950);
  self.app.stage.addChild(tres_vencido);


}



function click_4(){

globo4_click.x=100;
globo4_click.scale.set(self.app.screen.width*.45/950);
globo4_click.interactive = true;
globo4_click.buttonMode = true;
container_globos.addChild(globo4_click);

container_globos.removeChild(globo1_click);
 container_globos.removeChild(globo2_click);
  container_globos.removeChild(globo3_click);


}


function mouseover_4 (){

  cuatro_vencido.x = self.app.screen.width/2.45;
  cuatro_vencido.y = self.app.screen.height/1.5;
  cuatro_vencido.anchor.set(0.5);
  cuatro_vencido.scale.set(self.app.screen.width*.15/950);
 self.app.stage.addChild(cuatro_vencido);


}

function MouseOut (){

 self.app.stage.removeChild(un_vencido);
  self.app.stage.removeChild(dos_vencido);
   self.app.stage.removeChild(tres_vencido);
    self.app.stage.removeChild(cuatro_vencido);

}

container_globos.addChild(globo_1);
container_globos.addChild(globo_2);
container_globos.addChild(globo_3);
container_globos.addChild(globo_4);






self.app.stage.addChild(contButton);

contButton
.on("click",click);

function click (){

toSlide("conclusiones");

}

var regresar = PIXI.Texture.fromImage("assets/ui/Bloque_6/22. BOTON REGRESAR UN PASO PARA ATRAS 1.png");
var clear = PIXI.Texture.fromImage("assets/ui/Bloque_6/23. BOTON CLEAR 1.png");
var regresar_2 =PIXI.Texture.fromImage("assets/ui/Bloque_6/22. BOTON REGRESAR UN PASO PARA ATRAS 2.png");
var clear_2 =PIXI.Texture.fromImage("assets/ui/Bloque_6/23. BOTON CLEAR 2.png");

var button = new PIXI.Sprite(regresar);

button.x = self.app.screen.width/1.4;
button.y = self.app.screen.height/1.1;
button.scale.set(self.app.screen.width*.35/950);
button.interactive = true;
button.buttonMode = true;
self.app.stage.addChild(button);

var button_2 = new PIXI.Sprite(clear);

button_2.x = self.app.screen.width/1.3;
button_2.y = self.app.screen.height/1.1;
button_2.scale.set(self.app.screen.width*.35/950);
button_2.interactive = true;
button_2.buttonMode = true;
self.app.stage.addChild(button_2);


button
 .on("mouseover",mouseover_regresar)
 .on("mouseout",borrar_regresar);


 function mouseover_regresar(){

   this.Over = true;
    if(this.isdown){
    return;
    }
    this.texture = regresar_2;


 }

 function borrar_regresar(){
   this.Over = false;
   if(this.isdown){
   return;
   }
   this.texture = regresar;

 }

 button_2
 .on("mouseover",mouseover_clear)
 .on("mouseout",borrar_clear);


 function mouseover_clear(){

   this.Over = true;
    if(this.isdown){
    return;
    }
    this.texture = clear_2;


 }

 function borrar_clear(){
   this.Over = false;
   if(this.isdown){
   return;
   }
   this.texture = clear;

 }

 return self;
    };
let ventaTotal = 0;
let ctesTotal = 0;
function addCharacter(index) {
  let segmentos = [
    "Nunca015",
    "Activos SinVdo",
    "Saldado015",
    "Nunca+15",
    "Vencidos1",
    "Saldado+15",
    "Generados",
    "ClientesZ",
    "Quebrantados"
  ];

  let toDate = (dataCSV[dataCSV.length - 1]);
  let mmaa = (dataCSV[dataCSV.length - 13]);
  let char = new characters_erc(
    index,
    toDate["TC \n" + segmentos[index]],
    toDate["CPA \n" + segmentos[index]],
    "NA",
    toDate["Numero de clientes \n" + segmentos[index]],
    mmaa["Venta \n" + segmentos[index]]
  );

  self.characters.push(char);

  ventaTotal += self.characters[index].sale();
  ctesTotal += self.characters[index].countCtes;

  document.getElementById("tc_clientes" + index).innerHTML = numberWithCommas(self.characters[index].countCtes);
  document.getElementById("cpa-tag-" + index).innerHTML = "$" + numberWithCommas(self.characters[index].cpa);
  document.getElementById("vta-tag-" + index).innerHTML = "$"+ numberWithCommas(Math.round(self.characters[index].sale()));
  document.getElementById("tc-tag-" + index).innerHTML = self.characters[index].tc + "%";
  if(index == 8)  {
    document.getElementById("total-vta-tag").innerHTML = "$" + numberWithCommas(Math.round(ventaTotal));
    document.getElementById("ctes-total-tag").innerHTML = numberWithCommas(ctesTotal);
  }
}

self.updateTotal = function () {
  let vtaTotal = 0, vtaTotalMMAA = 0;
  for(let i = 0; i < self.characters.length; i++) {
    let tc = document.getElementById("tc-tag-" + i);
    let cte=self.characters[i];
    cte.tc = parseInt(tc.innerHTML);
    tc.innerHTML = cte.tc + "%";

    document.getElementById("vta-tag-" + i).innerHTML="$"+numberWithCommas(Math.round(cte.sale()));
    vtaTotal += cte.sale();
    vtaTotalMMAA += cte.vtaMMAA;
  }
  document.getElementById("total-vta-tag").innerHTML="$"+numberWithCommas(Math.round(vtaTotal));
  let variacion = (vtaTotal - vtaTotalMMAA) / vtaTotalMMAA * 100;
  console.log(variacion);
  let varElm = document.getElementById("venta_increment");
  if(variacion < 0) { varElm.style.color = "red"; } else { varElm.style.color = "green"; }
  varElm.innerHTML = (Math.round(variacion)) + "%";

  return self;
};

function characters_erc(index,tc,cpa,position,numCtes,vtaMMAA) {
  this.index = index;
  this.cpa = parseInt(cpa);
  this.tc = parseFloat(tc);
  this.position = position;
  this.countCtes = parseInt(numCtes);
  this.vtaMMAA = vtaMMAA;
  this.sale = function() {
    return this.cpa*((this.tc)/100)*this.countCtes;
  };
}
self.destroyApp=function(){


  if(self.app == null) return self;

  self.app.destroy(true);
  self.removeText();

  return self;
};

self.removeElements=function(){
  return self;
};

self.removeText=function(){
  while(app.firstChild){
    app.removeChild(app.firstChild);
  }
};

return self;
}
