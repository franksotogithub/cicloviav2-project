const { Distrito } = require('../model/api/distrito/index');
const { sequelize } = require("../model/connection");
const { QueryTypes } = require('sequelize');

class DistritoService {

    static async GetAllDistrito() {
        try {
            return await Distrito.findAll({
                 order: [
                    ['OBJECTID', 'ASC'],
                ]
            });
        } catch (error) {
            throw error;
        }
    }

    static async GetDistritoForId(id) {
        try {
            return await Distrito.findOne({
                where: { OBJECTID: id }
            });
        } catch (error) {
            throw error;
        }
    }

   

   

    static async DistritoCercano(x,y) {

        try {
            return await sequelize.query("exec  dbo.distrito_cercano :x,:y,:spatialReference ", 
            {   type: QueryTypes.SELECT , 
                model: Distrito,
                mapToModel: true ,// pass true here if you have any mapped fields
                replacements: { x: x,  y:y,spatialReference:4326 },
            }
            
            );
            /*
            return await Distrito.update(body,
                { where: { OBJECTID: id } });*/
        } catch (error) {
            throw error;
        }
    }

}



module.exports = DistritoService;
