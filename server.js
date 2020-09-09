const express = require('express')
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app = express();
const connectionString = 'mongodb+srv://admin:admin@quotescluster.inqzv.mongodb.net/<dbname>?retryWrites=true&w=majority'

MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        const db = client.db('quotes-db')
        const quotesCollection = db.collection('quotes')
        app.use(bodyParser.urlencoded({ extended: true }));

        app.get('/', (req, res) => {
            res.sendFile(__dirname + "/templates/index.html");
        });
        app.post('/quotes', (req, res) => {
            quotesCollection.insertOne(req.body)
                .then(result => {
                    res.redirect('/');
                })
                .catch(error => console.error(error))
        });
        app.listen(3000, () => {});
    })
    .catch(error => console.error(error))