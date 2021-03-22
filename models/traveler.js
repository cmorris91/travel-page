//importing data types allows for us to the the built in data types in sequelize
const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Traveller extends Model {}
//establish basic connection here -- before ad
Traveller.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,

        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            isEmail: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        //freeze will infer the table name to be equal to the model name without modifications
        freezeTableName: true,
        underscored: true,
        modelName: 'traveller',
    }
)

module.exports = Traveller;