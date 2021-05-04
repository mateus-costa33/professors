const seeders = require("./sedeers/index");

function migrate(){
    seeders.up();
}

migrate();