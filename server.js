const express = require('express'),
  app = express(),
  path = require('path'),
  port = process.env.PORT || 3000;

//Setting to obtain remote IP address when server is behind a proxy  
app.set('trust proxy', true);

const displayInfo = (ip, language, os) => {
  return {
    ipaddress: ip,
    language: language,
    software: os 
  }
}

app.get('/', (req, res) => {
  let language = req.headers['accept-language'],
    os = req.headers['user-agent']
  //Tidy-up header information
  language = language.substring(0, language.indexOf(','));
  os = os.substring(os.indexOf('(')+1, os.indexOf(')'));
   
  res.send(displayInfo(req.ip, language, os));

})

app.listen(port, () => {
  console.log("Server is listening on port:", port);

})