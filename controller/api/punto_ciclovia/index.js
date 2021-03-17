const PuntoCicloviaService = require('../../../services/punto-ciclovia-service');
const Util = require('../../../utils/Util');
const { Op } = require("sequelize");

const util = new Util();

class PuntoCicloviaController {

    static async getAllPuntoCiclovia(req, res) {
        try {
     
            let query ={};    
            let  optionsQuery=[];
            if(req.user){

               optionsQuery.push({ usuario: req.user.username })

            }

            if (optionsQuery && optionsQuery.length > 0) {
                query = {
                  [Op.and]: optionsQuery
                }
              }

            const data = await PuntoCicloviaService.GetAllPuntoCiclovia(query);
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


    static async getPuntoCiclovia(req, res) {

        const { number } = req.params
        try {
            const data = await PuntoCicloviaService.GetPuntoCicloviaForNumber(number);
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

    static async createPuntoCiclovia(req, res) {
        try {
            const body = req.body;
            const data = await PuntoCicloviaService.CreatePuntoCiclovia(body);
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

    static async updatePuntoCiclovia(req, res) {
        try {
            const body = req.body;
            const { id } = req.params;
            const data = await PuntoCicloviaService.UpdatePuntoCiclovia(body, id);
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

    static async removePuntoCiclovia(req, res) {
        try {
            const body = { status: false };
            const { id } = req.params;
            const data = await PuntoCicloviaService.UpdatePuntoCiclovia(body, id);
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


module.exports = PuntoCicloviaController;
