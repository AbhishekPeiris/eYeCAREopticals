// models/Sales.js
const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema({
  range: String,
  sales: Number,
});

const Sales = mongoose.model("sales", SaleSchema);

module.exports = Sales;
