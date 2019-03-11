# TriviaGame

I am starting this read me file with basic layout of the application.

For the moment, I am planning on implementing this application using Bootstrap to help
structure the html portion.  Javascript will be used to handle the logic for the actual
trivia test.

Start with the intro screen.  This screen just has a "Start" button under the
"Totally Trivial Trivia" introduction.

When the Start button is pressed, the game screen will be output and the timer for the
game execution will start.  The actual call to start the timer will be, setInterval.
The parameters for, setInterval, are the amout of time for the game and the function
definition to run TO end the game - this will score the test and output the results.

The game will end either when the timer expires or the user selects the "Done" button.
Upon completion of the game, the user will see a screen showing a message and their
score.  All Done!!  # correct answers..  # wrong answers..  # of unanswered questions..

