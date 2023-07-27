// rolesController.js
const rolesModel = require('../models/rolesModel');

const getAllRoles = async (req, res) => {
  try {
    const roles = await rolesModel.getAllRoles();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los roles' });
  }
};

const getRoleById = async (req, res) => {
  const { role_id } = req.params;
  try {
    const role = await rolesModel.getRoleById(role_id);
    if (!role) {
      return res.status(404).json({ message: 'Rol no encontrado' });
    }
    res.json(role);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el rol' });
  }
};

const addRole = async (req, res) => {
  const { name, description } = req.body;
  try {
    const nuevoRole = await rolesModel.addRole(name, description);
    res.status(201).json(nuevoRole);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el rol' });
  }
};

const updateRole = async (req, res) => {
  const { role_id } = req.params;
  const { name, description } = req.body;
  try {
    const role = await rolesModel.updateRole(role_id, name, description);
    if (!role) {
      return res.status(404).json({ message: 'Rol no encontrado' });
    }
    res.json(role);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el rol' });
  }
};

const deleteRole = async (req, res) => {
  const { role_id } = req.params;
  try {
    await rolesModel.deleteRole(role_id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el rol' });
  }
};

module.exports = {
  getAllRoles,
  getRoleById,
  addRole,
  updateRole,
  deleteRole,
};
