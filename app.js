const express = require('express');
const path = require('path');
const usuariosRoutes = require('./src/routes/usuariosRoutes');
const rolesRoutes = require('./src/routes/rolesRoutes');
const categoriasRoutes = require('./src/routes/categoriasRoutes');
const temasRoutes = require('./src/routes/temasRoutes');
const favoritosRoutes = require('./src/routes/favoritosRoutes');
const personasRoutes = require('./src/routes/personasRoutes');
const codigosEjemploRoutes = require('./src/routes/codigosEjemploRoutes');
const usuariosRolesRoutes = require('./src/routes/usuarioRolesRoutes');

const app = express();
const PORT = 3000; // Puedes cambiar el puerto si lo deseas

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Agregar el body-parser aquí

// Middleware para agregar el encabezado CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});
// Ruta de bienvenida con enlaces a los endpoints
// Rutas
app.use('/api', usuariosRoutes);
app.use('/api', rolesRoutes);
app.use('/api', categoriasRoutes);
app.use('/api', temasRoutes);
app.use('/api', favoritosRoutes);
app.use('/api', personasRoutes);
app.use('/api', codigosEjemploRoutes);
app.use('/api', usuariosRolesRoutes);


// Manejador de errores para rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Manejador de errores genérico
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error en el servidor' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
