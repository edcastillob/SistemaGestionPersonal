const { Router } = require("express");

const router = Router();


router.get('/', function(req, res) {
    res.send('Backend Sistema de Gestion de empleados');
  })

module.exports = router;
