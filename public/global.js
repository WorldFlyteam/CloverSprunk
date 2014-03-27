  function button(n, callback){
    if(n===2){
      //smth wrong
    }
    if(n===1){
      //smth wrong
    }
   if(n===3){
     alert('Fuck inline js');
     getElementById('b-page').style.backgroundColor='red';
   }
   callback();
   return false; 
  }
