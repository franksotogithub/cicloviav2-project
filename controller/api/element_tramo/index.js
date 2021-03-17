const ElementTramoService = require('../../../services/element-tramo-service');
const Util = require('../../../utils/Util');
const { Op } = require("sequelize");
const util = new Util();

class ElementTramoController {

    static async getAllElementTramo(req, res) {
        try {
            let query ={};    
            let  optionsQuery=[];
            if(req.user){
                let rol = req.user.id_rol?parseInt(req.user.id_rol):null;

                console.log('rol>>',rol);
                if(rol==1){
                    optionsQuery.push({ usuario: req.user.username })
                }
            }

            if (optionsQuery && optionsQuery.length > 0) {
                query = {
                  [Op.and]: optionsQuery
                }
            }

            const data = await ElementTramoService.GetAllElementTramo(query);


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


    static async getElementTramo(req, res) {

        const { id } = req.params
        try {
            const data = await ElementTramoService.GetElementTramoForId(id);
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

    static async createElementTramo(req, res) {
        try {
            const body = req.body;
            const data = await ElementTramoService.CreateElementTramo(body);
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

    static async updateElementTramo(req, res) {     

        try {

            const body = req.body;
            const { id } = req.params;
            const data = await ElementTramoService.UpdateElementTramo(body, id);
            if (data != null) {
                util.setSuccess(200, 'Datos actualizados con exito', data);
            } else {
                util.setSuccess(200, 'No se ha enscontrado datos en el sistema', []);
            }
            return util.send(res);
        } catch (error) {
            console.log(error);
            util.setError(500, 'Error', error);
            return util.send(res);
        }
    }


    static async deleteElementTramo(req, res) {     

        try {

            const { id } = req.params;
            const data = await ElementTramoService.DeleteElementTramo(id);
            
            if (data != null) {
                util.setSuccess(200, 'Dato eliminado con exito', data);
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



}


module.exports = ElementTramoController;
