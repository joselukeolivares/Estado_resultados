function simulador_global() {
  var self = {};
  var app = document.getElementById("aplicacion");
  self.characters = [];
  self.stepBack=[];
  self.historyFlag=true;
  self.indexHistory=0;
  let Loader = PIXI.loader;

  self.createApp = function () {

    self.app = new PIXI.Application(width, height, {backgroundColor: 0x175383});
    app.appendChild(self.app.renderer.view);

    var atlasBlock6  = Loader.resources["assets/ui/Bloque_5/spritesheet.json"].textures;
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
    let title = document.createElement("h1");
    title.className = "title";
    title.innerHTML = "Estado de resultados de Clientes";
    title.style.top = self.app.screen.height * 0.05  + "px";
    app.appendChild(title);

    let subTitle = document.createElement("h3");
    subTitle.className = "subTitle";
    subTitle.innerHTML = "Simluador global";
    subTitle.style.top = self.app.screen.height * 0.13 + "px";
    app.appendChild(subTitle);

    let estrategia = document.createElement("h6");
    estrategia.className = "subTitle";
    estrategia.innerHTML = "Ahora , te invitamos a crear tu propia estrategia de clientes. Visualiza y analiza el comportamiento de la Tasa de Compra y Venta Total al interactuar con uno o más perfiles de clientes.";
    estrategia.style.top = self.app.screen.height * 0.2 + "px";
    app.appendChild(estrategia);


    var container_characters = new PIXI.Container();
    self.app.stage.addChild(container_characters);

    var estilo1 = {
       fontFamily:"Roboto-Bold",
       fontSize:self.app.screen.width*16/950,
       fill:"#FFFFFF"
     };

     var estilo2 = {
       fontFamily:"Roboto-Bold",
       fontSize:40,
       fill:"#FFFFFF"
     };

     var total_tc = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_5/botones/12. RECUADRO DE RESULTADOS FINALES 1.png"].texture);
     total_tc.x = self.app.screen.width / 4;
     total_tc.y = self.app.screen.height / 1.1;
     total_tc.scale.set(self.app.screen.width * .45 / 950);

     var total_vta = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_5/botones/12. RECUADRO DE RESULTADOS FINALES.png"].texture);
     total_vta.x = self.app.screen.width / 2;
     total_vta.y = self.app.screen.height / 1.1;
     total_vta.scale.set(factorScreen(.8),self.app.screen.width * .45 / 950);

     let total = document.createElement("h2");
     total.className = "tags";
     total.innerHTML = "TOTAL";
     total.style.top = self.app.screen.height * 0.91 + "px";
     total.style.left = self.app.screen.width * 0.16 + "px";
     app.appendChild(total);

     let tcTotal = document.createElement("h4");
     tcTotal.className = "tags";
     tcTotal.innerHTML = "T.C.";
     tcTotal.style.top = self.app.screen.height * 0.87 + "px";
     tcTotal.style.left = self.app.screen.width * 0.4 + "px";
     app.appendChild(tcTotal);

     let vtaTotal = document.createElement("h4");
     vtaTotal.className = "tags";
     vtaTotal.innerHTML = "VENTA";
     vtaTotal.style.top = self.app.screen.height * 0.87 + "px";
     vtaTotal.style.left = self.app.screen.width * 0.56 + "px";
     app.appendChild(vtaTotal);

     var tcTotalElm = document.createElement("p");
     tcTotalElm.setAttribute("id", "tc-total-tag");
     tcTotalElm.setAttribute("class","sin_margen");
     tcTotalElm.setAttribute("style", "position: absolute; top: " + (total_tc.y) + "px; left: " + (total_tc.x + total_tc.width / 2) + "px; font-Family: roboto-regular; font-Size: "+factorScreen(28)+"px; font-weight: bold;");
     tcTotalElm.typeObj = 1;
     app.appendChild(tcTotalElm);

     var totalVentaElm = document.createElement("p");
     totalVentaElm.setAttribute("id", "total-vta-tag");
     totalVentaElm.setAttribute("class","sin_margen");
     totalVentaElm.setAttribute("style", "position:absolute;top:"+(total_vta.y)+"px;left:"+(total_vta.x+total_vta.width / 10)+"px;font-Family:roboto-regular;font-Size:"+factorScreen(28)+"px;font-weight:bold;");
     totalVentaElm.typeObj=1;
     app.appendChild(totalVentaElm);

     var tcTotalCtesElm = document.createElement("p");
     tcTotalCtesElm.setAttribute("id", "ctes-total-tag");
     tcTotalCtesElm.setAttribute("class","sin_margen");
     tcTotalCtesElm.setAttribute("style", "position:absolute;top:"+(total_tc.y)+"px;left:"+(total_tc.x+total_tc.width*.05)+"px;font-Family:roboto-regular;font-Size:"+factorScreen(18)+"px;font-weight:bold;color:#175383;");
     tcTotalCtesElm.typeObj=1;
     app.appendChild(tcTotalCtesElm);

     var ctesElm=document.createElement("p");
     ctesElm.innerHTML="Clientes";
     ctesElm.setAttribute("id", "ctesElm");
     ctesElm.setAttribute("class","sin_margen");
     ctesElm.setAttribute("style", "position:absolute;top:"+(total_tc.y+(total_tc.height/2))+"px;left:"+(total_tc.x+total_tc.width/8)+"px;font-Family:roboto-regular;font-Size:"+factorScreen(14)+"px;font-weight:bold;color:#175383;");
     ctesElm.typeObj=1;
     app.appendChild(ctesElm);

     var varGlobalElm = document.createElement("p");
     varGlobalElm.setAttribute("id", "var-global");
     varGlobalElm.setAttribute("style","position:absolute;top:"+(total_vta.y-16)+"px;left:"+(total_vta.x+total_vta.width)+"px;font-Family:roboto-regular;font-Size:1.50vw;font-weight:bold;color:#00CD00;");
     varGlobalElm.typeObj=1;
     app.appendChild(varGlobalElm);

     self.app.stage.addChild(total_tc);
     self.app.stage.addChild(total_vta);

     for(let i = 0 ; i < characters.length; i++) {

       var character = new PIXI.Sprite(atlasBlock6[characters[i]]);
       var tc = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_5/botones/13. RECUADRO DE TASA DE COMPRA.png"].texture);
       var cpa =new PIXI.Sprite(Loader.resources["assets/ui/Bloque_5/botones/14. RECUADRO DE TASA DE C.P.A Y VENTA.png"].texture);
       var vta = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_5/botones/14. RECUADRO DE TASA DE C.P.A Y VENTA.png"].texture);
       let tcIndi = document.createElement("h4");
       tcIndi.className = "tags";
       tcIndi.innerHTML = "T.C.";
       let cpaIndi = document.createElement("h4");
       cpaIndi.className = "tags";
       cpaIndi.innerHTML = "C.P.A.";
       let ventaIndi = document.createElement("h4");
       ventaIndi.className = "tags";
       ventaIndi.innerHTML = "VENTA";

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

     character.scale.set(.2);
      if(i==0)
     character.scale.set(.2);
     character.x = (i % 3) * self.app.screen.width/3.5+width/10;
     character.y =Math.floor(i / 3) * self.app.screen.height/4.5+height/4;

     character.name ="character"+i;

     self.app.stage.addChild(subContainer);
     self.app.stage.addChild(subContainer2);
     subContainer.addChild(character);

     tcIndi.style.left = (i % 3) * self.app.screen.width / 3.5 + width / 6 + "px";
     tcIndi.style.top = Math.floor(i / 3) * self.app.screen.height / 4.5 + height / 4 + "px";
     app.appendChild(tcIndi);

     tc_TXT.x=(i % 3) * self.app.screen.width/3.5+width/6;
     tc_TXT.name="tc_TXT"+i;
     tc_TXT.y=Math.floor(i / 3) * self.app.screen.height/4.5+height/4;

     cpaIndi.style.left = (i % 3) * self.app.screen.width / 3.5 + width / 6 + "px";
     cpaIndi.style.top = Math.floor(i / 3) * self.app.screen.height / 4.5 + height / 3.1 + "px";
     app.appendChild(cpaIndi);

     cpa_TXT.x=(i % 3) * self.app.screen.width/3.5+width/6;
     cpa_TXT.y=Math.floor(i / 3) * self.app.screen.height/4.5+height/3.1;
     cpa_TXT.name="cpa_TXT"+i;

     ventaIndi.style.left = (i % 3) * self.app.screen.width / 3.5 + width / 6 + "px";
     ventaIndi.style.top = Math.floor(i / 3) * self.app.screen.height / 4.5 + height / 2.6 + "px";
     app.appendChild(ventaIndi);

     venta_TXT.x=(i % 3) * self.app.screen.width/3.5+width/6;
     venta_TXT.y=Math.floor(i / 3) * self.app.screen.height/4.5+height/2.6  ;
     venta_TXT.name="venta_TXT"+i;


     tc.scale.set(factorScreen(.8),factorScreen(.6));
     tc.x=tc_TXT.x+tc_TXT.width*1.1;
     tc.y=tc_TXT.y;

     tc.name="tc"+i;
     subContainer2.addChild(tc);
     console.log(tc_TXT.y);
     console.log(tcIndi.getBoundingClientRect().top);

     cpa.scale.set(self.app.screen.width*.45/950);
     cpa.x=cpa_TXT.x+cpa_TXT.width*1.1;
     cpa.y=cpa_TXT.y;
     cpa.name="cpa"+i;
     subContainer2.addChild(cpa);

     vta.scale.set(factorScreen(1),self.app.screen.width*.50/950);
     vta.x=venta_TXT.x+venta_TXT.width*1.1;
     vta.y=venta_TXT.y;
     vta.name="vta"+i;
     subContainer2.addChild(vta);

     //porcent.x=vta.width+200;
     //vta.addChild(porcent);


     var tc_test=document.createElement("p");
     tc_test.setAttribute("id","tc-tag-"+i);
     tc_test.setAttribute("class","sin_margen")
     tc_test.setAttribute("style","position:absolute;top:"+(tc.y)+"px;left:"+(tc.x+tc.width/2)+"px;font-Family:roboto-regular;font-Size:"+factorScreen(24)+"px;font-weight:bold;");
     tc_test.typeObj=1;
         app.appendChild(tc_test);

         var tc_clientes=document.createElement("p");
         tc_clientes.innerHTML="0";
         tc_clientes.setAttribute("class","sin_margen");
         tc_clientes.setAttribute("id","tc_clientes"+i);
         tc_clientes.setAttribute("style","position:absolute;top:"+(tc.y)+"px;left:"+(tc.x+tc.width*.02)+"px;font-Family:roboto-regular;font-Size:"+factorScreen(14)+"px;font-weight:bold;color:#175383;");
         tc_clientes.typeObj=1;
             app.appendChild(tc_clientes);

             var tc_clientestxt=document.createElement("p");
             tc_clientestxt.innerHTML="Clientes";
             tc_clientestxt.setAttribute("class","sin_margen");
             tc_clientestxt.setAttribute("id","tc_clientestxt"+i);
             tc_clientestxt.setAttribute("style","position:absolute;top:"+(tc.y+tc.height/2)+"px;left:"+(tc.x+tc.width*.05)+"px;font-Family:roboto-regular;font-Size:"+factorScreen(12)+"px;color:#175383;");
             tc_clientestxt.typeObj=1;
                 app.appendChild(tc_clientestxt);

         var cpa_test=document.createElement("p");
         cpa_test.innerHTML="$"+"0";
         cpa_test.setAttribute("class","sin_margen");
         cpa_test.setAttribute("id","cpa-tag-"+i);
         cpa_test.setAttribute("style","position:absolute;top:"+(cpa.y)+"px;left:"+(cpa.x+cpa.width*.05)+"px;font-Family:roboto-regular;font-Size:"+factorScreen(24)+"px;font-weight:bold;");
         cpa_test.typeObj=1;
             app.appendChild(cpa_test);

             var vta_test=document.createElement("p");
             vta_test.setAttribute("id","vta-tag-"+i);
             vta_test.setAttribute("class","sin_margen");
             vta_test.setAttribute("style","position:absolute;top:"+(vta.y)+"px;left:"+(vta.x)+"px;font-Family:roboto-regular;font-Size:"+factorScreen(24)+"px;font-weight:bold;");
             vta_test.typeObj=1;
                 app.appendChild(vta_test);

                 var vta_porcent=document.createElement("p");
                 vta_porcent.innerHTML=""+"%";
                 vta_porcent.setAttribute("id","vta_porcent"+i);
                 vta_porcent.setAttribute("class","sin_margen");
                 vta_porcent.setAttribute("style","position:absolute;top:"+(vta.y+vta.height/2)+"px;left:"+(vta.x+vta.width+8)+"px;font-Family:roboto-regular;font-Size:.75vw;font-weight:bold;color:#FFFFFF");
                 vta_porcent.typeObj=1;
                     app.appendChild(vta_porcent);



     SliderB5B6(app, tc_test,"slider1"+i,"slider_fam",(tc.x)/width,(tc.y+tc.height*1.2+tc.parent.y)/height,tc.width,cpa.height,self);
     addCharacter(i);
}
var vencidos=["Vencidos2","Vencidos3","Vencidos+4"]

for(var j=0;j<vencidos.length;j++){
  let toDate = (dataCSV[dataCSV.length - 1]);
  let mmaa = (dataCSV[dataCSV.length - 13]);
  self.characters.push(new characters_erc(
    self.characters.length+j,
    toDate["TC \n" + vencidos[j]],
    toDate["CPA \n" + vencidos[j]],
    "NA",
    toDate["Numero de clientes \n" + vencidos[j]],
    mmaa["Venta \n" + vencidos[j]],
    toDate["Venta \n" + vencidos[j]]
  ));
  self.characters[self.characters.length-1].vencido=j+2;
}

self.updateTotal(99999,"NA");
self.stepBack.push(JSON.stringify(self.characters));

var contButton = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/Bloque_3/b-continue.png"));
contButton.x = width*.90;
contButton.y = height*.95;
contButton.anchor.set(0.5);
contButton.scale.set(factorScreen(.6));
contButton.interactive = true;
contButton.buttonMode = true;


var unVdoB = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/clientes/globo1.png"].texture);
    unVdoB.numero="1";
var dosVdoB =new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/clientes/globo2.png"].texture);
    dosVdoB.numero="2";
var tresVdoB = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/clientes/globo3.png"].texture);
    tresVdoB.numero="3";
var cuatroVdoB =new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/clientes/globo4.png"].texture);
    cuatroVdoB.numero="+4";

var unVdoClked = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/clientes/globo1_click.png"].texture);
    unVdoClked.name="unVdoClkedSprite";
var dosVdoClked =new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/clientes/globo2_click.png"].texture);
    dosVdoClked.name="dosVdoClkedSprite";
    dosVdoClked.visible=false;
var tresVdoClked = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/clientes/globo3_click.png"].texture);
    tresVdoClked.name="tresVdoClkedSprite";
    tresVdoClked.visible=false;
var cuatroVdoClked =new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/clientes/globo4_click.png"].texture);
    cuatroVdoClked.name="cuatroVdoClkedSprite";
    cuatroVdoClked.visible=false;


var un_vencido = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/globos/1 VDO.png"].texture);
var dos_vencido = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/globos/2 VDO.png"].texture);
var tres_vencido = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/globos/3 VDO.png"].texture);
var cuatro_vencido = new PIXI.Sprite(Loader.resources["assets/ui/Bloque_4/globos/4 VDO.png"].texture);
var container_globos = new PIXI.Container();
    container_globos.name="container_globos";
    self.app.stage.addChild(container_globos);

    var vencidoDiv=document.createElement('div');
        vencidoDiv.setAttribute("id","globosVdo");
        vencidoDiv.setAttribute("class","sin_margen");
        vencidoDiv.setAttribute("style","font-family:'Roboto-regular';position:absolute;width:200px;height:50px;top:100px;left:400px;background-color:white;border-radius:25px;");
    var p_tagACV=document.createElement('p');

        document.body.appendChild(vencidoDiv);
        vencidoDiv.appendChild(p_tagACV);
        vencidoDiv.style.display="none";




//container_globos.scale.set(self.app.screen.width*.35/950);
container_globos.width=100;
container_globos.x=self.app.screen.width/2.6;
container_globos.y=self.app.screen.height/1.65;
container_globos.scale.set(self.app.screen.width*.50/950);


unVdoB.x=-10;
unVdoB.name="unVdoB";
//unVdoB.scale.set();
unVdoB.interactive = true;
unVdoB.buttonMode = true;
unVdoB.visible = false;

unVdoClked.x =unVdoB.x;
//unVdoClked.scale.set(self.app.screen.width * .45 / 950);
//dosVdoClked.scale.set(self.app.screen.width * .45 / 950);
//tresVdoClked.scale.set(self.app.screen.width * .45 / 950);
//cuatroVdoClked.scale.set(self.app.screen.width * .45 / 950);
//unVdoClked.interactive = true;
//unVdoClked.buttonMode = true;

dosVdoB.x=unVdoB.x+unVdoB.width;
dosVdoB.name="dosVdoB";
//dosVdoB.scale.set(self.app.screen.width*.45/950);
dosVdoB.interactive = true;
dosVdoB.buttonMode = true;

tresVdoB.x=unVdoB.x+unVdoB.width*2;
tresVdoB.name="tresVdoB";
//tresVdoB.scale.set(self.app.screen.width*.45/950);
tresVdoB.interactive = true;
tresVdoB.buttonMode = true;

cuatroVdoB.x=unVdoB.x+unVdoB.width*3;
cuatroVdoB.name="cuatroVdoB";
//cuatroVdoB.scale.set(self.app.screen.width*.45/950);
cuatroVdoB.interactive = true;
cuatroVdoB.buttonMode = true;

unVdoB
//.on("click", onClick1)
.on("pointerdown", changeVdo)
.on("mouseover",acvLetters)
.on("mouseout",acvLettersHide);

dosVdoB
//.on("click", onClick2)
.on("pointerdown", changeVdo)
.on("mouseover",acvLetters)
.on("mouseout",acvLettersHide);

tresVdoB
//.on("click", onClick3)
.on("pointerdown", changeVdo)
.on("mouseover",acvLetters)
.on("mouseout",acvLettersHide);

cuatroVdoB
//.on("click", onClick4)
.on("pointerdown", changeVdo)
.on("mouseover",acvLetters)
.on("mouseout",acvLettersHide);

function acvLetters(event){
  vencidoDiv.style.left=(event.target.x+this.parent.x+this.parent.parent.x)+(parseFloat(main.style.left)/100*screen.width)-(this.width/2)+"px";
debugger;
  vencidoDiv.style.top=(event.target.y+this.parent.y+this.parent.parent.y)+this.height+"px";
  p_tagACV.innerHTML="Meses con Vencido: "+this.numero;
  vencidoDiv.style.display="block";
}
function acvLettersHide(){
  vencidoDiv.style.display="none";
}

function changeVdo(){


  var button=((this.name).substring(0,this.name.length-1));
  var mesVencido=0;
   var buttons=["unVdoClkedSprite","dosVdoClkedSprite","tresVdoClkedSprite","cuatroVdoClkedSprite"]
  for(var i=0;i<buttons.length;i++){

    var clicked=container_globos.getChildByName(buttons[i]);
    clicked.visible=false;
    var txt=buttons[i].substring(0,buttons[i].length-11);

    var unClicked=container_globos.getChildByName(buttons[i].substring(0,buttons[i].length-11)+"B");
        unClicked.visible=true;

        if(button==txt)
         mesVencido=i+1;
  }
  var nameClicked="";
  var clicked=container_globos.getChildByName(button+"ClkedSprite");
      clicked.visible=true;
      this.visible=false;
      console.log("Mes Vencido seleccionado"+mesVencido);
var characters=self.characters;
let dataSet = (dataCSV[dataCSV.length - 1]);
  for(var k=0;k<characters.length;k++){
      if(characters[k].vencido==mesVencido){
        console.log("Lo encontramos en la posicion:"+k);
        var aux=characters[4];
        characters[4]=characters[k];
        characters[k]=aux;
/*
        document.getElementById("tc-tag-4").innerHTML = self.characters[4].tc + "%";
        self.characters[4].countCtes = dataSet["Numero de clientes \nVencidos1"];
        document.getElementById("tc_clientes4" ).innerHTML = numberWithCommas(self.characters[4].countCtes);
        self.characters[4].cpa = dataSet["CPA \nVencidos1"];
        document.getElementById("cpa-tag-4").innerHTML = "$" + numberWithCommas(self.characters[4].cpa);
*/
        self.updateTotal(99999,"NA");
      }
  }

  if(self.stepBack.length<100){
    self.stepBack.push(JSON.stringify(self.characters));
    self.indexHistory++;
  }

}

  function onClick1() {
    container_globos.addChild(unVdoClked);

    container_globos.removeChild(dosVdoClked);
    container_globos.removeChild(tresVdoClked);
    container_globos.removeChild(cuatroVdoClked);

    let dataSet = (dataCSV[dataCSV.length - 1]);
    self.characters[4].tc = dataSet["TC \nVencidos1"];
    document.getElementById("tc-tag-4").innerHTML = self.characters[4].tc + "%";
    self.characters[4].countCtes = dataSet["Numero de clientes \nVencidos1"];
    document.getElementById("tc_clientes4" ).innerHTML = numberWithCommas(self.characters[4].countCtes);
    self.characters[4].cpa = dataSet["CPA \nVencidos1"];
    document.getElementById("cpa-tag-4").innerHTML = "$" + numberWithCommas(self.characters[4].cpa);

    self.updateTotal(99999,"NA");
  }


  function mouseOver1() {
    un_vencido.x = self.app.screen.width / 2.3;
    un_vencido.y = self.app.screen.height / 1.5;
    un_vencido.anchor.set(0.5);
    un_vencido.scale.set(self.app.screen.width * .15 / 950);
    self.app.stage.addChild(un_vencido);
  }


  function onClick2() {
    unVdoB.visible = true;
    dosVdoClked.x=50;
    dosVdoClked.scale.set(self.app.screen.width*.45/950);
    dosVdoClked.interactive = true;
    dosVdoClked.buttonMode = true;
    container_globos.addChild(dosVdoClked);

    container_globos.removeChild(unVdoClked);
    container_globos.removeChild(tresVdoClked);
    container_globos.removeChild(cuatroVdoClked);

    let dataSet = (dataCSV[dataCSV.length - 1]);
    self.characters[4].tc = dataSet["TC \nVencidos2"];
    document.getElementById("tc-tag-4").innerHTML = self.characters[4].tc + "%";
    self.characters[4].countCtes = dataSet["Numero de clientes \nVencidos2"];
    document.getElementById("tc_clientes4" ).innerHTML = numberWithCommas(self.characters[4].countCtes);
    self.characters[4].cpa = dataSet["CPA \nVencidos2"];
    document.getElementById("cpa-tag-4").innerHTML = "$" + numberWithCommas(self.characters[4].cpa);

    self.updateTotal(99999,"NA");
  }

  function mouseOver2(event) {
    debugger;
    var main=document.getElementById('main');

    dos_vencido.x = self.app.screen.width/2.35;
    dos_vencido.y = self.app.screen.height/1.5;
    dos_vencido.anchor.set(0.5);
    dos_vencido.scale.set(self.app.screen.width*.15/950);
    self.app.stage.addChild(dos_vencido);
  }

  function onClick3() {
    unVdoB.visible = true;
    tresVdoClked.x=75;
    tresVdoClked.scale.set(self.app.screen.width*.45/950);
    tresVdoClked.interactive = true;
    tresVdoClked.buttonMode = true;
    container_globos.addChild(tresVdoClked);

    container_globos.removeChild(unVdoClked);
    container_globos.removeChild(dosVdoClked);
    container_globos.removeChild(cuatroVdoClked);

    let dataSet = (dataCSV[dataCSV.length - 1]);
    self.characters[4].tc = dataSet["TC \nVencidos3"];
    document.getElementById("tc-tag-4").innerHTML = self.characters[4].tc + "%";
    self.characters[4].countCtes = dataSet["Numero de clientes \nVencidos3"];
    document.getElementById("tc_clientes4" ).innerHTML = numberWithCommas(self.characters[4].countCtes);
    self.characters[4].cpa = dataSet["CPA \nVencidos3"];
    document.getElementById("cpa-tag-4").innerHTML = "$" + numberWithCommas(self.characters[4].cpa);

    self.updateTotal(99999,"NA");
  }

  function mouseOver3(){
    tres_vencido.x = self.app.screen.width/2.4;
    tres_vencido.y = self.app.screen.height/1.5;
    tres_vencido.anchor.set(0.5);
    tres_vencido.scale.set(self.app.screen.width*.15/950);
    self.app.stage.addChild(tres_vencido);
  }

  function onClick4() {
    unVdoB.visible = true;
    cuatroVdoClked.x=100;
    cuatroVdoClked.scale.set(self.app.screen.width*.45/950);
    cuatroVdoClked.interactive = true;
    cuatroVdoClked.buttonMode = true;
    container_globos.addChild(cuatroVdoClked);

    container_globos.removeChild(unVdoClked);
    container_globos.removeChild(dosVdoClked);
    container_globos.removeChild(tresVdoClked);

    let dataSet = (dataCSV[dataCSV.length - 1]);
    self.characters[4].tc = dataSet["TC \nVencidos+4"];
    document.getElementById("tc-tag-4").innerHTML = self.characters[4].tc + "%";
    self.characters[4].countCtes = dataSet["Numero de clientes \nVencidos+4"];
    document.getElementById("tc_clientes4").innerHTML = numberWithCommas(self.characters[4].countCtes);
    self.characters[4].cpa = dataSet["CPA \nVencidos+4"];
    document.getElementById("cpa-tag-4").innerHTML = "$" + numberWithCommas(self.characters[4].cpa);

    self.updateTotal(99999,"NA");
  }

  function mouseOver4() {
    cuatro_vencido.x = self.app.screen.width/2.45;
    cuatro_vencido.y = self.app.screen.height/1.5;
    cuatro_vencido.anchor.set(0.5);
    cuatro_vencido.scale.set(self.app.screen.width*.15/950);
    self.app.stage.addChild(cuatro_vencido);
  }

  function onMouseOut() {
    self.app.stage.removeChild(un_vencido);
    self.app.stage.removeChild(dos_vencido);
    self.app.stage.removeChild(tres_vencido);
    self.app.stage.removeChild(cuatro_vencido);
  }


  container_globos.addChild(unVdoClked);
  dosVdoClked.x=unVdoClked.x+unVdoClked.width;
  container_globos.addChild(dosVdoClked);
  tresVdoClked.x=unVdoClked.x+unVdoClked.width*2;
  container_globos.addChild(tresVdoClked);
  cuatroVdoClked.x=unVdoClked.x+unVdoClked.width*3;
  container_globos.addChild(cuatroVdoClked);
  container_globos.addChild(unVdoB);
  container_globos.addChild(dosVdoB);
  container_globos.addChild(tresVdoB);
  container_globos.addChild(cuatroVdoB);




self.app.stage.addChild(contButton);

contButton
.on("click",click);

function click (){

toSlide("conclusiones");

}

var regresar = PIXI.Texture.fromImage("assets/ui/Bloque_6/22. BOTON REGRESAR UN PASO PARA ATRAS 1.png");
var regresar_2 =PIXI.Texture.fromImage("assets/ui/Bloque_6/22. BOTON REGRESAR UN PASO PARA ATRAS 2.png");
var button = new PIXI.Sprite(regresar);

button.x = self.app.screen.width*.75;
button.y = self.app.screen.height/1.1;
button.scale.set(self.app.screen.width*.35/950);
button.interactive = true;
button.buttonMode = true;
self.app.stage.addChild(button);


button
 .on("mouseover",mouseover_regresar)
 .on("pointerdown",function(){
   self.historyFlag=false;
   if(self.indexHistory!=0)
   self.indexHistory--;
   self.characters = JSON.parse(self.stepBack[self.indexHistory]);
   for(var i = 0; i < self.characters.length; i++) {
     self.characters[i].sale = function() {
         return this.cpa*((this.tc)/100)*this.countCtes;
       };
   }
   var vencSelected=self.characters[4].vencido;

   var buttons=["unVdoClkedSprite","dosVdoClkedSprite","tresVdoClkedSprite","cuatroVdoClkedSprite"]
              for(var i=0;i<buttons.length;i++){

                var clicked=container_globos.getChildByName(buttons[i]);
                clicked.visible=false;
                if(i+1==vencSelected)
                clicked.visible=true;
                var txt=buttons[i].substring(0,buttons[i].length-11);

                var unClicked=container_globos.getChildByName(buttons[i].substring(0,buttons[i].length-11)+"B");
                    unClicked.visible=true;
                    if(i+1==vencSelected)
                    unClicked.visible=false;

              }



   self.updateTotal(99999,"NA");
 })
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

 var clear = PIXI.Texture.fromImage("assets/ui/Bloque_6/23. BOTON CLEAR 1.png");
 var clearSelected = PIXI.Texture.fromImage("assets/ui/Bloque_6/23. BOTON CLEAR 2.png");
 var clearButton = new PIXI.Sprite(clear);

 clearButton.x = self.app.screen.width * .8;
 clearButton.y = self.app.screen.height / 1.1;

 clearButton.scale.set(self.app.screen.width*.35/950);
 clearButton.interactive = true;
 clearButton.buttonMode = true;
 self.app.stage.addChild(clearButton);

 clearButton
   .on("mouseover",onMouseOverClear)
   .on("mouseout", onMouseOutClear)
   .on("click", onClickClear);

 function onMouseOverClear() {
   this.Over = true;
   if(this.isdown){
     return;
   }
   this.texture = clearSelected;
 }

 function  onMouseOutClear() {
   this.Over = false;
   if(this.isdown){
     return;
   }
   this.texture = clear;
 }

 function onClickClear() {
   container_globos.addChild(unVdoClked);

   container_globos.removeChild(dosVdoClked);
   container_globos.removeChild(tresVdoClked);
   container_globos.removeChild(cuatroVdoClked);

   for(let i = 0; i < defaultVals.length; i++) {
     document.getElementById("tc_clientes" + i).innerHTML = numberWithCommas(defaultVals[i].nCtes);
     document.getElementById("cpa-tag-" + i).innerHTML = "$" + numberWithCommas(defaultVals[i].cpa);
     document.getElementById("vta-tag-" + i).innerHTML = "$"+ numberWithCommas(Math.round(defaultVals[i].sale()));
     document.getElementById("tc-tag-" + i).innerHTML = defaultVals[i].tc + "%";
     if(i == 8)  {
       document.getElementById("tc-total-tag").innerHTML = defaultVals[i].tcTotal + "%";
       document.getElementById("total-vta-tag").innerHTML = "$" + numberWithCommas(Math.round(defaultVals[i].vtaTotal));
       document.getElementById("ctes-total-tag").innerHTML = numberWithCommas(defaultVals[i].nCtesTotal);
       document.getElementById("var-global").innerHTML = (Math.round(defaultVals[i].variacionGlob)) + "%";
     }

     var sliders = document.getElementsByClassName("slider");
     var knob = sliders[i].childNodes[1];
     knob.style.left = ((sliders[i].getBoundingClientRect().width * defaultVals[i].tc / 100) - (parseInt(knob.style.width) / 2)) + "px";
   }
 }




 return self;
    };

let ventaTotal = 0;
let ventaTotalMMAA = 0;
let defaultVals = [];

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
    mmaa["Venta \n" + segmentos[index]],
    toDate["Venta \n" + segmentos[index]]
  );
  if(index==4)
  char.vencido=1;
  self.characters.push(char);

  ventaTotal += self.characters[index].sale();
  ventaTotalMMAA += self.characters[index].vtaMMAA;

  document.getElementById("tc_clientes" + index).innerHTML = numberWithCommas(self.characters[index].countCtes);
  document.getElementById("cpa-tag-" + index).innerHTML = "$" + numberWithCommas(Math.round(self.characters[index].cpa));
  document.getElementById("vta-tag-" + index).innerHTML = "$"+ numberWithCommas(Math.round(self.characters[index].sale()));
  document.getElementById("tc-tag-" + index).innerHTML = self.characters[index].tc + "%";
  document.getElementById("tc-total-tag").innerHTML = toDate["TC \nTotal"] + "%";
  document.getElementById("vta_porcent"+ index).innerHTML = 0 + "%";
  if(index == 8)  {
    document.getElementById("total-vta-tag").innerHTML = "$" + numberWithCommas(Math.round(ventaTotal));
    document.getElementById("ctes-total-tag").innerHTML = numberWithCommas(Math.round(toDate["Total de \nClientes"]));
    var variacionGlob = ((ventaTotal - ventaTotalMMAA) / ventaTotalMMAA) * 100;
    document.getElementById("var-global").innerHTML = (Math.round(variacionGlob)) + "%";
  }

  var sliders = document.getElementsByClassName("slider");
  var knob = sliders[index].childNodes[1];
  knob.style.left = ((sliders[index].getBoundingClientRect().width * self.characters[index].tc / 100) - (parseInt(knob.style.width) / 2)) + "px";

  let defaultChar =  {
    index: index,
    tc: toDate["TC \n" + segmentos[index]],
    cpa: toDate["CPA \n" + segmentos[index]],
    nCtes: toDate["Numero de clientes \n" + segmentos[index]],
    vtaMMAA: mmaa["Venta \n" + segmentos[index]],
    vtaTotal: ventaTotal,
    variacionGlob: variacionGlob,
    nCtesTotal: toDate["Total de \nClientes"],
    sale: function() {
      return this.cpa * (this.tc / 100) * this.nCtes;
    },
    tcTotal: toDate["TC \nTotal"],
  };

  defaultVals.push(defaultChar);

}

