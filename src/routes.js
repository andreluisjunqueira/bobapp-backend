const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('../src/controllers/BoxController');
const FileController = require('../src/controllers/FIleController');

routes.post('/boxes', BoxController.store);

routes.get('/boxes/:id', BoxController.show);

routes.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store);

module.exports = routes;