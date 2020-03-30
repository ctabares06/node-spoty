import mongoose from "mongoose";

const url = `mongodb://${process.env.DBHOST}:${process.env.DBPORT}/${process.env.DBNAME}`;

mongoose.connect(url, {useNewUrlParser : true, useUnifiedTopology : true, family : 4})
    .then(
        () => {
            console.log("you're connected my friend");
        }
    )
    .catch(err => {
        console.error(err);
    });
    





