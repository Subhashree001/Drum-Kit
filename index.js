alert("Press the buttons and play the music or press the kyepad/keyboard keys to play")

for(var i=0;i<(document.querySelectorAll("button").length);i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){

    var letter=this.innerHTML;
    makeSound(letter);
     animation(letter);
  });
}

document.addEventListener("keydown",function(events){
  var letter= events.key;
   makeSound(letter);
    animation(letter);
})

function makeSound(key){
  switch(key){
    case "w":
       var crash=new Audio('crash.mp3');
       crash.play();
    break;

    case "a":
       var kick=new Audio('kick-bass.mp3');
       kick.play();
    break;

    case "s":
       var snare=new Audio('snare.mp3');
       snare.play();
    break;

    case "d":
       var tom1=new Audio('tom-1.mp3');
       tom1.play();
    break;

    case "j":
       var tom2=new Audio('tom-2.mp3');
       tom2.play();
    break;

    case "k":
       var tom3=new Audio('tom-3.mp3');
       tom3.play();
    break;

    case "l":
       var tom4=new Audio('tom-4.mp3');
       tom4.play();
    break;

    default:
       console.log(key);
  }
}

function animation(letter){
   var button= document.querySelector("."+letter);
   button.classList.add("pressed");
   setTimeout(function(){
     button.classList.remove("pressed");
   },150);

   switch(letter){
     case "w":
         document.body.style.backgroundColor = "#f14668";
         setTimeout(function(){document.body.style.backgroundColor = "#6f9eaf";},150);
     break;

     case "a":
         document.body.style.backgroundColor = "#8b5e83";
         setTimeout(function(){document.body.style.backgroundColor = "#6f9eaf";},150);
     break;

     case "s":
         document.body.style.backgroundColor = "#bfdcae";
          setTimeout(function(){document.body.style.backgroundColor = "#6f9eaf";},150);
     break;

     case "d":
          document.body.style.backgroundColor = "#94ebcd";
          setTimeout(function(){document.body.style.backgroundColor = "#6f9eaf";},150);
     break;

     case "j":
          document.body.style.backgroundColor = "#f2a154";
          setTimeout(function(){document.body.style.backgroundColor = "#6f9eaf";},150);
     break;

     case "k":
           document.body.style.backgroundColor = "#ff9292";
           setTimeout(function(){document.body.style.backgroundColor = "#6f9eaf";},150);
     break;

     case "l":
         document.body.style.backgroundColor = "#effad3";
          setTimeout(function(){document.body.style.backgroundColor = "#6f9eaf";},150);
     break;

     default:
        console.log(letter);
   }

}
