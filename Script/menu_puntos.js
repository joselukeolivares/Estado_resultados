function toSlide(to){
   scratching(1)
     .then(print)
   .then(function(){
      actual_app=null;
      actual_app=new window[to]().createApp();
   })
   .then(secondS(2))
}
