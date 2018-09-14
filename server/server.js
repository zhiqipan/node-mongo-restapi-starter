require('./config/config');

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('MongoDB connected');
});

app.use(bodyParser.json());

require('./routes/route')(app);

app.listen(port, () => {
  console.log(`Server up at port ${port}`);
});

module.exports = { app };
