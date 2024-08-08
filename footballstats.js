// This program keeps track of basic stats for the FHS football team. Stats kept track of
// include specific plays called, the total yards gained by that play throughout the game, and the
// average yards the play has gained throughtout the game. Additionally, the program divides the
// plays ran into pass plays and rush plays, and keeps track of total and average yards for both
// runs and passes. Finally, the program keeps track of average yards gained by any game throughout
// the game.

    // COACHES: If you click a play by accident, type "101" into the input box. This will cancel out
// the play that you clicked and not change any stats.

var tsPitchBox;
var ffPitchBox;
var ttTrapBox;
var tfTrapBox;
var teScissorsBox;
var fsScissorsBox;
var tsReverseBox;
var ffReverseBox;
var oeBootBox;
var osBootBox;
var boxWidth = getWidth() / 5;
var boxHeight = getHeight() / 3;
var tsPitchYds = 0;
var tsPitchCalls = 0;
var tsPitchAvg = 0;
var tsPitchCallsTxt;
var tsPitchYdsTxt;
var tsPitchAvgTxt;
var ffPitchYds = 0;
var ffPitchCalls = 0;
var ffPitchAvg = 0;
var ffPitchCallsTxt;
var ffPitchYdsTxt;
var ffPitchAvgTxt;
var ttTrapYds = 0;
var ttTrapCalls = 0;
var ttTrapAvg = 0;
var ttTrapCallsTxt;
var ttTrapYdsTxt;
var ttTrapAvgTxt;
var tfTrapYds = 0;
var tfTrapCalls = 0;
var tfTrapAvg = 0;
var tfTrapCallsTxt;
var tfTrapYdsTxt;
var tfTrapAvgTxt;
var teScissorsYds = 0;
var teScissorsCalls = 0;
var teScissorsAvg = 0;
var teScissorsCallsTxt;
var teScissorsYdsTxt;
var teScissorsAvgTxt;
var fsScissorsYds = 0;
var fsScissorsCalls = 0;
var fsScissorsAvg = 0;
var fsScissorsCallsTxt;
var fsScissorsYdsTxt;
var fsScissorsAvgTxt;
var tsReverseYds = 0;
var tsReverseCalls = 0;
var tsReverseAvg = 0;
var tsReverseCallsTxt;
var tsReverseYdsTxt;
var tsReverseAvgTxt;
var ffReverseYds = 0;
var ffReverseCalls = 0;
var ffReverseAvg = 0;
var ffReverseCallsTxt;
var ffReverseYdsTxt;
var ffReverseAvgTxt;
var osBootCalls = 0;
var osBootYds = 0;
var osBootAvg = 0;
var osBootCallsTxt = 0;
var osBootYdsTxt = 0;
var osBootAvgTxt = 0;
var oeBootCalls = 0;
var oeBootYds = 0;
var oeBootAvg = 0;
var oeBootCallsTxt;
var oeBootYdsTxt;
var oeBootAvgTxt;
var otherRushCalls = 0;
var otherRushYds = 0;
var otherRushAvg = 0;
var otherRushCallsTxt;
var otherRushYdsTxt;
var otherRushAvgTxt;
var otherPassCalls = 0;
var otherPassYds = 0;
var otherPassAvg = 0;
var otherPassCallsTxt;
var otherPassYdsTxt;
var otherPassAvgTxt;
var rushYds;
var passYds;
var rushCalls = tsPitchCalls + ffPitchCalls + ttTrapCalls + tfTrapCalls + tsReverseCalls + ffReverseCalls + osBootCalls + oeBootCalls + otherRushCalls;
var passCalls = teScissorsCalls + fsScissorsCalls + otherPassCalls;
var rushAvg = rushYds / rushCalls;
var passAvg = passYds / passAvg;
var rushYdsTxt;
var passYdsTxt;
var rushAvg;
var passAvg;
var rushAvgTxt;
var passAvgTxt;
var totalCallsTxt;
var avgYdsTxt;

function start(){
    boxes();
    mouseClickMethod(playcall);
    boxText();
    playStats();
}

