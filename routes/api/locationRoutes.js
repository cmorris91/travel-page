const router = require('express').Router();
const { Location, Traveler, Trips } = require('../../models');

router.get('/', async (req, res) => {
    const locationData = await Location.findAll().catch((err) => {
        res.json(err);
    });
    res.json(locationData);
});

router.post('/', async (req, res) => {
    try {
        const locationData = await Location.create(req.body);
        res.status(200).json(locationData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
  