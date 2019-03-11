// Stargazing Trivial Trivia
//
// The main actions that will be handled through JavaScript are updating the
// main screen container html to show the test questions and then to process the test
// and eventually update the html yet again to show the test results.
//

// 
// Function to update the html to show the begin test button..
//

function displayStartTestButton() {
    $("#theTest").html("<input type='button' class='btn btn-info btn-start' value='Start' style='width:160px; font-size:32px'>");
}

function displayStopTestButton() {
    debugger;
    $("#theTest").append("<input type='button' class='btn btn-info btn-stop' value='Stop' style='width:160px; font-size:32px'>");
}

function displayTheTest() {
    debugger;

    for ( var i = 0; i < arrTheTestItself.length; i++ ) {
        $("theTest").append( "<br><hr>" + arrTheTestItself[ i ] );
    }

    displayStopTestButton();
}


displayStartTestButton();
//displayStopTestButton();
//displayTheTest();

$(".btn-start").on("click", function() {
    // Call the function that displays the stop button..
    displayTheTest();
  });
  
$(".btn-stop").on("click", function() {
    // Call the function that displays the stop button..
    debugger;
    displayStartTestButton();
});

