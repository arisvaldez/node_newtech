const { request } = require('express');
const User = require('../models/user')

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
    const { nombre, apellido, email } = req.body;

    const newUser = await User.create({ nombre, apellido, email });

    response.json(newUser);
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
