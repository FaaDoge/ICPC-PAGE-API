// validations.js

const Joi = require('joi');

// Validaciones para la tabla 'categorias'
const categoriasValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().allow(null),
  });
  return schema.validate(data);
};

// Validaciones para la tabla 'codigos_ejemplo'
const codigosEjemploValidation = (data) => {
  const schema = Joi.object({
    code_title: Joi.string().required(),
    code_content: Joi.string().allow(null),
    topic_id: Joi.number().integer().allow(null),
    user_id: Joi.number().integer().allow(null),
    created_at: Joi.date().required(),
  });
  return schema.validate(data);
};

// Validaciones para la tabla 'favoritos'
const favoritosValidation = (data) => {
  const schema = Joi.object({
    user_id: Joi.number().integer().allow(null),
    topic_id: Joi.number().integer().allow(null),
    created_at: Joi.date().required(),
  });
  return schema.validate(data);
};

// Validaciones para la tabla 'personas'
const personasValidation = (data) => {
  const schema = Joi.object({
    user_id: Joi.number().integer().allow(null),
    full_name: Joi.string().allow(null),
    date_of_birth: Joi.date().allow(null),
    bio: Joi.string().allow(null),
    country: Joi.string().allow(null),
    website: Joi.string().allow(null),
    created_at: Joi.date().required(),
  });
  return schema.validate(data);
};

// Validaciones para la tabla 'roles'
const rolesValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().allow(null),
  });
  return schema.validate(data);
};

// Validaciones para la tabla 'temas'
const temasValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().allow(null),
    category_id: Joi.number().integer().allow(null),
    created_at: Joi.date().required(),
  });
  return schema.validate(data);
};

// Validaciones para la tabla 'usuarios'
const usuariosValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password_hash: Joi.string().required(),
    created_at: Joi.date().allow(null),
  });
  return schema.validate(data);
};

// Validaciones para la tabla 'usuario_roles'
const usuarioRolesValidation = (data) => {
  const schema = Joi.object({
    user_id: Joi.number().integer().allow(null),
    role_id: Joi.number().integer().allow(null),
    assigned_at: Joi.date().required(),
  });
  return schema.validate(data);
};

module.exports = {
  categoriasValidation,
  codigosEjemploValidation,
  favoritosValidation,
  personasValidation,
  rolesValidation,
  temasValidation,
  usuariosValidation,
  usuarioRolesValidation,
};
