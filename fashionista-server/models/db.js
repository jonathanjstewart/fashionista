var mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/ecommercedb",{ useNewUrlParser: true })
    .then(() => { console.log('Successfully connected with database.') })
    .catch((err) => { console.log('Error Caught : ' + err) });