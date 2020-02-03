const https = require('https');
const querystrings = require('querystring');
const secrets = require('../secrets');

class spoty {
    constructor(path) {
        this.api = 'https://accounts.spotify.com'; 
        this.path = "/api"+path;
    }

    makeGet(meh) {
        
    }

    tokenAccess(params) {

        let data = '';

        const {code, redirect_uri} = params;
        console.log("PATH :", this.path);
        console.log("uri :", redirect_uri);

        const formData = querystrings.stringify({
            'grant_type' : 'authorization_code',
            'code' : code,
            'redirect_uri' : redirect_uri,
            'client_id' : secrets.clientId,
            'client_secret' :  secrets.clientSecret
        })

        const url = new URL(this.api+this.path);

        const options = { 
            method : 'POST', 
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded',
            }
        }

        const request = https.request(url,options, res => {
            let chunks;

            console.log('estado ', res.statusCode);
            res.setEncoding('utf8');
            res.on('data', chunk => chunks += chunk);

            res.on('error', (err) => console.log('Error de respuesta',err));
            
            res.on('end', () => data = JSON.parse(chunks.toString()));
        });

        request.on('error', err => console.log('error de peticion',err));
        request.write(formData);
        request.end();

        return typeof data;

    }
}

module.exports = spoty;