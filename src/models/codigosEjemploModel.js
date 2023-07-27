// codigosEjemploModel.js
const pool = require('../db');

const getAllCodigosEjemplo = async () => {
  const query = 'SELECT * FROM codigos_ejemplo;';
  const { rows } = await pool.query(query);
  return rows;
};

const getCodigoEjemploById = async (code_id) => {
  const query = 'SELECT * FROM codigos_ejemplo WHERE code_id = $1;';
  const { rows } = await pool.query(query, [code_id]);
  return rows[0];
};

const addCodigoEjemplo = async (code_title, code_content, topic_id, user_id, created_at) => {
  const query = 'INSERT INTO codigos_ejemplo (code_title, code_content, topic_id, user_id, created_at) VALUES ($1, $2, $3, $4, $5) RETURNING *;';
  const values = [code_title, code_content, topic_id, user_id, created_at];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

const updateCodigoEjemplo = async (code_id, code_title, code_content, topic_id, user_id) => {
  const query = 'UPDATE codigos_ejemplo SET code_title = $2, code_content = $3, topic_id = $4, user_id = $5 WHERE code_id = $1 RETURNING *;';
  const values = [code_id, code_title, code_content, topic_id, user_id];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

const deleteCodigoEjemplo = async (code_id) => {
  const query = 'DELETE FROM codigos_ejemplo WHERE code_id = $1;';
  await pool.query(query, [code_id]);
};

module.exports = {
  getAllCodigosEjemplo,
  getCodigoEjemploById,
  addCodigoEjemplo,
  updateCodigoEjemplo,
  deleteCodigoEjemplo,
};
