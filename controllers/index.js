const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/', homeRoutes);
router.use('/projects', projectRoutes);
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;