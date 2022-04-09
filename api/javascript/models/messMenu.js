const mongoose = require('mongoose');

const { Schema } = mongoose;

const messMenuSchema = new Schema({
  hostel    : String,
  monday    : 
  { type: [{
    breakfast :  { type: String },
    lunch     :  { type: String },
    dinner    :  { type: String },
  }]},

  tuesday   : 
  { type: [{
    breakfast :  { type: String },
    lunch     :  { type: String },
    dinner    :  { type: String },
  }]},

  wednesday : 
  { type: [{
    breakfast :  { type: String },
    lunch     :  { type: String },
    dinner    :  { type: String },
  }]},

  thrusday  : 
  { type: [{
    breakfast :  { type: String },
    lunch     :  { type: String },
    dinner    :  { type: String },
  }]},

  friday    : 
  { type: [{
    breakfast :  { type: String },
    lunch     :  { type: String },
    dinner    :  { type: String },
  }]},

  saturday  : 
  { type: [{
    breakfast :  { type: String },
    lunch     :  { type: String },
    dinner    :  { type: String },
  }]},
  
  sunday    : 
  { type: [{
    breakfast :  { type: String },
    lunch     :  { type: String },
    dinner    :  { type: String },
  }]},

});

const messMenu = mongoose.model('messMenu', messMenuSchema);

module.exports = messMenu;
