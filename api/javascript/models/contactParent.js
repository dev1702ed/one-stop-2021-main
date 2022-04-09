const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactParentSchema = new Schema({
  parent: String,
  children: [String]
});

const contactParent = mongoose.model('contactParent', contactParentSchema);

module.exports = contactParent;
