const Trips = require('./Trips');
const Location = require('./Location');
const Traveller = require('./Traveler');


Traveller.belongsToMany(Location, {
    // Define the third table needed to store the foreign keys
    through: {
      model: Trips,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'planned_trips'
  });

  Location.belongsToMany(Traveller, {
    // Define the third table needed to store the foreign keys
    through: {
      model: Trips,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'location_travellers'
  });

module.exports = { Location, Trips, Traveller };
