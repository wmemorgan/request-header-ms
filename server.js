const express = require('express'),
  app = express(),
  path = require('path'),
  port = process.env.PORT || 3000;

//Setting to obtain remote IP address when server is behind a proxy  
app.set('trust proxy', true);

app.get('/', (req, res) => {
  res.send(req.ip);
})

app.listen(port, () => {
  console.log("Server is listening on port:", port);

})