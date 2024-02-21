const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  likedMovies: Array,
});

module.exports = mongoose.model("users", userSchema);

const paymentSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  source: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model('Payment', paymentSchema);
