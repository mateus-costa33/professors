const { conn } = require('../db');

async function up(){
    const db = await conn();

    await db.run(`
        CREATE TABLE disciplinas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT
        )
    `);

    await db.run(`
        CREATE TABLE professores(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT,
            last_name TEXT,
            date TEXT,
            disciplina_id INTEGER,
            FOREIGN KEY (disciplina_id) REFERENCES disciplinas (id)

        )
    `)
}


async function down() {
    const db = await conn();
  
    await db.run('DROP TABLE disciplinas');
  
    await db.run('DROP TABLE professores');
}
  
module.exports = { up, down };