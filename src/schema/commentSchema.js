const schema = require('mongoose').Schema;

const comment = new schema({
    _userId : Schema.types.Objectid,
    title : String,
    comment : String,
    _commentId : {type : Schema.types.Mixed, default : null},
    created_at : Date,
    updated_at : {type : Date, default : Date.now},
    status : Boolean
})