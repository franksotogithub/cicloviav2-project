const UsuarioService = require('../../../services/usuario-service');
const Util = require('../../../utils/Util');

const util = new Util();

class UsuarioController {

    static async getAllUsuario(req, res) {
        try {
            const data = await UsuarioService.GetAllUsuario();
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


    static async getUsuario(req, res) {

        const { id } = req.params
        try {
            const data = await UsuarioService.GetUsuarioForId(id);
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

    static async createUsuario(req, res) {
        try {
            const body = req.body;
            const data = await UsuarioService.CreateUsuario(body);
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

    static async updateUsuario(req, res) {
        try {
            const body = req.body;
            const { id } = req.params;
            const data = await UsuarioService.UpdateUsuario(body, id);
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

    static async removeUsuario(req, res) {
        try {
        
            const { id } = req.params;
            const data = await UsuarioService.UpdateUsuario(body, id);
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

    static async login(req, res) {
        try {
          
            const body = req.body;
            const data = await UsuarioService.Login(body);

            if (data != null) {
                util.setSuccess(200, 'Login con exito', data);
            } else {
                util.setSuccess(200, 'Usuario o password son incorrectos', data);
            }
            return util.send(res);
        } catch (error) {
            console.log(error);
            util.setError(500, 'Error, algo salio mal', error);
            return util.send(res);
        }
    }



    

}


module.exports = UsuarioController;
