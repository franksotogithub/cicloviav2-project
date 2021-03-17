const { CicloVia } = require('../model/api/ciclo_via/index');
const { sequelize } = require("../model/connection");
const { QueryTypes } = require('sequelize');

class CicloViaService {

    static async GetAllCicloVia() {
        try {
            return await CicloVia.findAll({
                 order: [
                    ['OBJECTID', 'ASC'],
                ]
            });
        } catch (error) {
            throw error;
        }
    }

    static async GetCicloViaForId(id) {
        try {
            return await CicloVia.findOne({
                where: { OBJECTID: id }
            });
        } catch (error) {
            throw error;
        }
    }

   

   

    static async CicloViaCercana(x,y) {

        try {
            return await sequelize.query("exec  dbo.ciclo_via_cercana :x,:y,:spatialReference ", 
            {   type: QueryTypes.SELECT , 
                model: CicloVia,
                mapToModel: true ,// pass true here if you have any mapped fields
                replacements: { x: x,  y:y,spatialReference:4326 },
            }
            
            );
            /*
            return await CicloVia.update(body,
                { where: { OBJECTID: id } });*/
        } catch (error) {
            throw error;
        }
    }

}



module.exports = CicloViaService;
