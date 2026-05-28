const productoService = require('../services/productoService');

const productoController = {
    listar: (req, res) => {
        const productos = productoService.obtenerTodos();
        return res.status(200).json(productos); // 200 OK
    },

    obtenerDetalle: (req, res) => {
        const producto = productoService.obtenerPorId(req.params.id);
        if (!producto) {
            return res.status(404).json({ mensaje: "Producto no encontrado" }); // 404 Not Found
        }
        return res.status(200).json(producto);
    },

    crear: (req, res) => {
        // --- VALIDACIÓN DE SEGURIDAD MÍNIMA --- [cite: 41, 43, 45]
        // Validamos que venga una cookie de sesión simulada o un token en la cabecera
        const authCookie = req.cookies ? req.cookies.session_token : null;
        if (!authCookie || authCookie !== "token_valido_123") {
            return res.status(401).json({ error: "No autorizado. Ausencia de token/cookie válido." }); // 401 Unauthorized
        }

        // --- VALIDACIÓN DE ENTRADA --- [cite: 32]
        const { nombre, precio } = req.body;
        if (!nombre || !precio) {
            return res.status(400).json({ mensaje: "Faltan campos requeridos (nombre y precio)" }); // 400 Bad Request
        }

        const nuevo = productoService.crear({ nombre, precio: parseFloat(precio) });
        return res.status(201).json(nuevo); // 201 Created
    },

    actualizar: (req, res) => {
        // Validación de seguridad también para escritura
        const authCookie = req.cookies ? req.cookies.session_token : null;
        if (!authCookie || authCookie !== "token_valido_123") {
            return res.status(401).json({ error: "No autorizado" });
        }

        const modificado = productoService.actualizar(req.params.id, req.body);
        if (!modificado) {
            return res.status(404).json({ mensaje: "Producto no encontrado para actualizar" });
        }
        return res.status(200).json(modificado);
    }
};

module.exports = productoController;