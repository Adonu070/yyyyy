let geust=document.getElementById('guest');
let guestcount=0;
let home=document.getElementById('home');
let homecount=0
function homefirst(){
  
  homecount++
  home.value=homecount
}

function homesecond(){
  homecount+=2
  home.value=homecount
}

function homethird(){
  homecount+=3
  home.value=homecount
}

function guestfirst(){
  guestcount++
  geust.value=guestcount
}

function guestsecond(){
  guestcount+=2
  geust.value=guestcount
}

function guestthird(){
  guestcount+=3
  geust.value=guestcount
}


function check(){
  
  if (homecount>guestcount){
    document.getElementById('winner').innerHTML='Home is winning'
  }


  else if (homecount<guestcount){
    document.getElementById('winner').innerHTML='Guest is winning'
  }

  else{
    document.getElementById('winner').innerHTML='Nobody is winning'
  }
}


// let count=0
// let number=document.querySelector('.number')
// document.querySelector(".increase").addEventListener("click", function() {
//    count +=1
//    number.innerHTML = count;
// });


// document.querySelector('.save').addEventListener('click',()=>{

//   let thesave= count +'-'
//   document.querySelector('.savehtml').innerHTML+=5+9
//   count=0
//   number.innerHTML=count
// })