//Jack Kearns Finial Project
//Program will draw R2D2

//Constants for the black boarders of buildBody();
var BODY_OUTLINE_WIDTH = 175;
var BODY_OUTLINE_HEIGHT = 190;
var HEAD_OUTLINE = 88;
var BODY_DIV_WIDTH = 175;
var BODY_DIV_HEIGHT = 5;

//Constants for the white overlay of buildBody();
var BODY_TOP_WIDTH = 160;
var BODY_TOP_HEIGHT = 183;
var HEAD_TOP = 80;

//Constants for the black boarders of buildLegs();
var LEG_OUTLINE_WIDTH = 30;
var LEG_OUTLINE_HEIGHT = 200;

//Constants for the white overlay of buildLegs();
var LEG_TOP_WIDTH = 20;
var LEG_TOP_HEIGHT = 185;

//Constants for the leg caps of buildLegs();
var LEG_CAP_WIDTH = 30;
var LEG_CAP_HEIGHT = 5; 

//Constants for the eye();
var EYE_BACK_WIDTH = 35;
var EYE_BACK_HEIGHT = 25;
var EYE_RAD = 9;

//Constants for the pannels and details of the head
var PANNEL_WIDTH = 6;
var PANNEL_HEIGHT = 35;
var PANNEL_2_WIDTH = 15;
var PANNEL_2_HEIGHT = 35;
var PANNEL_3_WIDTH = 10;
var PANNEL_3_HEIGHT = 20;
var PANNEL_4_WIDTH = 30;
var PANNEL_4_HEIGHT = 20;
var PANNEL_4TOP_WIDTH = 10;
var PANNEL_4TOP_HEIGHT = 15;
var PANNEL_4TOPL_WIDTH = 8;
var PANNEL_4TOPL_HEIGHT = 10;
var BUTTON_5_RAD = 6;
var PANNEL_7_WIDTH = 11;

//Constants for the pannels and details of the top of body
var TOP_P_W = 150;
var TOP_P_H = 15;

//Constants for the pannels and details of the middle of body
var BOD_P_W = 45;
var BOD_P_H = 80;
var MID_BOD_RAD = 15;
var BOD_P4_W = 25;
var BOD_P4_H = 3;
var BOD_P4_W = 25;
var BOD_P4_H = 3;
var BOD_P7_W = 95;
var BOD_P7_H = 4;

//Constants for the pannels and details of the bottom of body
var BB_P_W = 5;
var BB_P_H = 35;
var BB_P5_H = 30;
var BB_P6_W = 5;
var BB_P6_H = 20;
var BB_P7_W = 20;
var BB_P7_H = 5;
var BB_P8_W = 40;
var BB_P8_H = 130;
var BB_P9_W = 10;
var BB_P9_H = 120;

//Constants for lightsaber
var HANDLE_W = 13;
var HANDLE_H = 55;
var BLADE_W = 6;
var BLADE_H = 210;

//Start Function
function start(){
    buildBody();
    buildLegs();
    headDetails();
    bodyDetails();
    lightSaber();
}

//Draws the black boarders and white overlay for the body
function buildBody(){
    outline();
    top();
}

//Draws the black boarder parts for bodyBuild();
function outline(){
    var bodOutline = new Rectangle(BODY_OUTLINE_WIDTH , BODY_OUTLINE_HEIGHT);
    bodOutline.setPosition(getWidth() / 2 - BODY_OUTLINE_WIDTH / 2 , getHeight() / 2 - BODY_OUTLINE_HEIGHT / 4);
    bodOutline.setColor("#0d0d0d");
    add(bodOutline);
    
    var headOutline = new Circle(HEAD_OUTLINE);
    headOutline.setPosition(getWidth() / 2 , getHeight() / 2 - HEAD_OUTLINE / 2 );
    headOutline.setColor("#0d0d0d");
    add(headOutline);
    }

//Draws the white overlay parts for bodyBuild():
function top(){
    var bodTop= new Rectangle(BODY_TOP_WIDTH , BODY_TOP_HEIGHT);
    bodTop.setPosition(getWidth() / 2 - BODY_TOP_WIDTH / 2 , getHeight() / 2 - BODY_TOP_HEIGHT / 4);
    bodTop.setColor("#ffffff");
    add(bodTop);
    
    var headOutline = new Circle(HEAD_TOP);
    headOutline.setPosition(getWidth() / 2 , getHeight() / 2 - HEAD_OUTLINE / 2);
    headOutline.setColor("#ffffff");
    add(headOutline);
    
    var bodDivider = new Rectangle(BODY_DIV_WIDTH , BODY_DIV_HEIGHT);
    bodDivider.setPosition(getWidth() / 2 - BODY_OUTLINE_WIDTH / 2 , getHeight() / 2 - BODY_OUTLINE_HEIGHT / 4);
    bodDivider.setColor("#0d0d0d");
    add(bodDivider);
}

