setSize(550, 400);
//Constants
var PLAYER_SPEED = 3;
var GRAVITY_FORCE = 3;
var WORLD_WIDTH = 10000;
var CHARACTER_WIDTH = 100;
var CHARACTER_HEIGHT = 65;
var PACKAGE_SIZE = 50;
var GRAB_PROXIMITY = 50;
var DROP_PROXIMITY = 75;

//Global Variables
var highScore = 0;
var count = 0;
var collisions = 0;
var character;
var cameraMoveX = true;
var cameraMoveY = true;
var score = 0;
var gameTime = 0;
var fadeTo = 0;
var instructionStage = 0;
var timer = 0;
var airplaneX = 0;
var countI = 0;
var previousDroneX = 0;
var previousCameraX = 0;
var previousDroneY = 0;
var previousCameraY = 0;

//Globe variables
var xM = 170;
var yM = 140;
var sp = 30;
var countG = 0;
var top = 100;

//logo variables
var logoSize = 50000;
var textY = 80;
var textX = 1;

//package global variables
var hasPackage = false;
var packageGetLocation;
var packageDropLocation;
var packageInPlay = false;
var packageXLocations = [750, 0, 350, -3450, -2400, -1500];
var packageYLocations = [getHeight() - PACKAGE_SIZE - 850, getHeight() - PACKAGE_SIZE - 20, getHeight() - 700 - PACKAGE_SIZE, getHeight() - 800 - PACKAGE_SIZE, getHeight() - 340 - PACKAGE_SIZE, getHeight() - 300 - PACKAGE_SIZE];
var packageX = 0;
var packageY = 0;
var packageXV = 0;
var packageYV = 0;
var packageFalling = false;
var dropX = 0;
var dropY = 0;
var dropLocationX = 0;
var dropLocationY = 0;

//Global variables for keys pressed
var up = false;
var down = false;
var left = false;
var right = false;
var space = false;

//Global variables for the mouse
var mouseX = 0;
var mouseY = 0;
var mouseDown = false;

//Global variables for game movement
var playerX = 0;
var playerY = 0;
var playerXV = 0;
var playerYV = 0;

var cameraX = 0;
var cameraY = 0;
var cameraXV = 0;
var cameraYV = 0;

function start()
{
    setBackgroundColor(Color.black);
    keyDownMethod(keyDown);
    keyUpMethod(keyUp);
    mouseMoveMethod(getMousePosition);
    mouseDownMethod(getMouseDown);
    mouseUpMethod(getMouseUp);
    println("Look out for the Code HS airplane Easter egg! :)");
    setTimer(logoIntro, 40);
}

// Intro for the game
function intro()
{
    //resets the counter variable used in introPlay
    count = 0;
    setTimer(introPlay, 40);
}

function logoIntro()
{
    removeAll();
    count += 1;
    logoSize += 120 - logoSize/2;
    drawText("Eric", "20pt Arial Rounded MT", getWidth()/2 - textX + 1, getHeight()/2 + 155 - textY, Color.white);
    drawImage("https://codehs.com/uploads/e320e66ef738139d054cfbc02b3651fa", logoSize, logoSize, getWidth()/2 - logoSize/2 + textX - 1, getHeight()/2 - logoSize/2);
    if(count > 20)
    {
        textY -= textY/2;
    }
    if(count > 70)
    {
        textX *= 1.5;
    }
    if(count > 90)
    {
        intro();
        stopTimer(logoIntro);
    }
}

//This animates the intro while it waits for the user to play the game
function introPlay()
{
    removeAll();
    count += 0.5;
    drawImage("https://codehs.com/uploads/1e38e44155aa41e1d0e00220b8498783", getWidth(), getHeight(), 0, 0);
    drawImage("https://codehs.com/uploads/790e6c98e2f0c2876159323305223c8e", getWidth(), 240, 0, 60);
    drawImage("https://codehs.com/uploads/9090714d61bbb0e94184347de8e85cca", 150, 100, getWidth() - 230, 40 + Math.sin(count/4)*20);
    var playButton = drawImage("https://codehs.com/uploads/bc22fd91eea5b55237c472b1734d82de", 150, 55, getWidth() - 180, getHeight() - 100);
    if(mouseClickedOn(playButton.getX(), playButton.getY(), playButton.getWidth() + playButton.getX(), playButton.getHeight() + playButton.getY()))
    {
        stopTimer(introPlay);
        fadeTo = 1;
        setTimer(fadeOut, 100);
    }
    else if(count*count*20 < getHeight())
    {
        drawRect(getWidth(), getHeight(), 0, -count*count*20, Color.black);
    }
}

