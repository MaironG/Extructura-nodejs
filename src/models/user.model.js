const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const user = new Schema({
    name: { type: String},
    age: { type: Number},
    last_name: { type: String, match: /[a-z]/ },
    date: { type: Date, default: Date.now },
  });


module.exports= user;