//Draws the black boarders and white overlay for the legs
function buildLegs(){
    outlineL();
    topL();
    capL();
}

//Draws the black boarders for the legs
function outlineL(){
    var legOutlineL = new Rectangle(LEG_OUTLINE_WIDTH , LEG_OUTLINE_HEIGHT);
    legOutlineL.setPosition(getWidth() / 2 + LEG_OUTLINE_WIDTH * 2 + LEG_TOP_WIDTH , getHeight() / 4 + LEG_OUTLINE_HEIGHT / 2);
    legOutlineL.setColor("#0d0d0d");
    add(legOutlineL);
    
    var legOutlineR = new Rectangle(LEG_OUTLINE_WIDTH , LEG_OUTLINE_HEIGHT);
    legOutlineR.setPosition(getWidth() / 2 - LEG_OUTLINE_WIDTH * 2 - LEG_TOP_WIDTH / 2 - LEG_TOP_WIDTH * 2 , getHeight() / 4 + LEG_OUTLINE_HEIGHT / 2);
    legOutlineR.setColor("#0d0d0d");
    add(legOutlineR);
}

//Draws the white overlay for the legs
function topL(){
    var legTopR = new Rectangle(LEG_TOP_WIDTH , LEG_TOP_HEIGHT);
    legTopR.setPosition(getWidth() / 2 + LEG_OUTLINE_WIDTH * 2 + LEG_TOP_WIDTH + LEG_OUTLINE_WIDTH / 6 , getHeight() / 4 + LEG_OUTLINE_HEIGHT / 2);
    legTopR.setColor("#ffffff");
    add(legTopR);
    
    var legTopL = new Rectangle(LEG_TOP_WIDTH , LEG_TOP_HEIGHT);
    legTopL.setPosition(getWidth() / 2 - LEG_OUTLINE_WIDTH * 2 - LEG_TOP_WIDTH / 2 - LEG_TOP_WIDTH * 2 + LEG_OUTLINE_WIDTH / 6  , getHeight() / 4 + LEG_OUTLINE_HEIGHT / 2);
    legTopL.setColor("#ffffff");
    add(legTopL);
}

//Draws the black boarder which caps the legs off
function capL(){
    var leftCap = new Rectangle(LEG_CAP_WIDTH , LEG_CAP_HEIGHT);
    leftCap.setPosition(getWidth() / 2 - LEG_OUTLINE_WIDTH * 4 + LEG_TOP_WIDTH / 2 , getHeight() / 2  - LEG_OUTLINE_HEIGHT / 10);
    leftCap.setColor("#0d0d0d");
    add(leftCap);
    
    var rightCap = new Rectangle(LEG_CAP_WIDTH , LEG_CAP_HEIGHT);
    rightCap.setPosition(getWidth() / 2 + LEG_OUTLINE_WIDTH * 3 - LEG_TOP_WIDTH / 2 , getHeight() / 2 - LEG_OUTLINE_HEIGHT / 10);
    rightCap.setColor("#0d0d0d");
    add(rightCap);
}

//Draws the details in the head
function headDetails(){
    eye();
    pannelsHead();
}

//Draws the eye
function eye(){
    var eyeBack = new Rectangle(EYE_BACK_WIDTH, EYE_BACK_HEIGHT);
    eyeBack.setPosition(getWidth() / 2 - HEAD_OUTLINE / 5 , getHeight() / 2 - HEAD_OUTLINE - EYE_BACK_HEIGHT);
    eyeBack.setColor("#005ce6");
    add(eyeBack);
    
    var eyeFront = new Circle(EYE_RAD);
    eyeFront.setPosition(getWidth() / 2 , getHeight() / 2 - HEAD_OUTLINE - EYE_BACK_HEIGHT / 2);
    eyeFront.setColor("#262626");
    add(eyeFront);
}

