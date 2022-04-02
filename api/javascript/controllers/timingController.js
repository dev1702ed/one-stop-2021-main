const ferry_timing = require('../models/ferry_timing')
const bus_timing = require('../models/bus_timing')

exports.createferrytiming = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  new ferry_timing({
    MonToFri_GuwahatiToNorthGuwahati: req.body.MonToFri_GuwahatiToNorthGuwahati,
    MonToFri_NorthGuwahatiToGuwahati: req.body.MonToFri_NorthGuwahatiToGuwahati,
    Sunday_GuwahatiToNorthGuwahati: req.body.Sunday_GuwahatiToNorthGuwahati,
    Sunday_NorthGuwahatiToGuwahati: req.body.Sunday_NorthGuwahatiToGuwahati
  }).save().then(data => {
    res.send({ message: "data saved" })

  })
}
exports.updateferrytiming = (req, res) => {
  const id = req.params.id;
  ferry_timing.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `Cannot Update data with ${id}. Maybe data not found!` })
      } else {
        res.send(data)
      }
    })

}

exports.deleteferrytiming = (req, res) => {
  const id = req.params.id;
  
  ferry_timing.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` })
      } else {
        res.send({
          message: "Data was deleted successfully!"
        })
      }
    })

}

exports.createbustiming = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  new bus_timing({
    CollegeToCity_WorkingDay : req.body.CollegeToCity_WorkingDay,
    CityToCollege_WorkingDay : req.body.CityToCollege_WorkingDay,
    CollegeToCity_Holiday : req.body.CollegeToCity_Holiday,
    CityToCollege_Holiday : req.body.CityToCollege_Holiday
  }).save().then(data => {
    res.send({ message: "data saved" })

  })
}
exports.updatebustiming = (req, res) => {
  const id = req.params.id;
  bus_timing.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `Cannot Update data with ${id}. Maybe data not found!` })
      } else {
        res.send(data)
      }
    })

}

exports.deletebustiming = (req, res) => {
  const id = req.params.id;

  bus_timing.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` })
      } else {
        res.send({
          message: "Data was deleted successfully!"
        })
      }
    })
}