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
    trim: true
  },
  overview: { type: String },
  year: { type: String },
  poster: { type: String },
  rating: { type: Number },
  movieId: { type: Number },
  date: { type: Date, default: Date.now }
});

const Collections = mongoose.model("collections", CollectionsSchema);

module.exports = Collections;
