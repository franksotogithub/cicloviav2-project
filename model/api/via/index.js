const { sequelize } = require("../../connection");
const Sequelize = require('sequelize');


const Via = sequelize.define('via', {
  /***id */
  OBJECTID: {
    type: Sequelize.INTEGER,    
    primaryKey: true,
  },
  /***datos iniciales */
  dep: { type: Sequelize.STRING(2), allowNull: true },
  prov: { type: Sequelize.STRING(2), allowNull: true },
  dist: { type: Sequelize.STRING(2), allowNull: true },
  nombre: { type: Sequelize.STRING(255), allowNull: true },
  nombre_alterno: { type: Sequelize.STRING(255), allowNull: true },
  categoria: { type: Sequelize.STRING(255), allowNull: true },

},

{
  freezeTableName: true, // Model tableName will be the same as the model name
  timestamps: false,  
}
);

module.exports = { Via };


