var express = require('express');
require('./models/db.js');
//var bodyParser = require('body-parser');
//var cors = require('cors')

// Initialize Express
var app = express();

// app.use(cors())
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(app);

app.listen(2020,() => {
    console.log("Listening on port " + 2020 + ".");
});
