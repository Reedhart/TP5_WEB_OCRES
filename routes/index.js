var express = require('express');
var router = express.Router();

let movies = [{
  movie: "King Arthur",
  id: "0",
}]

/* GET home page. */
router.get('/', (req, res) =>{
  res.status(200).json({ movies});
});

module.exports = router;
