const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactChildSchema = new Schema({
  child      : String,
  name       : String,
  service    : String,
  designation: String,
  phoneNumber: Number,
  email      : String,
  websiteURL : String,

});

const contactChild = mongoose.model('contactChild', contactChildSchema);

module.exports = contactChild ;
