const { request, response } = require('express');
const bcryptjs = require('bcryptjs');

const { generateJWT } = require('../jwt/generate-jwt');
const User = require('../models/user');

const login = async (req = request, res = response) => {
    const { email, pwd } = req.body;
    try {
        const user = await User.findOne({ where: { email } });

        console.log(user);

        if (!user) {
            return res
                .status(400)
                .json({ statusCode: 400, msg: 'User or Password invalid - User Not Found' });
        }


        const validPassword = bcryptjs.compareSync(pwd, user.pwd);

        if (!validPassword) {
            return res
                .status(400)
                .json({ statusCode: 400, msg: 'User or Password invalid - invalid Password' });
        }

        const token = await generateJWT({
            uid: user.id,
            username: user.nombre,
            roles: ['sysAdmin', 'supervisor']
        });

        res.json({ token });
    } catch (ex) {
        console.error(ex);

        res
            .status(500)
            .json({ statusCode: 500, msg: 'An error was happen, contact with administrator' });
    }
};

module.exports = {
    login
}