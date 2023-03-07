const mongoose = require('mongoose');
const { Schema } = mongoose;

const inventory = new Schema({
    productId: {
        type: Number,
        unique: true,
        required: true
    },
    qunatity: {
        type: Number,
        required: true,
        
    }
  
});

const Inventory = mongoose.model('inventory', inventory);

module.exports = Inventory;