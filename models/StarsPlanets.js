const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection');
const Planet = require('./planet');
const Star = require('./star');

class StarsPlanets extends Model {}

StarsPlanets.init({
  
}, {
    sequelize,
    modelName: 'StarsPlanets',
    timestamps: false // 
});

Planet.belongsToMany(Star, { through: StarsPlanets });
Star.belongsToMany(Planet, { through: StarsPlanets });

module.exports = StarsPlanets;
