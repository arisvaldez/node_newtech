const { request } = require('express');
const User = require('../models/user')

const retrieve = async (request, response) => {
    const users = await User.findAll();
    response.json(users);
}

const retrieveById = (request, response) => {
    response.json('hola desde user');
}


const create = (request, response) => {
    response.json('hola desde user');
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
