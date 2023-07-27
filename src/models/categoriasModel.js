// categoriasModel.js
const pool = require('../db');

const getAllCategorias = async () => {
  const query = 'SELECT * FROM categorias;';
  const { rows } = await pool.query(query);
  return rows;
};

const getCategoriaById = async (category_id) => {
  const query = 'SELECT * FROM categorias WHERE category_id = $1;';
  const { rows } = await pool.query(query, [category_id]);
  return rows[0];
};

const addCategoria = async (name, description) => {
  const query = 'INSERT INTO categorias (name, description) VALUES ($1, $2) RETURNING *;';
  const values = [name, description];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

const updateCategoria = async (category_id, name, description) => {
  const query = 'UPDATE categorias SET name = $2, description = $3 WHERE category_id = $1 RETURNING *;';
  const values = [category_id, name, description];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

const deleteCategoria = async (category_id) => {
  const query = 'DELETE FROM categorias WHERE category_id = $1;';
  await pool.query(query, [category_id]);
};

module.exports = {
  getAllCategorias,
  getCategoriaById,
  addCategoria,
  updateCategoria,
  deleteCategoria,
};
