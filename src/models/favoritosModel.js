const pool = require('../db');

const getAllFavoritos = async () => {
  const query = 'SELECT * FROM favoritos;';
  const { rows } = await pool.query(query);
  return rows;
};

const getFavoritoById = async (favorite_id) => {
  const query = 'SELECT * FROM favoritos WHERE favorite_id = $1;';
  const { rows } = await pool.query(query, [favorite_id]);
  return rows[0];
};

const addFavorito = async (user_id, topic_id, created_at) => {
  const query = 'INSERT INTO favoritos (user_id, topic_id, created_at) VALUES ($1, $2, $3) RETURNING *;';
  const values = [user_id, topic_id, created_at];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

const updateFavorito = async (favorite_id, user_id, topic_id, created_at) => {
  const query = 'UPDATE favoritos SET user_id = $2, topic_id = $3, created_at = $4 WHERE favorite_id = $1 RETURNING *;';
  const values = [favorite_id, user_id, topic_id, created_at];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

const deleteFavorito = async (favorite_id) => {
  const query = 'DELETE FROM favoritos WHERE favorite_id = $1;';
  await pool.query(query, [favorite_id]);
};

module.exports = {
  getAllFavoritos,
  getFavoritoById,
  addFavorito,
  updateFavorito,
  deleteFavorito,
};
