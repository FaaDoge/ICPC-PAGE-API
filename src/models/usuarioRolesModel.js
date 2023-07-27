const pool = require('../db');

const addUsuarioRol = async (user_id, role_id, assigned_at) => {
  try {
    const query = 'INSERT INTO usuario_roles (user_id, role_id, assigned_at) VALUES ($1, $2, $3) RETURNING *';
    const values = [user_id, role_id, assigned_at];
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

const getUsuarioRoles = async () => {
  try {
    const query = 'SELECT * FROM usuario_roles';
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    throw error;
  }
};

const getUsuarioRolById = async (user_role_id) => {
  try {
    const query = 'SELECT * FROM usuario_roles WHERE user_role_id = $1';
    const { rows } = await pool.query(query, [user_role_id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

const updateUsuarioRol = async (user_role_id, user_id, role_id, assigned_at) => {
  try {
    const query = 'UPDATE usuario_roles SET user_id = $1, role_id = $2, assigned_at = $3 WHERE user_role_id = $4 RETURNING *';
    const values = [user_id, role_id, assigned_at, user_role_id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

const deleteUsuarioRol = async (user_role_id) => {
  try {
    const query = 'DELETE FROM usuario_roles WHERE user_role_id = $1';
    await pool.query(query, [user_role_id]);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addUsuarioRol,
  getUsuarioRoles,
  getUsuarioRolById,
  updateUsuarioRol,
  deleteUsuarioRol,
};
