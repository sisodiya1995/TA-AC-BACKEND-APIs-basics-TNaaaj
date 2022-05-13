var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/api/books", (req, res, next) => {
  Model.find({}, (err, users) => {
    if (err) return res.status(500).json(err);
    res.json({ users });
  });
});
module.exports = router;
