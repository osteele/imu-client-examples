# IMU Web Client Examples

This directory contains example programs, that use the
[imu-tools](https://www.npmjs.com/package/imu-tools) npm package to connect to
an ESP32 that is running either the MicroPython code in
[imu-tools](https://github.com/osteele/imu-tools), or the Arduino (C++) code in
[Arduino-BLE-IMU](https://github.com/osteele/Arduino-BLE-IMU).

## Running these examples

To run these examples, run a server such as:

* (Atom) [atom-live-server package](https://atom.io/packages/atom-live-server)
* (Visual Studio Code) [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
* (Command line) `python -m SimpleHTTPServer`

Click the "Connect BLUE" button to make a Bluetooth connection. This needs to be repeated each time the page is loaded.

To connect to an MQTT server ("broker"), click "Open Controls" and enter the
hostname of the MQTT broker, and enter the username and password. If several
devices are connected to the same server, the programs will display data from
all of them. Enter a device id to restrict them to only a single device.

## A Guide to the examples

<http://127.0.0.1:8000> displays a directory of web pages in the `web` directory
directory. It is written in [React](https://reactjs.org), with
[Babel](https://babeljs.io) to process JSX.

<http://localhost:8000/3d-model.html> is a p5.js sketch that displays the
[Stanford bunny](https://en.wikipedia.org/wiki/Stanford_bunny). The 3d
orientation of the bunny is yolked to the IMU orientation. The model is red
before the sensor is minimally calibrated, and it fades out when sensor data is
not being received. (With the Gravity BNO055, the model mostly stays red.)

<http://127.0.0.1:8000/barchart.html> displays a live bar chart of sensor data.
This is implemented as a [p5.js](https://p5js.org) sketch.

<http://127.0.0.1:8000/chart.html> uses [HighCharts](https://www.highcharts.com)
to display another live graph, that automatically scales the *y* axis as data
arrives.

## Additional reading

See the [npm imu-tools README](https://www.npmjs.com/package/imu-tools) for additional
documentation for the IMU connection code.

Note that the p5.js sketches in this directory are run in a JavaScript module.
This requires that any function in the sketch that p5.js *calls*, such as
`preload`, `setup`, `draw`, or `mousePressed`, must be defined using `export
function` instead of simply `export`.

## License

MIT
