const jwt = require('jsonwebtoken');

const generateJWT = (payload = {}) =>
    new Promise((resolve, reject) => {

        privateKey = '4a57bd92-1739-4275-bb19-cc2b33591d57';

        jwt.sign(
            payload,
            privateKey,
            {
                expiresIn: '12h'
            },
            (err, token) => {
                if (err) {
                    console.err(err);
                    reject(`Can't create a JWT`)
                }
                resolve(token);
            }
        );
    });

module.exports = { generateJWT }