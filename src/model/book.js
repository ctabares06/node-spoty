const mongodb = require('../config/mongodb');

class book {

    constructor(){
        this.collection = 'books';
        this.db = new mongodb();
    }

    async store({name,author,published_at}) {

        const data = {
            name : name,
            author : author,
            published_at : published_at,
            reviews : {},
            status : true
        }

       return await this.db.startConnection().then(res => {
            const object = res.collection(this.collection);
            
            return object.insertOne(data);

        }).then(res => {
                let result = res.result.ok;
                this.db.closeConnection();

                return result;

        }).catch(err => console.log(err));

    }

    async index() {
        return await this.db.startConnection().then(res => {
            const object = res.collection(this.collection);

            return object.find().toArray();

        }).then(res => {
            let result = res;
            this.db.closeConnection();
            console.log(result);
            return result;

        }).catch(err => console.log(err));
    }
}

module.exports = book;


