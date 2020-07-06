var express = require('express');
var app = express();
let protectd = ['transformed.js', 'main.css', 'favicon.ico']
app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 8080);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    app.get("*", (req, res) => {

        let path = req.params['0'].substring(1)
      
        if (protectd.includes(path)) {
          // Return the actual file
          res.sendFile(`${__dirname}/build/${path}`);
        } else {
          // Otherwise, redirect to /build/index.html
          res.sendFile(`${__dirname}/build/index.html`);
        }
      });
  }
