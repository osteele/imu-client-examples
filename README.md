# IMU Web Client Examples

This directory contains example programs, that use the
[imu-tools](https://www.npmjs.com/package/imu-tools) npm package to connect to
an ESP32 that is running either the MicroPython code in
[imu-tools](https://github.com/osteele/imu-tools), or the Arduino (C++) code in
[Arduino-BLE-IMU](https://github.com/osteele/Arduino-BLE-IMU).

## Running these examples

To run these examples, run a server such as:

* (Atom) [atom-live-server package](https://atom.io/packages/atom-live-server)
* (Visual Studio Code) [Live Server
  extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
  CLick the Live Server icon in the status bar at the bottom of the window.
* (Command line) `python -m SimpleHTTPServer 5500`. (The inclusion of `5500` is
  not necessary, but makes this compatible with the URLs in the Guide section
  below.)

Click the "Connect BLUE" button to make a Bluetooth connection. This needs to be
repeated each time the page is loaded.

To connect to an MQTT server ("broker"), click "Open Controls" and enter the
hostname of the MQTT broker, and enter the username and password. If several
devices are connected to the same server, the programs will display data from
all of them. Enter a device id to restrict them to only a single device.

## A Guide to the examples

(If you run a server at port 5500, as above, you can click on the example names
below in order to open them in a browser.)

[`index.html`](http://127.0.0.1:5500) displays a list of examples in this directory.

[`3d-model.html`](http://localhost:5500/3d-model.html) is a p5.js sketch that displays the
[Stanford bunny](https://en.wikipedia.org/wiki/Stanford_bunny). The 3d
orientation of the bunny is yolked to the IMU orientation. The model is red
before the sensor is minimally calibrated, and it fades out when sensor data is
not being received. (With the Gravity BNO055, the model mostly stays red.)

This sketch has a lot of features, that make it useful for interaction but
difficult to read the code. See `3d-example`, below.

The "Calibrate" button resets tells the software that the IMU is currently in
home position (rightside up). It is not related to the IMU's built-in
calibration feature, that synchronizes the IMU's sensors to each other.

[`3d-example.html`](http://localhost:5500/3d-example.html) is a simpler  sketch
that also displays the bunny. It assumes that only a single IMU is connected.

[`sketch.html`](http://localhost:5500/sketch.html) is simple p5.js sketch that
displays the Euler angles. Use it as a starter templtate for writing p5.js
sketches that use the IMU.

[`dashboard.html`](http://127.0.0.1:5500/dashboard.html) displays a directory of web pages in the
`web` directory directory. It is written in [React](https://reactjs.org), with
[Babel](https://babeljs.io) to process JSX.

[`barchart.html`](http://127.0.0.1:5500/barchart.html) displays a live bar chart of sensor data.
This is implemented as a [p5.js](https://p5js.org) sketch.

[`chart.html`](http://127.0.0.1:5500/chart.html) uses [HighCharts](https://www.highcharts.com)
to display another live graph, that automatically scales the *y* axis as data
arrives.

## Additional reading

See the [npm imu-tools README](https://www.npmjs.com/package/imu-tools) for
additional documentation for the IMU connection code.

## License

MIT
