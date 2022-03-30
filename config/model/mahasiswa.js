const Sequelize = require('sequelize');
const db = require('../database/mysql');
const jurusan = require('./jurusan');

//mendefine table mahasiswa
//freezetable digunkan untuk tidak nmbah s karena sequelize secara default saat memanggil database akan ditambah s
//timestamps di sequelize secara default createadda and updatedadd nah disini belum ada jadi di false kan dulu
const mahasiswa = db.define('mahasiswa',
    {
        nim: {type:Sequelize.INTEGER,primaryKey:true},
        nama: Sequelize.STRING,
        kd_jurusan: Sequelize.STRING,
        alamat: Sequelize.STRING,
        angkatan: Sequelize.STRING,
        foto: Sequelize.STRING
    },{
        freezeTableName: true,
        timestamps: false
});

mahasiswa.hasOne(jurusan, {foreignKey: 'kd_jurusan'});
mahasiswa.belongsTo(jurusan, {foreignKey: 'kd_jurusan'});

//removeatribut secara default di seqquelize akan memanggil create id, krna di database tidak ada id maka diremove terlebih dahulu
mahasiswa.removeAttribute('id');
module.exports =  mahasiswa;