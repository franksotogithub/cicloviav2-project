
const Sequelize = require('sequelize');

const {DATABASE,USER,PASSWORD,HOST,BASE_PORT,ERASEDATABASEONSYNC } = require('../config');



let sequelize = null;

if (!sequelize) {
  sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    dialect: 'mssql',
    port:BASE_PORT,
    dialectOptions: {
        options: {
            instanceName: 'SQLSERVERIMP',
            validateBulkLoadParameters: true
      
        },
      },
    
  })
}


sequelize.authenticate()
    .then(() => {
        console.log('>>>>>>>Conectado')
    })
    .catch(err => {
        console.log('No se conecto')
    });
  
  let eraseDatabaseOnSync = false;
  if(ERASEDATABASEONSYNC=='true'){
     eraseDatabaseOnSync = true;
  }  

  



  sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
    
  });


  module.exports = {
    sequelize
}


 /*
const {PGUSER,
    PGHOST,
    PGPASSWORD,
    PGDATABASE,
    PGPORT} = require("./../config")



let sequelize = null;

if (!sequelize) {
  sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    dialect: 'postgres',
    port:PGPORT,
    timezone: '-05:00'
  })
}

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })
  
  const eraseDatabaseOnSync = false;

  sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
    
  });
   



const pool = new Pool({
    ssl:true
   // statement_timeout: 100 //115000

})

pool.on('connect', client => {
    client.query("SET TIMEZONE='America/Lima'")
  })

function openConnection(){
    return pool.connect()
}

module.exports = {
    openConnection,
    pool,
    sequelize
}*/