function start() {
    // Define the colors for the arcs
    var colors = [Color.red, Color.orange, Color.yellow, Color.green, Color.blue, 
                  new Color(108, 45, 255), Color.purple, Color.white];

    // Set the starting position and size of the arcs
    var centerX = 200;
    var centerY = 250;
    var initialRadius = 200;
    var arcWidth = 10;
    var arcGap = 10;

    // Loop through the colors to create and position the arcs
    for (var i = 0; i < colors.length; i++) {
        var arcRadius = initialRadius - (i * (arcWidth + arcGap));
        var arcAngle = 360 - (i * 10); // Dynamic arc angle for more variation

        var arc = new Arc(arcRadius, arcWidth, arcAngle, 0);
        arc.setPosition(centerX, centerY);
        arc.setColor(colors[i]);
        add(arc);
    }

    // Create and position the text
    var txt = new Text("Google", "20pt Algerian");
    txt.setPosition(centerX - (txt.getWidth() / 2), centerY + (initialRadius / 2) - 10);
    txt.setColor(Color.black);
    add(txt);
}
