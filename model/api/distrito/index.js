const { sequelize } = require("../../connection");
const Sequelize = require('sequelize');


const Distrito = sequelize.define('distrito_lima', {
  /***id */
  OBJECTID: {
    type: Sequelize.INTEGER,    
    primaryKey: true,
  },
  /***datos iniciales */
  NOMBDIST: { type: Sequelize.STRING(250), allowNull: false },
  GeoJson : { type: Sequelize.TEXT, allowNull: false },
  
},

{
  freezeTableName: true, // Model tableName will be the same as the model name
  timestamps: false,
  
}
);

module.exports = { Distrito };


