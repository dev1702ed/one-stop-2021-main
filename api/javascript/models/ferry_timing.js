const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ferrytimingSchema = new Schema({
    MonToFri_GuwahatiToNorthGuwahati : [String],
    MonToFri_NorthGuwahatiToGuwahati : [String],
    Sunday_GuwahatiToNorthGuwahati : [String],
    Sunday_NorthGuwahatiToGuwahati : [String],
})

const ferry_timing = mongoose.model('ferry_timing', ferrytimingSchema )

module.exports = ferry_timing;