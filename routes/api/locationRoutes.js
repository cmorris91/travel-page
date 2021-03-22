const router = require('express').Router();
const { Location, Traveller, Trips } = require('../../models');

router.get('/api/locations', async (req, res) => {
    try {
      const locationData = await Location.findAll({
        include: [{ model: Traveler }, { model: Trips }],
      });
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/api/locations', async (req, res) => {
    try {
      const locationData = await Location.create({
        location_id: req.body.location_id,
      });
      res.status(200).json(locationData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;