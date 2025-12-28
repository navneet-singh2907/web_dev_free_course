const express = require('express');
const app = express();
const port = 3000;



app.get('/', (req, res) => {
  res.send('Hello World!');
  }) 

  app.get('/search', (req, res) => {
  res.send('you searched for : ' + req.query.q);
  }) 


  app.listen(port, () => {   
      console.log(`Server running on port ${port}`);  
  });   
 