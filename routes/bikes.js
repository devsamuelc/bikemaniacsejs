const express = require('express');
const bikesRepo = require('../repositories/bikes');
const bikesIndexTemplate = require('../views/bikes/index');

const router = express.Router();

router.get('/', async (req, res) => {
    const bikes = await bikesRepo.getAll();
    res.send(bikesIndexTemplate({ bikes }));
});

module.exports = router;