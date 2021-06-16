//home page//
const router = require("express").Router();

router.get("/", async (req, res) => {
    res.render("homepage")
});

router.get("/about", (req, res) => {
  res.render("about")
});

router.get("/projects", (req, res) => {
    res.render("projects")
});


module.exports = router;