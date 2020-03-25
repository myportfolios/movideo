// export a function from this router.jsfile
// The function will be imported into the index.js file
// Then pass our app named 'app' into the function

// use module.export to export the file
module.exports = function (app) {
  //create route handlers
  app.get("/", (req, res, next) => {
    res.send(["Waterbottle", "phone", "paper"]);
  });
};
