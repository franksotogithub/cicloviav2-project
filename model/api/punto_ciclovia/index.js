const { sequelize } = require("../../connection");
const Sequelize = require('sequelize');


const PuntoCiclovia = sequelize.define('punto_ciclovia', {
  /***id */
  id_punto_ciclovia: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  /***datos iniciales */
  ciclovia: { type: Sequelize.STRING(100), allowNull: false },
  distrito : { type: Sequelize.STRING(100), allowNull: false },
  tramo: { type: Sequelize.STRING(100), allowNull: true },//	varchar
  usuario: { type: Sequelize.STRING(30), allowNull: true },//	varchar
  seccion_vial_normativa: { type: Sequelize.STRING(100), allowNull: true },//	varchar
  seccion_vial_actual: { type: Sequelize.STRING(100), allowNull: true },//	varchar
  tipo: { type: Sequelize.STRING(100), allowNull: true },//	varchar
  tipo_ancho: { type: Sequelize.FLOAT, allowNull: true },//	varchar

  ele_seg_tipo: { type: Sequelize.STRING(100), allowNull: true },//	varchar
  ele_seg_estado: { type: Sequelize.STRING(100), allowNull: true },//	varchar
  ele_senial_ver_tipo: { type: Sequelize.STRING(100), allowNull: true },//	varchar
  ele_senial_ver_estado: { type: Sequelize.STRING(100), allowNull: true },//	varchar

  ele_senial_hor_tipo: { type: Sequelize.STRING(100), allowNull: true },//	varchar
  ele_senial_hor_valor: { type: Sequelize.FLOAT, allowNull: true },//	varchar
  supe_rodadura_tipo: { type: Sequelize.STRING(100), allowNull: true },//	varchar
  supe_rodadura_valor: { type: Sequelize.FLOAT, allowNull: true },//	varchar   
  
  latitud: { type: Sequelize.FLOAT, allowNull: true },  
  longitud: { type: Sequelize.FLOAT, allowNull: true },  
});


module.exports = { PuntoCiclovia };


