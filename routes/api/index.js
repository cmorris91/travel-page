const router = require('express').Router();
const tripRoutes = require('./tripRoutes');
const travelerRoutes = require('./travelerRoutes');
const locationRoutes = require('./locationRoutes')

router.use('/trips', tripRoutes);
router.use('/traveler', travelerRoutes);
router.use('/locations', locationRoutes);

module.exports = router;