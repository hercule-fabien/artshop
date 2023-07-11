require('@babel/register');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const registerRouter = require('./src/routes/register.routes');
const loginRouter = require('./src/routes/login.routes');

const { PORT } = process.env;

const app = express();

app.use(morgan('dev'));

const sessionConfig = {
  name: 'sessionCookie',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Secret word',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 999999999,
    httpOnly: true,
  },
};
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sessionConfig));

app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log(`===> Server Up and Running on port:${PORT}`);
});
