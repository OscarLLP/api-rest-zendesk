const {Router } = require('express');
const router = Router();

//routes
router.get('/', (req, res) => {
    res.json({"name": 'oscar'});
});

module.exports = router;