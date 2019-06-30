const express   = require('express');
const router    = express.Router();
const UserModel = require('../../../models/userModel');

// ---------------------------------------------------- //
// POST http://localhost:3000/api/v1/user/
router.post('/',function(req,res){
  const User = new UserModel();
  User.name = req.body.name;
  User.job = req.body.job;
  User.bio =  req.body.bio;
  User.save(function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'Success!' });
  });
});

// ---------------------------------------------------- //
// GET http://localhost:3000/api/v1/user/
router.get('/', function (req, res) {
  UserModel
    .find()
    .then(function (users) {
        res.json(users);
    });
});

// ---------------------------------------------------- //
// GET http://localhost:3000/api/v1/user/:id
router.get('/:id', function (req, res) {
    const Userid = req.params.id;
    UserModel
      .findById(Userid,function (err,user) {
        if (err)
          res.send(err);
        res.json(user);
      });
});

// ---------------------------------------------------- //
// PUT http://localhost:3000/api/v1/user/:id
router.put('/:id',function (req, res) {
  const Userid = req.params.id;
  UserModel
    .findById(Userid, function(err, user) {
      if (err)
        res.send(err);
      user.name = req.body.name;
      user.job = req.body.job;
      user.bio = req.body.bio;
      
      user.save(function(err) {
        if (err)
          res.send(err);
        res.json({ message: 'Success!' });
      });
    });
});

// ---------------------------------------------------- //
// DELETE http://localhost:3000/api/v1/user/:id
router.delete('/:id', function(req, res) {
  UserModel.remove({
    _id: req.params.id
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: "Successfully deleted"});
  });
});

module.exports = router;
