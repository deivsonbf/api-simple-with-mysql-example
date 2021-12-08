const express = require('express');
const router = express.Router();

const defaultController = require('../controllers/default-controller')

// Rota GET
router.get('/', defaultController.allUsers);

// Rota POST
router.post('/', defaultController.insertUserOntwoTable);

module.exports = router;