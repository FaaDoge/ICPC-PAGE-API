// categoriasController.js
const categoriasModel = require('../models/categoriasModel');
const { categoriasValidation } = require('../validations/validations');

const getAllCategorias = async (req, res) => {
  try {
    const categorias = await categoriasModel.getAllCategorias();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las categorías' });
  }
};

const getCategoriaById = async (req, res) => {
  const { category_id } = req.params;
  try {
    const categoria = await categoriasModel.getCategoriaById(category_id);
    if (!categoria) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la categoría' });
  }
};

const addCategoria = async (req, res) => {
  const { name, description } = req.body;
  const { error } = categoriasValidation({ name, description }); // Validate the request data
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const nuevaCategoria = await categoriasModel.addCategoria(name, description);
    res.status(201).json(nuevaCategoria);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar la categoría' });
  }
};

const updateCategoria = async (req, res) => {
  const { category_id } = req.params;
  const { name, description } = req.body;
  const { error } = categoriasValidation({ name, description }); // Validate the request data
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const categoria = await categoriasModel.updateCategoria(category_id, name, description);
    if (!categoria) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la categoría' });
  }
};

const deleteCategoria = async (req, res) => {
  const { category_id } = req.params;
  try {
    await categoriasModel.deleteCategoria(category_id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la categoría' });
  }
};

module.exports = {
  getAllCategorias,
  getCategoriaById,
  addCategoria,
  updateCategoria,
  deleteCategoria,
};
