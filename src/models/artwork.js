const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const User = require('./user');

const Artwork = sequelize.define('Artwork', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
    },
    {
        timestamps: false,
        tableName: 'artworks'
    }
);

Artwork.belongsTo(User, { foreignkey: 'id' });
module.exports = Artwork;
