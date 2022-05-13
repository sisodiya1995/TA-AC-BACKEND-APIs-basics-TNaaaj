var express = require("express");
var router = express.Router();
var Country = require("../modals/country");
var State = require("../modals/state");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/", (req, res, next) => {
  Country.create(req.body, (err, country) => {
    if (err) return res.status(400).json(err);
    res.json({ country });
  });
});

router.get("/", (req, res, next) => {
  Country.find({}, (err, country) => {
    if (err) return res.status(400).json(err);
    res.json({ country });
  });
});

router.put("/:id", (req, res, next) => {
  var id = req.params.id;
  Country.findByIdAndUpdate(id, req.body, (err, country) => {
    if (err) return res.status(400).json(err);
    res.json({ country });
  });
});

router.put("/:id", (req, res, next) => {
  var id = req.params.id;
  Country.findByIdAndDelete(id, (err, country) => {
    if (err) return res.status(400).json(err);
    res.json({ country });
  });
});


// add state
router.post('/:id' ,(req,res, next) =>{
    var id  = req.params.id;
    State.create(req.body ,(err ,state) =>{
        if (err) return res.status(400).json(err);
        Country.findByIdAndUpdate(id ,{$push :{states :state.id}},(err ,country) =>{
            res.json({state });
        }) 
    })
})
module.exports = router;
