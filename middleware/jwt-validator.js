const { response, request } = require('express')
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const jwtValidator = async (req = request, res = response, next) => {
    const token = req.header('token');
    privateKey = '4a57bd92-1739-4275-bb19-cc2b33591d57';
    
    if (!token) {
        return res.status(401).json({ msg: 'Token Not Found' })
    }

    try {
        const { uid } = jwt.verify(token, privateKey);
        const user = await User.findByPk(uid);

        if (!user) {
            return res.status(401).json({ msg: 'invalid Token' })
        }

        next();
    } catch (ex) {
        return res.status(401).json({ msg: 'invalid Token' })
    }
}

module.exports = { jwtValidator }