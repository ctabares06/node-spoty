const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const db = require('./src/config/mongodb');

db.once('open', () => console.log("you're connected my friend"));


// mongo.on('error', console.error.bind(console, "connection error: "));

// mongo.once('open')


// const middleware = require('./src/router/middlewares');
// const books = require('./src/router/bookRouter');


// app.use(middleware);
// app.use(books);

// app.all('*',(req, res) => {
//     res.status(404);
//     res.json({error : 'end-point not found'});
//     res.end();
// })

console.log(process.env.PORT, process.env.HOST);

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Server running on ${process.env.HOST} at port ${process.env.PORT}`);

});

