const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const indexRoute = require('./routes/index');
const userRoute = require('./routes/user')
const urlRoute = require('./routes/short_url')
dotenv.config({ path: '.env' });
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRoute);
app.use('/users', userRoute)
app.use('/short_url', urlRoute)
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
