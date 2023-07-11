require('@babel/register');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const registerRouter = require('./src/routes/register.routes');
const loginRouter = require('./src/routes/login.routes');

const { PORT } = process.env;

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log(`===> Server Up and Running on port:${PORT}`);
});
