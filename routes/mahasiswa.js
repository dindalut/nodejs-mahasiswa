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

router.post('/', (req,res,next) => {
    const mahasiswa = {
        nim: req.body.nim,
        nama: req.body.nama
    }
    res.status(200).json({
        message: 'Post Method Mahasiswa',
        data: mahasiswa
    })
})

//mencari mahasiswa berdasarkan nim
router.get('/:nim', (req,res,next) => {
    const nim = req.params.nim;
    if(nim === '12345') {
        res.status(200).json({
            message: "NIM 12345"
        })
    }else {
        res.status(200).json ({
            message:"NIM lain"
        })
    }
    res.status(200).json({
        message: 'Get Method Mahasiswa'
    })
})

//update data mahasiswa
router.put('/', (req,res,next) => {
    res.status(200).json({
        message: 'Put Method Mahasiswa'
    })
})

//delete data mahasiswa
router.delete('/', (req,res,next) => {
    res.status(200).json({
        message: 'Delete Method Mahasiswa'
    })
})

module.exports = router;
