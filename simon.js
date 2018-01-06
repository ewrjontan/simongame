//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//dont go above this line


var soundOne = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"); 
var soundTwo = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var soundThree = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"); 
var soundFour = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
var soundBuzzer = new Audio("https://www.soundjay.com/button/beep-10.mp3");
var soundDing = new Audio("http://www.chiptape.com/chiptape/sounds/medium/mario%20coin.wav");
var soundWin = new Audio ("http://soundbible.com/grab.php?id=1003&type=mp3");

var soundArr = [soundOne, soundTwo, soundThree, soundFour];

var buttonArr = ["red-button", "blue-button", "yellow-button", "green-button"];

var patternArr = [];
var patternIndex = 0;

var disableClick = true;
var disableStart = false;
var strictMode = false;
var playerPatternCount = 0;
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function playerClick(button){
	//console.log(button + " was clicked");
  var buttonIndex = buttonArr.indexOf(button);
  //console.log(buttonIndex);
  
  if (patternArr[playerPatternCount] == buttonIndex){
  	//console.log("matched!");
    
    if (playerPatternCount == patternArr.length - 1){
      //console.log("Good job");
      
      if (patternArr.length == 20){
      	//console.log("YOU WIN!!!!!!");
        soundWin.play();
        document.getElementById("count-text").innerHTML = "!!!";
        disableClick = true;
      }else{
      	soundDing.play();
      	setTimeout(setPattern, 1500);
      };
    }else{
    	soundArr[buttonIndex].play();
    	playerPatternCount++;
    };
    
  }else{
  	//console.log("WRONG! TRY AGAIN!!");
    document.getElementById("count-text").innerHTML="!"
    soundBuzzer.play();
    //playerPatternCount = 0;
    if (strictMode){
    	patternArr = [];
      setTimeout(function(){setPattern();}, 1500);
    	//setPattern();
    }else{
    	patternIndex = 0;
    	setTimeout(function(){playPattern();}, 1500);
    }
    
  };
}

function playPattern(){
	disableStart = true;
	disableClick = true;
	var temp = patternArr[patternIndex];
	//console.log("CPU selected " + temp);
	soundArr[temp].play();
  document.getElementById(buttonArr[temp]).style.filter="brightness(100%)";
  
  patternIndex ++;
  
  if (patternIndex<patternArr.length){
  	setTimeout(playPattern, 1000);
  }else{
  	disableStart = false;
    //console.log("xxx disblae start is: " + disableStart);
  	disableClick = false;
    playerPatternCount = 0;
    document.getElementById("count-text").innerHTML=patternArr.length;
  }
  
  setTimeout(function(){
  	document.getElementById(buttonArr[temp]).style.filter="brightness(80%)";
  }, 500);
}


function setPattern(){
	disableStart = true;
  //console.log("1st disable start: " + disableStart);
  var randomIndex = Math.floor(Math.random() * 4);
  //console.log(randomIndex);
  patternArr.push(randomIndex);
  //console.log(patternArr);
  
  patternIndex = 0;
  playPattern();  
}


