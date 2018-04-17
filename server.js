const express = require('express'),
  app = express(),
  path = require('path'),
  port = process.env.PORT || 3000;

// app.use('/public', express.static(process.cwd() + '/public'));

// app.route('/', (req, res) => {
//   res.sendFile(path.join(process.cwd() + '/views/index.html'));
// })

app.get('/', (req, res) => {
  var ip = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.socket.remoteAddress ? req.connection.socket.remoteAddress : null);

  res.send(ip);
})

app.listen(port, () => {
  console.log("Server is listening on port:", port);

})