import { onSensorData } from 'https://cdn.jsdelivr.net/npm/imu-tools@0.1/index.js';

let sensorData;

export function setup() {
    createCanvas(windowWidth, windowHeight);
}

export function draw() {
    background(200, 200, 212);
    if (sensorData) {
        console.log(sensorData);
        text(JSON.stringify(sensorData), 10, 10);
    }
}

onSensorData(({ data }) => {
    sensorData = { ...data };
});
