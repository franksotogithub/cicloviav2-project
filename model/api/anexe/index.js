const { sequelize } = require("../../connection");
const Sequelize = require('sequelize');


const Anexe = sequelize.define('anexe', {
  /***id */
  id_anexe: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  /***datos iniciales */
  number: { type: Sequelize.INTEGER, allowNull: false },
  name : { type: Sequelize.STRING(50), allowNull: false },
  url: { type: Sequelize.STRING(200), allowNull: true },//	varchar
  status: { type: Sequelize.BOOLEAN, allowNull: true },  
});


module.exports = { Anexe };


