  function button(n, callback){
    if(n===2){
      //smth wrong
    }
    if(n===1){
      //smth wrong
    }
   if(n===3){
     alert('Fuck inline js');
     document.getElementById('b-page').style.backgroundColor='red';
     this.style.fontsize='100px' 
   }
   callback();
   return false; 
  }
