const { Pool } = require('pg');

// Configuración de la conexión a la base de datos
const pool = new Pool({
  connectionString: '',
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = {
  // Función para consultar a la base de datos
  query: (text, params) => pool.query(text, params),
};
