const mongoose = require('mongoose');
const assert = require('assert');


const url = `mongodb://${process.env.DBHOST}:${process.env.DBPORT}/${process.env.DBNAME}`;

mongoose.connect(url, {useNewUrlParser : true, useUnifiedTopology : true});

const db = mongoose.connection;

module.exports = db;
    





