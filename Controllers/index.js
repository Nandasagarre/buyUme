const Inventory = require('../Models/Inventory');

module.exports.InventoryPosting = function (req, res) {
    //productarray should have productid, quantity, opration feild
   // const expample = [{ productId: 1, quantity: 2, operation: 'add' }, { productId: 1, quantity: 2, operation: 'add' }];
    const productarray = req.body.productArray;
    const query = productarray.map(({ productId, quantity, operation }) =>  ({
       
        updateOne: {
            filter: { 'Inventory.productId': productId },
            update: {
                $inc: {
                    'Inventory.quantity': (operation === 'add' ? quantity : -quantity)
                }
            }
        },
        upsert:true  
    }));

    Inventory.bulkWrite(query);
    //console.log(productarray)
    res.json({
        message: "Done"
        })
}