//Draws the pannels on the head
function pannelsHead(){
    var pannel1 = new Rectangle(PANNEL_WIDTH, PANNEL_HEIGHT);
    pannel1.setPosition(getWidth() / 2 - HEAD_OUTLINE / 1.5 , getHeight() / 2 - HEAD_OUTLINE);
    pannel1.setColor("#005ce6");
    add(pannel1);
    
    var pannel2 = new Rectangle(PANNEL_2_WIDTH, PANNEL_2_HEIGHT);
    pannel2.setPosition(getWidth() / 2 - HEAD_OUTLINE / 1.8 , getHeight() / 2 - HEAD_OUTLINE);
    pannel2.setColor("#005ce6");
    add(pannel2);
    
    var pannel3 = new Rectangle(PANNEL_3_WIDTH, PANNEL_3_HEIGHT);
    pannel3.setPosition(getWidth() / 2 - HEAD_OUTLINE / 2 + PANNEL_3_WIDTH + PANNEL_3_WIDTH / 3 , getHeight() / 2 - HEAD_OUTLINE + PANNEL_3_HEIGHT / 1.3);
    pannel3.setColor(Color.grey);
    add(pannel3);
    
    var pannel4 = new Rectangle(PANNEL_4_WIDTH, PANNEL_4_HEIGHT);
    pannel4.setPosition(getWidth() / 2 - HEAD_OUTLINE / 2 + PANNEL_4_WIDTH , getHeight() / 2 - HEAD_OUTLINE + PANNEL_3_HEIGHT / 1.3);
    pannel4.setColor("#005ce6");
    add(pannel4);
    
    var pannel4topR = new Rectangle(PANNEL_4TOP_WIDTH, PANNEL_4TOP_HEIGHT);
    pannel4topR.setPosition(getWidth() / 2, getHeight() / 2 - HEAD_OUTLINE + PANNEL_3_HEIGHT / 1.1);
    pannel4topR.setColor("#e63900");
    add(pannel4topR);
    
    var pannel4topL = new Rectangle(PANNEL_4TOPL_WIDTH, PANNEL_4TOPL_HEIGHT);
    pannel4topL.setPosition(getWidth() / 2 - PANNEL_4TOP_WIDTH , getHeight() / 2 - HEAD_OUTLINE + PANNEL_3_HEIGHT);
    pannel4topL.setColor("#0000cc");
    add(pannel4topL);
    
    var pannel5 = new Circle(BUTTON_5_RAD);
    pannel5.setPosition(getWidth() / 2 + PANNEL_4_WIDTH , getHeight() / 2 - PANNEL_4_HEIGHT * 4);
    pannel5.setColor(Color.grey);
    add(pannel5);
    
    var pannel6 = new Rectangle(PANNEL_WIDTH, PANNEL_HEIGHT);
    pannel6.setPosition(getWidth() / 2 + PANNEL_4_WIDTH + PANNEL_WIDTH + PANNEL_WIDTH , getHeight() / 2 - HEAD_OUTLINE);
    pannel6.setColor("#005ce6");
    add(pannel6);
    
    var pannel7 = new Rectangle(PANNEL_7_WIDTH, PANNEL_2_HEIGHT);
    pannel7.setPosition(getWidth() / 2 + PANNEL_2_WIDTH + PANNEL_7_WIDTH * 3 + PANNEL_2_WIDTH / 3 , getHeight() / 2 - HEAD_OUTLINE);
    pannel7.setColor("#005ce6");
    add(pannel7);
}

//Draws the details on the body
function bodyDetails(){
    topBod();
    midBod();
    botBod();
}

//Draws the details for top portion
function topBod(){
    var topBodP1 = new Rectangle(TOP_P_W, TOP_P_H);
    topBodP1.setPosition(getWidth() / 2 - TOP_P_W / 2 , getHeight() / 2 - TOP_P_H * 2);
    topBodP1.setColor("#005ce6");
    add(topBodP1);
}

//Draws the details of the middle portion
function midBod(){
    var midBodP1 = new Rectangle(BOD_P_W, BOD_P_H);
    midBodP1.setPosition(getWidth() / 2 - BOD_P_W / 2 , getHeight() / 2);
    midBodP1.setColor("#005ce6");
    add(midBodP1);
    
    var midBod2 = new Circle(MID_BOD_RAD);
    midBod2.setPosition(getWidth() / 2 , getHeight() / 2 + BOD_P_H / 4);
    midBod2.setColor("#bfbfbf");
    add(midBod2);
    
    var midBod3 = new Circle(MID_BOD_RAD);
    midBod3.setPosition(getWidth() / 2 , getHeight() / 2 + MID_BOD_RAD * 4);
    midBod3.setColor("#bfbfbf");
    add(midBod3);
    
    var midBodP4 = new Rectangle(BOD_P4_W, BOD_P4_H);
    midBodP4.setPosition(getWidth() / 2 - BOD_P_W / 3.5 , getHeight() / 2 + BOD_P_H / 4);
    midBodP4.setColor(Color.grey);
    add(midBodP4);
    
    var midBodP5 = new Rectangle(BOD_P4_W, BOD_P4_H);
    midBodP5.setPosition(getWidth() / 2 - BOD_P_W / 3.5  , getHeight() / 2 + MID_BOD_RAD * 4);
    midBodP5.setColor(Color.grey);
    add(midBodP5);
    
    var midBodP7 = new Rectangle(BOD_P7_W, BOD_P7_H);
    midBodP7.setPosition(getWidth() / 2 - MID_BOD_RAD * 10 , getHeight() / 2 + BOD_P_H / 2);
    midBodP7.setColor("#0d0d0d");
    add(midBodP7);
    
    var midBod6 = new Circle(MID_BOD_RAD);
    midBod6.setPosition(getWidth() / 2 - MID_BOD_RAD * 4 + MID_BOD_RAD / 2 , getHeight() / 2 + BOD_P_H / 2);
    midBod6.setColor("#bfbfbf");
    add(midBod6);
}

