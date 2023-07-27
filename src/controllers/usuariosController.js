// usuariosController.js
const usuariosModel = require('../models/usuariosModel');

const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await usuariosModel.getAllUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};

const getUsuarioById = async (req, res) => {
  const { user_id } = req.params;
  try {
    const usuario = await usuariosModel.getUsuarioById(user_id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};
const addUsuario = async (req, res) => {
  const { username, email, password_hash, created_at } = req.body;
  try {
    const nuevoUsuario = await usuariosModel.addUsuario(username, email, password_hash, created_at);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el usuario' });
  }
};
updateUsuario = async (req, res) => {
  const { user_id } = req.params;
  const { username, email, password_hash } = req.body;
  try {
    const usuario = await usuariosModel.updateUsuario(user_id, username, email, password_hash);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
};

const deleteUsuario = async (req, res) => {
  const { user_id } = req.params;
  try {
    await usuariosModel.deleteUsuario(user_id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
};

module.exports = {
  getAllUsuarios,
  getUsuarioById,
  addUsuario,
  updateUsuario,
  deleteUsuario,
};
