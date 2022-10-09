'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Event extends Model {
        static associate({ Stage, StageEvent,SetTime, MeetGreet }) {
            // stages
            Event.belongsToMany(Stage, {
                foreignKey: "event_id",
                as: "stages",
                through: StageEvent
            })

            //meetgreet
            Event.hasMany(MeetGreet, {
                foreignKey: "meetgreet_id",
                as:"meet_greet"
            })

            //settime
            Event.hasMany(SetTime, {
                foreignKey:"settime_id",
                as:"set_time"
            })
        }
    }
    Event.init({
        event_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        start_time: {
            type: DataTypes.DATE,
            allowNull: false
        },
        end_time: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Event',
        tableName: 'events',
        timestamps: false
    })
    return Event
}