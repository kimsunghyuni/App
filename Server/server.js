const express = require('express');
const app = express();
const path = require('path')
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');

require("dotenv").config();

const PORT = process.env.PORT;

const postRoutes = require('./routes/api/post');
const getRoutes = require('./routes/api/get');
const userRoutes = require('./routes/user');

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/api', postRoutes);
app.use('/api', getRoutes);
app.use('/api', userRoutes);
app.use(express.static(path.join(__dirname, './build')));


app.get('/', function (req, res) { res.sendFile(path.join(__dirname, './build/index.html')); });
app.get('*', function (req, res) { res.sendFile(path.join(__dirname, './build/index.html')); });


app.listen(PORT, function () { console.log(`server is runnging on ${PORT}`) });


