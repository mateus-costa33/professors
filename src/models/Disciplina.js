const { conn } = require('../db');


async function create(profs){
    const sql = 'INSERT INTO disciplinas (id, nome) VALUES (?, ?)';

    const db = await conn();
  
    const { id, nome } = profs;
  
    const { lastID } = await db.run(sql, [id, nome]);
  
    return lastID;
}

async function readAll() {
    const sql = `
      SELECT
        *
      FROM
        disciplinas
    `;
  
    const db = await conn();
  
    const foods = await db.all(sql);
  
    return foods;
}

module.exports = { create, readAll }