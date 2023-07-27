// personasController.js
const personasModel = require('../models/personasModel');

const getAllPersonas = async (req, res) => {
  try {
    const personas = await personasModel.getAllPersonas();
    res.json(personas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las personas' });
  }
};

const getPersonaById = async (req, res) => {
  const { person_id } = req.params;
  try {
    const persona = await personasModel.getPersonaById(person_id);
    if (!persona) {
      return res.status(404).json({ message: 'Persona no encontrada' });
    }
    res.json(persona);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la persona' });
  }
};

const addPersona = async (req, res) => {
  const { user_id, full_name, date_of_birth, bio, country, website, created_at } = req.body;
  try {
    const nuevaPersona = await personasModel.addPersona(user_id, full_name, date_of_birth, bio, country, website, created_at);
    res.status(201).json(nuevaPersona);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar la persona' });
  }
};

const updatePersona = async (req, res) => {
  const { person_id } = req.params;
  const { full_name, date_of_birth, bio, country, website } = req.body;
  try {
    const persona = await personasModel.updatePersona(person_id, full_name, date_of_birth, bio, country, website);
    if (!persona) {
      return res.status(404).json({ message: 'Persona no encontrada' });
    }
    res.json(persona);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la persona' });
  }
};

const deletePersona = async (req, res) => {
  const { person_id } = req.params;
  try {
    await personasModel.deletePersona(person_id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la persona' });
  }
};

module.exports = {
  getAllPersonas,
  getPersonaById,
  addPersona,
  updatePersona,
  deletePersona,
};
