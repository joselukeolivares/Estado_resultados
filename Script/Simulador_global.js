function simulador_global() {

  var self = {};
  var app = document.getElementById("aplicacion");
  let scale1 = height * 0.5 / 950;
  self.characters = [];
  self.stepBack=[];
  self.historyFlag=true;
  self.indexHistory=0;
  let toDate = (dataCSV[dataCSV.length - 1]);
  let date = new Date(toDate.Fecha);
  let month = date.getMonth();
  switch (month) {
    case 0:
      self.mes = "Enero";
      break;
    case 1:
      self.mes = "Febrero";
      break;
    case 2:
      self.mes = "Marzo";
      break;
    case 3:
      self.mes = "Abril";
      break;
    case 4:
      self.mes = "Mayo";
      break;
    case 5:
      self.mes = "Junio";
      break;
    case 6:
      self.mes = "Julio";
      break;
    case 7:
      self.mes = "Agosto";
      break;
    case 8:
      self.mes = "Septiembre";
      break;
    case 9:
      self.mes = "Octubre";
      break;
    case 10:
      self.mes = "Noviembre";
      break;
    case 11:
      self.mes = "Diciembre";
  }
  self.mes=self.mes+"/"+(date.getYear()+1900);
  let Loader = PIXI.loader;

  self.scoresBuilder=function(){

    let app=document.getElementById("aplicacion");
    let money_icon=document.createElement("div")
        money_icon.setAttribute("id","money_icon");
    let icon=document.createElement("i")
        icon.setAttribute("class","fas fa-dollar-sign")
        money_icon.appendChild(icon);





    let table = document.createElement('div');
        table.setAttribute("id","table_scores");
        table.setAttribute("class","show_scores");
    let scores_container=document.createElement('div');
        scores_container.setAttribute("id","scores_container");
    let title=document.createElement("p");
        title.innerHTML="Top % Participación en Ventas";
        title.setAttribute("style","color:black;text-align:center:left:0;text-align:center;")
    let container_1=document.createElement('div');
        container_1.style.display='flex';

        let segmentos = [
          "Nunca015",
          "Activos SinVdo",
          "Saldado015",
          "Nunca+15",
          "Vencidos1",
          "Saldado+15",
          "Generados",
          "ClientesZ",
          "Quebrantados",
          "Vencidos2",
          "Vencidos3",
          "Vencidos4"
        ];

        let colors_segmentos=[
        "#ae6cb2",
          "#47ab44",
          "#32afb6",
          "#8c3b99",
          "#18451a",
          "#153e4b",
          "#fea621",
          "#fb142a",
          "#fb142a",
          "#18451a",
          "#18451a",
          "#18451a"
        ]

    //Heads on the top
    let container_heads=document.createElement('div');
        container_heads.setAttribute("id","container_heads");
        container_heads.style.display='flex';
    for(var i=0;i<segmentos.length;i++){
      let head=document.createElement('div');
      var img=((segmentos[i]).replace('+','_').replace(" ","_"));
      head.setAttribute("id",img);
      head.setAttribute("title","!"+segmentos[i]+"!");
      //head.setAttribute("class","head_top");
      //head.style.backgroundImage="url('../assets/ui/bloque_6/ERC-Characters/heads_characters/"+segmentos[i]+".png')";

      head.setAttribute("style","background-image:url('assets/ui/bloque_6/ERC-Characters/heads_characters/"+img+".png')");
      head.classList.add("head_top")
      let head_name=document.createElement('p')
          head_name.setAttribute("class","head_name")
          head_name.innerHTML=segmentos[i]+"   ";
          head_name.style.color=colors_segmentos[i];
          head_name.style.textDecoration="underline";
      head.appendChild(head_name);
      container_heads.appendChild(head);

    }



        app.appendChild(table);
        app.appendChild(money_icon);
        table.appendChild(title);
        table.appendChild(container_1);

        container_1.appendChild(container_heads);
        container_1.appendChild(scores_container);
        //top scores
        for(var i=1;i<6;i++)
        {   let score=document.createElement('p');
        score.setAttribute("id","score_"+i);
        score.innerHTML="NA%";
        score.setAttribute("class","scores")
        scores_container.appendChild(score);
      }

      //Show and hide Table scores
      money_icon.addEventListener("click",function(){

        if(table.classList[0]=="hide_scores"){
          table.classList.remove("hide_scores");
          table.classList.add("show_scores");
        }else{
          table.classList.remove("show_scores");
          table.classList.add("hide_scores");
        }
      })

  }

  self.winners=function(){

    var ranking=[];
    var total=0;
    for(var i=0;i<self.characters.length;i++){
      let sale=self.characters[i].sale();
      total+=parseInt(sale);
      ranking.push(parseInt(sale))
    }

    ranking.sort((a, b) => a - b);


    for(var i=0;i<self.characters.length;i++){

      let sale=parseInt(self.characters[i].sale());
      var name="#"+self.characters[i].name;
      name=name.replace("+","_").replace(" ","_");



      if(sale==ranking[ranking.length-1]){
        //console.log("Top 1: "+i+" "+self.characters[i].name+" $"+self.characters[i].sale());
        var porcent=parseInt(sale/total);
        document.getElementById("score_1").innerHTML=(parseInt((parseInt(sale)/parseInt(total))*100))+"%";
        TweenMax.to(name,1,{top:"0%",zIndex:2})
      }else if(sale==ranking[ranking.length-2]){
        //console.log("Top 2: "+i+" "+self.characters[i].name+" $"+self.characters[i].sale());
        document.getElementById("score_2").innerHTML=(parseInt((parseInt(sale)/parseInt(total))*100))+"%";
        TweenMax.to(name,1,{top:"20%",zIndex:1})
      }else if(sale==ranking[ranking.length-3]){
        //console.log("Top 3: "+i+" "+name+" $"+self.characters[i].sale());
        document.getElementById("score_3").innerHTML=(parseInt((parseInt(sale)/parseInt(total))*100))+"%";
        TweenMax.to(name,1,{top:"40%",zIndex:1})
        //document.getElementById(name.replace("#","")).style.top="60%";

      }else if(sale==ranking[ranking.length-4]){
        //console.log("Top 3: "+i+" "+name+" $"+self.characters[i].sale());
        document.getElementById("score_4").innerHTML=(parseInt((parseInt(sale)/parseInt(total))*100))+"%";
        TweenMax.to(name,1,{top:"60%",zIndex:2})
        //document.getElementById(name.replace("#","")).style.top="60%";

      }else if(sale==ranking[ranking.length-5]){
        //console.log("Top 3: "+i+" "+name+" $"+self.characters[i].sale());
        document.getElementById("score_5").innerHTML=(parseInt((parseInt(sale)/parseInt(total))*100))+"%";
        TweenMax.to(name,1,{top:"80%",zIndex:1})
        //document.getElementById(name.replace("#","")).style.top="60%";

      }else{
        TweenMax.to(name,1,{top:"100%",zIndex:-1})
      }

      console.log("Se comparó: ")



    }


  }

  self.createApp = function () {


    self.app = new PIXI.Application(width, height);

    app.appendChild(self.app.renderer.view);

    var atlasBlock6  = Loader.resources["assets/ui/bloque_4/clientes_min/clientes_min.json"].textures;
    var characters = ["4.-N-15 125X193.png",
                    "6.-ASV 163X193.png",
                    "8.-S-15 168X196.png",
                    "5.-N+15 147X273.png",
                    "7.-ACV 163X193.png",
                    "9.-S+15 180X196.png",
                    "1.-G 134x193.png",
                    "2.-Z 135X193.png",
                    "3.-Q 143X193.png"
                  ];
    let background = new PIXI.Sprite(PIXI.loader.resources["assets/Interior tienda.png"].texture);
    background.anchor.set(0.5);
    background.x = self.app.screen.width * 0.5;
    background.y = self.app.screen.height * 0.5;
    background.name = "background";
    background.scale.set(factorScreen(.6),factorScreen(.4));
    self.app.stage.addChild(background);

    let container = new PIXI.Container();
    container.name = "muebles";
    let id = Loader.resources['assets/ui/bloque_1/Articulos.json'].textures;

    let audio = new PIXI.Sprite(id["8. AUDIO.png"]);
    audio.name = "audio";
    //audio.anchor.set(0.5);
    audio.scale.set(scale1, scale1);
    audio.x = self.app.stage.width * 0.7;
    audio.y = background.height * 0.3;
    container.addChild(audio);

    let tvs = new PIXI.Sprite(id["5. TVS.png"]);
    tvs.name = "tvs";
    //tvs.anchor.set(0.5);
    tvs.scale.set(scale1, scale1);
    tvs.x = audio.x
    tvs.y = background.height * 0.63;
    container.addChild(tvs);

    let sala = new PIXI.Sprite(id["6. SALA.png"]);
    sala.name = "sala";
    sala.anchor.set(0.5);
    sala.scale.set(scale1, scale1);
    sala.x = background.width * 0.1;
    sala.y = background.height * 0.35;
    container.addChild(sala);

    let lineablanca = new PIXI.Sprite(id["9. LINEA BLANCA.png"]);
    lineablanca.name = "lineablanca";
    lineablanca.anchor.set(0.5);
    lineablanca.scale.set(scale1, scale1);
    lineablanca.x = background.width * 0.1;
    lineablanca.y = background.height * 0.45;
    container.addChild(lineablanca);
    self.app.stage.addChild(container);

    let overlay = new PIXI.Graphics();
    overlay.beginFill(0xFFF4DF);
    overlay.drawRect(0,0, self.app.screen.width, self.app.screen.height);
    overlay.alpha = 0.4;
    self.app.stage.addChild(overlay);

     let totals = document.createElement("div");
     totals.setAttribute("id", "totals");
     app.appendChild(totals);

     let tcTotal = document.createElement("div");
     tcTotal.setAttribute("id", "tc-total");
     totals.appendChild(tcTotal);

     let vtaTotal = document.createElement("div");
     vtaTotal.setAttribute("id", "vta-total");
     totals.appendChild(vtaTotal);

     let tcTotalRect = tcTotal.getBoundingClientRect();
     let vtaTotalRect = vtaTotal.getBoundingClientRect();
     let appRect = app.getBoundingClientRect();
     let tcTotalX = tcTotalRect.left - appRect.left;
     let tcTotalY = tcTotalRect.top;
     let vtaTotalX = vtaTotalRect.left - appRect.left;
     let vtaTotalY = vtaTotalRect.top;

     let tcTotalElm = document.createElement("p");
     tcTotalElm.setAttribute("id", "tc-total-tag");
     tcTotalElm.setAttribute("class","sin_margen");
     tcTotalElm.setAttribute("style", "position: absolute; top:" + (tcTotalY + (tcTotal.offsetHeight * 0.17)) + "px; left: " + (tcTotalX + tcTotal.offsetWidth * 0.66) + "px; font-Family: roboto-regular; font-Size: "+factorScreen(45)+"px; font-weight: bold;");
     tcTotalElm.typeObj = 1;
     app.appendChild(tcTotalElm);

     let totalVentaElm = document.createElement("p");
     totalVentaElm.setAttribute("id", "total-vta-tag");
     totalVentaElm.setAttribute("class","sin_margen");
     totalVentaElm.setAttribute("style", "position: absolute; top:" + (tcTotalY + (tcTotal.offsetHeight * 0.2)) + "px; left: " + (vtaTotalX + vtaTotal.offsetWidth * 0.1) + "px; font-Family: roboto-regular;font-Size:" + factorScreen(38)+"px; font-weight: bold;");
     totalVentaElm.typeObj = 1;
     app.appendChild(totalVentaElm);

     let vtaTotalName = document.createElement("p");
     vtaTotalName.innerHTML = "Venta"
     vtaTotalName.setAttribute("id", "vta-total-name");
     vtaTotalName.setAttribute("class","sin_margen p_tags");
     vtaTotalName.setAttribute("style", "position: absolute; top:" + (vtaTotalY) + "px; left:" + (vtaTotalX + vtaTotal.offsetWidth * 0.5) + "px; font-Family: roboto-regular; font-weight: bold; color: #000; transform: translate(-50%)");
     vtaTotalName.typeObj=1;
     app.appendChild(vtaTotalName);

     let tcTotalName = document.createElement("p");
     tcTotalName.innerHTML = "TC Total"
     tcTotalName.setAttribute("id", "ctes-total-name");
     tcTotalName.setAttribute("class","sin_margen p_tags");

     tcTotalName.setAttribute("style", "position: absolute; top:" + (tcTotalY) + "px; left:" + (tcTotalX + tcTotal.offsetWidth * 0.75) + "px; font-Family: roboto-regular; font-weight: bold; color: #000; transform: translate(-50%)");


     //tcTotalName.setAttribute("style", "position: absolute; top:" + (tcTotalY) + "px; left:" + (tcTotalX + tcTotal.offsetWidth * 0.75) + "px; font-Family: roboto-regular; font-weight: bold; color: #000; transform: translate(-50%)");


     //tcTotalName.setAttribute("style", "position: absolute; top:" + (tcTotalY + (tcTotal.offsetHeight * 0.17)) + "px; left:" + (tcTotalX + tcTotal.offsetWidth * 0.15) + "px; font-Family: roboto-regular; font-weight: bold; color: #000;");



     tcTotalName.typeObj=1;
     app.appendChild(tcTotalName);

     let tcTotalCtesElm = document.createElement("p");
     tcTotalCtesElm.setAttribute("id", "ctes-total-tag");
     tcTotalCtesElm.setAttribute("class","sin_margen p_tags");
     tcTotalCtesElm.setAttribute("style", "position: absolute; top:" + (tcTotalY + (tcTotal.offsetHeight * 0.5)) + "px; left:" + (tcTotalX + tcTotal.offsetWidth * 0.07) + "px; font-Family: roboto-regular; font-weight: bold; color: #000;");
     tcTotalCtesElm.typeObj=1;
     app.appendChild(tcTotalCtesElm);

     let fechaTotalTag = document.createElement("p");
     fechaTotalTag.innerHTML = "Datos a " + self.mes + ":";
     fechaTotalTag.setAttribute("class", "sin_margen p_tags");
     fechaTotalTag.setAttribute("id", "fecha-total-tag");
     fechaTotalTag.setAttribute("style", "position: absolute; top:" + (tcTotalY + (tcTotal.offsetHeight * 0.2)) + "px; left:" + (tcTotalX + tcTotal.offsetWidth * 0.07) + "px; font-Family: roboto-regular; font-weight: bold; color: #000;");
     fechaTotalTag.typeObj = 1;
     app.appendChild(fechaTotalTag);

     var varGlobalElm = document.createElement("p");
     varGlobalElm.setAttribute("id", "var-global");
     varGlobalElm.setAttribute("style","position: absolute; top:" + (vtaTotalY) + "px; left: " + (vtaTotalX + vtaTotal.offsetWidth * .85)+"px; font-Family: roboto-regular; font-Size:" + factorScreen(24) + "px; font-weight: bold; color: #00CD00;");
     varGlobalElm.typeObj = 1;
     app.appendChild(varGlobalElm);

     let introFilter = document.createElement("div");
     introFilter.className = "filter";
     introFilter.setAttribute("id", "introFilter");
     introFilter.style.height = height + "px";
     introFilter.style.width = width + "px";
     introFilter.style.backgroundColor = "#000";
     app.appendChild(introFilter);

     let tooltipFilter = document.createElement("div");
     tooltipFilter.className = "hide-overlay";
     tooltipFilter.setAttribute("id", "tooltipFilter");
     tooltipFilter.style.height = height + "px";
     tooltipFilter.style.width = width + "px";
     app.appendChild(tooltipFilter);

     let toolTip = document.createElement("div");
     toolTip.setAttribute("class", "toolTip");
     toolTip.setAttribute("id", "toolTip");
     app.appendChild(toolTip);


     let icon_title=document.createElement('div');
         icon_title.setAttribute("id","icon_title");

     let head_selected=document.createElement('div');
         head_selected.setAttribute("id","head_selected");

     let title_selected=document.createElement("div");
         title_selected.setAttribute("id","title_selected");
         title_selected.innerHTML="No Character name selected";

     let ctes_number=document.createElement("div");
         ctes_number.setAttribute("id","ctes_number");
         ctes_number.style.display="flex";

         icon_title.appendChild(head_selected);
         icon_title.appendChild(title_selected);
         icon_title.appendChild(ctes_number);
         toolTip.appendChild(icon_title);

     let tc2 = document.createElement("div");
     tc2.setAttribute("id", "tc-");
     tc2.className = "tc";
     //tc2.style.top = self.app.screen.width * 0.13 + "px";
     tc2.style.left = "50%";
     toolTip.appendChild(tc2);
     //tc2.style.marginLeft = "-" + tc2.offsetWidth / 2 + "px";

     let tcRectY = document.createElement("div");
     tcRectY.className = "rect1";
     tcRectY.setAttribute("id","tc_yellowDiv")
     tc2.appendChild(tcRectY);

     let tcRectW = document.createElement("div");
     tcRectW.idName = "tc_whiteDiv";
     tcRectW.className = "rect2";
     tc2.appendChild(tcRectW);

     let cpa2 = document.createElement("div");
     cpa2.setAttribute("id", "cpa-");
     cpa2.className = "cpa";
     //cpa2.style.top = self.app.screen.width * 0.205 + "px";
     cpa2.style.left = "50%";
     toolTip.appendChild(cpa2);
     //cpa2.style.marginLeft = "-" + cpa2.offsetWidth / 2 + "px";

     let cpaRectY = document.createElement("div");
     cpaRectY.className = "rect1";
     cpaRectY.setAttribute("id","cp_yellowDiv")
     cpa2.appendChild(cpaRectY);

     let cpaRectW = document.createElement("div");
     cpaRectW.setAttribute("id","cp_whiteDiv");
     cpaRectW.className = "rect2";
     cpa2.appendChild(cpaRectW);

     let vta2 = document.createElement("div");
     vta2.setAttribute("id", "vta-");
     vta2.className = "vta";
     //vta2.style.top = self.app.screen.width * 0.25 + "px";
     vta2.style.left = "50%";
     toolTip.appendChild(vta2);
     //vta2.style.marginLeft = "-" + vta2.offsetWidth / 2 + "px";

     let vtaRectY = document.createElement("div");
     vtaRectY.className = "rect1";
     vtaRectY.setAttribute("id","vta_yellowDiv")
     vta2.appendChild(vtaRectY);

     let vtaRectW = document.createElement("div");
     vtaRectW.setAttribute("id","vta_whiteDiv");
     vtaRectW.className = "rect2";
     vta2.appendChild(vtaRectW);

     let okButton = document.createElement("div");
     okButton.setAttribute("id", "okButton");
     okButton.innerHTML = "OK";
     toolTip.appendChild(okButton);
     okButton.addEventListener("click", show_hide_data);

     let title = document.createElement("h1");
     title.className = "title";
     title.innerHTML = "Estado de Resultados de Clientes";
     title.style.top = self.app.screen.height * 0.25  + "px";
     app.appendChild(title);

     let subTitle = document.createElement("h3");
     subTitle.className = "subTitle";
     subTitle.innerHTML = "Simluador Global";
     subTitle.style.top = self.app.screen.height * 0.33 + "px";
     app.appendChild(subTitle);

     let estrategia = document.createElement("h3");
     estrategia.setAttribute("id", "estrategia");
     estrategia.className = "subTitle";
     estrategia.innerHTML = "Ahora, te invitamos a crear tu propia estrategia de clientes. Selecciona uno o varios perfiles de clientes para comenzar a mostrar e interactuar con su Tasa de Compra para que visualices el efecto en la Tasa de Compra y Venta Total.";
     estrategia.style.top = self.app.screen.height * 0.4 + "px";
     //estrategia.style.fontSize = factorScreen(20) + "px";
     app.appendChild(estrategia);

     let contButtonIntro = document.createElement("div");
     contButtonIntro.className = "contButtonIntro";
     contButtonIntro.innerHTML = "CONTINUAR";
     contButtonIntro.style.top = self.app.screen.height * 0.6 + "px";
     app.appendChild(contButtonIntro);

    contButtonIntro.addEventListener("click", function() {
    TweenLite.to([title, subTitle, estrategia, contButtonIntro], 0.2, {opacity: 0, onComplete: function() {
        app.removeChild(contButtonIntro);
        app.removeChild(estrategia);
        app.removeChild(subTitle);
        title.innerHTML = "Da Click en cualquier personaje para interactuar";
        title.style.top = self.app.screen.height * 0.65 + "px";
        TweenLite.to(title, 0.2, {opacity: 1});

        let tempApp = new PIXI.Application(width, height, {transparent: true});
        app.appendChild(tempApp.renderer.view);

        let clienteG = new PIXI.Sprite(Loader.resources["assets/ui/bloque_5/CTES EN 500X350/2. GENERADOS 500x350.png"].texture);
        clienteG.anchor.set(0.5);
        clienteG.alpha = 0;
        clienteG.x = width * 0.5;
        clienteG.y = height * 0.4;
        clienteG.scale.set(factorScreen(0.6));
        clienteG.interactive = true;
        clienteG.buttonMode = true;
        tempApp.stage.addChild(clienteG);

        let pointer = new PIXI.Sprite(Loader.resources["assets/ui/bloque_5/ic-hand.png"].texture);
        pointer.anchor.set(0.5);
        pointer.alpha = 0;
        pointer.x = width * 0.8;
        pointer.y = height * 0.55;
        pointer.scale.set(factorScreen(0.75));
        tempApp.stage.addChild(pointer);

        clienteG.on("pointerover", function(e) {
          let tl = new TimelineMax()
          tl
            .to(clienteG, 0.2, {y: "-=40"})
            .to(clienteG, 0.7, {y: height * 0.4, ease:Bounce.easeOut});
        });

        clienteG.on("pointertap", function() {
          TweenLite.to([introFilter, title], 0.5, {opacity: 0});
          TweenLite.to([clienteG, pointer], 0.5, {alpha: 0, onComplete: function() {
            tempApp.destroy(true);
            app.removeChild(introFilter);
            app.removeChild(title);
          }});

          TweenLite.to("#table_scores", 1.5, {display:"block", opacity:1})
          for(var i=0;i<self.characters.length-3;i++)
            document.getElementById("vta-character-"+i).classList.remove("hide_element");
            //document.getElementById("vta-character-" + i).classList.remove('hide_element')


        });

        TweenLite.to([clienteG, pointer], 0.2, {alpha: 1, onComplete: function() {
          let tl = new TimelineMax({repeat: 3});
          tl
            .to(pointer, 1.7, {x: width * 0.5, y: height * 0.4})
            .to(pointer, 1.7, {x: width * 0.8, y: height * 0.55});
        }});
      }});
    });

    for(let i = 0 ; i < characters.length; i++) {
	    var character = new PIXI.Sprite(atlasBlock6[characters[i]]);
       var tc = new PIXI.Sprite(Loader.resources["assets/ui/bloque_5/botones/13. RECUADRO DE TASA DE COMPRA.png"].texture);
       var cpa =new PIXI.Sprite(Loader.resources["assets/ui/bloque_5/botones/14. RECUADRO DE TASA DE C.P.A Y VENTA.png"].texture);
       var vta = new PIXI.Sprite(Loader.resources["assets/ui/bloque_5/botones/14. RECUADRO DE TASA DE C.P.A Y VENTA.png"].texture);


       var subContainer=new PIXI.Container();
           subContainer.width=200;
           subContainer.name="Characters_"+i;
       var subContainer2=new PIXI.Container();
               subContainer.width=200;
               subContainer2.name="information_"+i;
               subContainer2.visible=false;

       character.scale.set(factorScreen(.6));
        if(i==0)
       character.scale.set(factorScreen(.6));
       character.x = (i % 3) * self.app.screen.width/4+50;
       character.y =Math.floor(i / 3) * self.app.screen.height/4.5+height/4;

       character.name ="character"+i;
       character.buttonMode=true;
       character.interactive=true;
       character.datos="information_"+i;
       character.indice=i;
       character.on('pointerdown',show_hide_data);

       //Div blanco para insertas vetas de cada segmento
       let vta_seg=document.createElement('div')
           vta_seg.setAttribute("id","vta-character-"+i)
           vta_seg.setAttribute("class","vta-seg hide_element")
           vta_seg.setAttribute("style", "left:" + character.x + "px; top:" + (character.y - 18) + "px;")
           app.appendChild(vta_seg);


       self.app.stage.addChild(subContainer);
       self.app.stage.addChild(subContainer2);
       subContainer.addChild(character);

       let tcRect = tc2.getBoundingClientRect();
       let cpaRect = cpa2.getBoundingClientRect();
       let vtaRect = vta2.getBoundingClientRect();
       let appRect = app.getBoundingClientRect();
       let tcX = tcRect.left - appRect.left;
       let tcY = tcRect.top;
       let cpaX = cpaRect.left - appRect.left;
       let cpaY = cpaRect.top;
       let vtaX = vtaRect.left - appRect.left;
       let vtaY = vtaRect.top;

       //console.log(tcY);
       //console.log(tc.y);

       var tc_test=document.createElement("p");
       tc_test.setAttribute("id","tc-tag-"+i);
       tc_test.setAttribute("class","sin_margen tooltip-txt hide_element white_box sh_obj"+i)
       tc_test.setAttribute("style","font-Family:roboto-regular; font-weight: bold;color:black");
       tc_test.typeObj = 1;
       tcRectW.appendChild(tc_test);

       var tcName=document.createElement("p");
       tcName.innerHTML = "TC";
       tcName.setAttribute("class","sin_margen tooltip-txt hide_element yellow_box sh_obj"+i);
       tcName.setAttribute("id","tcName" + i);
       tcName.setAttribute("style","font-Family:roboto-regular;font-weight:bold;color:#000000;text-align:left;margin-left:17%;");
       tcName.typeObj = 1;
       tcRectY.appendChild(tcName);

       var tc_clientes=document.createElement("p");
       tc_clientes.innerHTML="0";
       tc_clientes.setAttribute("class","sin_margen tooltip-txt hide_element white_box sh_obj"+i);
       tc_clientes.setAttribute("id","tc_clientes"+i);
       tc_clientes.setAttribute("style","font-Family: roboto-regular;font-weight: bold;color: #ffffff;width: 45%");
       tc_clientes.typeObj = 1;

       var tc_clientestxt=document.createElement("p");
       tc_clientestxt.innerHTML="Ctes:";
       tc_clientestxt.setAttribute("class","sin_margen tooltip-txt hide_element white_box sh_obj"+i);
       tc_clientestxt.setAttribute("id","tc_clientestxt"+i);
       tc_clientestxt.setAttribute("style","text-align: right;font-Family: roboto-regular;font-weight: bold;color: #ffffff;width: 45%;");
       tc_clientestxt.typeObj = 1;

       ctes_number.appendChild(tc_clientestxt);
       ctes_number.appendChild(tc_clientes);

       var cpa_test=document.createElement("p");
       cpa_test.innerHTML="$"+"0";
       cpa_test.setAttribute("class","sin_margen tooltip-txt hide_element white_box sh_obj"+i);
       cpa_test.setAttribute("id", "cpa-tag-"+i);
       cpa_test.setAttribute("style", "font-Family: roboto-regular;font-weight: bold;color: #000000;width: 45%");
       cpa_test.typeObj = 1;


       var cpaName=document.createElement("p");
       cpaName.innerHTML = "CPA";
       cpaName.setAttribute("class","sin_margen tooltip-txt hide_element yellow_box sh_obj" + i);
       cpaName.setAttribute("id", "cpa-name-" + i);
       cpaName.setAttribute("style", "font-Family: roboto-regular;font-weight: bold;color: #000000;text-align: left;margin-left: 17%;");
       cpaName.typeObj = 1;

       cpaRectY.appendChild(cpaName);
       cpaRectW.appendChild(cpa_test);

       var vtaName = document.createElement("p");
       vtaName.innerHTML = "Venta";
       vtaName.setAttribute("class","sin_margen tooltip-txt hide_element yellow_box sh_obj" + i);
       vtaName.setAttribute("id", "venta-name-" + i);
       vtaName.setAttribute("style", "font-Family: roboto-regular;font-weight: bold;color: #000000;width: 45%;");
       vtaName.typeObj = 1;


       var vta_test=document.createElement("p");
       vta_test.setAttribute("id","vta-tag-" + i);
       vta_test.setAttribute("class","sin_margen tooltip-txt hide_element white_box sh_obj"+i);
       vta_test.setAttribute("style", "font-Family: roboto-regular;font-weight: bold;color: #000000;text-align: left;margin-left: 17%;");
       vta_test.typeObj = 1;

       vtaRectY.appendChild(vtaName);
       vtaRectW.appendChild(vta_test);

       //Variacion
       var vta_porcent=document.createElement("p");
       vta_porcent.innerHTML=""+"%";
       vta_porcent.setAttribute("id","vta_porcent"+i);
       vta_porcent.setAttribute("class","sin_margen tooltip-txt hide_element p_tags sh_obj"+i);
       vta_porcent.setAttribute("style","position:absolute; left:100%;font-Family:roboto-regular;color:#FFFFFF;font-size:14px;top:40%");
       vta_porcent.typeObj=1;
       vta2.appendChild(vta_porcent);

       SliderB5B6(app, tc_test, "slider1" + i, "slider_fam", (tcX) / width, (tcY + tc2.offsetHeight * 1.2) / height, tc2.offsetWidth, cpa2.offsetHeight, self);
       addCharacter(i);
    }

var vencidos=["Vencidos2","Vencidos3","Vencidos+4"]

for(var j=0;j<vencidos.length;j++){
  let mmaa = (dataCSV[dataCSV.length - 13]);
  self.characters.push(new characters_erc(
    self.characters.length+j,
    toDate["TC \n" + vencidos[j]],
    toDate["CPA \n" + vencidos[j]],
    "NA",
    toDate["Numero de clientes \n" + vencidos[j]],
    mmaa["Venta \n" + vencidos[j]],
    toDate["Venta \n" + vencidos[j]],
    vencidos[j]
  ));
  self.characters[self.characters.length-1].vencido=j+2;
  defaultVals[8].vtaTotal+=self.characters[self.characters.length-1].sale()
}


self.scoresBuilder();
self.updateTotal(99999,"NA");
self.stepBack.push(JSON.stringify(self.characters));

self.winners();

var contButton = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/bloque_3/b-continue.png"));
contButton.x = width*.90;
contButton.y = height*.95;
contButton.anchor.set(0.5);
contButton.scale.set(factorScreen(.6));
contButton.interactive = true;
contButton.buttonMode = true;


var unVdoB = new PIXI.Sprite(Loader.resources["assets/ui/bloque_6/Globo-01.png"].texture);
    unVdoB.numero="1";
var dosVdoB =new PIXI.Sprite(Loader.resources["assets/ui/bloque_6/Globo-02.png"].texture);
    dosVdoB.numero="2";
var tresVdoB = new PIXI.Sprite(Loader.resources["assets/ui/bloque_6/Globo-03.png"].texture);
    tresVdoB.numero="3";
var cuatroVdoB =new PIXI.Sprite(Loader.resources["assets/ui/bloque_6/Globo-04.png"].texture);
    cuatroVdoB.numero="+4";

var unVdoClked = new PIXI.Sprite(Loader.resources["assets/ui/bloque_6/Globo-01-clicked.png"].texture);
    unVdoClked.name="unVdoClkedSprite";
var dosVdoClked =new PIXI.Sprite(Loader.resources["assets/ui/bloque_6/Globo-02-clicked.png"].texture);
    dosVdoClked.name="dosVdoClkedSprite";
    dosVdoClked.visible=false;
var tresVdoClked = new PIXI.Sprite(Loader.resources["assets/ui/bloque_6/Globo-03-clicked.png"].texture);
    tresVdoClked.name="tresVdoClkedSprite";
    tresVdoClked.visible=false;
var cuatroVdoClked =new PIXI.Sprite(Loader.resources["assets/ui/bloque_6/Globo-04-clicked.png"].texture);
    cuatroVdoClked.name="cuatroVdoClkedSprite";
    cuatroVdoClked.visible=false;


var un_vencido = new PIXI.Sprite(Loader.resources["assets/ui/bloque_4/globos/1 VDO.png"].texture);
var dos_vencido = new PIXI.Sprite(Loader.resources["assets/ui/bloque_4/globos/2 VDO.png"].texture);
var tres_vencido = new PIXI.Sprite(Loader.resources["assets/ui/bloque_4/globos/3 VDO.png"].texture);
var cuatro_vencido = new PIXI.Sprite(Loader.resources["assets/ui/bloque_4/globos/4 VDO.png"].texture);
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





container_globos.width = 100;
container_globos.x = self.app.screen.width / 2.97;
container_globos.y = self.app.screen.height / 1.66;
container_globos.scale.set(self.app.screen.width * 0.65 / 950);

if(document.documentElement.clientHeight <= 800) {
  container_globos.scale.set(1);
}

let bMargin = unVdoB.width + 3;
unVdoB.x =-10;
unVdoB.name="unVdoB";
//unVdoB.scale.set();
unVdoB.interactive = true;
unVdoB.buttonMode = true;
unVdoB.visible = false;

unVdoClked.x = unVdoB.x;
//unVdoClked.scale.set(self.app.screen.width * .45 / 950);
//dosVdoClked.scale.set(self.app.screen.width * .45 / 950);
//tresVdoClked.scale.set(self.app.screen.width * .45 / 950);
//cuatroVdoClked.scale.set(self.app.screen.width * .45 / 950);
//unVdoClked.interactive = true;
//unVdoClked.buttonMode = true;

dosVdoB.x=unVdoB.x+bMargin;
dosVdoB.name="dosVdoB";
//dosVdoB.scale.set(self.app.screen.width*.45/950);
dosVdoB.interactive = true;
dosVdoB.buttonMode = true;

tresVdoB.x=unVdoB.x+bMargin * 2;
tresVdoB.name="tresVdoB";
//tresVdoB.scale.set(self.app.screen.width*.45/950);
tresVdoB.interactive = true;
tresVdoB.buttonMode = true;

cuatroVdoB.x=unVdoB.x + bMargin * 3;
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
    //console.log(buttons[i]);
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
      //console.log("Mes Vencido seleccionado"+mesVencido);
var characters=self.characters;
let dataSet = (dataCSV[dataCSV.length - 1]);

  for(var k=0;k<characters.length;k++){
      if(characters[k].vencido==mesVencido){

        var aux=characters[4];
        characters[4]=characters[k];
        //characters[4].vencido=mesVencido;
        characters[k]=aux;
/*
        document.getElementById("tc-tag-4").innerHTML = self.characters[4].tc + "%";
        self.characters[4].countCtes = dataSet["Numero de clientes \nVencidos1"];
        document.getElementById("tc_clientes4" ).innerHTML = numberWithCommas(self.characters[4].countCtes);
        self.characters[4].cpa = dataSet["CPA \nVencidos1"];
        document.getElementById("cpa-tag-4").innerHTML = "$" + numberWithCommas(self.characters[4].cpa);
*/
        self.updateTotal(characters[4].tc,4);
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
  dosVdoClked.x=unVdoClked.x+bMargin;
  container_globos.addChild(dosVdoClked);
  tresVdoClked.x=unVdoClked.x+bMargin*2;
  container_globos.addChild(tresVdoClked);
  cuatroVdoClked.x=unVdoClked.x+bMargin*3;
  container_globos.addChild(cuatroVdoClked);
  container_globos.addChild(unVdoB);
  container_globos.addChild(dosVdoB);
  container_globos.addChild(tresVdoB);
  container_globos.addChild(cuatroVdoB);




self.app.stage.addChild(contButton);

contButton.on("pointerdown",click);

function click (){



self.removeElements();
self.removeText();

self.app.renderer.backgroundColor="0x175383";
var aplicacion=document.getElementById("aplicacion");

let title = document.createElement("h1");
title.className = "title";
title.innerHTML = "Estado de Resultados de Clientes";
title.style.top = self.app.screen.height * 0.05  + "px";
aplicacion.appendChild(title);

let subTitle = document.createElement("h3");
subTitle.className = "subTitle";
subTitle.innerHTML = "Conclusiones";
subTitle.style.top = self.app.screen.height * 0.13 + "px";
aplicacion.appendChild(subTitle);

var title_descrp1=document.createElement('h3');
    title_descrp1.innerHTML="Cartera Potencial";
    title_descrp1.style.color="rgb(75,165,255)";
    title_descrp1.style.fontSize=factorScreen(30)+"px";
    title_descrp1.style.position="absolute";
    title_descrp1.style.top="15%";
    title_descrp1.style.left="10%";
    aplicacion.appendChild(title_descrp1);

var paragraph1=document.createElement('p');
    paragraph1.innerHTML="La cartera Potencial está compuesta por 5 perfiles de clientes: Nunca 0-15, Activos sin Vencido, Vencido 1, saldados 0-15 y Generados. Se denomina cartera potencial porque en conjunto participan aproximadamente con el 93% de las ventas totales.";
    paragraph1.style.color="#ffffff";
    paragraph1.style.fontSize=factorScreen(20)+"px";
    paragraph1.style.position="absolute";
    paragraph1.style.top=parseFloat(title_descrp1.offsetTop)+parseFloat(title_descrp1.clientHeight)+"px";
    paragraph1.style.left="10%";
    paragraph1.style.width="80%";
    paragraph1.style.textAlign="justify";
    aplicacion.appendChild(paragraph1);

    var atlasBlock6  = PIXI.loader.resources["assets/ui/bloque_4/clientes_min/clientes_min.json"].textures;
    var characters = ["4.-N-15 125X193.png",
                    "6.-ASV 163X193.png",
                    "8.-S-15 168X196.png",
                    "5.-N+15 147X273.png",
                    "7.-ACV 163X193.png",
                    "9.-S+15 180X196.png",
                    "1.-G 134x193.png",
                    "2.-Z 135X193.png",
                    "3.-Q 143X193.png"
                  ];
    var cte_S15=new PIXI.Sprite(atlasBlock6[characters[2]]);
        cte_S15.scale.set(factorScreen(.5))
        cte_S15.x=(self.app.renderer.width/2)-(cte_S15.width/2);
        cte_S15.y=parseFloat(paragraph1.offsetTop)+parseFloat(paragraph1.clientHeight);

    var cteASV=new PIXI.Sprite(atlasBlock6[characters[0]]);
        cteASV.scale.set(factorScreen(.55));
        cteASV.x=cte_S15.x-(cte_S15.width*4);
        cteASV.y=cte_S15.y

    var cteS15=new PIXI.Sprite(atlasBlock6[characters[1]]);
        cteS15.scale.set(factorScreen(.5));
        cteS15.x=cte_S15.x-(cte_S15.width*2);
        cteS15.y=cte_S15.y

    var cteACV=new PIXI.Sprite(atlasBlock6[characters[4]]);
        cteACV.scale.set(factorScreen(.5))
        cteACV.x=cte_S15.x+(cte_S15.width*2);
        cteACV.y=cte_S15.y


    var cteG=new PIXI.Sprite(atlasBlock6[characters[6]]);
        cteG.scale.set(factorScreen(.5))
        cteG.x=cte_S15.x+(cte_S15.width*4);
        cteG.y=cte_S15.y

        self.app.stage.addChild(cteASV);
        self.app.stage.addChild(cteS15);
        self.app.stage.addChild(cte_S15);
        self.app.stage.addChild(cteACV);
        self.app.stage.addChild(cteG);

var title_descrp2=document.createElement('h3');
    title_descrp2.innerHTML="Monitoreo de Indicadores";
    title_descrp2.style.color="rgb(209,219,7)";
    title_descrp2.style.fontSize=factorScreen(30)+"px";
    title_descrp2.style.position="absolute";
    title_descrp2.style.top=(cteASV.y+cteASV.height)+"px";
    title_descrp2.style.left="10%";
    aplicacion.appendChild(title_descrp2);

var paragraph2=document.createElement('p');
    paragraph2.innerHTML="El monitoreo en la Tasa de Compra nos da una visión general del comportamiento de la compra por perfil de clientes, por ejemplo, los Clientes Generados tienen una T.C. del 90% lo que podría indicar que la activación de la tarjeta al momento de la entrega es efectiva. También se podría concluir que la probabilidad de que Clientes Vencidos +4 nos compren es muy baja, esto porque su tasa de compra es menor al 10%, por lo que se tendría que procurar que menos clientes migren a este Perfil.";
    paragraph2.style.color="#ffffff";
    paragraph2.style.fontSize=factorScreen(20)+"px";
    paragraph2.style.position="absolute";
    paragraph2.style.top=parseFloat(title_descrp2.offsetTop)+parseFloat(title_descrp2.clientHeight)+"px";
    paragraph2.style.left="10%";
    paragraph2.style.width="80%";
    paragraph2.style.textAlign="justify";
    aplicacion.appendChild(paragraph2);

    var cteG2=new PIXI.Sprite(atlasBlock6[characters[6]]);
        cteG2.scale.set(factorScreen(.5))
        cteG2.x = cteS15.x;
        cteG2.y=parseFloat(paragraph2.offsetTop)+parseFloat(paragraph2.clientHeight);
        self.app.stage.addChild(cteG2);

    var cteACV2=new PIXI.Sprite(atlasBlock6[characters[4]]);
        cteACV2.scale.set(factorScreen(.5))
        cteACV2.x = cteACV.x;
        cteACV2.y = cteG2.y;
        self.app.stage.addChild(cteACV2);

    var title_descrp3=document.createElement('h3');
        title_descrp3.innerHTML="General";
        title_descrp3.style.color="rgb(209,219,7)";
        title_descrp3.style.fontSize=factorScreen(30)+"px";
        title_descrp3.style.position="absolute";
        title_descrp3.style.top=(cteACV2.y+cteACV2.height)+"px";
        title_descrp3.style.left="10%";
        aplicacion.appendChild(title_descrp3);

    var paragraph3=document.createElement('p');
        paragraph3.innerHTML="El monitoreo de clientes con base en el Estado de Resultados permite a Grupo Coppel detectar oportunidades de negocio y una mejor toma de decisiones.";
        paragraph3.style.color="#ffffff";
        paragraph3.style.fontSize=factorScreen(20)+"px";
        paragraph3.style.position="absolute";
        paragraph3.style.top=parseFloat(title_descrp3.offsetTop)+parseFloat(title_descrp3.clientHeight)+"px";
        paragraph3.style.left="10%";
        paragraph3.style.width="80%";
        paragraph3.style.textAlign="justify";
        aplicacion.appendChild(paragraph3);

        var contButton = new PIXI.Sprite(PIXI.Texture.fromImage("assets/ui/bloque_3/b-continue.png"));
        contButton.x = width*.90;
        contButton.y = height*.95;
        contButton.anchor.set(0.5);
        contButton.scale.set(factorScreen(.6));
        contButton.interactive = true;
        contButton.buttonMode = true;
        self.app.stage.addChild(contButton)

        contButton.on("pointerdown",function(){
            toSlide("conclusiones");
            circle7.style.backgroundColor = "white";
            circle1.style.backgroundColor = "gray";
    		    circle2.style.backgroundColor = "gray";
            circle3.style.backgroundColor = "gray";
    		    circle4.style.backgroundColor = "gray";
    		    circle5.style.backgroundColor = "gray";
    		    circle6.style.backgroundColor = "gray";

        })




}

var regresar = PIXI.loader.resources["assets/ui/bloque_6/22. BOTON REGRESAR UN PASO PARA ATRAS 1.png"].texture;
var regresar_2 =PIXI.loader.resources["assets/ui/bloque_6/22. BOTON REGRESAR UN PASO PARA ATRAS 2.png"].texture;
var button = new PIXI.Sprite(regresar);

button.x = self.app.screen.width * 0.815;
button.y = self.app.screen.height * 0.06;

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


   self.updateTotal(99999,"Reset");
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

 var clear = PIXI.Texture.fromImage("assets/ui/bloque_6/23. BOTON CLEAR 1.png");
 var clearSelected = PIXI.Texture.fromImage("assets/ui/bloque_6/23. BOTON CLEAR 2.png");
 var clearButton = new PIXI.Sprite(clear);

 clearButton.x = self.app.screen.width * 0.86;
 clearButton.y = self.app.screen.height * 0.06;
 clearButton.scale.set(self.app.screen.width*.35/950);
 clearButton.interactive = true;
 clearButton.buttonMode = true;
 self.app.stage.addChild(clearButton);

 clearButton
   .on("mouseover",onMouseOverClear)
   .on("mouseout", onMouseOutClear)
   .on("pointerdown", onClickClear);

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

   container_globos.getChildByName("unVdoClkedSprite").visible=true;
   container_globos.getChildByName("dosVdoClkedSprite").visible=false;
   container_globos.getChildByName("tresVdoClkedSprite").visible=false;
   container_globos.getChildByName("cuatroVdoClkedSprite").visible=false;
   container_globos.getChildByName("unVdoB").visible=false;
   container_globos.getChildByName("dosVdoB").visible=true;
   container_globos.getChildByName("tresVdoB").visible=true;
   container_globos.getChildByName("cuatroVdoB").visible=true;

   for(let i = 0; i < defaultVals.length; i++) {

     document.getElementById("tc_clientes" + i).innerHTML = numberWithCommas(parseInt(defaultVals[i].nCtes));
     document.getElementById("cpa-tag-" + i).innerHTML = "$" + numberWithCommas(parseInt(defaultVals[i].cpa));
     document.getElementById("vta-tag-" + i).innerHTML = "$"+ numberWithCommas(parseInt(defaultVals[i].vtaOriginal));
     document.getElementById("vta-character-" + i).innerHTML = "$"+ numberWithCommas(parseInt(defaultVals[i].vtaOriginal));
     document.getElementById("tc-tag-" + i).innerHTML = (parseFloat(defaultVals[i].tcOriginal).toFixed(1))+"%";


     document.getElementById("vta_porcent" + i).innerHTML = "0%";
     document.getElementById("vta_porcent" + i).style.color="#FFFFFF";

     if(i == 8)  {
       document.getElementById("tc-total-tag").innerHTML = parseFloat(defaultVals[i].tcTotal).toFixed(1) + "%";
       document.getElementById("total-vta-tag").innerHTML = "$" + numberWithCommas(parseInt(defaultVals[i].vtaTotal));
       //document.getElementById("ctes-total-tag").innerHTML = numberWithCommas(defaultVals[i].nCtesTotal)+" Ctes.";
       document.getElementById("var-global").innerHTML = "0%";
       document.getElementById("var-global").style.color="#FFFFFF";
     }

     var sliders = document.getElementsByClassName("slider");
     var knob = sliders[i].childNodes[1];
     sliders[i].classList.remove("hide_element");
     knob.style.left = ((sliders[i].getBoundingClientRect().width * defaultVals[i].tc / 100) - (parseInt(knob.style.width) / 2)) + "px";
     console.log(knob.style.left);
     sliders[i].classList.add("hide_element");
   }

   self.stepBack.length=1;
   self.indexHistory=0;

   self.historyFlag=false;

   self.characters=null;
   self.characters = JSON.parse(self.stepBack[0]);
   for(var i = 0; i < self.characters.length; i++) {

     self.characters[i].sale = function() {
         return this.cpa*((this.tc)/100)*this.countCtes;
       };

   }
   self.winners();

   //self.updateTotal(99999,"Reset");

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
    toDate["Venta \n" + segmentos[index]],
    segmentos[index]
  );

  if(index==4)
  char.vencido=1;
  self.characters.push(char);

  ventaTotal += self.characters[index].sale();
  ventaTotalMMAA += self.characters[index].vtaMMAA;

  document.getElementById("tc_clientes" + index).innerHTML = numberWithCommas(self.characters[index].countCtes);
  document.getElementById("cpa-tag-" + index).innerHTML = "$" + numberWithCommas(Math.round(self.characters[index].cpa));
  document.getElementById("vta-tag-" + index).innerHTML = "$"+ numberWithCommas(Math.round(self.characters[index].sale()));
  document.getElementById("vta-character-" + index).innerHTML = "$"+ numberWithCommas(Math.round(self.characters[index].sale()));

  document.getElementById("tc-tag-" + index).innerHTML = parseFloat(self.characters[index].tc).toFixed(1) + "%";
  document.getElementById("tc-total-tag").innerHTML = toDate["TC \nTotal"] + "%";
  document.getElementById("vta_porcent"+ index).innerHTML = 0 + "%";
  if(index == 8)  {
    document.getElementById("total-vta-tag").innerHTML = "$" + numberWithCommas(Math.round(ventaTotal));

    document.getElementById("ctes-total-tag").innerHTML = numberWithCommas(Math.round(toDate["Total de \nClientes"]))+" Ctes.";

    var variacionGlob = ((ventaTotal - ventaTotalMMAA) / ventaTotalMMAA) * 100;
    document.getElementById("var-global").innerHTML = (Math.round(variacionGlob)) + "%";
  }


  var sliders = document.getElementsByClassName("slider");
  var knob = sliders[index].childNodes[1];
  knob.style.left=0;
  debugger;
  knob.style.left="calc("+self.characters[index].tc+"% - 12.5px)"
  //knob.style.left = ((sliders[index].getBoundingClientRect().width * self.characters[index].tc / 100) - (parseInt(knob.style.width) / 2)) + "px";

  sliders[index].classList.add("hide_element");
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
    tcOriginal: toDate["TC \n" + segmentos[index]],
    vtaOriginal:toDate["Venta \n" + segmentos[index]]
  };

  defaultVals.push(defaultChar);

}

self.updateTotal = function (newTC,target) {
  let vtaTotal = 0, vtaTotalMMAA = 0,ctsTotal=0,ctsXtc=0,CtesBuyTotal=0,ctesTotal=0,CtesBuyTotalOriginal=0;

  for(let i = 0; i < self.characters.length; i++) {
    let cte=self.characters[i];
    if(i<self.characters.length-3){

    let tc = self.characters[i].tc;

    if(i==target||!self.historyFlag){
      if(self.historyFlag){
         tc = newTC;
         self.characters[i].tc=newTC;}
      if(self.historyFlag)
      {/*Pendiente revisar*/}else{

        var sliders = document.getElementsByClassName("slider");
            //sliders[i].classList.remove("hide_element");
        var knob = sliders[i].childNodes[1];
        //var uno=sliders[i].getBoundingClientRect().width;
            knob.style.left = ((sliders[i].getBoundingClientRect().width * self.characters[i].tc / 100) - (parseInt(knob.style.width) / 2)) + "px";
            //sliders[i].classList.add("hide_element");

        }
      let tc_pTag = document.getElementById("tc-tag-" + i);
      tc_pTag.innerHTML = (cte.tc).toFixed(1) + "%";

      if(target==4||target=="Reset"){
        document.getElementById("tc_clientes4").innerHTML=numberWithCommas(self.characters[4].countCtes);
        document.getElementById("cpa-tag-4").innerHTML="$"+numberWithCommas(parseInt(self.characters[4].cpa));

        var sliders = document.getElementsByClassName("slider");
        //sliders[4].classList.remove("hide_element");
        var knob = sliders[4].childNodes[1];
        knob.style.left = ((sliders[4].getBoundingClientRect().width * self.characters[4].tc / 100) - (parseInt(knob.style.width) / 2)) + "px";

      }


      var pt1=parseInt(cte.sale());
      var pt2=parseInt(cte.vtaOriginal);
      var variacion_cte=((pt1/pt2)-1)*100;


      if(cte.tc==cte.tcOriginal)
        variacion_cte=0;
      var var_Seg=document.getElementById("vta_porcent" + i);
          var_Seg.innerHTML=Math.round(variacion_cte)+"%";
          var_Seg.style.color="#00CD00";
          if(variacion_cte<0)
            var_Seg.style.color="red";

      var vta="$"+numberWithCommas(Math.round(cte.sale()));
      var obj=document.getElementById("vta-character-"+i)
      obj.innerHTML=vta;

      document.getElementById("vta-tag-"+ i).innerHTML=vta
      }
  }//end if i<characters.leng-3

    ctsXtc+=cte.tc*cte.countCtes;
    ctsTotal+=cte.countCtes;
    vtaTotal += cte.sale();
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
  //console.log(self.stepBack.length);
  //console.log(self.stepBack);
} else {
  //self.indexHistory=self.stepBack.length-1;
  //self.indexHistory--;
  self.historyFlag=true;
}

  self.winners();
  return self;
};

function characters_erc(index,tc,cpa,position,numCtes,vtaMMAA,vtaOriginal,name) {

  this.name=name;
  this.index = index;
  this.cpa = Number.parseInt(cpa.replace(/,/g,''));
  this.tc = parseFloat(tc);
  this.position = position;
  this.countCtes = parseInt(numCtes.replace(/,/g,''));
  this.vtaMMAA = parseInt(vtaMMAA);
  this.vtaOriginal=vtaOriginal;
  this.tcOriginal=parseFloat(tc);
  this.sale = function() {
    //console.log("CPA: "+this.cpa);
    //console.log("TC: "+this.tc);
    //console.log("Ctes: "+this.countCtes);
    return this.cpa*((this.tc)/100)*this.countCtes;
  };
}


function show_hide_data() {
  let app = document.getElementById('aplicacion');
  let selected = document.getElementsByClassName("sh_obj" + this.indice);
  let selectedOff = document.getElementsByClassName("sh_obj" + toolTip.classList[2]);

  let animationEndHandler = function() {
    for(var i = 0; i < selected.length; i++) {
      selected[i].classList.remove('hide_element');
      let slider=document.getElementById("slider1" + this.classList[2])
      slider.classList.remove('hide_element')
      let tc_divs=document.getElementById("tc-").getBoundingClientRect();
      slider.style.top=parseInt(tc_divs.top)+parseInt(tc_divs.height)*1.1+"px";
      // document.getElementById("vta-character-" + i).classList.add('hide_element')
    }
    sliderTutorial(this.classList[2]);

    toolTip.removeEventListener("animationend", animationEndHandler);
  };

  if(toolTip.classList.contains("show")) {
    for(var i=0; i<selectedOff.length; i++) {
      selectedOff[i].classList.add("hide_element");
      document.getElementById("slider1" + toolTip.classList[2]).classList.add('hide_element')
      // document.getElementById("vta-character-" + i).classList.remove('hide_element')
    }

    toolTip.classList.remove(toolTip.classList.item(2));
    toolTip.classList.remove("show");
    toolTip.classList.add("hide");
    tooltipFilter.classList.remove("show-overlay");
    tooltipFilter.classList.add("hide-overlay");
  } else {
    toolTip.classList.remove("hide");
    toolTip.classList.add("show");
    toolTip.classList.add(this.indice);
    tooltipFilter.classList.remove("hide-overlay");
    tooltipFilter.classList.add("show-overlay");

    toolTip.addEventListener("animationend", animationEndHandler);

    let segmentos = [
      "Nunca015",
      "Activos_SinVdo",
      "Saldado015",
      "Nunca+15",
      "Vencidos1",
      "Saldado+15",
      "Generados",
      "ClientesZ",
      "Quebrantados",
      "Vencidos2",
      "Vencidos3",
      "Vencidos4"
    ];

    let obj=document.getElementById("head_selected");
    obj.style.backgroundImage="url(assets/ui/bloque_6/ERC-Characters/heads_characters/"+(segmentos[this.indice]).replace('+','_')+".png)";

    let sgments = ["Nunca 0-15", "Activo Sin Vencido", "Saldado 0-15", "Nunca +15", "Activo Con 1 Mes Vencido", "Saldado +15", "Generados", "Clientes Z", "Quebrantados","Activo Con 2 Meses Vencidos","Activo Con 3 Meses Vencidos","Activo Con 4 Meses Vencidos"];
    let name_idx=this.indice
    if(this.indice==4){

      if(self.characters[4].vencido!=1){
        name_idx+=3+self.characters[4].vencido;
      }
    }
    document.getElementById("title_selected").innerHTML = sgments[name_idx];
  }
}

  let executed = false;
  function sliderTutorial(index) {
    if(!executed) {
      executed = true;

      let slider = document.getElementById("slider1" + index);
      let knob = slider.children[1];
      let knobRect = knob.getBoundingClientRect();
      let appRect = app.getBoundingClientRect();
      let knobX = knobRect.left - appRect.left;
      let knobY = knobRect.top;
      let tc_divs=document.getElementById("tc-").getBoundingClientRect();
      slider.style.top=parseInt(tc_divs.top)+parseInt(tc_divs.height)*1.1+"px";
      debugger;

      document.styleSheets[0].insertRule("#slider-tutorial::after { left: " + (knobX + knob.offsetWidth * 0.5) + "px; top: " + (knobY + knob.offsetHeight * 0.5) + "px; }", 0);

      toolTip.classList.toggle("no-events");
      slider.classList.toggle("no-events");

      let text = document.createElement("p");
      text.setAttribute("id", "slider-tutorial-text");
      text.innerHTML = "Arrastra la manija del slider para interactuar";
      app.appendChild(text);

      let overlay = document.createElement("div");
      overlay.setAttribute("id", "slider-tutorial");
      overlay.className = "slider-t"
      overlay.style.width = self.app.screen.width + "px";
      overlay.style.height = self.app.screen.height + "px";
      app.appendChild(overlay);

      let pointer = document.createElement("div");
      pointer.setAttribute("id", "tutorial-pointer");
      // pointer.setAttribute("style", "background-img: url('assets/ui/bloque_5/ic-hand.png')");
      pointer.style.left = knobX - knob.offsetWidth * 2 + "px";
      pointer.style.top = knobY + knob.offsetHeight + "px";
      app.appendChild(pointer);

      let tl = new TimelineMax({repeat: 3});
      tl
        .to(pointer, 1.2, {left:  knobX + knob.offsetWidth * 2 + "px" })
        .to(pointer, 1.2, {left:  knobX - knob.offsetWidth * 2 + "px" });

      let downHandler = function() {
        app.removeChild(overlay);
        app.removeChild(text);
        app.removeChild(pointer);
        document.styleSheets[0].deleteRule(0);
        toolTip.classList.toggle("no-events");
        slider.classList.toggle("no-events");
        this.removeEventListener("pointerdown", downHandler);
      };

      knob.addEventListener("pointerdown", downHandler);
    }
  }

  self.destroyApp = function() {

    if(self.app == null) return self;
    self.app.destroy(true);

    while (aplicacion.firstChild) {

      aplicacion.removeChild(aplicacion.firstChild)
    }



    return self;
  };

  self.removeElements = function() {
    if(self.app.stage == null) return false;
    let app = self.app;

    while(app.stage.children.length>0) {
        app.stage.removeChildAt(0);
    }
    return self;
  };

  self.removeText = function() {
    var aplicacion = document.getElementById("aplicacion");

    //THIS REMOVES THE TOOLTIP//
    aplicacion.removeChild(document.getElementById("table_scores"));
    aplicacion.removeChild(document.getElementById("toolTip"));
    aplicacion.removeChild(document.getElementById("tooltipFilter"));
    aplicacion.removeChild(document.getElementById("totals"));
    //aplicacion.removeChild(document.getElementById("tc-total"));

    for(var i=0;i<9;i++)
        aplicacion.removeChild(document.getElementById("vta-character-"+i));

    var pTags=document.getElementsByTagName('p');

    while(pTags.length>0) {

       try{
         pTags[0].parentNode.removeChild(pTags[0])
       }catch(e){console.log(e)}

    }

    var sliders=document.getElementsByClassName('slider');

    while(sliders.length>0) {

       try{
         sliders[0].parentNode.removeChild(sliders[0])
       }catch(e){console.log(e)}
    }

    var h3=document.getElementsByTagName('h3');

    while(h3.length>0) {

       try{
         h3[0].parentNode.removeChild(h3[0])
       }catch(e){ console.log(e)}
    }

    var h1=document.getElementsByTagName('h1');

    while(h1.length>0) {

       try{
         h1[0].parentNode.removeChild(h1[0])
       }catch(e){ console.log(e)}
    }

  };


  return self;
}
