const router = require('express').Router();

const ProductModel = require('../models/product');
const UserModel = require('../models/user');

// products
router.get('/all_products', async(req, res) => {
    var allproduct = await ProductModel.find();
    res.json(allproduct);
});




router.put('/edit_product', async(req, res) => {
    var editedproduct = req.body;
    var product = await ProductModel.findByIdAndUpdate({_id: editedproduct._id},editedproduct);
    res.json(product);
})


router.post('/add_product', async(req, res) => {
    var addedproduct = req.body;
    var product = await new ProductModel(addedproduct).save();

    res.json(product);
});

router.delete('/remove_product/:id', async(req, res) => {
    var id = req.params.id;
    await ProductModel.findOne({_id: id}).then(product => {
        if(product)
        {
            product.deleteOne().then(res.json())
        }
        else
        {
            res.status(404).send();
        } 
    })
});




// users
router.post('/add_user', async(req, res) => {
    var addeduser = req.body;
    var user = await new UserModel(addeduser).save();
    res.json(user);
});

router.get('/all_users', async(req, res)=> {
    var allusers = await UserModel.find();
    res.json(allusers);
});

router.delete('/remove_user/:id', async(req, res) => {
    var id = req.params.id;
    await UserModel.findOne({_id: id}).then(user => {
        if(user){
            user.deleteOne().then(res.json())
        }
        else{
            res.status(404).send();
        } 
    })
});

router.put('/update_user', async(req, res) => {
    var updateduser = req.body;
    var user = await UserModel.findByIdAndUpdate({_id: updateduser._id},updateduser);
    res.json(user);
    
})

module.exports = router;