$( document ).ready(function() {

var randNum = Math.floor(Math.random()*100 + 20)
var userTotal = 0;
var wins = 0;
var losses = 0;	 
var audio = new Audio("Assets/Sounds/GemChest1-1.wav");
reset();

function reset(){
 
   randNum = Math.floor(Math.random()*100 + 20)
   userTotal = 0;
   red = Math.floor(Math.random()*12+1);
   blue = Math.floor(Math.random()*12 + 1);
   yellow = Math.floor(Math.random()*12 + 1);
   green = Math.floor(Math.random()*12 + 1);
   console.log("red : " + red);
console.log("blue : " + blue);
console.log("yellow : " + yellow);
console.log("green : " + green);
 console.log("wins : " + wins);
  console.log("losses:" + losses);
  $("#guessNumber").text(randNum)
  $("user-total").text(userTotal)
  
};

$("#red").on('click', function(){
	audio.play();
	userTotal = userTotal + red;
	console.log(userTotal)
	$("#user-total").text(userTotal)
	winLose();
});

$("#blue").on('click', function(){
	audio.play();
	userTotal = userTotal + blue;
	console.log(userTotal)
	$("#user-total").text(userTotal)
	winLose();
});


$("#yellow").on('click', function(){
	audio.play();
	userTotal = userTotal + yellow;
	console.log(userTotal)
	$("#user-total").text(userTotal)
	winLose();
});

$("#green").on('click', function(){
	audio.play();
	userTotal = userTotal + green;
	console.log(userTotal)
	$("#user-total").text(userTotal)
	winLose();
});


winLose();
function winLose(){
	if(userTotal == randNum){
		
		alert("You won")
		wins++;
		console.log(wins);
		$("#winCount").text(wins);
		console.log()
		reset();
		$("#user-total").text(userTotal)
	}
   else if(userTotal > randNum) {
   	
   	alert("sorry bruh")
   	 losses++;
   	 console.log(losses);
       $("#lossCount").text(losses);
   	 reset();
   	 $("#user-total").text(userTotal)
   }

}
console.log(userTotal);
console.log(randNum);

function sound(){
	$("#audiotag1").play();
}

});


















//var red = randCry();
//var blue = randCry();
// var yellow = randCry();
//var green = randCry();
//console.log("red : " + red);
 // console.log("blue : " + blue);




//   function randCry() {
 //  	var randCrys = Math.floor(Math.random()*12 + 1)
 //  console.log(randCrys)
  // }

//randCry()



/*
 var randCryNum = function (num) {
   	var randCrys = Math.floor(Math.random()*12 + 1)
   console.log(randCrys)
   this.num = num

   }



var blue = new randCryNum(randCrys());
*/