var express = require('express');
var router = express.Router();
// Book is modal
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/api/v1/books", (req, res, next) => {
    Book.find({}, (err, books) => {
      if (err) return res.status(500).json(err);
      res.json({ books });
    });
  });

  router.get("/api/v1/books:id", (req, res, next) => {
      var id = req.params.id
    Book.findbyId(id, (err, book) => {
      if (err) return res.status(500).json(err);
      res.json({ book });
    });
  });

  router.post("/api/v1/books", (req, res, next) => {
  Book.create(req.body, (err, addbook) => {
    if (err) return res.status(500).json(err);
    res.json({ addbook });
  });
});

router.put("/api/v1/books:id", (req, res, next) => {
    var id = req.params.id
  Book.findbyIdAndupdate(id, (err, updatebook) => {
    if (err) return res.status(500).json(err);
    res.json({ updatebook});
  });
});

router.delete("/api//v1/books:id", (req, res, next) => {
    var id = req.params.id
  Book.findbyIdAnddelete(id, (err, deletebook) => {
    if (err) return res.status(500).json(err);
    res.json({deletebook});
  });
});

router.get("/api/v2/books", (req, res, next) => {
    Book.find({}, (err, books) => {
      if (err) return res.status(500).json(err);
      res.json({ books });
    });
  });

  router.get("/api/v2/books:id", (req, res, next) => {
      var id = req.params.id
    Book.findbyId(id, (err, book) => {
      if (err) return res.status(500).json(err);
      res.json({ book });
    });
  });

  router.post("/api/v2/books", (req, res, next) => {
  Book.create(req.body, (err, addbook) => {
    if (err) return res.status(500).json(err);
    res.json({ addbook });
  });
});

router.put("/api/v2/books:id", (req, res, next) => {
    var id = req.params.id
  Book.findbyIdAndupdate(id, (err, updatebook) => {
    if (err) return res.status(500).json(err);
    res.json({ updatebook});
  });
});

router.delete("/api//v2/books:id", (req, res, next) => {
    var id = req.params.id
  Book.findbyIdAnddelete(id, (err, deletebook) => {
    if (err) return res.status(500).json(err);
    res.json({deletebook});
  });
});

module.exports = router;
