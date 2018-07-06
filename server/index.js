const express = require('express');
const bodyParser = require('body-parser')
const controller = require('./controller');
const port = 3005;
const app = express();
app.use(bodyParser.json())






app.listen(port, ()=>console.log(`listening at ${port}`));