// temasModel.js
const pool = require('../db');

const getAllTemas = async () => {
  const query = 'SELECT * FROM temas;';
  const { rows } = await pool.query(query);
  return rows;
};

const getTemaById = async (topic_id) => {
  const query = 'SELECT * FROM temas WHERE topic_id = $1;';
  const { rows } = await pool.query(query, [topic_id]);
  return rows[0];
};

const addTema = async (title, content, category_id, created_at) => {
  const query = 'INSERT INTO temas (title, content, category_id, created_at) VALUES ($1, $2, $3, $4) RETURNING *;';
  const values = [title, content, category_id, created_at];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

const updateTema = async (topic_id, title, content, category_id) => {
  const query = 'UPDATE temas SET title = $2, content = $3, category_id = $4 WHERE topic_id = $1 RETURNING *;';
  const values = [topic_id, title, content, category_id];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

const deleteTema = async (topic_id) => {
  const query = 'DELETE FROM temas WHERE topic_id = $1;';
  await pool.query(query, [topic_id]);
};

module.exports = {
  getAllTemas,
  getTemaById,
  addTema,
  updateTema,
  deleteTema,
};
