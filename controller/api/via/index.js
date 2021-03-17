const ViaService = require('../../../services/via-service');
const Util = require('../../../utils/Util');

const util = new Util();

class ViaController {

    static async getAllVia(req, res) {
        try {
            const data = await ViaService.GetAllVia();
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


    static async getVia(req, res) {

        const { id } = req.params
        try {
            const data = await ViaService.GetViaForId(id);
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



    static async ViaCercana(req, res) {

        try {
      
            const { x,y } = req.query;

            if(x && y ){
                const data = await ViaService.ViaCercana(x,y);
                console.log(data);
                if (data != null) {
                    util.setSuccess(200, 'Via cercana',data);
                } else {
                    util.setSuccess(200, 'Algo salio mal', null);
                }
            }

            else 
                util.setSuccess(200, 'Parametros no validos', null);
            
            return util.send(res);
        } catch (error) {
            console.log(error);
            util.setError(500, 'Error', error);
            return util.send(res);
        }


    }


}


module.exports = ViaController;
