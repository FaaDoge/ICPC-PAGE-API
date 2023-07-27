// codigosEjemploController.js
const codigosEjemploModel = require('../models/codigosEjemploModel');

const getAllCodigosEjemplo = async (req, res) => {
  try {
    const codigosEjemplo = await codigosEjemploModel.getAllCodigosEjemplo();
    res.json(codigosEjemplo);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los códigos de ejemplo' });
  }
};

const getCodigoEjemploById = async (req, res) => {
  const { code_id } = req.params;
  try {
    const codigoEjemplo = await codigosEjemploModel.getCodigoEjemploById(code_id);
    if (!codigoEjemplo) {
      return res.status(404).json({ message: 'Código de ejemplo no encontrado' });
    }
    res.json(codigoEjemplo);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el código de ejemplo' });
  }
};

const addCodigoEjemplo = async (req, res) => {
  const { code_title, code_content, topic_id, user_id, created_at } = req.body;
  try {
    const nuevoCodigoEjemplo = await codigosEjemploModel.addCodigoEjemplo(code_title, code_content, topic_id, user_id, created_at);
    res.status(201).json(nuevoCodigoEjemplo);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el código de ejemplo' });
  }
};

const updateCodigoEjemplo = async (req, res) => {
  const { code_id } = req.params;
  const { code_title, code_content, topic_id, user_id } = req.body;
  try {
    const codigoEjemplo = await codigosEjemploModel.updateCodigoEjemplo(code_id, code_title, code_content, topic_id, user_id);
    if (!codigoEjemplo) {
      return res.status(404).json({ message: 'Código de ejemplo no encontrado' });
    }
    res.json(codigoEjemplo);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el código de ejemplo' });
  }
};

const deleteCodigoEjemplo = async (req, res) => {
  const { code_id } = req.params;
  try {
    await codigosEjemploModel.deleteCodigoEjemplo(code_id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el código de ejemplo' });
  }
};

module.exports = {
  getAllCodigosEjemplo,
  getCodigoEjemploById,
  addCodigoEjemplo,
  updateCodigoEjemplo,
  deleteCodigoEjemplo,
};
