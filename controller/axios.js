const axios = require('axios');
const controller = {}

controller.getAll = async function (req,res){
    try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
        if (response.data.length > 0) {
            res.status(200).json({
                message: "Data dari public API",
                data: response.data
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

controller.post = async function (req,res){
    try {
        const response = await axios({
            method: 'POST',
            url : 'http://jsonplaceholder.typicode.com/posts',
            data: {
                title: req.body.title,
                body: req.body.body,
                userId: 1
            }
        });
       res.status(201).json({
           message: 'Berhasil Tambah Data',
           data: response.data
       })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
}

controller.put = async function (req,res){
    try {
        var id = req.params.id
        const response = await axios({
            method: 'put',
            url : 'http://jsonplaceholder.typicode.com/posts/'+id,
            data: {
                title: req.body.title,
                body: req.body.body,
                userId: 1
            }
        });
       res.status(201).json({
           message: 'Berhasil Edit Data',
           data: response.data
       })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
}

controller.delete = async function (req,res){
    try {
        var id = req.params.id
        const response = await axios({
            method: 'delete',
            url : 'http://jsonplaceholder.typicode.com/posts/'+id
        });
       res.status(201).json({
           message: 'Berhasil Hapus Data',
           data: response.data
       })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
}

module.exports = controller;