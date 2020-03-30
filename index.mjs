import express from "express";

const app = express();

import {} from './src/config/mongodb.mjs';

// mongo.on('error', console.error.bind(console, "connection error: "));


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

