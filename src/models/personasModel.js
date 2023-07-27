// personasModel.js
const pool = require('../db');

const getAllPersonas = async () => {
  const query = 'SELECT * FROM personas;';
  const { rows } = await pool.query(query);
  return rows;
};

const getPersonaById = async (person_id) => {
  const query = 'SELECT * FROM personas WHERE person_id = $1;';
  const { rows } = await pool.query(query, [person_id]);
  return rows[0];
};

const addPersona = async (user_id, full_name, date_of_birth, bio, country, website, created_at) => {
  const query = 'INSERT INTO personas (user_id, full_name, date_of_birth, bio, country, website, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;';
  const values = [user_id, full_name, date_of_birth, bio, country, website, created_at];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

const updatePersona = async (person_id, full_name, date_of_birth, bio, country, website) => {
  const query = 'UPDATE personas SET full_name = $2, date_of_birth = $3, bio = $4, country = $5, website = $6 WHERE person_id = $1 RETURNING *;';
  const values = [person_id, full_name, date_of_birth, bio, country, website];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

const deletePersona = async (person_id) => {
  const query = 'DELETE FROM personas WHERE person_id = $1;';
  await pool.query(query, [person_id]);
};

module.exports = {
  getAllPersonas,
  getPersonaById,
  addPersona,
  updatePersona,
  deletePersona,
};
