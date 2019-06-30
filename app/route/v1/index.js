const express = require('express');
const router = express.Router();

// ---------------------------------------------------- //
// GET http://localhost:3000/api/v1/
router.get('/', function(req, res){
  res.json({
    message: "Hello, World!"
  });
});

router.use('/article', require('./article'));
router.use('/user', require('./user'));

module.exports = router;
