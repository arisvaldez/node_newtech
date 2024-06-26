const getConnection = require('../database/db-config');

const { DataTypes } = require('sequelize');
const sequelize = getConnection();

const User = sequelize.define('usuario',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING
        },
        apellido: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        }
    }, {
    tableName: 'usuario',
});


module.exports = User;