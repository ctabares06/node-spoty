const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();
const spoty = require('../app/auth/apiConfigurations');

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

const checkCookies = (req, res, next) => {
    console.log(req.cookies);
    if (req.cookies.token !== undefined && req.cookies.refresh_token !== undefined) {
        res.redirect('/home');
        res.end();
    }
    else if (req.cookies.tok  === undefined && req.cookies.refresh_token !== undefined) {
        console.log('mmmmmmmmmmmmmmmm');
        next();
    } else {
        next();
    }

};

//middlewares
router.use(cookieParser());
router.use('/authorize', authorization);
router.use(['/','/user'], checkCookies);
//routes

router.get('/', (req, res) => {
    res.write('aqui no se hace nada');
    res.end();
})

router.get('/user/home', (req, res) => {
    res.write('Token bien validado');
    res.end();
});

router.get('/login', (req, res) => {
    res.cookie('state', spotiUrl.hash, {path : '/', expires : new Date(Date.now()+600000), httpOnly : true });
    res.status(302);
    res.redirect(spotiUrl.url);
    res.end();
});

router.get('/authorize', (req, res) => {
    if (req.query.error) {
        res.write('Ha rechazado la conexion, para continuar debe aceptarla');
        res.end();
    } else {

    const options = {code : req.query.code, redirect_uri : spotiUrl.uri }

    const spotiApp = new spoty('/token');
    let access_token;
    let refresh_token;

    getToken = spotiApp.tokenAccess(options);

    getToken.then(data => {
        console.log('access ',data.data.access_token);
        console.log('refresh ',data.data.refresh_token);

        access_token = data.data.access_token;
        refresh_token = data.data.refresh_token;

        res.cookie('token', access_token, {path : '/', maxAge : 3600000, httpOnly : false });
        res.cookie('refresh_token', refresh_token, {path : '/', maxAge : (1000*60*60*24*30) , httpOnly : false });
        res.write(`<div>${access_token}</div>`);
        res.end();

    }).catch(err => console.log(err.response));

    }

})

module.exports = router;