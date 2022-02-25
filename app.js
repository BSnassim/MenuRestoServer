const express = require('express');
const mongoose = require('mongoose');
var cors = require ('cors')
const bodyParser = require('body-parser');

const plats = require('./routes/plat.route'); // Imports routes for the menu items
const app = express();

app.use(cors());

let dev_db_url = 'mongodb+srv://nassim:nassim@dbnassim.c0ohu.mongodb.net/dbnassim?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/plats', plats);

let port = 1300;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

