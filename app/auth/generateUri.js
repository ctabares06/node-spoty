const hash = require('./hashing');
const client = require('../secrets'); 

const scopes = `scopes=${encodeURIComponent('user-read-private, user-read-email')}`;
const redirectUri = `redirect_uri=${encodeURIComponent('http://localhost:3001/authorize')}`;
const clientId = `client_id=${client.clientId}`
const state = `state=${encodeURIComponent(hash)}`;

const url = `https://accounts.spotify.com/authorize?response_type=code&${clientId}&${scopes}&${redirectUri}&${state}&show_dialog=true`;


module.exports = data = {url, hash};