// This function sets the text at the bottom of the screen.
function playStats(){
    rushYds = tsPitchYds + ffPitchYds + ttTrapYds + tfTrapYds + tsReverseYds + ffReverseYds + osBootYds + oeBootYds + otherRushYds;
    rushYdsTxt = new Text("Rushing Yds: " , "12pt Arial");
    rushYdsTxt.setPosition(1, getHeight() - boxWidth + 15);
    rushYdsTxt.setColor(Color.black);
    add(rushYdsTxt);
    
    passYds = teScissorsYds + fsScissorsYds + otherPassYds;
    passYdsTxt = new Text("Passing Yds: ", "12pt Arial");
    passYdsTxt.setPosition(getWidth() / 2 + 1, getHeight() - boxWidth + 15);
    passYdsTxt.setColor(Color.black);
    add(passYdsTxt);
    
    var rushCalls = tsPitchCalls + ffPitchCalls + ttTrapCalls + tfTrapCalls + tsReverseCalls + ffReverseCalls + osBootCalls + oeBootCalls + otherRushCalls;
    rushAvg = rushYds / rushCalls;
    rushAvgTxt = new Text("Rush Avg: ", "12pt Arial");
    rushAvgTxt.setPosition(1, getHeight() - boxWidth + 40);
    rushAvgTxt.setColor(Color.black);
    add(rushAvgTxt);
    
    var passCalls = teScissorsCalls + fsScissorsCalls + otherPassCalls;
    passAvg = passYds / passCalls;
    passAvgTxt = new Text("Pass Avg: ", "12pt Arial");
    passAvgTxt.setPosition(getWidth() / 2 + 1, getHeight() - boxWidth + 40);
    passAvgTxt.setColor(Color.black);
    add(passAvgTxt);
    
    totalCallsTxt = new Text("Total Plays Ran: ", "12pt Arial");
    totalCallsTxt.setPosition(1, getHeight() - boxWidth + 65);
    totalCallsTxt.setColor(Color.black);
    add(totalCallsTxt);
    
    avgYdsTxt = new Text("Avg Yds Per Play: ", "12pt Arial");
    avgYdsTxt.setPosition(getWidth() / 2 + 1, getHeight() - boxWidth + 65);
    avgYdsTxt.setColor(Color.black);
    add(avgYdsTxt);
}

    // This function tracks where the mouse is clicked, and pulls up a user input box when certain
