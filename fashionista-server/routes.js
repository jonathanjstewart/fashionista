const express = require('express');
const cors = require('cors'); //ip address communication
const userRoutes = require('./routes/user.routes');
const adminRoutes = require('./routes/admin.routes');

module.exports = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({extended : true}));
    app.use(cors());
    
    app.use('/server/users', userRoutes);
    app.use('/server/admin', adminRoutes);

}
//first file hit 

