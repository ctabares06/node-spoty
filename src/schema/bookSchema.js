const schema = require('mongoose').Schema;


const booksSchema = new schema({
    name : String,
    article : String,
    thumbnail : Buffer,
    _userid : Schema.Types.ObjectId,
    created_at : Date,
    updated_at : {tpe : Date, default : Date.now},
    status : Boolean,
    comments : {}
})