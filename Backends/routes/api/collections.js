const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Collections = require("../../models/Collections");
const requireAuth = passport.authenticate("jwt", { session: false });

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
router.get("/", requireAuth, (req, res) => {
  Collections.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json("Error: " + err));
});

/*******add new movies endpoint**********/
router.post("/add", requireAuth, (req, res) => {
  const user = req.user.id;
  const title = req.body.title;
  const overview = req.body.overview;
  const year = req.body.year;
  const poster = req.body.poster;
  const rating = Number(req.body.rating);
  const movieId = Number(req.body.movieId);
  const date = Date.parse(req.body.date);

  const newCollections = new Collections({
    user,
    title,
    overview,
    year,
    poster,
    rating,
    movieId,
    date
  });

  newCollections
    .save()
    .then(() => res.json("Title added!"))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

/*******get a particular movie using its ID endpoint**********/

router.get("/:movieId", requireAuth, (req, res) => {
  Collections.find({ movieId: req.params.movieId })
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json(`Error ${err}`));
});
// { students: { $elemMatch: { school: 102 } } } )
/*******Delete a particular movie using its ID endpoint**********/
// router.delete("/:movieId", requireAuth, (req, res) => {
//   Collections.findByIdAndDelete(req.params.movieId)
//     .then(() => res.json("Movie Deleted"))
//     .catch(err => res.status(400).json(`Error ${err}`));
// });

router.delete("/:_id", requireAuth, (req, res) => {
  Collections.find({ user: req.user.id })
    .delete()
    .then(() => res.json("Movie Deleted"))
    .catch(err => res.status(400).json(`Error ${err}`));
});

module.exports = router;
