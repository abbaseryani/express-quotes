const express = require('express')
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app = express();

MongoClient.connect('', (err, client) => {

});
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/templates/index.html");
});

app.post('/quotes', (req, res) => {
    console.log(req.body);
});
app.listen(3000, () => {});