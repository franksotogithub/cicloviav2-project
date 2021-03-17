const { Usuario } = require('../model/api/usuario/index');
const bcrypt = require('bcrypt');
const saltRounds = 10;
class UsuarioService {

    static async GetAllUsuario() {
        try {
            return await Usuario.findAll({
                 order: [
                    ['id', 'ASC'],
                ]
            });
        } catch (error) {
            throw error;
        }
    }

    static async GetUsuarioForId(id) {
        try {
            return await Usuario.findOne({
                where: { id: id }
            });
        } catch (error) {
            throw error;
        }
    }  

    static async CreateUsuario(body) {
        try {
            
            if(body.username){
                let user=await Usuario.findOne({
                    where: { username: body.username }
                });
               
              

                if (!user){
                    if(body.password){
                        const password = body.password;
                        const password_hash= bcrypt.hashSync(password,saltRounds);
                        body.password = password_hash;
                        return {data:await Usuario.create(body)};
                        /*return await Usuario.create(body);*/
                    }
                    
                    else {
                        return {error:'No hay password'}
                        /*throw new Error('No hay password');*/
                    }
                }

                else{
                    return {error:'El usuario ya ha sido registrado'}
                    /*throw new Error('El usuario ya ha sido registrado');*/
                }

            }
            else{
                return {error:'No hay usuario'}
                /*throw new Error('No hay usuario');*/
            }
            
            

        } catch (error) {
            throw error;
        }
    }

    static async UpdateUsuario(body, id) {
        try {
            return await Usuario.update(body,
                { where: { id: id } });
        } catch (error) {
            throw error;
        }
    }



}



module.exports = UsuarioService;
