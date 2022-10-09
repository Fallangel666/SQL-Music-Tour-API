'use strict';
const { Model, DataTypes } = require('sequelize');
//const sequelize = new Sequelize(process.env.PG_URI)

module.exports = (sequelize, DataTypes) => {

    class Band extends Model {

        static associate({ MeetGreet, SetTime }) {
            // meet and greets 
            Band.hasMany(MeetGreet, {
                foreignKey: "band_id",
                as: "meet_greets"
            })
            Band.hasMany(SetTime,{
                foreignKey:"settime_id",
                as:"set_time"
            })
        }
    }
    Band.init({
        band_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        available_start_time: {
            type: DataTypes.DATE,
            allowNull: false
        },
        end_time: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Band',
        tableName: 'Bands',
        timestamps: false
    });
    return Band
}
