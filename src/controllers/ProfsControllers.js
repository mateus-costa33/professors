const Prof = require('../models/Professor');
const Category = require('../models/Disciplina');

const index = async (req, res) => {
  const profs = await Prof.readAll();

  const disciplinas = await Category.readAll();

  return res.render('profs/index.njk', { profs, disciplinas });
};

const readAll = async (req, res) => {
  const profs = await Prof.readAll();

  res.json(profs);
};

const create = async (req, res) => {
  const { first_name, last_name,  date, disciplina_id } = req.body;

  const newProf = { first_name, last_name, date, disciplina_id };

  const profId = await Prof.createAutoInc(newProf);

  const prof = await Prof.readById(profId);

  res.json(prof);
};

const update = async (req, res) => {
  const { id } = req.params;

  const { first_name, last_name, date, disciplina_id } = req.body;

  const updateprof = { first_name, last_name, date, disciplina_id };

  await Prof.update(id, updateprof);

  const prof = await Prof.readById(id);

  res.json(prof);
};

const destroy = async (req, res) => {
  const { id } = req.params;

  await Prof.destroy(id);

  res.status(204).send();
};

module.exports = { index, readAll, create, update, destroy };
