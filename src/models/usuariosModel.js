// usuariosModel.js
const pool = require('../db');

const getAllUsuarios = async () => {
  const query = 'SELECT * FROM usuarios;';
  const { rows } = await pool.query(query);
  return rows;
};

const getUsuarioById = async (user_id) => {
  const query = 'SELECT * FROM usuarios WHERE user_id = $1;';
  const { rows } = await pool.query(query, [user_id]);
  return rows[0];
};

const addUsuario = async (username, email, password_hash, created_at) => {
  try {
    const query = 'INSERT INTO usuarios (username, email, password_hash, created_at) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [username, email, password_hash, created_at];
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    throw error;
  }
};


const updateUsuario = async (user_id, username, email, password_hash) => {
  const query = 'UPDATE usuarios SET username = $2, email = $3, password_hash = $4 WHERE user_id = $1 RETURNING *;';
  const values = [user_id, username, email, password_hash];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

const deleteUsuario = async (user_id) => {
  const query = 'DELETE FROM usuarios WHERE user_id = $1;';
  await pool.query(query, [user_id]);
};

module.exports = {
  getAllUsuarios,
  getUsuarioById,
  addUsuario,
  updateUsuario,
  deleteUsuario,
};
