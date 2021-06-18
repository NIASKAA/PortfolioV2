const { route } = require("./homeRoutes");

// Project Routes //
const router = require("express").Router();

router.get('/discordBot', (req, res) => {
    res.render('discordBot');
});

router.get('/nutricalifide', (req, res) => {
    res.render('nutricalifide')
});

router.get('/theplugselect', (req, res) => [
    res.render('thePlugSelect')
])

router.get('/ramenshop', (req, res) => {
    res.render('theRamenShop')
})

router.get('/amiiboEngine', (req, res) => {
    res.render('amiiboEngine')
})

router.get('/yourTechBlog', (req, res) => [
    res.render('yourTechBlog')
])

module.exports = router;