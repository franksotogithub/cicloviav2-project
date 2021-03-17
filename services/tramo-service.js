const { Tramo } = require('../model/api/tramo/index');
const { sequelize } = require("../model/connection");
const { QueryTypes } = require('sequelize');




class TramoService {

    static async GetAllTramo(query) {
        try {
            return await Tramo.findAll({
                where:query,
                 order: [
                    ['id', 'ASC'],
                ]
            });
        } catch (error) {
            throw error;
        }
    }

    static async GetTramoForId(id) {
        try {
            return await Tramo.findOne({
                where: { id: id }
            });
        } catch (error) {
            throw error;
        }
    }

    static async UpdateTramo(body, id) {
        try {
            return await Tramo.update(body,
                { where: { id: id } });
        } catch (error) {
            throw error;
        }
    }


    static async TramoCercano(x,y) {

        try {
            return await sequelize.query("exec  dbo.tramo_cercano :x,:y,:spatialReference ", 
            {   type: QueryTypes.SELECT , 
                model: Tramo,
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


/*
    static async GetAllPuntoCiclovia(query) {
        try {
            return await PuntoCiclovia.findAll({
                where:query,
                 order: [
                    ['id_punto_ciclovia', 'ASC'],
                ]
            });
        } catch (error) {
            throw error;
        }
    }

*/


module.exports = TramoService;
