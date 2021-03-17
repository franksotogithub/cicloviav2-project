const Util = require('../utils/Util');
const passport    = require('passport');
const util = new Util();
  const authenticateJwt = (req, res, next) => {
    passport.authenticate('jwt', function(err, user, info) {
        if (err) return next(err);
        if (!user) {
          
          util.setError(401, 'Error', 'No autorizado');
          return util.send(res);
        
        } 
        req.user = user;
        next();
      })(req, res, next);
  };
  

  module.exports = {
    authenticateJwt,

  }
  