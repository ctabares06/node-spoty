const mongo = require('mongoose');
const assert = require('assert');


const url = `mongodb://${process.env.DBHOST}:${process.env.DBPORT}/${process.env.DBNAME}`;

mongo.createConnection(url, {useNewUrlParser : true, useUnifiedTopology : true});

const db = mongo.connection();

db.on()

module.exports = db

class mongodb {

    constructor() {
        this.url = "mongodb://localhost:27017/";
        this.database = 'books-reviews';
        mongo.connect(this.url+this.database, {useNewUrlParser : true, useUnifiedTopology : true});
    }

    async startConnection() {
        return await mongo.connection
    }

    closeConnection() {
        this.client.close();
    }

}

module.exports = mongodb; 
    





