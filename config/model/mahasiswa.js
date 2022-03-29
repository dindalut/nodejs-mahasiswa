const { SET } = require('mysql/lib/protocol/constants/types');
const Sequelize = require('sequelize');
const db = require('../database/mysql');

//mendefine table mahasiswa
//freezetable digunkan untuk tidak nmbah s karena sequelize secara default saat memanggil database akan ditambah s
//timestamps di sequelize secara default createadda and updatedadd nah disini belum ada jadi di false kan dulu
const mahasiswa = db.define('mahasiswa',
    {
        nim: Sequelize.INTEGER,
        nama: Sequelize.STRING,
        kd_jurusan: Sequelize.STRING,
        alamat: Sequelize.STRING,
        angkatan: Sequelize.STRING
    },{
        freezeTableName: true,
        timestamps: false
});

//removeatribut secara default di seqquelize akan memanggil create id, krna di database tidak ada id maka diremove terlebih dahulu
mahasiswa.removeAttribute('id');
module.exports =  mahasiswa;