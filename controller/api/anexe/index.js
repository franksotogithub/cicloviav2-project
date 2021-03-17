const AnexeService = require('../../../services/anexe-service');
const Util = require('../../../utils/Util');

const util = new Util();

class AnexeController {

    static async getAllAnexe(req, res) {
        try {
            const data = await AnexeService.GetAllAnexe();
            if (data && data.length > 0) {
                util.setSuccess(200, 'Datos encontrados con éxisto', data);
            } else {
                util.setSuccess(200, 'No se ha encontrado datos en el sistema', []);
            }
            return util.send(res);
        } catch (error) {
            console.log(error);
            util.setError(500, 'Error', error);
            return util.send(res);
        }
    }


    static async getAnexe(req, res) {

        const { number } = req.params
        try {
            const data = await AnexeService.GetAnexeForNumber(number);
            if (data != null) {
                util.setSuccess(200, 'Datos encontrados con éxisto', data);
            } else {
                util.setSuccess(200, 'No se ha encontrado datos en el sistema', []);
            }
            return util.send(res);
        } catch (error) {
            console.log(error);
            util.setError(500, 'Error', error);
            return util.send(res);
        }
    }

    static async createAnexe(req, res) {
        try {
            const body = req.body;
            const data = await AnexeService.CreateAnexe(body);
            if (data != null) {
                util.setSuccess(200, 'Registro con éxisto', data);
            } else {
                util.setSuccess(200, 'Algo salio mal', []);
            }
            return util.send(res);
        } catch (error) {
            console.log(error);
            util.setError(500, 'Error', error);
            return util.send(res);
        }
    }

    static async updateAnexe(req, res) {
        try {
            const body = req.body;
            const { id } = req.params;
            const data = await AnexeService.UpdateAnexe(body, id);
            if (data != null) {
                util.setSuccess(200, 'Actualizado con éxito', data);
            } else {
                util.setSuccess(200, 'Algo salio mal', []);
            }
            return util.send(res);
        } catch (error) {
            console.log(error);
            util.setError(500, 'Error', error);
            return util.send(res);
        }
    }

    static async removeAnexe(req, res) {
        try {
            const body = { status: false };
            const { id } = req.params;
            const data = await AnexeService.UpdateAnexe(body, id);
            if (data != null) {
                util.setSuccess(200, 'Removido con éxisto');
            } else {
                util.setSuccess(200, 'Algo salio mal', []);
            }
            return util.send(res);
        } catch (error) {
            console.log(error);
            util.setError(500, 'Error', error);
            return util.send(res);
        }
    }



}


module.exports = AnexeController;
