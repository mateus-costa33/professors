const express = require('express');
const router = express.Router();
const profs = require("./controllers/ProfsControllers")
const users = require("./controllers/UsersControllers")

router.delete("/profs/:id", profs.destroy)
router.post("/profs/create", profs.create)
router.put("/profs/:id", profs.update);

router.get("/singup", users.create);
router.post('/signup', users.store);


module.exports = router;
