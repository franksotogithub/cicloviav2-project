const { query } = require('express');
const { PuntoCiclovia } = require('../model/api/punto_ciclovia/index');

class PuntoCicloviaService {

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

    static async GetPuntoCicloviaForId(id) {
        try {
            return await PuntoCiclovia.findOne({
                where: { id_punto_ciclovia: id }
            });
        } catch (error) {
            throw error;
        }
    }

    static async GetPuntoCicloviaForNumber(number) {
        try {
            return await PuntoCiclovia.findOne({
                where: { number: number }
            });
        } catch (error) {
            throw error;
        }
    }

    static async CreatePuntoCiclovia(body) {
        try {
            return await PuntoCiclovia.create(body);
        } catch (error) {
            throw error;
        }
    }

    static async UpdatePuntoCiclovia(body, id) {
        try {
            return await PuntoCiclovia.update(body,
                { where: { id_punto_ciclovia: id } });
        } catch (error) {
            throw error;
        }
    }


}



module.exports = PuntoCicloviaService;