function instructions()
{
    removeAll();
    countI += 0.1;
    setBackgroundColor(Color.white);
    //This draws the skip button
    if(instructionStage >= 0 && instructionStage <= 9)
    {
        drawGlobe();
        var skipButton = drawImage("https://codehs.com/uploads/da628229193cf926387fc1b00a967fa6", 70, 55, getWidth() - 100, 30);
        if(mouseClickedOn(skipButton.getX(), skipButton.getY(), skipButton.getWidth() + skipButton.getX(), skipButton.getHeight() + skipButton.getY()))
        {
            stopTimer(instructions);
            fadeTo = 3;
            setTimer(fadeOut, 100);
        }
    }
    else if(instructionStage >= 10 && instructionStage <= 15)
    {
        var drone = drawImage("https://codehs.com/uploads/9090714d61bbb0e94184347de8e85cca", 150, 100, getWidth()/2 - 75 + Math.cos(countI/3)*17, getHeight()/2 - 70 + Math.sin(countI)*10);
        drone.setRotation(Math.cos(countI/3)*7);
    }
    else if(instructionStage == 16)
    {
        drawImage("https://codehs.com/uploads/d75b16c825ee4c4bcce76bc2f5bb8c60", 450, 150, getWidth()/2 - 225, getHeight()/2 - 80);
    }
    else if(instructionStage >= 17 && instructionStage <= 20)
    {
        var arrow = drawImage("https://codehs.com/uploads/3eec5e2deb1e7f095780a14f4d90ffb9", 150, 150, getWidth()/2 - 75, getHeight()/2 - 100);
        arrow.setRotation(Math.sin(countI/3)*50);
        drawImage("https://codehs.com/uploads/e379b402c48e929b90dad8054f69e8e6", 50, 50, getWidth()/2 - 25 + Math.sin(countI/3)*200, getHeight()/2 - 135 - Math.abs(Math.cos(countI/3)*30));
    }
    else if(instructionStage == 21)
    {
        var arrow =drawImage("https://codehs.com/uploads/3968d41480f9b66b1f86ce0d3a09cd2f", 150, 150, getWidth()/2 - 75, getHeight()/2 - 100);
        arrow.setRotation(Math.sin(countI/3)*50);
    }
    else if(instructionStage >= 22 && instructionStage <= 24)
    {
        drawImage("https://codehs.com/uploads/ecac1a68d14b9ae4671e823fa7850f48", 150, 150, getWidth()/2 - 75, getHeight()/2 - 80);
    }
    else
    {
        drawGlobe();
    }
    drawImage("https://codehs.com/uploads/09e7a040825e4ea84052ba795e19602d", getWidth(), getHeight(), 0, 0);
    drawImage("https://codehs.com/uploads/8e50a9889a93f4bfde85c190862a9710", 200, 45, getWidth()/2 - 100, 0);
    drawImage("https://codehs.com/uploads/8b46bab85e6acc4fc942b0dee6071b6d", 70, 70, 5, getHeight() - 75);
    if(instructionStage == 0)
    {
        drawText("Hello! (Click to Continue)", "20pt Arial", getWidth()/2 + 35, getHeight() - 15, Color.black);
    }
    else if(instructionStage == 1)
    {
        drawText("Welcome to the Rapid Shipping", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("training facility.", "20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else if(instructionStage == 2)
    {
        drawText("I am Instructor bot,", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("the head AI here", "20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else if(instructionStage == 3)
    {
        drawText("I have chosen the robot to", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("represent me...", "20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else if(instructionStage == 4)
    {
        drawText("because humans can generally relate", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("better to objects than command lines.", "20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else if(instructionStage == 5)
    {
        drawText("Anyway, let's get to the point.", "20pt Arial", getWidth()/2 + 35, getHeight() - 15, Color.black);
    }
    else if(instructionStage == 6)
    {
        drawText("Our customers are becoming more", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("and more impatient", "20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else if(instructionStage == 7)
    {
        drawText("They are no longer happy with", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("one or two day shipping.", "20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else if(instructionStage == 8)
    {
        drawText("No, they want their stuff within", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("an hour or less...", "20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else if(instructionStage == 9)
    {
        drawText("or they think we are not rapid.", "20pt Arial", getWidth()/2 + 35, getHeight() - 15, Color.black);
    }
    else if(instructionStage == 10)
    {
        drawText("That is why in this year of 2020,", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("we are implementing drone delivery.", "20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else if(instructionStage == 11)
    {
        drawText("That is also why you are here!", "20pt Arial", getWidth()/2 + 35, getHeight() - 15, Color.black);
    }
    else if(instructionStage == 12)
    {
        drawText("Our AIs are going to observe you", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("deliver packages and learn from you.", "20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else if(instructionStage == 13)
    {
        drawText("So you will need to do your best", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("at flying.", "20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else if(instructionStage == 14)
    {
        drawText("Now, I will teach you", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("the controls","20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else if(instructionStage == 15)
    {
        drawText("Don't worry, they are simple!", "20pt Arial", getWidth()/2 + 35, getHeight() - 15, Color.black);
    }
    else if(instructionStage == 16)
    {
        drawText("First off, use the arrow keys", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("to fly around.", "20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else if(instructionStage == 17)
    {
        drawText("Next, look at the arrow", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("above the drone.", "20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else if(instructionStage == 18)
    {
        drawText("It will start off blue which", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("means you need to grab a package.", "20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else if(instructionStage == 19)
    {
        drawText("Simply follow it, and land on", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("top of the package.", "20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else if(instructionStage == 20)
    {
        drawText("The best part is, it will automatically", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("pick it up!", "20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else if(instructionStage == 21)
    {
        drawText("Next, the arrow will turn green meaning", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("the package is ready to be delivered.", "20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else if(instructionStage == 22)
    {
        drawText("Follow the green arrow until you", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("find the drop off zone.", "20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else if(instructionStage == 23)
    {
        drawText("As the name implies, this is", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("where you drop the package.", "20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else if(instructionStage == 24)
    {
        drawText("Simply press the spacebar and the", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("package will be released.", "20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else if(instructionStage == 25)
    {
        drawText("After that, continue delivering", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("packages until the timer runs out.", "20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else if(instructionStage == 26)
    {
        drawText("Every time you deliver a package,", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("8 seconds are added to the clock!", "20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else if(instructionStage == 27)
    {
        drawText("Remember to fly fast, but not", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("reckless, as AIs are learning from you.", "20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else if(instructionStage == 28)
    {
        drawText("That is all you need to know.", "20pt Arial", getWidth()/2 + 35, getHeight() - 27, Color.black);
        drawText("Have fun!", "20pt Arial", getWidth()/2 + 35, getHeight() - 3, Color.black);
    }
    else
    {
        stopTimer(instructions);
        fadeTo = 3;
        setTimer(fadeOut, 100);
    }

    if(mouseDown && timer > 1)
    {
        instructionStage += 1;
        timer = 0;
    }
    fadeIn();
}

function mouseTimer()
{
    timer += 1;
}

function drawGlobe()
{
    countG += 0.01;
    //var count1 = count/3;
    var count1 = 0;
    for(var i = 0; i < 10; i++)
    {
        count1 += 0.29;
        var count2 = 0;
        var lastX = Math.cos(count2 + countG)*xM*Math.sin(count1) + getWidth()/2;
        var lastY = Math.sin(count2 + countG)*yM*Math.sin(count1) + getHeight()/2 - i*sp + top;
        var countD = 0;
        for(var j = 0; j < 63; j++)
        {
            countD += 1;
            count2 += 0.1;
            var color = new Color(0, Math.sin(countG*7 + i/5)*100 + 100, 200);
            drawLine(lastX, lastY, Math.cos(count2 + countG)*xM*Math.sin(count1) + getWidth()/2, Math.sin(count2 + countG)*yM*Math.sin(count1) + getHeight()/2 - i*sp + top, color, Math.sin(countG*7 + i/5)*5 + 5);
            lastX = Math.cos(count2 + countG)*xM*Math.sin(count1) + getWidth()/2;
            lastY = Math.sin(count2 + countG)*yM*Math.sin(count1) + getHeight()/2 - i* sp + top;
            if(countD % 3 == 0 && i != 9)
            {
                drawLine(lastX, lastY, Math.cos(count2 + countG)*xM*Math.sin(count1 + 0.29) + getWidth()/2, Math.sin(count2 + countG)*yM*Math.sin(count1 + 0.29) + getHeight()/2-+ (i + 1)* sp + top, color, Math.sin(countG*7 + i/5)*5 + 5)
            }
        }
    }
}

function drawLine(x1, y1, x2, y2, color, size)
{
    var line = new Line(x1, y1, x2, y2);
    line.setLineWidth(size);
    line.setColor(color);
    add(line);
}

//Fade to codes: 1 = instructions, 2 = game over, 3 = play
function fadeOut()
{
    count += 1;
    drawImage("https://codehs.com/uploads/edd35e88a00484e3074d4b5f296bb588", getWidth(), getHeight(), 0, 0);
    if(count > 10)
    {
        if(fadeTo == 1)
        {
            setTimer(mouseTimer, 500);
            setTimer(instructions, 20);
        }
        else if(fadeTo == 2)
        {
            setTimer(gameOver, 40);
        }
        else
        {
            gameSetup();
        }
        stopTimer(fadeOut);
    }
}

function gameSetup()
{
    hasPackage = false;
    packageInPlay = false;
    packageX = 0;
    packageY = 0;
    packageXV = 0;
    packageYV = 0;
    packageFalling = false;
    dropX = 0;
    dropY = 0;
    dropLocationX = 0;
    dropLocationY = 0;

    cameraMoveX = true;
    cameraMoveY = true;
    score = 0;
    
    playerX = 0;
    playerY = 0;
    playerXV = 0;
    playerYV = 0;
    
    cameraX = 0;
    cameraY = 0;
    cameraXV = 0;
    cameraYV = 0;
    
    setTimer(play, 40);
    gameTime = 60;
    setTimer(gameTimer, 1000);
}

function fadeIn()
{
    if(count > 0)
    {
        for(var i = 0; i < count; i++)
        {
            drawImage("https://codehs.com/uploads/edd35e88a00484e3074d4b5f296bb588", getWidth(), getHeight(), 0, 0);
        }
        count -= 1;
    }
}

function gameOver()
{
    removeAll();
    drawImage("https://codehs.com/uploads/1e38e44155aa41e1d0e00220b8498783", getWidth(), getHeight(), 0, 0);
    drawImage("https://codehs.com/uploads/4dc5e653090e03c9adbbb72279291543", getWidth(), 200, 0, 0);
    drawImage("https://codehs.com/uploads/4f1dad0a5e4188542d5db8d7d76768b7", 300, 150, getWidth()/2 - 150, getHeight()/2 + 5);
    drawText("Score: " + score, "30pt Arial", getWidth()/2, getHeight()/2 + 80, Color.blue);
    drawText("High Score: " + highScore, "20pt Arial", getWidth()/2, getHeight()/2 + 103, Color.blue);
    var playButton = drawImage("https://codehs.com/uploads/fe883aaf635c4ef34b1a309fa9dc49a4", 200, 70, getWidth()/2 - 100, getHeight()/2 + 113);
    if(mouseClickedOn(playButton.getX(), playButton.getY(), playButton.getWidth() + playButton.getX(), playButton.getHeight() + playButton.getY()))
    {
        stopTimer(gameOver)
        gameSetup();
    }
    fadeIn();
}

//The main function for playing the game. is called when a new game is going to be played
function play()
{
    if(gameTime <= 0)
    {
        fadeTo = 2;
        setTimer(fadeOut, 100);
        if(score > highScore)
        {
            highScore = score;
        }
        stopTimer(gameTimer);
        stopTimer(play);
    }
    removeAll();
    moveCharacter();
    moveCamera();
    //Draws the game objects just for checking collisions
    drawGameObjects();
    dropPackage();
    checkCollisions();
    removeAll();
    //draws what the user actually sees
    drawBackground();
    drawGameObjects();
    drawCharacter();
    managePackage();
    drawArrow();
    drawInfo();
    fadeIn();
}

//This function acts as a timer for the game
function gameTimer()
{
    gameTime -= 1;
}

//This function simulates moving the character by moving its surroundings
function moveCamera()
{
    if(up)
    {
        cameraYV += PLAYER_SPEED*2;
    }
    if(left)
    {
        cameraXV += PLAYER_SPEED;
    }
    if(right)
    {
        cameraXV -= PLAYER_SPEED;
    }
    //friction
    cameraXV -= cameraXV/10;
    cameraYV -= cameraYV/10;
    //gravity
    cameraYV -= GRAVITY_FORCE;
    //movement
    if(cameraMoveY)
    {
        cameraY += cameraYV;
    }
    cameraX += cameraXV;
    //keeps the camera from going off the screen and causes the drone itself to
    //move instead
    if(cameraY < 0)
    {
        cameraY = 0;
        cameraMoveY = false;
    }
    //This causes the environment to begin moving again after the drone has reached
    // around the center of the screen
    if(getHeight()/2 - CHARACTER_HEIGHT/2 + playerY < getHeight()/2 && cameraYV > 0)
    {
        cameraMoveY = true;
    }
}

//This function moves the player around on the screen so the camera doen't have
//to go off the edge of it
function moveCharacter()
{
    if(!cameraMoveY)
    {
        playerY -= cameraYV;
    }
    //This makes the player a bit when there is y velocity and brings the player
    //towards the center of the screen
    else
    {
        playerY += cameraYV/PLAYER_SPEED - playerY/10;
    }
    playerX += cameraXV/PLAYER_SPEED - playerX/10;
}

//This makes the drone bounce off of objects it collides with
function checkCollisions()
{
    //It uses for loops to check the colisions across all the points of the sides and breaks if it finds
    //a collision point
    
    //checks for collisions on the x axis
    var characterExtraHeight = 0;
    if(hasPackage)
    {
        var characterExtraHeight = PACKAGE_SIZE/2;
    }
    for(var i = 0; i < CHARACTER_HEIGHT + characterExtraHeight; i++)
    {
        if(getElementAt(getWidth()/2 - CHARACTER_WIDTH/2 + playerX, getHeight()/2 - CHARACTER_HEIGHT/2 + playerY + i) != null || getElementAt(getWidth()/2 + CHARACTER_WIDTH/2 + playerX, getHeight()/2 - CHARACTER_HEIGHT/2 + playerY + i) != null)
        {
            cameraXV *= -1;
            cameraX = previousCameraX;
            playerX = previousDroneX;
            break;
        }
    }
    
    //checks for collisions on the y axis
    for(var i = 0; i < CHARACTER_WIDTH; i++)
    {
        if(getElementAt(getWidth()/2 - CHARACTER_WIDTH/2 + playerX + i, getHeight()/2 - CHARACTER_HEIGHT/2 + playerY) != null || getElementAt(getWidth()/2 - CHARACTER_WIDTH/2 + playerX + i, getHeight()/2 + CHARACTER_HEIGHT/2 + playerY + characterExtraHeight) != null)
        {
            if(cameraMoveY)
            {
                cameraYV *= -1;   
            }
            cameraY = previousCameraY;
            playerY = previousDroneY;
            break;
        }
    }
    
    if(cameraX > WORLD_WIDTH/2 - 100)
    {
        cameraX = WORLD_WIDTH/2 - 100;
    }
    if(cameraX < -WORLD_WIDTH/2 + 3000)
    {
        cameraX = -WORLD_WIDTH/2 + 3000;
    }
    previousDroneX = playerX;
    previousDroneY = playerY;
    previousCameraX = cameraX;
    previousCameraY = cameraY;
}

//This manages the packages. If there is no package in play, it adds one
function managePackage()
{
    addPackage();
    drawPackage();
    grabPackage();
    drawDropLocation();
}

//This drops the package if the spacebar is pressed and the drone has a package
//to drop
function dropPackage()
{
    if(hasPackage && space)
    {
        packageFalling = true;
        hasPackage = false;
        dropX = cameraX;
        dropY = cameraY;
        packageXV = -cameraXV;
        packageYV = -cameraYV;
    }
    
    if(packageFalling)
    {
        //This makes the package collide with the ground when it is falling
        for(var i = 0; i < PACKAGE_SIZE; i++)
        {
            if(getElementAt(packageX + cameraX - dropX + i, packageY + cameraY - dropY + PACKAGE_SIZE) != null)
            {
                packageFalling = false;
                packageY -= packageYV/2;
                packageXV = 0;
                packageYV = 0;
                //this tells if the package has landed in the drop locatation
                if(packageX + PACKAGE_SIZE/2 - dropX > dropLocationX - DROP_PROXIMITY + 50 && packageX + PACKAGE_SIZE/2 - dropX < dropLocationX + DROP_PROXIMITY + 50)
                {
                    if(packageY - dropY > dropLocationY - DROP_PROXIMITY && packageY - dropY < dropLocationY + DROP_PROXIMITY)
                    {
                        //Awards the user a point and more time for delivering the package
                        score += 1;
                        gameTime += 8;
                        packageInPlay = false;
                    }
                }
                break;
            }
        }
        //This makes the package to fall
        if(packageFalling)
        {
            packageYV += GRAVITY_FORCE;
            //friction
            packageXV -= packageXV/15;
            packageYV -= packageYV/15;
            
            packageX += packageXV;
            packageY += packageYV;
        }
    }
}

//This gives the package a new x and y lcoation and puts it into play if it is not
//in play
function addPackage()
{
    if(!packageInPlay)
    {
        packageGetLocation = Randomizer.nextInt(0, packageXLocations.length - 1);
        while(true)
        {
            packageDropLocation = Randomizer.nextInt(0, packageXLocations.length - 1);
            if(packageDropLocation != packageGetLocation)
            {
                dropX = 0;
                dropY = 0;
                dropLocationX = packageXLocations[packageDropLocation];
                dropLocationY = packageYLocations[packageDropLocation];
                packageX = packageXLocations[packageGetLocation];
                packageY = packageYLocations[packageGetLocation];
                packageInPlay = true;
                break;
            }
        }
    }
}

function drawPackage()
{
    if(packageFalling)
    {
        drawImage("https://codehs.com/uploads/e379b402c48e929b90dad8054f69e8e6", PACKAGE_SIZE, PACKAGE_SIZE, packageX + cameraX - dropX, packageY + cameraY - dropY);
    }
    else if(hasPackage)
    {
        packageX = getWidth()/2 - CHARACTER_WIDTH/2 + playerX + PACKAGE_SIZE/2;
        packageY = getHeight()/2 - CHARACTER_HEIGHT/2 + playerY + PACKAGE_SIZE;
        drawImage("https://codehs.com/uploads/e379b402c48e929b90dad8054f69e8e6", PACKAGE_SIZE, PACKAGE_SIZE, packageX, packageY);
    }
    else
    {
        drawImage("https://codehs.com/uploads/e379b402c48e929b90dad8054f69e8e6", PACKAGE_SIZE, PACKAGE_SIZE, packageX + cameraX - dropX, packageY + cameraY - dropY);
    }
}

//This makes the drone grab the package if it is within a certain distance of the
//drone

function grabPackage()
{
    //checks X
    if(!packageFalling && getWidth()/2 + playerX > packageX + cameraX - GRAB_PROXIMITY - dropX && getWidth()/2 + playerX < packageX + cameraX + GRAB_PROXIMITY - dropX)
    {
        //checks Y
        if(getHeight()/2 - CHARACTER_HEIGHT/2 + playerY > packageY + cameraY - GRAB_PROXIMITY - dropY && getHeight()/2 - CHARACTER_HEIGHT/2 + playerY < packageY + cameraY + GRAB_PROXIMITY - dropY)
        {
            hasPackage = true;
            if(cameraY <= 0)
            {
                playerY -= PACKAGE_SIZE;
            }
            else
            {
                cameraY += PACKAGE_SIZE;
            }
        }
    }
}

function drawArrow()
{
    if(!hasPackage && packageInPlay)
    {
        var xDistance = (packageX + cameraX - dropX) - (getWidth()/2 - CHARACTER_WIDTH/2 + playerX);
        var yDistance = (packageY + cameraY - dropY) - (getHeight()/2 - CHARACTER_HEIGHT/2 + playerY);
        var arrow = drawImage("https://codehs.com/uploads/3eec5e2deb1e7f095780a14f4d90ffb9", 100, 100, getWidth()/2 - 50 + playerX/1.5, getHeight()/2 - 150 + playerY/1.5);
        if(xDistance < 0)
        {
            arrow.setRotation(Math.atan(yDistance/xDistance)*57.3 - 90);
        }
        else
        {
            arrow.setRotation(Math.atan(yDistance/xDistance)*57.3 + 90);
        }
    }
    if(hasPackage)
    {
        var xDistance = (dropLocationX + cameraX) - (getWidth()/2 - CHARACTER_WIDTH/2 + playerX);
        var yDistance = (dropLocationY + cameraY) - (getHeight()/2 - CHARACTER_HEIGHT/2 + playerY);
        var arrow = drawImage("https://codehs.com/uploads/3968d41480f9b66b1f86ce0d3a09cd2f", 100, 100, getWidth()/2 - 50 + playerX/1.5, getHeight()/2 - 150 + playerY/1.5);
        if(xDistance < 0)
        {
            arrow.setRotation(Math.atan(yDistance/xDistance)*57.3 - 90);
        }
        else
        {
            arrow.setRotation(Math.atan(yDistance/xDistance)*57.3 + 90);
        }
    }
}

//This draws the area that the package needs to be dropped off in
function drawDropLocation()
{
    drawImage("https://codehs.com/uploads/ecac1a68d14b9ae4671e823fa7850f48", 100, 100, dropLocationX + cameraX, dropLocationY + cameraY - 50);
}

//This function draws the character on the screen
function drawCharacter()
{
    character = drawImage("https://codehs.com/uploads/9090714d61bbb0e94184347de8e85cca", 
        CHARACTER_WIDTH, CHARACTER_HEIGHT, getWidth()/2 - CHARACTER_WIDTH/2 + playerX, 
        getHeight()/2 - CHARACTER_HEIGHT/2 + playerY);
    //Rotates the drone a bit to give it more movement    
    character.setRotation(-cameraXV/2);
}

//This draws the objects in the world that the drone can collid with such as buildings
function drawGameObjects()
{
    //floor
    drawRect(WORLD_WIDTH, 40, -WORLD_WIDTH/2 + cameraX, getHeight() - 25 + cameraY,Color.gray);
    //buildings
    
    //skyscraper2
    drawImage("https://codehs.com/uploads/f901a9aa816db4f93492da44830fffd9", 570, 800, -3600 + cameraX, getHeight() + cameraY - 800);
    //Coffee shop
    drawImage("https://codehs.com/uploads/174ae06c40f4e4e6c7dde93acdab0daf", 560, 340, -2700 + cameraX, getHeight() + cameraY - 340);
    //electronics store
    drawImage("https://codehs.com/uploads/73f135da0143f8a5c67a3d0630567c62", 500, 300, -1650 + cameraX, getHeight() + cameraY - 300);
    //skyscraper
    drawImage("https://codehs.com/uploads/43d42b0ae5ae38fd58e9e097294b0336", 500, 1000, -800 + cameraX, getHeight() + cameraY - 850);
    //skyscraper
    drawImage("https://codehs.com/uploads/43d42b0ae5ae38fd58e9e097294b0336", 500, 850, 500 + cameraX, getHeight() + cameraY - 850);
    //grocery store
    drawImage("https://codehs.com/uploads/787b7f572c789a950876c8a6c7810c46", 650, 300, 1300 + cameraX, getHeight() + cameraY - 300);
    //skyscraper2
    drawImage("https://codehs.com/uploads/f901a9aa816db4f93492da44830fffd9", 500, 1000, 2000 + cameraX, getHeight() + cameraY - 1000);
    //platform
    drawImage("https://codehs.com/uploads/5968b5d852c07f9474b26e67cd84c529", 150, 150, cameraX + 350, getHeight() + cameraY - 700);
}

//This function draws the backgound layers that dont affect the gameplay
function drawBackground()
{
    //sky
    drawImage("https://codehs.com/uploads/1e38e44155aa41e1d0e00220b8498783", getWidth(), getHeight(), 0, 0); 
    //back mountains
    drawImage("https://codehs.com/uploads/d32aa5099aa53bbb8d26d657116f5682", WORLD_WIDTH/5, 850, cameraX/5 - WORLD_WIDTH/10, cameraY/5 - getHeight());
    //front mountains
    drawImage("https://codehs.com/uploads/01fb1456915741c0835195f505f8fb58", WORLD_WIDTH/4, 850, cameraX/4 - WORLD_WIDTH/8, cameraY/4 - getHeight());
    //back hills
    drawImage("https://codehs.com/uploads/5aed2cfe3668c69aca12868efe1dffdd", WORLD_WIDTH/3, 850, cameraX/3 - WORLD_WIDTH/6, cameraY/3 - getHeight());
    //front hills
    drawImage("https://codehs.com/uploads/7ba949d3b3f7943b92c86a365a3f5dbe", WORLD_WIDTH/2, 850, cameraX/2 - WORLD_WIDTH/4, cameraY/2 - getHeight());
    //codeHS plane
    drawImage("https://codehs.com/uploads/09cdde8704927dd5c0b937900894606b", 300, 100, cameraX/3 - airplaneX, cameraY/3 - 350);
    drawImage("https://codehs.com/uploads/f9573b0441e1bcfaa98ea4f1e63ae4a9", 120, 40, cameraX/3 - airplaneX + 140, cameraY/3 - 325)
    airplaneX += 3;
    if(airplaneX > WORLD_WIDTH/6 + 500)
    {
        airplaneX =- WORLD_WIDTH/6 - 500;
    }
}

//This draws thing such as the score on the screen
function drawInfo()
{
    drawText("Time: " + gameTime + "     Score: " + score , "23pt Arial", getWidth()/2, 45, Color.red);
}

//Draws text on the screen according to the paramaters. It also returns the
//reference variable for the object.
function drawText(text, font, x, y, color)
{
    var txt = new Text(text, font);
    txt.setPosition(x - txt.getWidth()/2, y - txt.getHeight()/2);
    txt.setColor(color);
    add(txt);
    return txt;
}

//Draws a rectangle according to the paramaters. It also returns the reference
//variable for the object
function drawRect(width, height, x, y, color)
{
    var rect = new Rectangle(width, height);
    rect.setPosition(x, y);
    rect.setColor(color);
    add(rect);
    return rect;
}

//Draws a web image according to the paramaters. It also returns the reference
//variable for the object
function drawImage(id, width, height, x, y)
{
    var image = new WebImage(id);
    image.setSize(width, height);
    image.setPosition(x, y);
    add(image);
    return image;
}

//This function senses when keys are pressed and sets the corresponding variable
// to true
function keyDown(e)
{
    if(e.keyCode == Keyboard.UP)
    {
        up = true;
    }
    if(e.keyCode == Keyboard.DOWN)
    {
        down = true;
    }
    if(e.keyCode == Keyboard.LEFT)
    {
        left = true;
    }
    if(e.keyCode == Keyboard.RIGHT)
    {
        right = true;
    }
    if(e.keyCode == Keyboard.SPACE)
    {
        space = true;
    }
}

//This function senses when keys are released and sets the corresponding variable
// to false
function keyUp(e)
{
    if(e.keyCode == Keyboard.UP)
    {
        up = false;
    }
    if(e.keyCode == Keyboard.DOWN)
    {
        down = false;
    }
    if(e.keyCode == Keyboard.LEFT)
    {
        left = false;
    }
    if(e.keyCode == Keyboard.RIGHT)
    {
        right = false;
    }
    if(e.keyCode == Keyboard.SPACE)
    {
        space = false;
    }
}

//This puts the mouse position in the mouseX and mouseY global varialbes so it
//is always available for the other functions
function getMousePosition(e)
{
    mouseX = e.getX();
    mouseY = e.getY();
}

//This makes the mouse down variable true when the mouse is down
function getMouseDown(e)
{
    mouseDown = true;
}

//This makes the mouse down variable false when the mouse is up
function getMouseUp(e)
{
    mouseDown = false;
}

/** 
 * This function returns true if the mouse is down in a specified area, or false
 * otherwise.
 * Paramaters: 
 *  x1/y1, The upper left corner of the area being tested.
 *  x2/y2, The lower right hand corner of the area being tested.
 */
function mouseClickedOn(x1, y1, x2, y2)
{
    if(mouseX >= x1 && mouseX <= x2 && mouseY >= y1 && mouseY <= y2 && mouseDown)
    {
        return true;
    }
    else
    {
        return false;
    }
}