// boxes are clicked. This function also changes text to reflect the calls, total yards, and average
// yards gained by a play, and calculates rushing yards and average, passing yards and average, and
// combined average.
function playcall(e){
    var rushCalls = 1 + tsPitchCalls + ffPitchCalls + ttTrapCalls + tfTrapCalls + tsReverseCalls + ffReverseCalls + osBootCalls + oeBootCalls + otherRushCalls;
    var passCalls = 1 + teScissorsCalls + fsScissorsCalls + otherPassCalls;
    
    if(e.getX() >= 0 && e.getX() < boxWidth){
        if(e.getY() >= 0 && e.getY() < boxHeight){
            var tsPitchYdsGained = readFloat("How many yards were gained or lost? ");
            if(tsPitchYdsGained != "101"){
                tsPitchCalls++;
                tsPitchYds = tsPitchYds + tsPitchYdsGained;
                tsPitchAvg = tsPitchYds / tsPitchCalls;
                var roundedtsPitchAvg = Math.round(tsPitchAvg);
                tsPitchCallsTxt.setText("Calls: " + tsPitchCalls);
                tsPitchYdsTxt.setText("Total Yds: " + tsPitchYds);
                tsPitchAvgTxt.setText("Avg Yds: " + roundedtsPitchAvg);
                rushYds = rushYds + tsPitchYdsGained;
                rushAvg = rushYds / rushCalls;
            }
        }
    }
    
    if(e.getX() > boxWidth && e.getX() < boxWidth * 2){
        if(e.getY() >= 0 && e.getY() < boxHeight){
            var ffPitchYdsGained = readFloat("How many yards were gained or lost? ");
            if(ffPitchYdsGained != "101"){
                ffPitchCalls++;
                ffPitchYds = ffPitchYds + ffPitchYdsGained;
                ffPitchAvg = ffPitchYds / ffPitchCalls;
                var roundedffPitchAvg = Math.round(ffPitchAvg);
                ffPitchCallsTxt.setText("Calls: " + ffPitchCalls);
                ffPitchYdsTxt.setText("Total Yds: " + ffPitchYds);
                ffPitchAvgTxt.setText("Avg Yds: " + roundedffPitchAvg);
                rushYds = rushYds + ffPitchYdsGained;
                rushAvg = rushYds / rushCalls;
            }
        }
    }
    
    if(e.getX() > boxWidth * 2 && e.getX() < boxWidth * 3){
        if(e.getY() >= 0 && e.getY() < boxHeight){
            var ttTrapYdsGained = readFloat("How many yards were gained or lost? ");
            if(ttTrapYdsGained != "101"){
                ttTrapCalls++;
                ttTrapYds = ttTrapYds + ttTrapYdsGained;
                ttTrapAvg = ttTrapYds / ttTrapCalls;
                var roundedttTrapAvg = Math.round(ttTrapAvg);
                ttTrapCallsTxt.setText("Calls: " + ttTrapCalls);
                ttTrapYdsTxt.setText("Total Yds: " + ttTrapYds);
                ttTrapAvgTxt.setText("Avg Yds: " + roundedttTrapAvg);
                rushYds = rushYds + ttTrapYdsGained;
                rushAvg = rushYds / rushCalls;
            }
        }
    }
    
    if(e.getX() > boxWidth * 3 && e.getX() < boxWidth * 4){
        if(e.getY() >= 0 && e.getY() < boxHeight){
            var tfTrapYdsGained = readFloat("How many yards were gained or lost? ");
            if(tfTrapYdsGained != "101"){
                tfTrapCalls++;
                tfTrapYds = tfTrapYds + tfTrapYdsGained;
                tfTrapAvg = tfTrapYds / tfTrapCalls;
                var roundedtfTrapAvg = Math.round(tfTrapAvg);
                tfTrapCallsTxt.setText("Calls: " + tfTrapCalls);
                tfTrapYdsTxt.setText("Total Yds: " + tfTrapYds);
                tfTrapAvgTxt.setText("Avg Yds: " + roundedtfTrapAvg);
                rushYds = rushYds + tfTrapYdsGained;
                rushAvg = rushYds / rushCalls;
            }
        }
    }
    
    if(e.getX() > boxWidth * 4 && e.getX() <= getWidth()){
        if(e.getY() >= 0 && e.getY() < boxHeight){
            var teScissorsYdsGained = readFloat("How many yards were gained or lost? ");
            if(teScissorsYdsGained != "101"){
                teScissorsCalls++;
                teScissorsYds = teScissorsYds + teScissorsYdsGained;
                teScissorsAvg = teScissorsYds / teScissorsCalls;
                var roundedteScissorsAvg = Math.round(teScissorsAvg);
                teScissorsCallsTxt.setText("Calls: " + teScissorsCalls);
                teScissorsYdsTxt.setText("Total Yds: " + teScissorsYds);
                teScissorsAvgTxt.setText("Avg Yds: " + roundedteScissorsAvg);
                passYds = passYds + teScissorsYdsGained;
                passAvg = passYds / passCalls;
            }
        }
    }
    
    if(e.getX() >= 0 && e.getX() < boxWidth){
        if(e.getY() > boxHeight && e.getY() < boxHeight * 2){
            var fsScissorsYdsGained = readFloat("How many yards were gained or lost? ");
            if(fsScissorsYdsGained != "101"){
                fsScissorsCalls++;
                fsScissorsYds = fsScissorsYds + fsScissorsYdsGained;
                fsScissorsAvg = fsScissorsYds / fsScissorsCalls;
                var roundedfsScissorsAvg = Math.round(fsScissorsAvg);
                fsScissorsCallsTxt.setText("Calls: " + fsScissorsCalls);
                fsScissorsYdsTxt.setText("Total Yds: " + fsScissorsYds);
                fsScissorsAvgTxt.setText("Avg Yds: " + roundedfsScissorsAvg);
                passYds = passYds + fsScissorsYdsGained;
                passAvg = passYds / passCalls;
            }
        }
    }
    
    if(e.getX() > boxWidth && e.getX() < boxWidth * 2){
        if(e.getY() > boxHeight && e.getY() < boxHeight * 2){
            var tsReverseYdsGained = readFloat("How many yards were gained or lost? ");
            if(tsReverseYdsGained != "101"){
                tsReverseCalls++;
                tsReverseYds = tsReverseYds + tsReverseYdsGained;
                tsReverseAvg = tsReverseYds / tsReverseCalls;
                var roundedtsReverseAvg = Math.round(tsReverseAvg);
                tsReverseCallsTxt.setText("Calls: " + tsReverseCalls);
                tsReverseYdsTxt.setText("Total Yds: " + tsReverseYds);
                tsReverseAvgTxt.setText("Avg Yds: " + roundedtsReverseAvg);
                rushYds = rushYds + tsReverseYdsGained;
                rushAvg = rushYds / rushCalls;
            }
        }
    }
    
    if(e.getX() > boxWidth * 2 && e.getX() < boxWidth * 3){
        if(e.getY() > boxHeight && e.getY() < boxHeight * 2){
            var ffReverseYdsGained = readFloat("How many yards were gained or lost? ");
            if(ffReverseYdsGained != "101"){
                ffReverseCalls++;
                ffReverseYds = ffReverseYds + ffReverseYdsGained;
                ffReverseAvg = ffReverseYds / ffReverseCalls;
                var roundedffReverseAvg = Math.round(ffReverseAvg);
                ffReverseCallsTxt.setText("Calls: " + ffReverseCalls);
                ffReverseYdsTxt.setText("Total Yds: " + ffReverseYds);
                ffReverseAvgTxt.setText("Avg Yds: " + roundedffReverseAvg);
                rushYds = rushYds + ffReverseYdsGained;
                rushAvg = rushYds / rushCalls;
            }
        }
    }
    
    if(e.getX() > boxWidth * 3 && e.getX() < boxWidth * 4){
        if(e.getY() > boxHeight && e.getY() < boxHeight * 2){
            var osBootYdsGained = readFloat("How many yards were gained or lost? ");
            if(osBootYdsGained != "101"){
                osBootCalls++;
                osBootYds = osBootYds + osBootYdsGained;
                osBootAvg = osBootYds / osBootCalls;
                var roundedosBootAvg = Math.round(osBootAvg);
                osBootCallsTxt.setText("Calls: " + osBootCalls);
                osBootYdsTxt.setText("Total Yds: " + osBootYds);
                osBootAvgTxt.setText("Avg Yds: " + roundedosBootAvg);
                rushYds = rushYds + osBootYdsGained;
                rushAvg = rushYds / rushCalls;
            }
        }
    }
    
    if(e.getX() > boxWidth * 4 && e.getX() <= getWidth()){
        if(e.getY() > boxHeight && e.getY() < boxHeight * 2){
            var oeBootYdsGained = readFloat("How many yards were gained or lost? ");
            if(oeBootYdsGained != "101"){
                oeBootCalls++;
                oeBootYds = oeBootYds + oeBootYdsGained;
                oeBootAvg = oeBootYds / oeBootCalls;
                var roundedoeBootAvg = Math.round(oeBootAvg);
                oeBootCallsTxt.setText("Calls: " + oeBootCalls);
                oeBootYdsTxt.setText("Total Yds: " + oeBootYds);
                oeBootAvgTxt.setText("Avg Yds: " + roundedoeBootAvg);
                rushYds = rushYds + oeBootYdsGained;
                rushAvg = rushYds / rushCalls;
            }
        }
    }
    
    if(e.getX() >= 0 && e.getX() <= getWidth() / 2){
        if(e.getY() > boxHeight * 2 && e.getY() < getHeight() - boxWidth){
            var otherRushYdsGained = readFloat("How many yards were gained or lost? ");
            if(otherRushYdsGained != "101"){
                otherRushCalls++;
                otherRushYds = otherRushYds + otherRushYdsGained;
                otherRushAvg = otherRushYds / otherRushCalls;
                var roundedOtherRushAvg = Math.round(otherRushAvg);
                otherRushCallsTxt.setText("Calls: " + otherRushCalls);
                otherRushYdsTxt.setText("Total Yds: " + otherRushYds);
                otherRushAvgTxt.setText("Avg Yds: " + roundedOtherRushAvg);
                rushYds = rushYds + otherRushYdsGained;
                rushAvg = rushYds / rushCalls;
            }
        }
    }
    
    if(e.getX() > getWidth() / 2 && e.getX() <= getWidth()){
        if(e.getY() > boxHeight * 2 && e.getY() < getHeight() - boxWidth){
            var otherPassYdsGained = readFloat("How many yards were gained or lost? ");
            if(otherPassYdsGained != "101"){
                otherPassCalls++;
                otherPassYds = otherPassYds + otherPassYdsGained;
                otherPassAvg = otherPassYds / otherPassCalls;
                var roundedOtherPassAvg = Math.round(otherPassAvg);
                otherPassCallsTxt.setText("Calls: " + otherPassCalls);
                otherPassYdsTxt.setText("Total Yds: " + otherPassYds);
                otherPassAvgTxt.setText("Avg Yds: " + roundedOtherPassAvg);
                passYds = passYds + otherPassYdsGained;
                passAvg = passYds / passCalls;
            }
        }
    }
    
    rushYdsTxt.setText("Rushing Yds: " + rushYds);
    passYdsTxt.setText("Passing Yds: " + passYds);
    var roundedrushAvg = Math.round(rushAvg);
    rushAvgTxt.setText("Rush Avg: " + roundedrushAvg);
    var roundedpassAvg = Math.round(passAvg);
    passAvgTxt.setText("Pass Avg: " + roundedpassAvg);
    
    var totalCalls = (rushCalls - 1 + passCalls);
    totalCallsTxt.setText("Total Plays Ran: " + totalCalls);
    
    var avgYds = (rushYds + passYds) / (rushCalls - 1 + passCalls);
    var roundedavgYds = Math.round(avgYds);
    avgYdsTxt.setText("Avg Yds Per Play: " + roundedavgYds);
}

