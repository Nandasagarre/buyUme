const express = require('express');
const routes = express.Router();

const InventoryController = require('../Controllers/index');

routes.get('/', (req, res) => {
    res.json({
        message: 'site is up and set up done'
        })
});

routes.post('/inventoryposting', InventoryController.InventoryPosting);
module.exports = routes;