var express = require('express');
var router = express.Router();


router.use('/reports', require('./reports'));
router.use('/admin', require('./adminz'));

module.exports = router;
