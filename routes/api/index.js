const router = require('express').Router();
const tripRoutes = require('./tripRoutes');
const travellerRoutes = require('./travellerRoutes');
const locationRoutes = require('./locationRoutes')

router.use('/trips', tripRoutes);
router.use('/traveller', travellerRoutes);
router.use('/locations', locationRoutes);

module.exports = router;