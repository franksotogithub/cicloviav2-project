const { ElementTramo } = require('../model/api/element_tramo/index');
const { Tramo } = require('../model/api/tramo/index');
const { sequelize } = require("../model/connection");
const { QueryTypes } = require('sequelize');
const Sequelize = require('sequelize');

/*const TramoDetail=Tramo.hasMany(, {foreignKey: 'id_tramo'})*/
 const TramoDetail= ElementTramo.belongsTo(Tramo, {foreignKey: 'id_tramo'})
class ElementTramoService {

    static async GetAllElementTramo(query) {
        try {
            return await ElementTramo.findAll({
                where:query,
                 order: [
                    ['id', 'ASC'],
                ],
                include: TramoDetail
            });
        } catch (error) {
            throw error;
        }
    }

    static async GetElementTramoForId(id) {
        try {
            return await ElementTramo.findOne({
                where: { id: id },
                include: TramoDetail
            });
        } catch (error) {
            throw error;
        }
    }

    static async UpdateElementTramo(body, id) {
        try {
            return await ElementTramo.update(body,
                { where: { id: id } });
        } catch (error) {
            throw error;
        }
    }

    static async CreateElementTramo(body) {
        try {
            
            return await ElementTramo.create(body);
        } catch (error) {
            throw error;
        }
    }


    
    static async DeleteElementTramo(id) {
        try {
            return await ElementTramo.destroy({
                where: {
                    id : id
                    // criteria
                }
            });
        } catch (error) {
            throw error;
        }
    }


}




module.exports = ElementTramoService;
