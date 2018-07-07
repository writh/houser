const express = require('express');
const bodyParser = require('body-parser')
const controller = require('./controller');
const port = 3005;
const app = express();
const massive = require('massive');
require('dotenv').config({ path: __dirname + '/../.env', });
app.use(bodyParser.json())

let db;

massive(process.env.DB_CONNECTION_STRING)
    .then(dbInstance => {
        console.log('DB Connected');
        db = dbInstance;
    })
    .catch(err => {
        console.warn(err);
    });

function getDb() {
    if (!db) {
        throw { message: 'No DB connected' };
    }
    
    return db;
}

module.exports = {
    getDb,
};



app.listen(port, ()=>console.log(`listening at ${port}`));