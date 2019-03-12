// Stargazing Trivial Trivia
//
// The main actions that will be handled through JavaScript are updating the
// main screen container html to show the test questions and then to process the test
// and eventually update the html yet again to show the test results.
//

// 
// Function to update the html to show the begin test button..
//

window.onload=function() {
    $(".theQuestions").hide();
    $(".theScore").hide();
    $("#btn-stop").hide();
    $("#timerDisplay").hide();
}

var nTestTime = 30;  // Allow 90 seconds..
var testTimeout;
var intervalId;

function runTimer() {
    clearInterval(intervalId);
    intervalId = setInterval( decrement, 1000 );
  }


$("#btn-start").on("click", function() {
    // Call the function that displays the test questions..
    $(".theQuestions").show();
    $("#timerDisplay").show();

    // Hide the start button and show the stop button..
    $("#btn-start").hide();
    $("#btn-stop").show();

    // Start the game timer se defined by nTestTime - in seconds..
    testTimeout = setTimeout( timeUp, 1000 * nTestTime );
    runTimer();
});

function timeConverter(t) {

var minutes = Math.floor(t / 60);
var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }
  
  return minutes + ":" + seconds;
}
  
//  The decrement function.
function decrement() {

    //  Decrease number by one.
    nTestTime--;

    $("#timerDisplay").html("<h2>" + timeConverter( nTestTime ) + "</h2>");

    //  Once number hits zero...
    if (nTestTime === 0) {
      //  ...run the stop function.
      stop();
      clearInterval(intervalId);

      // End the test..
      timeUp();
    }
}
  
  
function timeUp() {
    // in the element with an id of time-left add an h2 saying Time's Up!
    // console log done
    console.log("Time ran out");
    clearInterval(intervalId);

    // Call end of test method to calculate score and so on..
    endTest();
}
  
  
$("#btn-stop").on("click", function() {
    // Stop the timer..
    stop();
    clearInterval(intervalId);

    // Call end of test method to calculate score and so on..
    endTest();
});

var nRight = 0;
var nWrong = 0;
var nUnanswered = 0;

function endTest() {
    // Hide the test itself..  Hide the stop button..
    $(".theQuestions").hide();  
    $("#btn-stop").hide();

    // Show the graded test score div..
    $(".theScore").show();

    // Calculate the scores..
    var strTheirAnswer;
    var radios = document.getElementsByName( "collide" );
    for (var i = 0; i < radios.length; i++){
      if ( radios[i].checked ) {
        strTheirAnswer = radios[ i ].value;
        break;
      }
    }
    if ( i >= radios.length ) {
      nUnanswered++;
    } else if ( strTheirAnswer === "billions" ) {
      nRight++;
    } else {
      nWrong++;
    }

    radios = document.getElementsByName( "betelsize" );
    for (var i = 0; i < radios.length; i++){
      if ( radios[i].checked ) {
        strTheirAnswer = radios[ i ].value;
        break;
      }
    }
    if ( i >= radios.length ) {
      nUnanswered++;
    } else if ( strTheirAnswer === "jupiter" ) {
      nRight++;
    } else {
      nWrong++;
    }

    radios = document.getElementsByName( "bright" );
    for (var i = 0; i < radios.length; i++){
      if ( radios[i].checked ) {
        strTheirAnswer = radios[ i ].value;
        break;
      }
    }
    if ( i >= radios.length ) {
      nUnanswered++;
    } else if ( strTheirAnswer === "sirius" ) {
      nRight++;
    } else {
      nWrong++;
    }

    radios = document.getElementsByName( "evening" );
    for (var i = 0; i < radios.length; i++){
      if ( radios[i].checked ) {
        strTheirAnswer = radios[ i ].value;
        break;
      }
    }
    if ( i >= radios.length ) {
      nUnanswered++;
    } else if ( strTheirAnswer === "venus" ) {
      nRight++;
    } else {
      nWrong++;
    }

    radios = document.getElementsByName( "galaxy" );
    for (var i = 0; i < radios.length; i++){
      if ( radios[i].checked ) {
        strTheirAnswer = radios[ i ].value;
        break;
      }
    }
    if ( i >= radios.length ) {
      nUnanswered++;
    } else if ( strTheirAnswer === "irregular" ) {
      nRight++;
    } else {
      nWrong++;
    }

    radios = document.getElementsByName( "common" );
    for (var i = 0; i < radios.length; i++){
      if ( radios[i].checked ) {
        strTheirAnswer = radios[ i ].value;
        break;
      }
    }
    if ( i >= radios.length ) {
      nUnanswered++;
    } else if ( strTheirAnswer === "redDwarf" ) {
      nRight++;
    } else {
      nWrong++;
    }

    radios = document.getElementsByName( "moons" );
    for (var i = 0; i < radios.length; i++){
      if ( radios[i].checked ) {
        strTheirAnswer = radios[ i ].value;
        break;
      }
    }
    if ( i >= radios.length ) {
      nUnanswered++;
    } else if ( strTheirAnswer === "onehundred81" ) {
      nRight++;
    } else {
      nWrong++;
    }

    radios = document.getElementsByName( "dense" );
    for (var i = 0; i < radios.length; i++){
      if ( radios[i].checked ) {
        strTheirAnswer = radios[ i ].value;
        break;
      }
    }
    if ( i >= radios.length ) {
      nUnanswered++;
    } else if ( strTheirAnswer === "earth" ) {
      nRight++;
    } else {
      nWrong++;
    }

    radios = document.getElementsByName( "jupGany" );
    for (var i = 0; i < radios.length; i++){
      if ( radios[i].checked ) {
        strTheirAnswer = radios[ i ].value;
        break;
      }
    }
    if ( i >= radios.length ) {
      nUnanswered++;
    } else if ( strTheirAnswer === "true" ) {
      nRight++;
    } else {
      nWrong++;
    }

    // Now we have the stats..  Update the screen already!!
    $("#numRight").text( nRight );
    $("#numWrong").text( nWrong );
    $("#numUnAnswered").text( nUnanswered );

    $(".theScore").show();
}


