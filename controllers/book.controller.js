

const retrieve = (request, response) => {
    response.json([
        'la manosa',
        '2 pesos de agua',
        'maria la llorona'
    ]);
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
