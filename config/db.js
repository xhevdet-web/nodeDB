const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,{
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    pool:{
        max:5,
        min:0,
        acuire: 30000,
        idle: 10000
    },
    
   

},{
    freezeTableName: true,
    logging: false,
});

db.authenticate().then(()=>console.log("DB connection worked")).catch(err=> console.log("error", err));

module.exports=db;