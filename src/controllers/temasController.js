const temasModel = require('../models/temasModel');
const { temasValidation } = require('../validations/validations');

const getAllTemas = async (req, res) => {
  try {
    const temas = await temasModel.getAllTemas();
    res.json(temas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los temas' });
  }
};

const getTemaById = async (req, res) => {
  const { topic_id } = req.params;
  try {
    const tema = await temasModel.getTemaById(topic_id);
    if (!tema) {
      return res.status(404).json({ message: 'Tema no encontrado' });
    }
    res.json(tema);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el tema' });
  }
};

const addTema = async (req, res) => {
  const { error } = temasValidation(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { title, content, category_id, created_at } = req.body;
  try {
    const nuevoTema = await temasModel.addTema(title, content, category_id, created_at);
    res.status(201).json(nuevoTema);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el tema' });
  }
};

const updateTema = async (req, res) => {
  const { topic_id } = req.params;
  const { error } = temasValidation(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { title, content, category_id } = req.body;
  try {
    const tema = await temasModel.updateTema(topic_id, title, content, category_id);
    if (!tema) {
      return res.status(404).json({ message: 'Tema no encontrado' });
    }
    res.json(tema);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el tema' });
  }
};

const deleteTema = async (req, res) => {
  const { topic_id } = req.params;
  try {
    await temasModel.deleteTema(topic_id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el tema' });
  }
};

const getTemasByCategoryId = async (req, res) => {
  const { category_id } = req.params;

  try {
    const temas = await temasModel.getTemasByCategoryId(category_id);
    res.json(temas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los temas por ID de categoría' });
  }
};

module.exports = {
  getAllTemas,
  getTemaById,
  addTema,
  updateTema,
  deleteTema,
  getTemasByCategoryId,
};
