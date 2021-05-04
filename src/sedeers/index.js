const Professor = require('../models/Professor');
const Disciplina = require('../models/Disciplina');
const fs = require('fs');
const path = require('path');

function up() {
  const content = fs.readFileSync(path.join(__dirname, 'arq.json'));
  const arq = JSON.parse(content);

  for (const disciplina of arq.disciplinas) {
    Disciplina.create(disciplina);
  }

  for (const professor of arq.professores) {
    Professor.create(professor);
  }
}

module.exports = { up };
