const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

//create Schema

const CollectionsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  overview: { type: String, required: true },
  year: { type: String, required: true },
  poster: { type: String, required: true },
  rating: { type: Number, required: true },
  date: { type: Date, required: true }
});

const Collections = mongoose.model("collections", CollectionsSchema);

module.exports = Collections;
