var buttonColours=["red", "blue", "green", "yellow"];
gamePattern=[];
userClickedPattern=[];
var level=0;

function nextSequence(){
  var num=Math.floor(Math.random()*4);
  gamePattern.push(buttonColours[num]);
  animatePress(buttonColours[num]);

  playSound(buttonColours[num]);
  level+=1;
    $("h1").text("Level "+level);
}




function playSound(name){
  var audio=new Audio("sounds/"+name+".mp3");
  audio.play();
}


function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function () {
      $("#"+currentColour).removeClass("pressed");
  }, 100);
}
var k=0;
$(document).on("keypress",function(){

if(k===0){
  setTimeout(function () {
  nextSequence();
  }, 1000);
  }
k=k+1;
});

var check=0;


$(".btn").on("click",function(event){
var userChosenColour=$(this).attr("id");

userClickedPattern.push(userChosenColour);
console.log(userClickedPattern);
playSound(userChosenColour);
animatePress(userChosenColour);
checkAnswer(userChosenColour);
});

function checkAnswer(c){
  if(c===gamePattern[check] ){
    if(level===check+1){
      check=0;
      userClickedPattern=[];
      setTimeout(function () {
        nextSequence();

      }, 1000);
    }else{
      check=check+1;
    }

  }else{

    $("h1").text("game overyou score is "+level+",press R to restart");
    $(document).on("keypress",function(event){
  if(event.key==="r"){
    location.reload();
  }
});


  }
}
