var randNum = Math.floor(Math.random()*100 + 20)
var userTotal = 0;
var wins = 0;
var losses = 0;	 



	 $('#guessNumber').text(randNum);
     $("#user-total").text(userTotal)
	console.log(randNum)

var red = Math.floor(Math.random()*12+1);
var blue = Math.floor(Math.random()*12 + 1);
var yellow = Math.floor(Math.random()*12 + 1);
var green = Math.floor(Math.random()*12 + 1);
console.log("red : " + red);
console.log("blue : " + blue);
console.log("yellow : " + yellow);
console.log("green : " + green);


function reset(){
  var randNum = Math.floor(Math.random()*100 + 20)
  var userTotal = 0;
  var red = Math.floor(Math.random()*12+1);
  var blue = Math.floor(Math.random()*12 + 1);
  var yellow = Math.floor(Math.random()*12 + 1);
  var green = Math.floor(Math.random()*12 + 1);
  $("#guessNumber").text(randNum)
  $("user-total").text(userTotal)
  
};



$("#red").on('click', function(){
	userTotal = userTotal + red;
	console.log(userTotal)
	$("#user-total").text(userTotal)
	winLose();
});

$("#blue").on('click', function(){
	userTotal = userTotal + blue;
	console.log(userTotal)
	$("#user-total").text(userTotal)
	winLose();
});


$("#yellow").on('click', function(){
	userTotal = userTotal + yellow;
	console.log(userTotal)
	$("#user-total").text(userTotal)
	winLose();
});

$("#green").on('click', function(){
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
		reset();
	}
   else if(userTotal > randNum) {
   	alert("sorry bruh")
   	  losses++;
   	  reset()
   }

}
console.log(userTotal);
console.log(randNum);





















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