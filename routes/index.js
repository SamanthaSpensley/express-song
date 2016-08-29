var express = require('express');
var router = express.Router();

/* GET home page. */
var verse = {index:'index', verse2: 'verse2', verse3: 'verse3', verse4: 'verse4'}
var verse1 = {
  verse: 'This is the song that doesn\'t end',
  src: 'images/lambchop1.jpg'
}
var verse2 = {
  verse: 'It just goes on and on my friend',
  src: 'images/lambchop2.jpg'
}
var verse3 = {
  verse: 'Some people, started singing it not knowing what it was',
  src: 'images/lambchop3.jpg'
}
var verse4 = {
  verse: 'And they\'ll continue singing it forever just because...',
  src: 'images/lambchop4.jpg'
}

router.get('/', function(req, res, next) {
  res.render('index', verse1)
})

router.get('/:operator', function(req, res, next) {
  var operator = verse[req.params.operator];

 if (operator === 'verse2'){
    res.render('verse2', verse2);
  } else if (operator === 'verse3'){
    res.render('verse3', verse3);
  } else if (operator === 'verse4'){
    res.render('verse4', verse4);
  }
});



module.exports = router;
