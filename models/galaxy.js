'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Galaxy extends Model {
  
    
  }
  Galaxy.init({
    name: DataTypes.STRING,
    size: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Galaxy',
  });

  Galaxy.associate = (models) => {
  Galaxy.hasMany(models.Star);
};
  return Galaxy;
};