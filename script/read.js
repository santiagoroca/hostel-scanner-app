var HID = require('node-hid');
var usb = require('usb');

console.log(HID.devices());

var d = new HID.HID(0xc2e, 0x200);

d.on("data", function (data) {
  console.log(data);
});

d.on("error", function (error) {
  console.log(error);
  d.close();
});
