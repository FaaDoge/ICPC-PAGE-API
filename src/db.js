const { Pool } = require('pg');

// Configuración de la conexión a la base de datos
const pool = new Pool({
  connectionString: 'postgres://fabricio:Wu8dBwO6gschIwRyjzQXCWhyvIfgNVPB@dpg-cj09egj438irjjbasg50-a.oregon-postgres.render.com/icpc',
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = {
  // Función para consultar a la base de datos
  query: (text, params) => pool.query(text, params),
};
