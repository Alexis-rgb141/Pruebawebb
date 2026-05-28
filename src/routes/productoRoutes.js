const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.get('/productos', productoController.listar);
router.get('/productos/:id', productoController.obtenerDetalle);
router.post('/productos', productoController.crear);
router.put('/productos/:id', productoController.actualizar);

module.exports = router;