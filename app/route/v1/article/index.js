const express = require('express');
const router = express.Router();
const ArticleModel = require('../../../models/articleModel')

// ---------------------------------------------------- //
// POST http://localhost:3000/api/v1/article/
router.post('/',function(req,res){
  const Article = new ArticleModel();
  Article.title = req.body.title;
  Article.content = req.body.content;
  Article.setDate();
  Article.save(function(err) {
    if (err)
      res.send(err);
    res.json({message: 'Success!!'});
  });
});

// ---------------------------------------------------- //
// GET http://localhost:3000/api/v1/article/
router.get('/', function (req, res) {
  ArticleModel
    .find()
    .then(function (articles) {
      res.json(articles);
    });
});

// ---------------------------------------------------- //
// GET http://localhost:3000/api/v1/article/:id
router.get('/:id', function (req, res) {
  const Articleid = req.params.id;
  ArticleModel
    .findById(Articleid,function (err,article) {
      if (err)
        res.send(err);
      res.json(article);
    });
});

// ---------------------------------------------------- //
// DELETE http://localhost:3000/api/v1/article/
router.delete('/:id',function(req,res){
  var Articleid = req.params.id;
  ArticleModel.remove({_id:Articleid})
    .then(function(){
      res.json({message:'Success!!'});
    });
});

module.exports = router;
