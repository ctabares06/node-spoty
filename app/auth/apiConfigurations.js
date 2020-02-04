const axios = require('axios').default;
const querystrings = require('querystring');
const secrets = require('../secrets');

class spoty {
    constructor(path) {
        this.api = 'https://accounts.spotify.com'; 
        this.path = "/api"+path;
        this.http = axios.create({
            baseURL : this.api,
            timeout : 2000
        });;
    }

    makeGet(meh) {
        
    }

    async tokenAccess(params) {

        const {code, redirect_uri} = params;

        const formData = querystrings.stringify({
            'grant_type' : 'authorization_code',
            'code' : code,
            'redirect_uri' : redirect_uri,
            'client_id' : secrets.clientId,
            'client_secret' :  secrets.clientSecret
        })

        return await this.http.post(this.path, formData, {
            headers : {'Content_type' : 'x-www-form-urlencoded'}
        });

    }
}

module.exports = spoty;