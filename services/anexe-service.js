const { Anexe } = require('../model/api/anexe/index');

class AnexeService {

    static async GetAllAnexe() {
        try {
            return await Anexe.findAll({
                where: { status: true }, order: [
                    ['id_anexe', 'ASC'],
                ]
            });
        } catch (error) {
            throw error;
        }
    }

    static async GetAnexeForId(id) {
        try {
            return await Anexe.findOne({
                where: { id_anexe: id }
            });
        } catch (error) {
            throw error;
        }
    }

    static async GetAnexeForNumber(number) {
        try {
            return await Anexe.findOne({
                where: { number: number }
            });
        } catch (error) {
            throw error;
        }
    }

    static async CreateAnexe(body) {
        try {
            return await Anexe.create(body);
        } catch (error) {
            throw error;
        }
    }

    static async UpdateAnexe(body, id) {
        try {
            return await Anexe.update(body,
                { where: { id_anexe: id } });
        } catch (error) {
            throw error;
        }
    }


}



module.exports = AnexeService;
