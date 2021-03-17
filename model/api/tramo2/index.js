const { sequelize } = require("../../connection");
const Sequelize = require('sequelize');


const Tramo2 = sequelize.define('tramo2', {
  /***id */
  id: {
    type: Sequelize.INTEGER,   
    /*autoIncrement: true, */
    primaryKey: true,

  },
  
 
 nombre_via: { type: Sequelize.STRING(250), allowNull: true },
 id_via: { type: Sequelize.INTEGER, allowNull: true },
 seccion_vial_normativa :{ type: Sequelize.STRING(100), allowNull: true },
 seccion_vial_actual :{ type: Sequelize.STRING(100), allowNull: true },
 tipo: { type: Sequelize.STRING(50), allowNull: true },
 sentido: { type: Sequelize.STRING(50), allowNull: true },
 ubicacion : { type: Sequelize.STRING(50), allowNull: true },
 
 espacio_1_tipo :{ type: Sequelize.STRING(50), allowNull: true },
 espacio_1_ancho :{ type: Sequelize.FLOAT, allowNull: true },
 espacio_1_porcentaje :{ type: Sequelize.FLOAT, allowNull: true },
 
 espacio_2_tipo :{ type: Sequelize.STRING(50), allowNull: true },
 espacio_2_ancho :{ type: Sequelize.FLOAT, allowNull: true },
 espacio_2_porcentaje :{ type: Sequelize.FLOAT, allowNull: true },
 
 espacio_3_tipo :{ type: Sequelize.STRING(50), allowNull: true },
 espacio_3_ancho :{ type: Sequelize.FLOAT, allowNull: true },
 espacio_3_porcentaje :{ type: Sequelize.FLOAT, allowNull: true },
 
 espacio_4_tipo :{ type: Sequelize.STRING(50), allowNull: true },
 espacio_4_ancho :{ type: Sequelize.FLOAT, allowNull: true },
 espacio_4_porcentaje :{ type: Sequelize.FLOAT, allowNull: true },


 segregador_1_tipo :{ type: Sequelize.STRING(50), allowNull: true },
 segregador_1_estado :{ type: Sequelize.STRING(50), allowNull: true },
 segregador_1_porcentaje :{ type: Sequelize.FLOAT, allowNull: true },
 
 segregador_2_tipo :{ type: Sequelize.STRING(50), allowNull: true },
 segregador_2_estado :{ type: Sequelize.STRING(50), allowNull: true },
 segregador_2_porcentaje :{ type: Sequelize.FLOAT, allowNull: true },
 
 segregador_3_tipo :{ type: Sequelize.STRING(50), allowNull: true },
 segregador_3_estado :{ type: Sequelize.STRING(50), allowNull: true },
 segregador_3_porcentaje :{ type: Sequelize.FLOAT, allowNull: true },
 
 segregador_4_tipo :{ type: Sequelize.STRING(50), allowNull: true },
 segregador_4_estado :{ type: Sequelize.STRING(50), allowNull: true },
 segregador_4_porcentaje :{ type: Sequelize.FLOAT, allowNull: true },


 senial_v_1_tipo :{ type: Sequelize.STRING(50), allowNull: true },
 senial_v_1_cant_buena:{ type: Sequelize.INTEGER, allowNull: true },
 senial_v_1_cant_regular:{ type: Sequelize.INTEGER, allowNull: true },
 senial_v_1_cant_mala:{ type: Sequelize.INTEGER, allowNull: true },
 senial_v_1_total:{ type: Sequelize.INTEGER, allowNull: true },

 senial_v_2_tipo :{ type: Sequelize.STRING(50), allowNull: true },
 senial_v_2_cant_buena:{ type: Sequelize.INTEGER, allowNull: true },
 senial_v_2_cant_regular:{ type: Sequelize.INTEGER, allowNull: true },
 senial_v_2_cant_mala:{ type: Sequelize.INTEGER, allowNull: true },
 senial_v_2_total:{ type: Sequelize.INTEGER, allowNull: true },
 
 senial_v_3_tipo :{ type: Sequelize.STRING(50), allowNull: true },
 senial_v_3_cant_buena:{ type: Sequelize.INTEGER, allowNull: true },
 senial_v_3_cant_regular:{ type: Sequelize.INTEGER, allowNull: true },
 senial_v_3_cant_mala:{ type: Sequelize.INTEGER, allowNull: true },
 senial_v_3_total:{ type: Sequelize.INTEGER, allowNull: true },
 
 senial_v_4_tipo :{ type: Sequelize.STRING(50), allowNull: true },
 senial_v_4_cant_buena:{ type: Sequelize.INTEGER, allowNull: true },
 senial_v_4_cant_regular:{ type: Sequelize.INTEGER, allowNull: true },
 senial_v_4_cant_mala:{ type: Sequelize.INTEGER, allowNull: true },
 senial_v_4_total:{ type: Sequelize.INTEGER, allowNull: true },

 senial_v_1_o_cant_buena:{ type: Sequelize.INTEGER, allowNull: true },
 senial_v_1_o_cant_regular:{ type: Sequelize.INTEGER, allowNull: true },
 senial_v_1_o_cant_mala:{ type: Sequelize.INTEGER, allowNull: true },
 senial_v_1_o_total:{ type: Sequelize.INTEGER, allowNull: true },


 senial_v_2_o_cant_buena:{ type: Sequelize.INTEGER, allowNull: true },
 senial_v_2_o_cant_regular:{ type: Sequelize.INTEGER, allowNull: true },
 senial_v_2_o_cant_mala:{ type: Sequelize.INTEGER, allowNull: true },
 senial_v_2_o_total:{ type: Sequelize.INTEGER, allowNull: true },



 senial_h_1_tipo :{ type: Sequelize.STRING(50), allowNull: true },
 senial_h_1_por_bueno:{ type: Sequelize.FLOAT, allowNull: true },
 senial_h_1_por_regular:{ type: Sequelize.FLOAT, allowNull: true },
 senial_h_1_por_malo:{ type: Sequelize.FLOAT, allowNull: true },
 
 senial_h_2_tipo :{ type: Sequelize.STRING(50), allowNull: true },
 senial_h_2_por_bueno:{ type: Sequelize.FLOAT, allowNull: true },
 senial_h_2_por_regular:{ type: Sequelize.FLOAT, allowNull: true },
 senial_h_2_por_malo:{ type: Sequelize.FLOAT, allowNull: true },


},

{
  freezeTableName: true, // Model tableName will be the same as the model name
  timestamps: true,  
}

);

module.exports = { Tramo2 };


