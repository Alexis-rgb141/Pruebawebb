const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const productoRoutes = require('./routes/productoRoutes');

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, '..', 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/api/login-simulado', (req, res) => {
    res.cookie('session_token', 'token_valido_123', { httpOnly: true });
    return res.send("Autenticado exitosamente. Cookie establecida.");
});


app.use('/api', productoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});