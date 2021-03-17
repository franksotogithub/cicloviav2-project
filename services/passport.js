const passport    = require('passport');
const passportJWT = require("passport-jwt");
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy   = passportJWT.Strategy;

const { Usuario } = require('../model/api/usuario/index');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const { SECRET_KEY} = require('../config');

passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    async (username, password, cb)=> {


        try{

        
            let usuario= await Usuario.findOne(
                { where: { 
                    username: username,
                } }
                
                );
            
    
                if(!usuario){


                    return cb('No existe el usuario', false, {message: 'No existe el usuario'});
                    /*throw new Error('No existe el usuario');*/
                }
    
                else{
                    
                    
                    console.log(usuario.password,password)

                    const match = await bcrypt.compare( password,usuario.password);
    
                    if(match)
                        cb(null, usuario, {message: 'Login satisfactorio'});
                        /*return usuario;*/
                    else
                        cb('Usuario o password incorrecto', false, {message: 'Usuario o password incorrecto'});
                        /*return null;*/
                }           
                
            }
            catch(error){
                cb(error);
            }



        //Assume there is a DB module pproviding a global UserModel



        /*return UserModel.findOne({email, password})
            .then(user => {
                if (!user) {
                    return cb(null, false, {message: 'Incorrect email or password.'});
                }

                return cb(null, user, {
                    message: 'Logged In Successfully'
                });
            })
            .catch(err => {
                return cb(err);
            });*/
    }
));




passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : SECRET_KEY
    },
     (jwtPayload, cb) =>{

        console.log('jwtPayload>>>',jwtPayload);
        
        return cb(null, jwtPayload);
        //find the user in db if needed
        
        
      //  return UserModel.findOneById(jwtPayload.id)
    //        .then(user => {
    //            return cb(null, user);
     //       })
     //       .catch(err => {
     //           return cb(err);
     //       });
            
            
    }
));