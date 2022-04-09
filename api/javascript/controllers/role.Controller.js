const role = require("../models/role");

exports.getAllRoles = (req, res) => {
  User.find().then((data) => {
    res.json(data);
  });
};

exports.updateRole = (req, res) => {
  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(
    (data) => {
      res.json(data);
    }
  );
};

exports.deleteRole = (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id).then((data) => {
    res.send({
      message: "User was deleted successfully!",
    });
  });
};
