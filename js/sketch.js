let data;

function setup() {
    createCanvas(windowWidth, windowHeight);
    imuConnection.onSensorData((device) => {
        data = device.data;
    });
}

function draw() {
    background('white');
    noStroke();

    if (!data) {
        return;
    }

    angleMode(DEGREES);
    textAlign(CENTER);

    fill('red');
    dart(100, 100, data.euler[0]);
    text('pitch', 150, 200);

    fill('blue');
    dart(250, 100, data.euler[1]);
    text('yaw', 300, 200);

    fill('green');
    dart(400, 100, data.euler[2]);
    text('roll', 450, 200);
}

function dart(x, y, angle) {
    push();
    translate(x, y);
    rotate(angle);
    triangle(-30, 50, 30, 50, 0, -75);
    pop();
}
