const Sequelize = require('sequelize');
const db = require('../database/mysql');

const jurusan = db.define('jurusan',
    {
        kd_jurusan: {type:Sequelize.INTEGER,primaryKey:true},
        nama_jurusan: Sequelize.STRING
    },{
        freezeTableName: true,
        timestamps: false
});

jurusan.removeAttribute('id');
module.exports =  jurusan;