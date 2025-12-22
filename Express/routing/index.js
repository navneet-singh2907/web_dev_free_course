const express = require('express');
const app = express();
const port = 3000;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello World! - this is get request');
})  
app.post('/', (req, res) => {
    console.log(req.body);
  res.send('Hello World! - this is post request');
})  
app.put('/', (req, res) => {
  res.send('Hello World! - this is put request');
})  
app.delete('/', (req, res) => {
  res.send('Hello World! - this is delete request');    
})  
app.listen(port, () => {    
    console.log(`Server running on port ${port}`);  
});