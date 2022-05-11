var express = require('express');
var router = express.Router();

router.get("/api/v2/comment", (req, res, next) => {
    Comment.find({}, (err, comments) => {
      if (err) return res.status(500).json(err);
      res.json({comments });
    });
  });

  router.get("/api/v2/comment:id", (req, res, next) => {
      var id = req.params.id
    Comment.findbyId(id, (err, singlecom) => {
      if (err) return res.status(500).json(err);
      res.json({ singlecom });
    });
  });

  router.post("/api/v2/comments", (req, res, next) => {
  Comment.create(req.body, (err, addcomment) => {
    if (err) return res.status(500).json(err);
    res.json({ addcomment });
  });
});

router.put("/api/v2/comment:id", (req, res, next) => {
    var id = req.params.id
Comment.findbyIdAndupdate(id, (err, updatecom) => {
    if (err) return res.status(500).json(err);
    res.json({ updatecom});
  });
});

router.delete("/api/v2/comment:id", (req, res, next) => {
    var id = req.params.id
  Comment.findbyIdAnddelete(id, (err, deletecom) => {
    if (err) return res.status(500).json(err);
    res.json({deletecom});
  });
});

module.exports = router;
