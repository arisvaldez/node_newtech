const { Sequelize } = require('sequelize');

let dbConnection = null;

function getConnection() {
    if (!dbConnection) {
        dbConnection = new Sequelize('biblioteca', 'root', 'root', {
            host: 'localhost',
            dialect: 'mariadb',
            port: 3406
        });
    }
    return dbConnection;
}


async function testConnection() {

    try {
        await dbConnection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


module.exports = getConnection;