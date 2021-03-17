const { Via } = require('../model/api/via/index');
const { sequelize } = require("../model/connection");
const { QueryTypes } = require('sequelize');

class ViaService {

    static async GetAllVia() {
        try {
            return await Via.findAll({
                 order: [
                    ['OBJECTID', 'ASC'],
                ]
            });
        } catch (error) {
            throw error;
        }
    }

    
    static async GetViaForId(id) {
        try {
            return await Via.findOne({
                where: { OBJECTID: id }
            });
        } catch (error) {
            throw error;
        }
    }

   

   

    static async ViaCercana(x,y) {

        try {
            return await sequelize.query("exec  dbo.via_cercana :x,:y,:spatialReference ", 
            {   type: QueryTypes.SELECT , 
                model: Via,
                mapToModel: true ,// pass true here if you have any mapped fields
                replacements: { x: x,  y:y,spatialReference:4326 },
            }
            
            );
            /*
            return await Via.update(body,
                { where: { OBJECTID: id } });*/
        } catch (error) {
            throw error;
        }
    }

}



module.exports = ViaService;