// This function adds the text into the boxes.
function boxText(){
    var txtOffset = 15;
    
    var tsPitchText = new Text("36 Pitch", "9pt Arial");
    tsPitchText.setPosition(1, boxHeight / 6);
    tsPitchText.setColor(Color.white);
    add(tsPitchText);
    
    tsPitchCallsTxt = new Text("Calls: " + tsPitchCalls, "9pt Arial");
    tsPitchCallsTxt.setPosition(1, boxHeight / 6 + txtOffset);
    tsPitchCallsTxt.setColor(Color.white);
    add(tsPitchCallsTxt);
    
    tsPitchYdsTxt = new Text("Total Yds: " + tsPitchYds, "9pt Arial");
    tsPitchYdsTxt.setPosition(1, boxHeight / 6 + txtOffset * 2);
    tsPitchYdsTxt.setColor(Color.white);
    add(tsPitchYdsTxt);
    
    tsPitchAvgTxt = new Text("Avg Yds: " + tsPitchAvg, "9pt Arial");
    tsPitchAvgTxt.setPosition(1, boxHeight / 6 + txtOffset * 3);
    tsPitchAvgTxt.setColor(Color.white);
    add(tsPitchAvgTxt);
    
    
    var ffPitchText = new Text("45 Pitch", "9pt Arial");
    ffPitchText.setPosition(boxWidth + 1, boxHeight / 6);
    ffPitchText.setColor(Color.black);
    add(ffPitchText);
    
    ffPitchCallsTxt = new Text("Calls: " + tsPitchCalls, "9pt Arial");
    ffPitchCallsTxt.setPosition(boxWidth + 1, boxHeight / 6 + txtOffset);
    ffPitchCallsTxt.setColor(Color.black);
    add(ffPitchCallsTxt);
    
    ffPitchYdsTxt = new Text("Total Yds: " + ffPitchYds, "9pt Arial");
    ffPitchYdsTxt.setPosition(boxWidth + 1, boxHeight / 6 + txtOffset * 2);
    ffPitchYdsTxt.setColor(Color.black);
    add(ffPitchYdsTxt);
    
    ffPitchAvgTxt = new Text("Avg Yds: " + ffPitchAvg, "9pt Arial");
    ffPitchAvgTxt.setPosition(boxWidth + 1, boxHeight / 6 + txtOffset * 3);
    ffPitchAvgTxt.setColor(Color.black);
    add(ffPitchAvgTxt);
    
    
    var ttTrapText = new Text("23 Trap", "9pt Arial");
    ttTrapText.setPosition(boxWidth * 2 + 1, boxHeight / 6);
    ttTrapText.setColor(Color.white);
    add(ttTrapText);
    
    ttTrapCallsTxt = new Text("Calls: " + ttTrapCalls, "9pt Arial");
    ttTrapCallsTxt.setPosition(boxWidth * 2 + 1, boxHeight / 6 + txtOffset);
    ttTrapCallsTxt.setColor(Color.white);
    add(ttTrapCallsTxt);
    
    ttTrapYdsTxt = new Text("Total Yds: " + ttTrapYds, "9pt Arial");
    ttTrapYdsTxt.setPosition(boxWidth * 2 + 1, boxHeight / 6 + txtOffset * 2);
    ttTrapYdsTxt.setColor(Color.white);
    add(ttTrapYdsTxt);
    
    ttTrapAvgTxt = new Text("Avg Yds: " + ttTrapAvg, "9pt Arial");
    ttTrapAvgTxt.setPosition(boxWidth * 2 + 1, boxHeight / 6 + txtOffset * 3);
    ttTrapAvgTxt.setColor(Color.white);
    add(ttTrapAvgTxt);
    
    
    var tfTrapText = new Text("24 Trap", "9pt Arial");
    tfTrapText.setPosition(boxWidth * 3 + 1, boxHeight / 6);
    tfTrapText.setColor(Color.black);
    add(tfTrapText);
    
    tfTrapCallsTxt = new Text("Calls: " + tfTrapCalls, "9pt Arial");
    tfTrapCallsTxt.setPosition(boxWidth * 3 + 1, boxHeight / 6 + txtOffset);
    tfTrapCallsTxt.setColor(Color.black);
    add(tfTrapCallsTxt);
    
    tfTrapYdsTxt = new Text("Total Yds: " + tfTrapYds, "9pt Arial");
    tfTrapYdsTxt.setPosition(boxWidth * 3 + 1, boxHeight / 6 + txtOffset * 2);
    tfTrapYdsTxt.setColor(Color.black);
    add(tfTrapYdsTxt);
    
    tfTrapAvgTxt = new Text("Avg Yds: " + tfTrapAvg, "9pt Arial");
    tfTrapAvgTxt.setPosition(boxWidth * 3 + 1, boxHeight / 6 + txtOffset * 3);
    tfTrapAvgTxt.setColor(Color.black);
    add(tfTrapAvgTxt);
    
    
    var teScissorsText = new Text("38 Scissors", "9pt Arial");
    teScissorsText.setPosition(boxWidth * 4 + 1, boxHeight / 6);
    teScissorsText.setColor(Color.white);
    add(teScissorsText);
    
    teScissorsCallsTxt = new Text("Calls: " + teScissorsCalls, "9pt Arial");
    teScissorsCallsTxt.setPosition(boxWidth * 4 + 1, boxHeight / 6 + txtOffset);
    teScissorsCallsTxt.setColor(Color.white);
    add(teScissorsCallsTxt);
    
    teScissorsYdsTxt = new Text("Total Yds: " + teScissorsYds, "9pt Arial");
    teScissorsYdsTxt.setPosition(boxWidth * 4 + 1, boxHeight / 6 + txtOffset * 2);
    teScissorsYdsTxt.setColor(Color.white);
    add(teScissorsYdsTxt);
    
    teScissorsAvgTxt = new Text("Avg Yds: " + teScissorsAvg, "9pt Arial");
    teScissorsAvgTxt.setPosition(boxWidth * 4 + 1, boxHeight / 6 + txtOffset * 3);
    teScissorsAvgTxt.setColor(Color.white);
    add(teScissorsAvgTxt);
    
    
    var fsScissorsText = new Text("47 Scissors", "9pt Arial");
    fsScissorsText.setPosition(1, boxHeight / 6 + boxHeight);
    fsScissorsText.setColor(Color.black);
    add(fsScissorsText);
    
    fsScissorsCallsTxt = new Text("Calls: " + fsScissorsCalls, "9pt Arial");
    fsScissorsCallsTxt.setPosition(1, boxHeight / 6 + txtOffset + boxHeight);
    fsScissorsCallsTxt.setColor(Color.black);
    add(fsScissorsCallsTxt);
    
    fsScissorsYdsTxt = new Text("Total Yds: " + fsScissorsYds, "9pt Arial");
    fsScissorsYdsTxt.setPosition(1, boxHeight / 6 + txtOffset * 2 + boxHeight);
    fsScissorsYdsTxt.setColor(Color.black);
    add(fsScissorsYdsTxt);
    
    fsScissorsAvgTxt = new Text("Avg Yds: " + fsScissorsAvg, "9pt Arial");
    fsScissorsAvgTxt.setPosition(1, boxHeight / 6 + txtOffset * 3 + boxHeight);
    fsScissorsAvgTxt.setColor(Color.black);
    add(fsScissorsAvgTxt);
    
    
    var tsReverseText = new Text("36 Reverse", "9pt Arial");
    tsReverseText.setPosition(boxWidth + 1, boxHeight / 6 + boxHeight);
    tsReverseText.setColor(Color.white);
    add(tsReverseText);
    
    tsReverseCallsTxt = new Text("Calls: " + tsReverseCalls, "9pt Arial");
    tsReverseCallsTxt.setPosition(boxWidth + 1, boxHeight / 6 + txtOffset + boxHeight);
    tsReverseCallsTxt.setColor(Color.white);
    add(tsReverseCallsTxt);
    
    tsReverseYdsTxt = new Text("Total Yds: " + tsReverseYds, "9pt Arial");
    tsReverseYdsTxt.setPosition(boxWidth + 1, boxHeight / 6 + txtOffset * 2 + boxHeight);
    tsReverseYdsTxt.setColor(Color.white);
    add(tsReverseYdsTxt);
    
    tsReverseAvgTxt = new Text("Avg Yds: " + tsReverseAvg, "9pt Arial");
    tsReverseAvgTxt.setPosition(boxWidth + 1, boxHeight / 6 + txtOffset * 3 + boxHeight);
    tsReverseAvgTxt.setColor(Color.white);
    add(tsReverseAvgTxt);
    
    
    var ffReverseText = new Text("45 Reverse", "9pt Arial");
    ffReverseText.setPosition(boxWidth * 2 + 1, boxHeight / 6 + boxHeight);
    ffReverseText.setColor(Color.black);
    add(ffReverseText);
    
    ffReverseCallsTxt = new Text("Calls: " + ffReverseCalls, "9pt Arial");
    ffReverseCallsTxt.setPosition(boxWidth * 2 + 1, boxHeight / 6 + txtOffset + boxHeight);
    ffReverseCallsTxt.setColor(Color.black);
    add(ffReverseCallsTxt);
    
    ffReverseYdsTxt = new Text("Total Yds: " + ffReverseYds, "9pt Arial");
    ffReverseYdsTxt.setPosition(boxWidth * 2 + 1, boxHeight / 6 + txtOffset * 2 + boxHeight);
    ffReverseYdsTxt.setColor(Color.black);
    add(ffReverseYdsTxt);
    
    ffReverseAvgTxt = new Text("Avg Yds: " + ffReverseAvg, "9pt Arial");
    ffReverseAvgTxt.setPosition(boxWidth * 2 + 1, boxHeight / 6 + txtOffset * 3 + boxHeight);
    ffReverseAvgTxt.setColor(Color.black);
    add(ffReverseAvgTxt);
    
    
    var osBootText = new Text("17 Boot", "9pt Arial");
    osBootText.setPosition(boxWidth * 3 + 1, boxHeight / 6 + boxHeight);
    osBootText.setColor(Color.white);
    add(osBootText);
    
    osBootCallsTxt = new Text("Calls: " + osBootCalls, "9pt Arial");
    osBootCallsTxt.setPosition(boxWidth * 3 + 1, boxHeight / 6 + txtOffset + boxHeight);
    osBootCallsTxt.setColor(Color.white);
    add(osBootCallsTxt);
    
    osBootYdsTxt = new Text("Total Yds: " + osBootYds, "9pt Arial");
    osBootYdsTxt.setPosition(boxWidth * 3 + 1, boxHeight / 6 + txtOffset * 2 + boxHeight);
    osBootYdsTxt.setColor(Color.white);
    add(osBootYdsTxt);
    
    osBootAvgTxt = new Text("Avg Yds: " + osBootAvg, "9pt Arial");
    osBootAvgTxt.setPosition(boxWidth * 3 + 1, boxHeight / 6 + txtOffset * 3 + boxHeight);
    osBootAvgTxt.setColor(Color.white);
    add(osBootAvgTxt);
    
    
    var oeBootText = new Text("18 Boot", "9pt Arial");
    oeBootText.setPosition(boxWidth * 4 + 1, boxHeight / 6 + boxHeight);
    oeBootText.setColor(Color.black);
    add(oeBootText);
    
    oeBootCallsTxt = new Text("Calls: " + oeBootCalls, "9pt Arial");
    oeBootCallsTxt.setPosition(boxWidth * 4 + 1, boxHeight / 6 + txtOffset + boxHeight);
    oeBootCallsTxt.setColor(Color.black);
    add(oeBootCallsTxt);
    
    oeBootYdsTxt = new Text("Total Yds: " + oeBootYds, "9pt Arial");
    oeBootYdsTxt.setPosition(boxWidth * 4 + 1, boxHeight / 6 + txtOffset * 2 + boxHeight);
    oeBootYdsTxt.setColor(Color.black);
    add(oeBootYdsTxt);
    
    oeBootAvgTxt = new Text("Avg Yds: " + oeBootAvg, "9pt Arial");
    oeBootAvgTxt.setPosition(boxWidth * 4 + 1, boxHeight / 6 + txtOffset * 3 + boxHeight);
    oeBootAvgTxt.setColor(Color.black);
    add(oeBootAvgTxt);
    
    
    var otherRushText = new Text("Other Rushes", "9pt Arial");
    otherRushText.setPosition(1, boxHeight / 6 + boxHeight * 2);
    otherRushText.setColor(Color.white);
    add(otherRushText);
    
    otherRushCallsTxt = new Text("Calls: " + otherRushCalls, "9pt Arial");
    otherRushCallsTxt.setPosition(boxWidth + 20, boxHeight / 6 + boxHeight * 2);
    otherRushCallsTxt.setColor(Color.white);
    add(otherRushCallsTxt);
    
    otherRushYdsTxt = new Text("Total Yds: " + otherRushYds, "9pt Arial");
    otherRushYdsTxt.setPosition(1, boxHeight / 6 + txtOffset * 2 + boxHeight * 2);
    otherRushYdsTxt.setColor(Color.white);
    add(otherRushYdsTxt);
    
    otherRushAvgTxt = new Text("Avg Yds: " + otherRushAvg, "9pt Arial");
    otherRushAvgTxt.setPosition(boxWidth + 20, boxHeight / 6 + txtOffset * 2 + boxHeight * 2);
    otherRushAvgTxt.setColor(Color.white);
    add(otherRushAvgTxt);
    
    
    var otherPassTxt = new Text("Other Passes", "9pt Arial");
    otherPassTxt.setPosition(getWidth() / 2 + 1, boxHeight / 6 + boxHeight * 2);
    otherPassTxt.setColor(Color.black);
    add(otherPassTxt);
    
    otherPassCallsTxt = new Text("Calls: " + otherPassCalls, "9pt Arial");
    otherPassCallsTxt.setPosition(getWidth() / 4 * 3, boxHeight / 6 + boxHeight * 2);
    otherPassCallsTxt.setColor(Color.black);
    add(otherPassCallsTxt);
    
    otherPassYdsTxt = new Text("Total Yds: " + otherPassYds, "9pt Arial");
    otherPassYdsTxt.setPosition(getWidth() / 2 + 1, boxHeight / 6 + boxHeight * 2 + txtOffset * 2);
    otherPassYdsTxt.setColor(Color.black);
    add(otherPassYdsTxt);
    
    otherPassAvgTxt = new Text("Avg Yds: " + otherPassAvg, "9pt Arial");
    otherPassAvgTxt.setPosition(getWidth() / 4 * 3, boxHeight / 6 + boxHeight * 2 + txtOffset * 2);
    otherPassAvgTxt.setColor(Color.black);
    add(otherPassAvgTxt);
}

