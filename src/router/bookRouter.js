const router = require('express').Router();
const book = require('../model/book');

const bookInstance = new book();

router.get('/api/books', (req, res) => {
    bookInstance.index().then(result => {
        console.log(result);
        res.json(result);
        res.end();

    }).catch(err => console.log(err));
    
})

module.exports = router;