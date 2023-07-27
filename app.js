const express = require('express');
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

// Ruta de bienvenida con enlaces a los endpoints
app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>API de Aprendizaje de Programación Competitiva</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f7f7f7;
        margin: 20px;
      }
  
      h1 {
        color: #333;
      }
  
      p {
        color: #666;
      }
  
      ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
      }
  
      li {
        flex: 0 0 calc(50% - 20px); /* Dividir en 2 columnas y agregar margen */
        margin: 0 10px 10px 10px; /* Agregar margen horizontal de 10px y margen inferior de 10px */
      }
  
      .button {
        display: block;
        padding: 10px 20px;
        background-color: #007BFF;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
        transition: background-color 0.2s;
        text-align: center;
      }
  
      .button:hover {
        background-color: #0056b3;
      }
    </style>
  </head>
  <body>
    <h1>Bienvenido a la API de Aprendizaje de Programación Competitiva</h1>
    <p>Aquí encontrarás diferentes botones para acceder a los endpoints de la API:</p>
    <ul>
      <li><a href="/api/usuarios" class="button">Usuarios</a></li>
      <li><a href="/api/roles" class="button">Roles</a></li>
      <li><a href="/api/usuario_roles" class="button">Usuario Roles</a></li>
      <li><a href="/api/categorias" class="button">Categorías</a></li>
      <li><a href="/api/temas" class="button">Temas</a></li>
      <li><a href="/api/favoritos" class="button">Favoritos</a></li>
      <li><a href="/api/personas" class="button">Personas</a></li>
      <li><a href="/api/codigosEjemplo" class="button">Códigos de Ejemplo</a></li>
    </ul>
  </body>
  </html>
  
  
  `);
});

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
