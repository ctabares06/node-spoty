import { Schema } from 'mongoose';
import comment from './commentSchema';

const booksSchema = new Schema({
    name : String,
    article : String,
    thumbnail : Buffer,
    _userid : Schema.Types.ObjectId,
    created_at : {tpe : Date, default : Date.now},
    updated_at : {tpe : Date, default : Date.now},
    status : Boolean,
    comments : comment
});

export default {
    booksSchema
}