var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 8080);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    app.get("*", (req, res) => {
        let path = req.params['0'].substring(1)
        let url = path.join(__dirname, '../client/build', 'index.html');
        if (!url.startsWith('/app/')) // since we're on local windows
          url = url.substring(1);
        res.sendFile(url);
    });
  }
