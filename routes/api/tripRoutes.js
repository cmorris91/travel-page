const router = require('express').Router();
const { Location, Traveller, Trips } = require('../../models');

//post route creates trip data between associated travellers and locations
router.post('/', async (req, res) => {
    try {
      const tripData = await Trips.create(req.body);
      res.status(200).json(tripData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

//delete route removes a trip
router.delete('/:id', async (req, res) => {
    try {
      const tripData = await Trips.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!tripData) {
        res.status(404).json({ message: 'No trip found with that id!' });
        return;
      }
  
      res.status(200).json(tripData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
