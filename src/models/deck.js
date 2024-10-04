const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Deck = sequelize.define('Decks', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    IDUsuario: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
    NomedoDeck: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Descricao: {
        type: DataTypes.STRING,
        allowNull: false

    }
})

module.exports = Deck;