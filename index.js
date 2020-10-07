const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const jenosize = require('./routes/jenosize');


const app = express();

app.use('/jenosize', jenosize);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, () => console.log('server run listening on port 3000'));
