// rolesModel.js
const pool = require('../db');

const getAllRoles = async () => {
  const query = 'SELECT * FROM roles;';
  const { rows } = await pool.query(query);
  return rows;
};

const getRoleById = async (role_id) => {
  const query = 'SELECT * FROM roles WHERE role_id = $1;';
  const { rows } = await pool.query(query, [role_id]);
  return rows[0];
};

const addRole = async (name, description) => {
  const query = 'INSERT INTO roles (name, description) VALUES ($1, $2) RETURNING *;';
  const values = [name, description];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

const updateRole = async (role_id, name, description) => {
  const query = 'UPDATE roles SET name = $2, description = $3 WHERE role_id = $1 RETURNING *;';
  const values = [role_id, name, description];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

const deleteRole = async (role_id) => {
  const query = 'DELETE FROM roles WHERE role_id = $1;';
  await pool.query(query, [role_id]);
};

module.exports = {
  getAllRoles,
  getRoleById,
  addRole,
  updateRole,
  deleteRole,
};
