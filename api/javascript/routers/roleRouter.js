const express = require('express');
const { routes } = require('../routes');
const Controller = require('../controllers/role.Controller');

const roleRouter = express.Router();

roleRouter.get('/getAllRoles', Controller.getAllRoles);
roleRouter.put('/updateRole/:id', Controller.updateRole);
roleRouter.delete('/deleteRole/:id', Controller.deleteRole);

module.exports = { roleRouter };
