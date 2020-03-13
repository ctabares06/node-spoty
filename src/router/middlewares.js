const middlewares = require('express').Router();

middlewares.use((req, res, next) => {
    // res.set('Accept', 'application/json');
    res.set('Content-Type', 'application/json');
    next();
});

module.exports = middlewares;