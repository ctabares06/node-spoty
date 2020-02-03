const crypto = require('crypto');
const hashString = 'abcdefghijklmnopqrstuvwxyz1234567890';

const hash = crypto.createHash('sha256');


hash.update(hashString);
hash.end();


module.exports = hash.digest('base64');





