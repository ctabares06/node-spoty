import { Schema } from 'mongoose';

const comment = new Schema({
    _userId : Schema.types.Objectid,
    title : String,
    comment : String,
    answers: {type : Schema.types.Mixed, default : null},
    created_at : {type : Date, default : Date.now},
    updated_at : {type : Date, default : Date.now},
    status : Boolean
});

export default {
    comment
};