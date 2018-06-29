var Fontloader = require("../index.js");
Fontloader.registFont(
  "Noto Regular",
  "url(https://fonts.gstatic.com/s/notosansjp/v14/-F62fjtqLzI2JPCgQBnw7HFYyQgP6lY.woff2) format('woff2')",
  {
    "font-style": "normal",
    "font-weight": "normal"
  }
);

Fontloader.registFont(
"Noto Bold",
      "url(https://fonts.gstatic.com/s/notosansjp/v14/-F6pfjtqLzI2JPCgQBnw7HFQei0a3Xdgv-s.woff2) format('woff2')",
      {
        "font-style": "normal",
        "font-weight": "bold"
      }
);

Fontloader.registFont(
      "Product Sans Bold",
      "url(fonts/Product%20Sans%20Bold.ttf)"
);

console.log(Fontloader.registFont(
      "Product Sans Regular",
      "url(fonts/Product%20Sans%20Regular.ttf)"
));