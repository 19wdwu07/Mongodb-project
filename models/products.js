const mongoose = require('mongoose'); // since we are using mongoose we have to require it

const  productSchema = new mongoose.Schema({
  _id : mongoose.Schema.Types.ObjectId,
  name : String,
  price : Number,
  imageUrl : String
});

module.exports = mongoose.model('Product', productSchema);
