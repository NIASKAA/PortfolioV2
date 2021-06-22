// Project Routes //
const router = require("express").Router();

router.get('/discordBot', async (req, res) => {
    res.render('discordBot');
});

router.get('/nutricalifide', async (req, res) => {
    res.render('nutricalifide')
});

router.get('/thePlugSelect', async (req, res) => [
    res.render('thePlugSelect')
])

router.get('/ramenShop', async (req, res) => {
    res.render('theRamenShop')
})

router.get('/amiiboEngine', async (req, res) => {
    res.render('amiiboEngine')
})

router.get('/yourTechBlog', async (req, res) => [
    res.render('yourTechBlog')
])

module.exports = router;