// This function adds the rectangles onto the screen.
function boxes(){
    tsPitchBox = new Rectangle(boxWidth, boxHeight);
    tsPitchBox.setPosition(0, 0);
    tsPitchBox.setColor(Color.black);
    add(tsPitchBox);
    
    ffPitchBox = new Rectangle(boxWidth, boxHeight);
    ffPitchBox.setPosition(0 + boxWidth, 0);
    ffPitchBox.setColor("#DAA520");
    add(ffPitchBox);
    
    ttTrapBox = new Rectangle(boxWidth, boxHeight);
    ttTrapBox.setPosition(0 + boxWidth * 2, 0);
    ttTrapBox.setColor(Color.black);
    add(ttTrapBox);
    
    tfTrapBox = new Rectangle(boxWidth, boxHeight);
    tfTrapBox.setPosition(0 + boxWidth * 3, 0);
    tfTrapBox.setColor("#DAA520");
    add(tfTrapBox);
    
    teScissorsBox = new Rectangle(boxWidth, boxHeight);
    teScissorsBox.setPosition(0 + boxWidth * 4, 0);
    teScissorsBox.setColor(Color.black);
    add(teScissorsBox);
    
    fsScissorsBox = new Rectangle(boxWidth, boxHeight);
    fsScissorsBox.setPosition(0, boxHeight);
    fsScissorsBox.setColor("#DAA520");
    add(fsScissorsBox);
    
    tsReverseBox = new Rectangle(boxWidth, boxHeight);
    tsReverseBox.setPosition(boxWidth, boxHeight);
    tsReverseBox.setColor(Color.black);
    add(tsReverseBox);
    
    ffReverseBox = new Rectangle(boxWidth, boxHeight);
    ffReverseBox.setPosition(boxWidth * 2, boxHeight);
    ffReverseBox.setColor("#DAA520");
    add(ffReverseBox);
    
    osBootBox = new Rectangle(boxWidth, boxHeight);
    osBootBox.setPosition(boxWidth * 3, boxHeight);
    osBootBox.setColor(Color.black);
    add(osBootBox);
    
    oeBootBox = new Rectangle(boxWidth, boxHeight);
    oeBootBox.setPosition(boxWidth * 4, boxHeight);
    oeBootBox.setColor("#DAA520");
    add(oeBootBox);
    
    var otherRushBox = new Rectangle(getWidth() / 2, boxWidth);
    otherRushBox.setPosition(0, boxHeight * 2);
    otherRushBox.setColor(Color.black);
    add(otherRushBox);
    
    var otherPassBox = new Rectangle(getWidth() / 2, boxWidth);
    otherPassBox.setPosition(getWidth() / 2, boxHeight * 2);
    otherPassBox.setColor("#DAA520");
    add(otherPassBox);
}
