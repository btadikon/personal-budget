const express = require('express');
const app = express();
const port = 3000;
const data = require("./data.json");

app.use('/', express.static('public'));

const budget = [
    {
      title: 'Eat out',
      budget: 30
    },
    {
      title: 'Rent',
      budget: 300  
    },
    {
      title: 'Groceries',
      budget: 90  
    },
];
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.send(data);
});
app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});