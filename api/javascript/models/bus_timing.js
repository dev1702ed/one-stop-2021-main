const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const bustimingSchema = new Schema({
    CollegeToCity_WorkingDay : [String],
    CityToCollege_WorkingDay : [String],
    CollegeToCity_Holiday : [String],
    CityToCollege_Holiday : [String],
})

const bus_timing = mongoose.model('bus_timing', bustimingSchema )

module.exports = bus_timing;