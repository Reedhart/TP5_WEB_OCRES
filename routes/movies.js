
// Load the full build.
const _ = require('lodash');
// Load the core build.
//var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
//var fp = require('lodash/fp');
 
// Load method categories.
//var array = require('lodash/array');
//var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
//var at = require('lodash/at');
//var curryN = require('lodash/fp/curryN');

const express = require('express');
const router = express.Router();

let movies = [{
  movie: "Star Wars",
  id: "0"
}];

/* GET movies listing. */
router.get('/', ( req, res) => {
  res.status(200).json({ movies });
});

//GET one movie listing
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const movie = _.find(movies, ["id", id]);
  res.status(200).json({
    message: 'Movie found',
    movie
  });
});

/*PUT*/
router.put('/', ( req, res) => {
  const{ movie } = req.body;
  const id =  _.uniqueId();
  movies.push({ movie, id });

  res.json({
    message: `Just added ${id}`,
    movie: { movie, id }
  });
});

//POST
router.post('/:id', (req, res) => {
  const { id } = req.params;
  const { movie } = req.body;
  const movieToUpdate = _.find( movies, ["id", id]);
  movieToUpdate.movie = movie;

  res.json({
    message: `Just updated ${id} with ${movie}`
  });
});

//DELETE
router.delete('/:id', (req, res) => {

  const { id } = req.params;

  _.remove(movies, ["id", id]);

  res.json({
    message: `Just removed ${id}`
  });
});

module.exports = router;