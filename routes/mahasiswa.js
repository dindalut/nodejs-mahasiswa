const express = require('express');
const router = express.Router();
const db = require('../config/database/mysql');
const controller = require('../controller/index');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './assets');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage});

//mengambil data mahasiswa
router.get('/', controller.mahasiswa.getAll);
router.get('/search', controller.mahasiswa.getSearch);
router.get('/:nim', controller.mahasiswa.getOne);
router.post('/', upload.single('foto'), controller.mahasiswa.post);
router.put('/:nim', controller.mahasiswa.put);
router.delete('/:nim', controller.mahasiswa.delete);

module.exports = router;
