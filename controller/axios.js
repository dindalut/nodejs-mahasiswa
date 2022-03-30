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

module.exports = controller;