const { sequelize } = require("../../connection");
const Sequelize = require('sequelize');


const Rol = sequelize.define('rol', {
  /***id */
  id: {
    type: Sequelize.INTEGER,  
    
    primaryKey: true,

  },
  
 
 nombre: { type: Sequelize.STRING(250), allowNull: true },

},

{
  freezeTableName: true, // Model tableName will be the same as the model name
  timestamps: false,
  
}
);

module.exports = { Rol };


