const axios = require('axios');
const controller = {}

controller.getAll = async function (req,res){
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(function(response){
        res.status(200).json({
            message: 'Data dari public API',
            data: response.data
        })
    })
    .catch(function(error){
        res.status(404).json({
            message: error.message
        })
    })
}

module.exports = controller;