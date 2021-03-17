const { sequelize } = require("../../connection");
const Sequelize = require('sequelize');


const Usuario = sequelize.define('usuario', {
  /***id */
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  /***datos iniciales */
  username: { type: Sequelize.STRING(50), allowNull: false },
  password : { type: Sequelize.STRING, allowNull: false },
  name: { type: Sequelize.STRING(200), allowNull: true },//	varchar
  first_name: { type:Sequelize.STRING(200), allowNull: true },  
  last_name: { type: Sequelize.STRING(200), allowNull: true },  
  id_rol: { type: Sequelize.INTEGER, allowNull: true },
},


);


module.exports = { Usuario };


