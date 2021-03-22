const router = require('express').Router();
const { Location, Traveler, Trips } = require('../../models');

router.get('/api/locations', async (req, res) => {
    try {
      const travellerData = await Location.findAll({
        include: [{ model: Traveler }, { model: Trips }],
      });
      res.status(200).json(readerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  