function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    for (i = 1; i <= 7; i++) {
        line(50 * i + 20, 50, mouseX, mouseY);
        line(50, 50 * i + 20, mouseX, mouseY);
    }
}