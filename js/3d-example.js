let modelObj; // setup initializes this to a p5.js 3D model
let sensorData;

function preload() {
    modelObj = loadModel('models/bunny.obj', true);
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    imuConnection.onSensorData((device) => {
        sensorData = device.data;
    });
}

function draw() {
    background(200, 200, 212);
    noStroke();
    lights();
    orbitControl();

    if (!sensorData) {
        return;
    }

    applyMatrix.apply(null, sensorData.orientationMatrix);

    // Fade the model out, if the sensor data is stale
    let currentTime = new Date();
    let age = max(0, currentTime - sensorData.receivedAt - 250);
    let alpha = max(5, 255 - age / 10);
    fill(255, 255, 255, alpha);

    // Render the model
    noStroke();
    model(modelObj);
}
