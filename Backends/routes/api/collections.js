const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Collections = require("../../models/Collections");

// @route GET api/collections/test
// @desc Test collections route
// @access Private
router.get("/test", (req, res) => res.json({ msg: "Collection Works" }));

/*******get all saved movies in Database endpoint**********/
// @route GET api/collections/test
// @desc Test collections route
// @access Private
/****Below ode commented out****/
// router.get("/", (req, res) => {
// Collections.find()
//   .then(users => res.json(users))
//   .catch(err => res.status(400).json("Error: " + err));
// });
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Collections.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json("Error: " + err));
  }
);

/*******add new movies endpoint**********/
router.post("/add", (req, res) => {
  const name = req.body.name;
  const title = req.body.title;
  const overview = req.body.overview;
  const year = req.body.year;
  const poster = req.body.poster;
  const rating = Number(req.body.rating);
  const date = Date.parse(req.body.date);

  const newCollections = new Collections({
    name,
    title,
    overview,
    year,
    poster,
    rating,
    date
  });

  newCollections
    .save()
    .then(() => res.json("Title added!"))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

/*******get a particular movie using its ID endpoint**********/
router.get("/:_id", (req, res) => {
  Collections.findById(req.params.id)
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json(`Error ${err}`));
});

/*******Delete a particular movie using its ID endpoint**********/
router.delete("/:_id", (req, res) => {
  Collections.findByIdAndDelete(req.params.id)
    .then(() => res.json("Movie Deleted"))
    .catch(err => res.status(400).json(`Error ${err}`));
});

module.exports = router;
