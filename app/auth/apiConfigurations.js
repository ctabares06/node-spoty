const http = require('http');
const secrets = require('../secrets');

class spoty {
    constructor(path) {
        this.api = 'https://accounts.spotify.com'; 
        this.path = "/api"+path;
    }

    makeGet(meh) {
        
    }

    tokenAccess(params) {
        const {code, redirect_uri} = params;

        const formData = new FormData();
        formData.append('grant_type', 'authorization_code');
        formData.append('code', code);
        formData.append('redirect_uri', redirect_uri);
        formData.append('client_id', secrets.clientId);
        formData.append('client_secret', secrets.clientSecret);

        const options = {
            hostname : this.api, 
            path : this.path, 
            method : 'POST', 
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Content-Length' : formData
            }
        }

        http.request()
    }
}