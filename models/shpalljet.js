const Types = require('sequelize/lib/data-types');
const db = require('../config/db');

const Shpalljet = db.define('shpalljet',
 {
    id:{
        type: Types.INTEGER(11),
        primaryKey: true,
        autoincrement: true
    },
    titulli:{
        type: Types.STRING(255),
        allowNull: false
    },
    emriKompanis:{
        type:Types.STRING(255)

    },
    dataEpublikimit:{
        type:Types.DATE
    },
    dataEskadimit:{
        type:Types.DATE
    },
    kategorit:{
        type:Types.STRING(255)

    },
    shkathesite:{
        type:Types.STRING(255)

    },
    description:{
        type:Types.STRING(255)

    }
},{timestamps:false,   freezeTableName: true});

module.exports=Shpalljet;