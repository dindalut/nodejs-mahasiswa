const express = require('express');
const router = express.Router();
const db = require('../config/mysql');


//mengambil data mahasiswa
router.get('/', (req,res,next) => {
    var sql = "SELECT * FROM mahasiswa";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: 'Get Method Mahasiswa',
            data: result
        })
    }) 
})

//memasukan data mahasiswa
router.post('/', (req,res,next) => {
    const nim = req.body.nim;
    const nama = req.body.nama;
    const jurusan = req.body.jurusan;
    var sql = "INSERT INTO mahasiswa (nim, nama, jurusan) VALUES ('"+nim+"', '"+nama+"', '"+jurusan+"')";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: 'Berhasil Tambah Data Mahasiswa'
        })
    }) 
})

//mencari mahasiswa berdasarkan nim
router.get('/:nim', (req,res,next) => {
    const nim = req.params.nim;
    var sql = "SELECT * FROM mahasiswa WHERE nim="+nim;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: 'mahasiswa ditemukan',
            data: result
        })
    }) 
})

//update data mahasiswa
router.put('/', (req,res,next) => {
    const nim = req.body.nim;
    const nama = req.body.nama;
    const jurusan = req.body.jurusan;
    var sql = "UPDATE mahasiswa SET nama = '"+nama+"', jurusan = '"+jurusan+"' WHERE nim = '"+nim+"'";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: 'Berhasil Ubah Data Mahasiswa'
        })
    }) 
})

//delete data mahasiswa
router.delete('/:nim', (req,res,next) => {
    const nim = req.params.nim;
    var sql = "DELETE FROM mahasiswa WHERE nim = '"+nim+"'";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: 'Berhasil Delete Data Mahasiswa'
        })
    }) 
})

module.exports = router;