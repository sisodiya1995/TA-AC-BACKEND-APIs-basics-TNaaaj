var express = require("express");
var router = express.Router();
var Country = require("../modals/country");
var State = require("../modals/state");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/", (req, res, next) => {
  State.find({}, (err, state) => {
    let accorder = state.map((p) => p.name).sort();
    if (err) return res.status(400).json(err);
    res.json({ accorder });
  });
});

router.post("/:id/updateState", (req, res, next) => {
  var id = req.params.id;
  State.findOneAndUpdate(id, req.body, (err, state) => {
    if (err) return res.status(400).json(err);
    res.json({ state });
  });
});

router.delete("/:id/removestate", (req, res, next) => {
  var id = req.params.id;
  State.findById(id, (err, state) => {
    if (err) return res.status(400).json(err);
    Country.findByIdAndUpdate(
      state.country,
      { $pull: { neighbouring_states: id } },
      (err, country) => {
        if (err) return res.status(400).json(err);
        res.json({ country });
      }
    );
  });
});
module.exports = router;
