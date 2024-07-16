const { request } = require('express');
const User = require('../models/user')
const bcryptjs = require('bcryptjs');

const retrieve = async (request, response) => {
    // Find all users
    const users = await User.findAll();
    response.json(users);
}


const retrieveById = async (req = request, response) => {
    const { id } = req.params;
    const _id = parseInt(id);

    const user = await User.findByPk(_id);

    response.json(user);
}


const create = async (req = request, response) => {

    try {

        const { nombre, apellido, email, pwd } = req.body;
        const salt = bcryptjs.genSaltSync();
        hashedPwd = bcryptjs.hashSync(pwd, salt);

        const user = await User.create({ nombre, apellido, email, pwd: hashedPwd });
        const { nombre: name, apellido: lastName, email: correo, ...rest } = user;

        response.json({ name, lastName, correo });
    } catch (error) {
        console.error(error);
        response.status(400).json({ msg: 'Faltan Campos requeridos' });
    }
}

const modify = (request, response) => {
    response.json('hola desde user');
}

const remove = (request, response) => {
    response.json('hola desde user');
}

module.exports = {
    retrieve,
    retrieveById,
    create,
    modify,
    remove
}
