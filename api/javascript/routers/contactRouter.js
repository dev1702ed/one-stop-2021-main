const express = require('express');

const contactRouter = express.Router();
const Controller = require('../controllers/contactController');

contactRouter.get('/getAllContacts', Controller.getAllContacts);
contactRouter.post('/createcontact', Controller.createContact);
contactRouter.put('/updatecontact/:id', Controller.updateContact);
contactRouter.delete('/deletecontact/:id', Controller.deleteContact);

module.exports = { contactRouter };
