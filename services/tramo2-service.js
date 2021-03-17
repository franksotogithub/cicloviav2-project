const { Tramo2 } = require('../model/api/tramo2/index');
const { sequelize } = require("../model/connection");
const { QueryTypes } = require('sequelize');




class Tramo2Service {

    static async GetAllTramo2(query) {
        try {
            return await Tramo2.findAll({
                where:query,
                 order: [
                    ['id', 'ASC'],
                ]
            });
        } catch (error) {
            throw error;
        }
    }

    static async GetTramo2ForId(id) {
        try {
            return await Tramo2.findOne({
                where: { id: id }
            });
        } catch (error) {
            throw error;
        }
    }

    static async UpdateTramo2(body, id) {
        try {
            return await Tramo2.update(body,
                { where: { id: id } });
        } catch (error) {
            throw error;
        }
    }


    static async Tramo2Cercano(x,y) {

        try {
            return await sequelize.query("exec  dbo.tramo2_cercano :x,:y,:spatialReference ", 
            {   type: QueryTypes.SELECT , 
                model: Tramo2,
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


module.exports = Tramo2Service;