self.updateTotal = function (newTC,target) {
  let vtaTotal = 0, vtaTotalMMAA = 0,ctsTotal=0,ctsXtc=0,CtesBuyTotal=0,ctesTotal=0,CtesBuyTotalOriginal=0;

  for(let i = 0; i < self.characters.length; i++) {
    let cte=self.characters[i];
    if(i<self.characters.length-3){

    let tc = self.characters[i].tc;
    if(i==target){
       tc = newTC;
       self.characters[i].tc=newTC;
     }

    if(self.historyFlag)
    {/*Pendiente revisar*/}else{
      var sliders = document.getElementsByClassName("slider");
      var knob = sliders[i].childNodes[1];
      knob.style.left = ((sliders[i].getBoundingClientRect().width * self.characters[i].tc / 100) - (parseInt(knob.style.width) / 2)) + "px";
    }
    let tc_pTag = document.getElementById("tc-tag-" + i);
    tc_pTag.innerHTML = (cte.tc).toFixed(2) + "%";
    ctsTotal+=cte.countCtes;
    ctsXtc+=cte.tc*cte.countCtes;
    var variacion_cte=(parseInt(cte.sale())/parseInt(cte.vtaOriginal)-1)*100;
    if(cte.tc==cte.tcOriginal)
      variacion_cte=0;
    var var_Seg=document.getElementById("vta_porcent" + i);
        var_Seg.innerHTML=Math.round(variacion_cte)+"%";
        var_Seg.style.color="#00CD00";
        if(variacion_cte<0)
          var_Seg.style.color="red";

    document.getElementById("vta-tag-" + i).innerHTML="$"+numberWithCommas(Math.round(cte.sale()));
  }//end if i<characters.leng-3
    vtaTotal += cte.sale();
    console.log("Cliente "+i+": "+cte.sale());
    console.log("Venta total: "+vtaTotal);
    vtaTotalMMAA += cte.vtaMMAA;
    CtesBuyTotal+=cte.tc/100*cte.countCtes;
    ctesTotal+=cte.countCtes;
    CtesBuyTotalOriginal+=cte.tcOriginal/100*cte.countCtes;
  }

  var ponderadores=[],ponderadoresReal=[];
  for(var j=0;j<self.characters.length;j++){
      var cte=self.characters[j];
      ponderadores[j]=(cte.tc/100*cte.countCtes)/CtesBuyTotal;
      ponderadoresReal[j]=(cte.tcOriginal/100*cte.countCtes)/CtesBuyTotalOriginal;

  }

  var TotalCPA=0,TotalCPAOriginal=0;
  for(var j=0;j<self.characters.length;j++){
    var cte=self.characters[j];
      TotalCPA+=ponderadores[j]*cte.cpa;
      TotalCPAOriginal+=ponderadoresReal[j]*cte.cpa;
  }



  document.getElementById("total-vta-tag").innerHTML="$"+numberWithCommas(Math.round(vtaTotal));
  let variacion = (((CtesBuyTotal*TotalCPA)/(CtesBuyTotalOriginal*TotalCPAOriginal))-1)*100;
  let varElm = document.getElementById("var-global");
  if(variacion < 0) { varElm.style.color = "red"; } else { varElm.style.color = "#00CD00"; }
  varElm.innerHTML = (Math.round(variacion)) + "%";
  var varTotal=document.getElementById("tc-total-tag");
      varTotal.innerHTML=Math.round(ctsXtc/ctsTotal)+"%";

if(self.historyFlag&&self.stepBack.length<100){
  self.stepBack.push(JSON.stringify(self.characters));
  self.indexHistory++;
} else {
  //self.indexHistory=self.stepBack.length-1;
  //self.indexHistory--;
  self.historyFlag=true;
}
  return self;
};

function characters_erc(index,tc,cpa,position,numCtes,vtaMMAA,vtaOriginal) {
  this.index = index;
  this.cpa = parseFloat(cpa);
  this.tc = parseFloat(tc);
  this.position = position;
  this.countCtes = parseInt(numCtes);
  this.vtaMMAA = parseInt(vtaMMAA);
  this.vtaOriginal=vtaOriginal;
  this.tcOriginal=parseFloat(tc);
  this.sale = function() {
    console.log("CPA: "+this.cpa);
    console.log("TC: "+this.tc);
    console.log("Ctes: "+this.countCtes);
    return this.cpa*((this.tc)/100)*this.countCtes;
  };
}

  self.destroyApp = function() {
    if(self.app == null) return self;
    self.app.destroy(true);
    self.removeText();

    return self;
  };

  self.removeElements = function() {
    return self;
  };

  self.removeText = function() {
    while(app.firstChild) {
      app.removeChild(app.firstChild);
    }
  };

  return self;
}
