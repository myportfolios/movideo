const express = require("express");
const router = express.Router();
const passport = require("passport");

const Collections = require("../../models/Collections");
const User = require("../../models/User");
const requireAuth = passport.authenticate("jwt", { session: false });

/**if user._id === collections.user */
// @route GET api/collections/test
// @desc Test collections route
// @access Private
router.get("/test", (req, res) => res.json({ msg: "Collection Works" }));

/*******get all saved movies for a particular user in Database endpoint**********/
// @route GET api/collections/test
// @desc Test collections route
// @access Private
/***Approach one. works well */
// router.get("/movies/:user", requireAuth, (req, res) => {
//   User.findOne({ id: req.user.id }).then(user => {
//     Collections.find({ user: req.params.user })
//       .then(collections => {
//         if (
//           collections.findIndex(obj => {
//             return obj.user.toString() !== req.user.id;
//           }) > -1
//         ) {
//           return res.status(401).json({ notauthorized: "User not authorized" });
//         }
//         res.json(collections);
//       })
//       .catch(err => res.status(400).json("Error: " + err));
//   });
// });

/***Approach two work well */

// router.get("/movies/:user", requireAuth, (req, res) => {
//   User.findOne({ id: req.user.id }).then(user => {
//     Collections.find({ user: req.params.user })
//       .then(collections => {
//         const data = collections.filter(c => c.user.toString() === req.user.id);

//         res.json(data);
//       })

//       .catch(err => res.status(400).json("Error: " + err));
//   });
// });

/***Approach three work well */

// router.get("/movies/:user", requireAuth, (req, res) => {
//   if (req.params.user !== req.user.id) {
//     return res.status(401).json({ notauthorized: "User not authorized" });
//   }

//   Collections.find({ user: req.params.user })
//     .then(collections => {
//       res.json(collections);
//     })
//     .catch(err => res.status(400).json("Error: " + err));
// });

/***Approach four  work well */

// router.get("/movies/:user", requireAuth, (req, res) => {
//   if (req.params.user !== req.user.id) {
//     return res.status(401).json({ notauthorized: "User not authorized" });
//   }

//   Collections.find({ user: req.params.user })
//     .then(collections => {
//       res.json(collections);
//     })
//     .catch(err => res.status(400).json("Error: " + err));
// });

/**Approach five works well** */

router.get("/movies/logged-user", requireAuth, (req, res) => {
  Collections.find({ user: req.user.id })
    .then(collections => {
      res.json(collections);
    })
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

router.get("/movie/:movieId", requireAuth, (req, res) => {
  // Collections.find({ movieId: req.params.movieId })
  Collections.find({ movieId: req.params.movieId })
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json(`Error ${err}`));
});

/*******Delete a particular movie using its ID endpoint**********/
// router.delete("/:movieId", requireAuth, (req, res) => {
//   Collections.findByIdAndDelete(req.params.movieId)
//     .then(() => res.json("Movie Deleted"))
//     .catch(err => res.status(400).json(`Error ${err}`));
// });

router.delete("/movies/logged-user/:movieId", requireAuth, (req, res) => {
  Collections.find({ user: req.user.id, movieId: req.params.movieId })
    .deleteOne()
    .then(() => res.json("Movie Deleted"))
    .catch(err => res.status(400).json(`Error ${err}`));
});

module.exports = router;
