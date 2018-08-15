const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

let data = [
    {id: 1, firstName: 'Paul', lastName: 'Tan'},
    {id: 2, firstName: 'Kris', lastName: 'Tan'},
    {id: 3, firstName: 'Nick', lastName: 'Xin'},
]

app.get('/home', (req, res) => {
    res.json(data);
});

app.post('/add', (req, res) => {
    let id = data.length + 1;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    data.push({id: id, firstName: firstName, lastName: lastName});
    res.end();
})

const port = 5000;

app.listen(port, () => console.log('Server started on port '+ port));