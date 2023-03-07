const Inventory = require('../Models/Inventory');

module.exports.InventoryPosting = async function (req, res) {
    //example
    //const payload = [
    //    { productId: 123, quantity: 10, operation: 'add' },
    //    { productId: 143, quantity: 14, operation: 'add' },
    //    { productId: 193, quantity: 17, operation: 'subtract' }
    //];
    // this will insert the documet if the product is new... upsert:true


    //Assuming that simialar to payload array is sent trough the req

    const payload = req.body.productArray;


    payload.forEach(async (item) => {
    await Inventory.updateOne({ productId: item.productId },
            { $inc: { quantity: (item.operation === 'add' ? item.quantity : -item.quantity) } },
            { upsert: true },
        (err) => {
            if (err) {
                return res.json({ message: "Someting went wrong, please try again later" });
            }
        });
    })
    res.json({ message: "Inventory Updated Sucessfully" });
}
