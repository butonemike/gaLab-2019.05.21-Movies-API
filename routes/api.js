var express = require('express');
var router = express.Router();
var moviesController = require('../controllers/api/movies')
var performersController = require('../controllers/api/performers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/movies', moviesController.getAllMovies)
router.get('/movies/:id', moviesController.getOneMovie)
router.post('/movies', moviesController.createMovie)
router.put('/movies/:id', moviesController.updateMovie)
router.delete('/movies/:id', moviesController.deleteMovie)

router.get('/performers', performersController.getAllPerformers)
router.get('/performers/:id', performersController.getOnePerformer)
router.post('/performers', performersController.createPerformer)
router.put('/performers/:id', performersController.updatePerformer)
router.delete('/performers/:id', performersController.deletePerformer)

module.exports = router;
