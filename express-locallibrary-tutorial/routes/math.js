var express = require('express');
var router = express.Router();

// Require controller modules.
var math_controller = require('../controllers/mathController');

/// MATH ROUTES ///

// GET math home page.
router.get('/', math_controller.index);

// POST request for maths.
router.post('/check', math_controller.check_answers);

module.exports = router;