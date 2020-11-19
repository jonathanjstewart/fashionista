const router = require('express').Router();
const UserModel = require('../models/user');
const CartModel = require('../models/cart');

router.post('/add_cart', async(req, res) => {
    const data= req.body;
    console.log(data);
    const user = await new CartModel(data).save();
});

router.get('/retrieve_cart', async(req, res) => {
    const products = await CartModel.find();
    res.json(products);
});

router.delete('/remove_cart/:id', async(req, res) => {
    const id = req.params.id;
    const product = await CartModel.findOne({_id: id}).then(product => {
        if(product)
        {
            product.deleteOne().then(res.json(`Successful deletion of ${product}`))
        }
        else
        {
            res.status(404).send();
        } 
    })
});

router.post('/register', async(req, res) => {
    const data = req.body;
    const user = await new UserModel(data).save();
    res.json(user);
});
router.post('/login', async(req, res) => {
    const data = req.body;
    const user = await UserModel.findOne({name:data.name,pw:data.pw});
    if(!user)
    {
        res.status(401).json('error');
    }
    else
    {
        res.json(user);
    }
});

module.exports = router;