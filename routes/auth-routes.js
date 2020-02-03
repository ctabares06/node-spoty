const express = require('express');
const router = express.Router();
const http = require('http');

// url to spotify
const spotiUrl = require('../app/auth/generateUri');

// middlewares consts
const authorization = (req, res, next) => {
    const originalState = req.cookies.state;
    res.clearCookie('state', {path : '/', httpOnly : false});

    if (!originalState) {
        res.status(500).send('cookie not found!!!');
        res.end();
    }

    const state = decodeURIComponent(req.query.state);

    if (state !== originalState) {
        res.status(500).send('u are not the same ->_<-');
        res.end();
    }

    next();
};

//middlewares
router.use('/authorize', authorization);

//routes
router.get('/', (req, res) => {
    res.write('aqui no se hace nada');
    res.end();
})

router.get('/login', (req, res) => {
    res.cookie('state', spotiUrl.hash, {path : '/', expires : new Date(Date.now()+600000), httpOnly : false });
    res.status(302);
    res.redirect(spotiUrl.url);
    res.end();
});

router.get('/authorize', (req, res) => {
    if (request.query.error) {
        res.write('Ha rechazado la conexion, para continuar debe aceptarla');
        res.end();
    }
    res.write(req.query.code);
    res.end();
})

module.exports = router;