const Disciplinas = require('../models/Disciplina');

const readAll = async (req, res) => {
  const categories = await Disciplinas.readAll();

  res.json(categories);
};

module.exports = { readAll };
