var express = require('express');
var router = express.Router();


router.post('/create-user', function (req, res, next) {
  console.log(req.body);
  req.body.age += 2;
  res.send(req.body);
});

router.get('/ask', function (req, res, next) {
  console.log(req.query);
  res.send(req.query);
})

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
