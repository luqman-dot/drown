setSize(400, 400);

var player = new Circle(10);
player.setPosition(getWidth() / 2, getHeight() / 2);
player.setColor(Color.black);

var zone = new Circle(Randomizer.nextInt(20, 150));
zone.setPosition(
    Randomizer.nextInt(zone.getRadius(), getWidth() - zone.getRadius()),
    Randomizer.nextInt(zone.getRadius(), getHeight() - zone.getRadius())
);

add(zone);
add(player);

var ticks = 0;
var playerAcc = [0, 0];

function start() {
    setTimer(tick, 1);
}

function tick() {
    ticks++;
    checkZoneCollision();
    movement();
    player.move(playerAcc[0], playerAcc[1]);
    applyFriction();
}

function checkZoneCollision() {
    if (getDistance(player.getX(), zone.getX(), player.getY(), zone.getY()) < zone.getRadius()) {
        player.setColor(Color.white);
        playerAcc[0] *= 2;
        playerAcc[1] *= 2;
    } else {
        player.setColor(Color.black);
    }
}

function movement() {
    var speed = 1;
    var diagonalSpeed = speed * Math.sqrt(0.5);
    
    // Vertical Movement
    if (isKeyPressed(Keyboard.letter('W'))) {
        playerAcc[1] -= speed;
    }
    if (isKeyPressed(Keyboard.letter('S'))) {
        playerAcc[1] += speed;
    }

    // Horizontal Movement
    if (isKeyPressed(Keyboard.letter('A'))) {
        playerAcc[0] -= speed;
    }
    if (isKeyPressed(Keyboard.letter('D'))) {
        playerAcc[0] += speed;
    }
    
    // Diagonal Movement Adjustment
    if ((isKeyPressed(Keyboard.letter('W')) || isKeyPressed(Keyboard.letter('S'))) &&
        (isKeyPressed(Keyboard.letter('A')) || isKeyPressed(Keyboard.letter('D')))) {
        playerAcc[0] *= diagonalSpeed;
        playerAcc[1] *= diagonalSpeed;
    }

    checkBoundaries();
}

function applyFriction() {
    playerAcc[0] *= 0.9;
    playerAcc[1] *= 0.9;

    // Limit player speed
    var maxSpeed = 5;
    playerAcc[0] = Math.max(Math.min(playerAcc[0], maxSpeed), -maxSpeed);
    playerAcc[1] = Math.max(Math.min(playerAcc[1], maxSpeed), -maxSpeed);
}

function checkBoundaries() {
    if (player.getX() > getWidth() - player.getRadius()) {
        playerAcc[0] *= -0.2;
        player.setPosition(getWidth() - player.getRadius(), player.getY());
    } else if (player.getX() < player.getRadius()) {
        playerAcc[0] *= -0.2;
        player.setPosition(player.getRadius(), player.getY());
    }
    
    if (player.getY() > getHeight() - player.getRadius()) {
        playerAcc[1] *= -0.2;
        player.setPosition(player.getX(), getHeight() - player.getRadius());
    } else if (player.getY() < player.getRadius()) {
        playerAcc[1] *= -0.2;
        player.setPosition(player.getX(), player.getRadius());
    }
}

function getDistance(x1, x2, y1, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}
