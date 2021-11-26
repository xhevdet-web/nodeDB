const Types = require('sequelize/lib/data-types');
const db = require('../config/db');

const Contact = db.define('contact',
 {
    id:{
        type: Types.INTEGER(11),
        primaryKey: true,
        autoincrement: true
    },
    full_name:{
        type: Types.STRING(255),
        allowNull: false
    },
    email:{
        type:Types.STRING(255)

    },
    phone:{
        type:Types.STRING(255)
    }
},{timestamps:false,   freezeTableName: true});

module.exports=Contact;