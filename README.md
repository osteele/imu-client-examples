# IMU Web Client Examples

This directory contains these example programs that connect to an ESP32 running
the MicroPython code in [imu-tools](https://github.com/osteele/imu-tools), or
the Arduino code in
[Arduino-BLE-IMU](https://github.com/osteele/Arduino-BLE-IMU).

To run these examples, run a server such as the [Live Server Visual Studio Code
extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
in this directory.

<http://127.0.0.1:8000> displays a directory of web pages in the `web` directory
directory. It is written in [React](https://reactjs.org), with
[Babel](https://babeljs.io) to process JSX.

<http://127.0.0.1:8000/barchart.html> displays a live bar chart of sensor data.
This is implemented as a [p5.js](https://p5js.org) sketch.

<http://127.0.0.1:8000/chart.html> uses [HighCharts](https://www.highcharts.com)
to display another live graph, that automatically scales the *y* axis as data
arrives.

<http://localhost:8000/3d-model.html> is a p5.js sketch that displays the
[Stanford bunny](https://en.wikipedia.org/wiki/Stanford_bunny). The 3d
orientation of the bunny is yolked to the IMU orientation. The model is red
before the sensor is minimally calibrated, and it fades out when sensor data is
not being received. (With the Gravity BNO055, the model mostly stays red.)

## Additional reading

See the [npm imu-tools README](https://www.npmjs.com/package/imu-tools) for additional
documentation for the IMU connection code.

Note that the p5.js sketches in this directory are run in a JavaScript module.
This requires that any function in the sketch that p5.js *calls*, such as
`preload`, `setup`, `draw`, or `mousePressed`, must be defined using `export
function` instead of simply `export`.

## License

MIT
