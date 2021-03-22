const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model {}
//establish basic connection here -- before ad

Trips.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        trip_budget: {
            type: DataTypes.INTEGER,
        },
        traveler_amount: {
            type: DataTypes.INTEGER,
            isEmail: true,
        },
      
        traveler_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'traveler',
                key: 'id',
              },
        },
        location_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'location',
                    key: 'id',
                  },
        }
    },
    {
        sequelize,
        timestamps: false,
        //freeze will infer the table name to be equal to the model name without modifications
        freezeTableName: true,
        underscored: true,
        modelName: 'trips',
    }
)
module.exports = Trips;