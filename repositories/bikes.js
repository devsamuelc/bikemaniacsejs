const fs = require('fs');
const Repository = require('./repository');

class BikesRepository extends Repository {
    }

module.exports = new BikesRepository('bikes.json');