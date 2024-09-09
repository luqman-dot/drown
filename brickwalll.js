// Global Variables
var score = 0;
var WIN_SCORE = 0;
var greenClicks = 0;
var redClicks = 0;
var yellowClicks = 0;
var RADIUS = 20; // Assuming a radius value
var DIAMETER = RADIUS * 2;
var X = RADIUS;
var Y = getHeight() - RADIUS; // Start building the wall from the bottom
var DELAY = 1000; // Adjust the delay as needed
var level = 1; // Set the difficulty level (1: Easy, 2: Medium, 3: Hard)
var ball;
var scoreText;
var OFF_SCREEN = -100;
var WALL_HEIGHT = getHeight() - 100; // Adjust as needed

// Initialize the game
function start(){
    setupGame();
    mouseClickMethod(clickHandler);
}

// Set up the game elements
function setupGame() {
    setupBall();
    setupScoreText();
    startGameTimer();
}

// Set up the ball
function setupBall(){
    ball = new Circle(RADIUS);
    ball.setPosition(OFF_SCREEN, WALL_HEIGHT);
    add(ball);
}

// Set up the score display
function setupScoreText(){
    scoreText = new Text("Score: " + score);
    scoreText.setPosition(10, 20);
    add(scoreText);
}

// Start the game timer based on difficulty level
function startGameTimer(){
    setTimer(function(){ changeBall(level); }, DELAY);
}

// Handle click events
function clickHandler(e){
    var elem = getElementAt(e.getX(), e.getY());
    if(elem != null){
        var color = elem.getColor();
        if(color == Color.yellow && score < 40){
            score++;
            yellowClicks++;
        } else if(color == Color.red){
            score -= 3;
            redClicks++;
        } else if(color == Color.green){
            buildWall();
            WIN_SCORE++;
            greenClicks++;
        }
    }

    // Update the score display
    scoreText.setText("Score: " + score);

    // Check for game over conditions
    checkGameOver();
}

// Check for game over conditions
function checkGameOver(){
    if(score <= 0){
        endGame("You Lost");
    } else if(WIN_SCORE == 50){
        endGame("Wall built with " + score + " score left over!");
    } else if(score == 40 && WIN_SCORE == 50){
        endGame("You got a perfect score!");
    }
}

// End the game and display the final message
function endGame(message){
    displayMessage(message);
    println("You clicked " + greenClicks + " green balls.");
    println("You clicked " + redClicks + " red balls.");
    println("You clicked " + yellowClicks + " yellow balls.");
    ball.setColor(Color.white);
    stopGameTimer();
}

// Stop the game timer
function stopGameTimer(){
    stopTimer(changeBall);
}

// Display a message on the screen
function displayMessage(text){
    var msg = new Text(text);
    msg.setColor(Color.orange);
    msg.setPosition((getWidth() - msg.getWidth()) / 2, 200);
    add(msg);
}

// Change the ball's position and color
function changeBall(level){
    var x = Randomizer.nextInt(RADIUS, getWidth() - RADIUS);
    var y = Randomizer.nextInt(RADIUS, RADIUS * 15);
    ball.setPosition(x, y);
    changeColor(level);

    if(score <= 0){
        ball.setColor(Color.white);
    }
}

// Change the ball's color based on difficulty level
function changeColor(level){
    var color;
    var colorCode;

    if(level == 1){ // Easy
        colorCode = Randomizer.nextInt(0, 3);
        if(colorCode == 0
