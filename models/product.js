// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    itemCode: { type: String, required: true, unique: true },
    productName: { type: String, required: true },
    drawingCode: { type: String, default: '' },
    revision: { type: String, default: '' },
    minimumOrderQuantity: { type: Number, default: 1, min: 1 }
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
