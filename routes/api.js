var express = require('express');
var router = express.Router();
var moviesController = require('../controllers/api/movies')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/movies', moviesController.getAllMovies)
router.get('/movies/:id', moviesController.getOneMovie)
router.post('/movies', moviesController.createMovie)
router.put('/movies/:id', moviesController.updateMovie)
router.delete('/movies/:id', moviesController.deleteMovie)

module.exports = router;
