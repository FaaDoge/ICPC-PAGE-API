const usuarioRolesModel = require('../models/usuarioRolesModel');

const addUsuarioRol = async (req, res) => {
  const { error } = usuarioRolesValidation(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { user_id, role_id, assigned_at } = req.body;
  try {
    const nuevoUsuarioRol = await usuarioRolesModel.addUsuarioRol(user_id, role_id, assigned_at);
    res.status(201).json(nuevoUsuarioRol);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el usuario_rol' });
  }
};


const getUsuarioRoles = async (req, res) => {
  try {
    const usuarioRoles = await usuarioRolesModel.getUsuarioRoles();
    res.json(usuarioRoles);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuario_roles' });
  }
};

const getUsuarioRolById = async (req, res) => {
  const { user_role_id } = req.params;
  try {
    const usuarioRol = await usuarioRolesModel.getUsuarioRolById(user_role_id);
    if (usuarioRol) {
      res.json(usuarioRol);
    } else {
      res.status(404).json({ message: 'Usuario_rol no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario_rol' });
  }
};

const updateUsuarioRol = async (req, res) => {
  const { user_role_id } = req.params;
  const { user_id, role_id, assigned_at } = req.body;

  const { error } = usuarioRolesValidation(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const usuarioRolActualizado = await usuarioRolesModel.updateUsuarioRol(user_role_id, user_id, role_id, assigned_at);
    if (usuarioRolActualizado) {
      res.json(usuarioRolActualizado);
    } else {
      res.status(404).json({ message: 'Usuario_rol no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario_rol' });
  }
};


const deleteUsuarioRol = async (req, res) => {
  const { user_role_id } = req.params;
  try {
    await usuarioRolesModel.deleteUsuarioRol(user_role_id);
    res.json({ message: 'Usuario_rol eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario_rol' });
  }
};

module.exports = {
  addUsuarioRol,
  getUsuarioRoles,
  getUsuarioRolById,
  updateUsuarioRol,
  deleteUsuarioRol,
};
