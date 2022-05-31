const express = require('express');

const app = express();
const port = 3000;
app.use(express.static('public'));

app.get('/home', (request, response) => {
    res.sendFile(__dirname + '/views/home.html');
  });

  app.get('/About', (request, response) => {
    res.sendFile(__dirname + '/views/About.html');
  });

  app.get('/Works', (request, response) => {
    res.sendFile(__dirname + '/views/Works.html');
  });
  
 
  app.listen(PORT, () => console.log('listening on port 3000!'));