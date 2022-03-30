const model = require('../config/model/index');
const controller = {};
const {Op} = require('sequelize');
const db= require('../config/database/mysql');

controller.getAll = async function(req,res) {
    try {
        let jurusan = await model.jurusan.findAll()
            if (jurusan.length > 0) {
                res.status(200).json({
                    message: "Get data semua Jurusan",
                    data: jurusan
                })
            }else{
                res.status(200).json({
                    message: "Tidak ada data",
                    data:[]
                })
            }
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
}

controller.post = async function(req,res) {
    try {
        let jurusan = await model.jurusan.bulkCreate(req.body)
        res.status(201).json({
            message: "Berhasil tambah data jurusan",
            data: jurusan
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

module.exports = controller;