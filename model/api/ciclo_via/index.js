const { sequelize } = require("../../connection");
const Sequelize = require('sequelize');


const CicloVia = sequelize.define('ciclo_via', {
  /***id */
  OBJECTID: {
    type: Sequelize.INTEGER,
    
    primaryKey: true,
  },
  /***datos iniciales */
  Name: { type: Sequelize.STRING(250), allowNull: false },
  GeoJson : { type: Sequelize.TEXT, allowNull: false },
  
},

{
  freezeTableName: true, // Model tableName will be the same as the model name
  timestamps: false,
  
}
);

module.exports = { CicloVia };


