const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/jsonAPI');
mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

const router = require('./route/v1');
app.use('/api/v1/', router);

app.listen(port);
console.log('listen on port ' + port);