function startupLights(){
	var red = "red-button";
  var blue = "blue-button";
  var yellow = "yellow-button";
  var green = "green-button";

	document.getElementById("count-text").innerHTML = "- -";
	
	document.getElementById(red).style.filter="brightness(100%)";
  
  setTimeout(function(){
  	document.getElementById(red).style.filter="brightness(80%)";
    document.getElementById(blue).style.filter="brightness(100%)";
  }, 250);
  
  setTimeout(function(){
  	document.getElementById(blue).style.filter="brightness(80%)";
    document.getElementById(yellow).style.filter="brightness(100%)";
  }, 500);
  
  setTimeout(function(){
  	document.getElementById(yellow).style.filter="brightness(80%)";
    document.getElementById(green).style.filter="brightness(100%)";
  }, 750);
  
  setTimeout(function(){
  	document.getElementById(green).style.filter="brightness(80%)";
    document.getElementById(red).style.filter="brightness(100%)";
  }, 1000);
  
  setTimeout(function(){
  	document.getElementById(red).style.filter="brightness(80%)";
    document.getElementById(green).style.filter="brightness(100%)";
  }, 1250);
  
  setTimeout(function(){
  	document.getElementById(green).style.filter="brightness(80%)";
    document.getElementById(yellow).style.filter="brightness(100%)";
  }, 1500);
  
  setTimeout(function(){
  	document.getElementById(yellow).style.filter="brightness(80%)";
    document.getElementById(blue).style.filter="brightness(100%)";
  }, 1750);
  
  setTimeout(function(){
  	document.getElementById(blue).style.filter="brightness(80%)";
    document.getElementById(red).style.filter="brightness(100%)";
  }, 2000);
  
  setTimeout(function(){
  	document.getElementById(red).style.filter="brightness(80%)";
  }, 2250);
  
  setTimeout(function(){
  	document.getElementById(red).style.filter="brightness(100%)";
    document.getElementById(blue).style.filter="brightness(100%)";
    document.getElementById(yellow).style.filter="brightness(100%)";
    document.getElementById(green).style.filter="brightness(100%)";
  }, 2500);
  
  setTimeout(function(){
  	document.getElementById(red).style.filter="brightness(80%)";
    document.getElementById(blue).style.filter="brightness(80%)";
    document.getElementById(yellow).style.filter="brightness(80%)";
    document.getElementById(green).style.filter="brightness(80%)";
  }, 2750);
  
  setTimeout(function(){
  	document.getElementById(red).style.filter="brightness(100%)";
    document.getElementById(blue).style.filter="brightness(100%)";
    document.getElementById(yellow).style.filter="brightness(100%)";
    document.getElementById(green).style.filter="brightness(100%)";
  }, 3000);
  
  setTimeout(function(){
  	document.getElementById(red).style.filter="brightness(80%)";
    document.getElementById(blue).style.filter="brightness(80%)";
    document.getElementById(yellow).style.filter="brightness(80%)";
    document.getElementById(green).style.filter="brightness(80%)";
  }, 3250);
  
  setTimeout(function(){
  	document.getElementById(red).style.filter="brightness(100%)";
    document.getElementById(blue).style.filter="brightness(100%)";
    document.getElementById(yellow).style.filter="brightness(100%)";
    document.getElementById(green).style.filter="brightness(100%)";
  }, 3500);
  
  setTimeout(function(){
  	document.getElementById(red).style.filter="brightness(80%)";
    document.getElementById(blue).style.filter="brightness(80%)";
    document.getElementById(yellow).style.filter="brightness(80%)";
    document.getElementById(green).style.filter="brightness(80%)";
  }, 3750);
}


$(document).ready(function(){
	$(".button").click(function(){
  	var buttonId = $(this).attr('id');
    
    if (disableClick == false){
      playerClick(buttonId);
    };
    
  });
  
  $(".button").mousedown(function(){
    $(this).css({"transform": "translateY(1px)", "filter": "brightness(100%)"});
  });
  
  $(".button").mouseup(function(){
    $(this).css({"transform": "translateY(-1px)", "filter": "brightness(80%)"});
  });
  
  
  $(".small-button").mousedown(function(){
    $(this).css({"box-shadow": "0 0 1px 1px #888888", "transform": "translateY(1px)"});
  });
  
  $(".small-button").mouseup(function(){
  	$(this).css({"box-shadow": "0 2px 2px 2px #888888", "transform": "translateY(-1px)"});
  });
  
  $("#start-button").click(function(){
    if (disableStart == false){
    	disableStart = true;
			//console.log("start button clicked");
      patternArr = [];//reset and empty arr; disable for now
			startupLights();
      setTimeout(setPattern, 4250);
    }else{
    	console.log("start is disabled!");
    };
  });
  
  $("#strict-button").click(function(){
  	if (strictMode){
    	document.getElementById("strict-light").style.backgroundColor="black";
    	strictMode = false;
    }else{
    	document.getElementById("strict-light").style.backgroundColor="#66ff33";
    	strictMode = true;
    };
  });
  
})
