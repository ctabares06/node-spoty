import { schema } from "../schema/bookSchema";

class book {

    constructor(){
        this.collection = 'books';
        this.db = new mongodb();
    }

}

export default book;


