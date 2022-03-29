//index ini untuk menampung semua model
const mahasiswa = require('./mahasiswa');
const jurusan = require('./jurusan');
const model = {};

model.mahasiswa = mahasiswa;
model.jurusan = jurusan;
module.exports = model;