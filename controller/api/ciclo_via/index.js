const CicloViaService = require('../../../services/via-service');
const Util = require('../../../utils/Util');

const util = new Util();

class CicloViaController {

    static async getAllCicloVia(req, res) {
        try {
            const data = await CicloViaService.GetAllCicloVia();
            if (data && data.length > 0) {
                util.setSuccess(200, 'Datos encontrados con éxito', data);
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


    static async getCicloVia(req, res) {

        const { id } = req.params
        try {
            const data = await CicloViaService.GetCicloViaForId(id);
            if (data != null) {
                util.setSuccess(200, 'Datos encontrados con éxito', data);
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




    static async CicloViaCercana(req, res) {

        try {
      
            const { x,y } = req.query;

            if(x && y ){
                const data = await CicloViaService.CicloViaCercana(x,y);
                console.log(data);
                if (data != null) {
                    util.setSuccess(200, 'CicloVia cercana',data);
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


module.exports = CicloViaController;
