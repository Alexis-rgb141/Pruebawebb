const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/productos.json');

const leerArchivo = () => {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};

const escribirArchivo = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
};

const productoService = {
    obtenerTodos: () => {
        return leerArchivo();
    },
    obtenerPorId: (id) => {
        const productos = leerArchivo();
        return productos.find(p => p.id === parseInt(id));
    },
    crear: (nuevoProducto) => {
        const productos = leerArchivo();
        const nuevoId = productos.length > 0 ? productos[productos.length - 1].id + 1 : 1;
        const productoParaGuardar = { id: nuevoId, ...nuevoProducto };
        productos.push(productoParaGuardar);
        escribirArchivo(productos);
        return productoParaGuardar;
    }
};

module.exports = productoService;