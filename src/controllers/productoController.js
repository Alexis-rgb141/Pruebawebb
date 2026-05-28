const productoService = require('../services/productoService');

const productoController = {
    listar: (req, res) => {
        const productos = productoService.obtenerTodos();
        return res.status(200).json(productos);
    },

    obtenerDetalle: (req, res) => {
        const producto = productoService.obtenerPorId(req.params.id);
        if (!producto) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }
        return res.status(200).json(producto);
    },

    crear: (req, res) => {
        // Seguridad obligatoria por cookie
        const authCookie = req.cookies ? req.cookies.session_token : null;
        if (!authCookie || authCookie !== "token_valido_123") {
            return res.status(401).json({ error: "No autorizado. Ausencia de token/cookie válido." });
        }

        // Validación de entrada
        const { nombre, precio } = req.body;
        if (!nombre || !precio) {
            return res.status(400).json({ mensaje: "Faltan campos requeridos (nombre y precio)" });
        }

        const nuevo = productoService.crear({ nombre, precio: parseFloat(precio) });
        return res.status(201).json(nuevo);
    }
};

module.exports = productoController;