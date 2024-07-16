const getConnection = require('../database/db-config');

const { DataTypes } = require('sequelize');
const sequelize = getConnection();

const Book = sequelize.define('book',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        genero: {
            type: DataTypes.STRING
        },
        year: {
            type: DataTypes.STRING
        },
        autor_id: {
            type: DataTypes.INTEGER
        }
        
    },{tableName:'libro'});


module.exports = Book;