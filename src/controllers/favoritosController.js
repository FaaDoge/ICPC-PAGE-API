// favoritosController.js
const favoritosModel = require('../models/favoritosModel');

const getAllFavoritos = async (req, res) => {
  try {
    const favoritos = await favoritosModel.getAllFavoritos();
    res.json(favoritos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los favoritos' });
  }
};

const getFavoritoById = async (req, res) => {
  const { favorite_id } = req.params;
  try {
    const favorito = await favoritosModel.getFavoritoById(favorite_id);
    if (!favorito) {
      return res.status(404).json({ message: 'Favorito no encontrado' });
    }
    res.json(favorito);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el favorito' });
  }
};

const addFavorito = async (req, res) => {
  const { user_id, topic_id, created_at } = req.body;
  try {
    const nuevoFavorito = await favoritosModel.addFavorito(user_id, topic_id, created_at);
    res.status(201).json(nuevoFavorito);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el favorito' });
  }
};

const deleteFavorito = async (req, res) => {
  const { favorite_id } = req.params;
  try {
    await favoritosModel.deleteFavorito(favorite_id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el favorito' });
  }
};

module.exports = {
  getAllFavoritos,
  getFavoritoById,
  addFavorito,
  deleteFavorito,
};
