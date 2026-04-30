const crypto = require('crypto');
function generateHash(url){
     return crypto.createHash("sha256").update(url).digest("hex");
}

module.exports = {generateHash};