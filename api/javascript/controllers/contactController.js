const ContactsModel = require('../models/contactsChild');

/**
 * @swagger
 * /api/v0/createcontact:
 *   post:
 *     tags:
 *     - users
 *     description: Add a new user to DB
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         type: object
 *         schema:
 *           properties:
 *             category:
 *               type: string
 *             name:
 *               type: string
 *             service:
 *               type: string
 *             designation:
 *               type: string
 *             phoneNumber:
 *               type: number
 *             email:
 *               type: string
 *             websiteURL:
 *               type: string
 *
 *     responses:
 *       201:
 *         description: New user added to DB
 *       400:
 *         description: Error message(s)
 */

exports.createContact = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  ContactsModel.findOne({ name: req.body.email }).then((currenUser) => {
    if (currenUser) {
      res.send({ message: 'Email already exits' });
    } else {
      new ContactsModel({
        name: req.body.name,
        designation: req.body.designation,
        service: req.body.service,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        websiteURL: req.body.websiteURL,
      }).save().then(contact => {
        res.json(contact);
      });
    }
  });
};

exports.getAllContacts = (req,res) => {
  console.log("decdcd");
  ContactsModel.findAll({})
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    console.log(err)
    res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
})
};

exports.updateContact = (req, res) => {
  const { id } = req.params.id;
  ContactsModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot Update user with ${id}. Maybe user not found!` });
      } else {
        res.send(data);
      }
    });
};

exports.deleteContact = (req, res) => {
  const { id } = req.params;

  ContactsModel.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: 'User was deleted successfully!',
        });
      }
    });
};

