'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Star extends Model {
    
    static associate(models) {
      
    }
  }
  Star.init({
    name: DataTypes.STRING,
    size: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Star',
  });

  Star.associate = (models) => {
  Star.belongsTo(models.Galaxy);
  Star.hasMany(models.Planet, { through: 'StarsPlanets' });
};
  return Star;
};