var SCALE = 1;
var MAXITERATIONS = 30;

var cells = [];

function start() {
    var width = getWidth();
    var height = getHeight();
    var cols = Math.ceil(width / SCALE);
    var rows = Math.ceil(height / SCALE);
    var xBuffer = Math.floor((SCALE - width % SCALE) / 2);
    var yBuffer = Math.floor((SCALE - height % SCALE) / 2);
    
    console.log("cols: " + cols + "  rows: " + rows + "  xBuffer: " + xBuffer + "  yBuffer: " + yBuffer);
    
    for (var i = 0; i < cols * rows; i++) {
        var rect = new Rectangle(SCALE, SCALE);
        var x = (i % cols) * SCALE - xBuffer;
        var y = Math.floor(i / cols) * SCALE - yBuffer;
        rect.setPosition(x, y);
        
        var cA = -2 + (i % cols) * 4 / (cols - 1);
        var cB = -2 + Math.floor(i / cols) * 4 / (cols - 1);
        var a = cA;
        var b = cB;
        var color;

        for (var n = 0; n < MAXITERATIONS; n++) {
            if (a * a + b * b > 4) {
                color = n % 6;
                break;
            } else {
                var aNew = a * a - b * b + cA;
                b = 2 * a * b + cB;
                a = aNew;
            }
        }
        
        switch (color) {
            case 0: rect.setColor(Color.RED); break;
            case 1: rect.setColor(Color.ORANGE); break;
            case 2: rect.setColor(Color.YELLOW); break;
            case 3: rect.setColor(Color.GREEN); break;
            case 4: rect.setColor(Color.BLUE); break;
            case 5: rect.setColor(Color.PURPLE); break;
            default: rect.setColor(Color.BLACK); break;
        }
        
        cells.push(rect);
        add(rect);
    }
}

function down(n) {
    return Math.floor(n);
}

function up(n) {
    return Math.ceil(n);
}
