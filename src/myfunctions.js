const migrations = require("./migrations/index")

function migrate(){
    migrations.up()
}

migrate();