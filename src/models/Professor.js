const { conn } = require('../db');


async function create(profs){
    const sql = `
    INSERT INTO
      professores (id, first_name, last_name, date, disciplina_id)
    VALUES
      (?, ?, ?, ?, ?)
    `;

  const db = await conn();

  const { id, first_name, last_name, date, disciplina_id } = profs;

  const { lastID } = await db.run(sql, [id, first_name, last_name, date, disciplina_id]);

  return lastID;
}

async function createAutoInc(profs) {
    const sql = `
      INSERT INTO
        professores (first_name, last_name, date, disciplina_id)
      VALUES
        (?, ?, ?, ?)
      `;
  
    const db = await conn();
  
    const { first_name, last_name, date, disciplina_id } = profs;
  
    const { lastID } = await db.run(sql, [first_name, last_name, date, disciplina_id]);
  
    return lastID;
}

async function readAll() {
    const sql = `
      SELECT
        professores.id, professores.first_name, professores.last_name, professores.date, professores.disciplina_id, disciplinas.nome as disciplina
      FROM
        disciplinas INNER JOIN professores
      WHERE
        disciplinas.id = professores.disciplina_id
    `;
  
    const db = await conn();
  
    const professores = await db.all(sql);
  
    return professores;
}

async function readById(id) {
    const sql = `
      SELECT
        professores.id, professores.first_name, professores.last_name, professores.date, disciplinas.nome as disciplina
      FROM
        disciplinas INNER JOIN professores
      WHERE
        disciplinas.id = professores.disciplina_id AND
        professores.id = ?
    `;
  
    const db = await conn();
  
    const food = await db.get(sql, id);
  
    return food;
}
  
async function update(id, profs) {
    const sql = `
      UPDATE
        professores
      SET
        first_name = ? , last_name = ?, date = ?, disciplina_id = ?
      WHERE
        id = ?
    `;
  
    const db = await conn();
  
    const { first_name, last_name, date, disciplina_id } = profs;
  
    const { changes } = await db.run(sql, [first_name, last_name, date, disciplina_id, id]);
  
    return changes;
}
  
async function destroy(id) {
    const sql = `
      DELETE FROM
        professores
      WHERE
        id = ?
    `;
  
    const db = await conn();
  
    const { lastID } = await db.run(sql, [id]);
  
    return lastID;
}
  
module.exports = { create, createAutoInc, readAll, readById, update, destroy };
  