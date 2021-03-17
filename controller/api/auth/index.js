const AnexeService = require('../../../services/passport');
const Util = require('../../../utils/Util');
const jwt      = require('jsonwebtoken');
const passport = require('passport');
const util = new Util();
const UsuarioService = require('../../../services/usuario-service');
const {SECRET_KEY } = require('../../../config');

class AuthController {

    static async login(req, res,next) {

        try {
            passport.authenticate('local', {session: false}, (err, user, info) => {
                if (err || !user) {
                    util.setError(400, err,err);
                    return util.send(res);
                }

                req.login(user, {session: false}, (err) => {
                    
                    if (err) {
                        util.setError(400, err,err);
                        return util.send(res);
                    }

                    // generate a signed son web token with the contents of user object and return it in the response
                    const token = jwt.sign({ id: user.id, username: user.username,id_rol:user.id_rol }, SECRET_KEY);
                    
                    
                    util.setSuccess(200, 'login exitoso',{user: {
                        id:user.id,
                        username: user.username,
                        name:user.name,
                        first_name:user.first_name,
                        last_name:user.last_name,
                        id_rol :user.id_rol,
                    }, token});

                    return util.send(res);
                });

            })(req, res);


        } catch (error) {
            util.setError(500, 'Error de servidor', error);
            return util.send(res);
            

        }

    }



    static async register(req, res,next) {        
        try {
            const body = req.body;
            const data = await UsuarioService.CreateUsuario(body);

            
        
            if (data.data != null) {
                let user = data.data;

                util.setSuccess(200, 'Registro con éxito', 
                {id:user.id,
                    username: user.username,
                    name:user.name,
                    first_name:user.first_name,
                    last_name:user.last_name }
                    );
            } else {
                if(data.error){
                  
                    util.setError(400, data.error, data.error);
                }
                
            }
            return util.send(res);
        } 

        catch (error) {      
           
            util.setError(500, 'Error', error);
            return util.send(res);
        }
    }

}


module.exports = AuthController;