const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    type:String,
    name: String,
    service:String,
    designation:String,
    phoneNumber:Number,
    email: String,
    websiteURL: String

})

const contacts = mongoose.model('contact', contactSchema);

module.exports = contacts;