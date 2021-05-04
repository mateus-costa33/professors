const express = require('express');
const router = express.Router();
const profs = require("./controllers/ProfsControllers")

router.delete("/profs/:id", profs.destroy)
router.post("/profs/create", profs.create)
router.put("/profs/:id", profs.update);

module.exports = router;
