const Tramo2Service = require('../../../services/tramo2-service');
const Util = require('../../../utils/Util');
const { Op } = require("sequelize");
const util = new Util();

class Tramo2Controller {

    static async getAllTramo2(req, res) {
        try {
            let query ={}; 
            let  optionsQuery=[];


            if(req.query){
                let id_via=req.query.id_via;

                if(id_via){
                    optionsQuery.push({ id_via: id_via });
                 }
        
                 
                if (optionsQuery && optionsQuery.length > 0) {
                    query = {
                      [Op.and]: optionsQuery
                    }
                }

            }

         


            const data = await Tramo2Service.GetAllTramo2(query);

       
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


    static async getTramo2(req, res) {

        const { id } = req.params
        try {
            const data = await Tramo2Service.GetTramo2ForId(id);
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



    static async updateTramo2(req, res) {

       
        try {


            const body = req.body;
            const { id } = req.params;
            const data = await Tramo2Service.UpdateTramo2(body, id);
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


    static async tramo2Cercano(req, res) {

        try {
      
            const { x,y } = req.query;

            if(x && y ){
                const data = await Tramo2Service.Tramo2Cercano(x,y);
                console.log(data);
                if (data != null) {
                    util.setSuccess(200, 'Tramo2 cercana',data);
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


module.exports = Tramo2Controller;
