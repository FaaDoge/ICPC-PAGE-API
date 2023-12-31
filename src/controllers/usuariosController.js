const bcrypt = require('bcrypt');
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
    const hashedPassword = await bcrypt.hash(password_hash, 10); // Generar el hash de la contraseña con salt 10
    const nuevoUsuario = await usuariosModel.addUsuario(username, email, hashedPassword, created_at);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el usuario' });
  }
};

const updateUsuario = async (req, res) => {
  const { user_id } = req.params;
  const { username, email, password_hash, created_at } = req.body;
  try {
    // Verificar si se proporcionó una contraseña para actualizarla

    const hashedPassword = await bcrypt.hash(password_hash, 10); // Generar el hash de la contraseña con salt 10
    const usuario = await usuariosModel.updateUsuario(user_id, username, email, hashedPassword, created_at);
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
    const usuarioEliminado = await usuariosModel.deleteUsuario(user_id);
    if (!usuarioEliminado) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json({ message: 'Usuario eliminado exitosamente', usuario: usuarioEliminado });
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
