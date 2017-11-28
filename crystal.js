var randNum = Math.floor(Math.random()*100 + 20)
var userTotal = 0;
	 $('#guessNumber').prepend(randNum);

	console.log(randNum)

var red = Math.floor(Math.random()*12+1);
var blue = Math.floor(Math.random()*12 + 1);
var yellow = Math.floor(Math.random()*12 + 1);
var green = Math.floor(Math.random()*12 + 1);
console.log("red : " + red);
console.log("blue : " + blue);
console.log("yellow : " + yellow);
console.log("green : " + green);



$("#red").on('click', function(){
	userTotal = userTotal + red;
	console.log(userTotal)
	$("#user-score").text(userTotal)
});

$("#blue").on('click', function(){
	userTotal = userTotal + blue;
	console.log(userTotal)
	$("#user-score").text(userTotal)
});


$("#yellow").on('click', function(){
	userTotal = userTotal + yellow;
	console.log(userTotal)
	$("#user-score").text(userTotal)
});

$("#green").on('click', function(){
	userTotal = userTotal + green;
	console.log(userTotal)
	$("#user-score").text(userTotal)
});

$("#user-score").text(userTotal)
























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