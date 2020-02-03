const hash = require('./hashing');
const client = require('../secrets'); 

const scopes = `scopes=${encodeURIComponent('user-read-private, user-read-email')}`;
const uri = 'http://localhost:3001/authorize';
const redirectUri = `redirect_uri=${encodeURIComponent(uri)}`;
const clientId = `client_id=${client.clientId}`
const state = `state=${encodeURIComponent(hash)}`;

const url = `https://accounts.spotify.com/authorize?response_type=code&${clientId}&${scopes}&${redirectUri}&${state}&show_dialog=true`;


module.exports = data = {url, hash, uri};

