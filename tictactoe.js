var turn =false;
var winner=null;
var counter=0;
function setMessage(msg){
  document.getElementById("Message").innerText=msg;
}
var xW=0;var xL=0;var oW=0;var oL=0;
function finalResult(){
  if(winner=="1"){
    xW=xW+1;
    oL=oL+1;
    document.getElementById("won1").innerText=xW;
    document.getElementById("lost2").innerText=oL;
  }
  else if(winner=="2"){
    oW=oW+1;
    xL=xL+1;
    document.getElementById("won2").innerText=oW;
    document.getElementById("lost1").innerText=xL;
  }

}
var player;
var var1;
function play(event){

  if(turn==false){
    var1="X";
  }
  else {
    var1="0";
  }
  setMessage("Game in progress");

  if(winner!=null){
    setMessage("Player "+winner+" already won.");
  }
  else {
    console.log(event)
    if(event.target.innerHTML==''){
      event.target.innerHTML=turn?"0":"X";
      counter=counter+1;
      if(counter==9){
        setMessage("Draw");

      }
    }
    else {
      if(counter==9){
        setMessage("Draw");

      }
      else {
        setMessage("pick another square.");
        turn=!turn;
      }

    }
    if(checkForWinner(var1)){

       if(var1=="X"){player="1";
       }
       else {
         player="2";
       }
       winner = player;
       setMessage("Player "+player+ " Wins");
       finalResult();

     }
     else {
       turn=!turn;

     }
  }


}
function checkRow(a, b, c, move){
  var result = false;
  if(getBox(a) == move && getBox(b) == move && getBox(c) ==move){
    result = true;
  }
   return result;
}

function getBox(number){
  return document.getElementById(number).innerText;
  setMessage("number");
}

function checkForWinner(move){
  var result= false;
  if(checkRow(1,2,3,move)||
    checkRow(4,5,6,move) ||
    checkRow(7,8,9,move) ||
    checkRow(1,4,7,move) ||
    checkRow(2,5,8,move) ||
    checkRow(3,6,9,move) ||
    checkRow(1,5,9,move) ||
    checkRow(3,5,7,move)){
    result = true;
  }
  return result;
}
function restartGame(){
  setMessage("New Game");
  for(var i=1;i<=9;i++){
    clearBox(i);
  }
  //finalResult();
  turn=false;
  winner=null;
  counter=0;
}

function clearBox(number){
  return document.getElementById(number).innerText="";
}//JS code goes here
//JS code goes here
