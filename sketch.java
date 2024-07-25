function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    for (i = 1; i <= 7; i++) {
        line(50 * i + 20, 50, 350, 350);
        line(50, 50 * i + 20, 350, 350);
    }
}