//Draws the details for the bottom portion
function botBod(){
    var botBodP1 = new Rectangle(BB_P_W, BB_P_H);
    botBodP1.setPosition(getWidth() / 2 - BOD_P_W - BB_P_W * 5 , getHeight() / 2 + BB_P_H * 3 - BB_P_H / 3);
    botBodP1.setColor("#005ce6");
    add(botBodP1);
    
    var botBodP2 = new Rectangle(BB_P_W, BB_P_H);
    botBodP2.setPosition(getWidth() / 2 - BOD_P_W - BB_P_W * 3 , getHeight() / 2 + BB_P_H * 3 - BB_P_H / 3);
    botBodP2.setColor("#005ce6");
    add(botBodP2);
    
    var botBodP3 = new Rectangle(BB_P_W, BB_P_H);
    botBodP3.setPosition(getWidth() / 2 - BOD_P_W - BB_P_W , getHeight() / 2 + BB_P_H * 3 - BB_P_H / 3);
    botBodP3.setColor("#005ce6");
    add(botBodP3);
    
    var botBodP4 = new Rectangle(BB_P_W, BB_P_H);
    botBodP4.setPosition(getWidth() / 2 - BOD_P_W / 2 - BB_P_W * 3 - BB_P_W / 2 , getHeight() / 2 + BB_P_H * 3 - BB_P_H / 3);
    botBodP4.setColor("#005ce6");
    add(botBodP4);
    
    var botBodP5 = new Rectangle(BOD_P_W, BB_P5_H);
    botBodP5.setPosition(getWidth() / 2 - BOD_P_W / 2 , getHeight() / 2 + BB_P5_H + BB_P5_H * 2 );
    botBodP5.setColor("#bfbfbf");
    add(botBodP5);
    
    var botBodP6 = new Rectangle(BB_P6_W, BB_P6_H);
    botBodP6.setPosition(getWidth() / 2 - BB_P6_W / 2 , getHeight() / 2 + BB_P5_H * 3 + BB_P6_H / 4  );
    botBodP6.setColor("#005ce6");
    add(botBodP6);
    
    var botBodP7 = new Rectangle(BB_P7_W, BB_P7_H);
    botBodP7.setPosition(getWidth() / 2 - BB_P6_W * 2 , getHeight() / 2 + BB_P5_H + BB_P6_H * 2 + BB_P7_H * 6.5);
    botBodP7.setColor("#005ce6");
    add(botBodP7);
    
    var botBodP8 = new Rectangle(BB_P8_W, BB_P8_H);
    botBodP8.setPosition(getWidth() / 2 + BB_P8_W / 2 + BB_P8_W / 4 , getHeight() / 2 );
    botBodP8.setColor("#005ce6");
    add(botBodP8);
    
    var botBodP9 = new Rectangle(BB_P9_W, BB_P9_H);
    botBodP9.setPosition(getWidth() / 2 + BB_P8_W + BB_P9_W / 2 , getHeight() / 2 + BB_P9_W / 2);
    botBodP9.setColor("#bfbfbf");
    add(botBodP9);
}

//Draws a light saber
function lightSaber(){
    var handle = new Rectangle(HANDLE_W, HANDLE_H);
    handle.setPosition(getWidth() / 2 - MID_BOD_RAD * 10 , getHeight() / 2 + BB_P9_W / 2);
    handle.setColor("#404040");
    add(handle);
    
    var blade = new Rectangle(BLADE_W, BLADE_H);
    blade.setPosition(getWidth() / 2 - MID_BOD_RAD * 10 + BLADE_W / 2 , getHeight() / 2 - BLADE_H + BLADE_W);
    blade.setColor(Randomizer.nextColor());
    add(blade);
}