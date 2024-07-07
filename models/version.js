const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Artwork = require('./artwork');

const Version = sequelize.define('Version', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    filepath: {
        type: DataTypes.STRING,
        allowNull: false
    },
    version_number: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    },
    comment: {
        type: DataTypes.TEXT,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    } 
}, {
    timestamps: false,
    tableName: 'versions'
});

Version.belongsTo(Artwork, { foreignkey: 'id' });
module.exports = Version;