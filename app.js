require('@babel/register');
require('dotenv').config();
const express = require('express');
const multer = require('multer');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const registerRouter = require('./src/routes/register.routes');
const loginRouter = require('./src/routes/login.routes');
const logoutRouter = require('./src/routes/logout.routes');
const adminRouter = require('./src/routes/admin.routes');
const cartRouter = require('./src/routes/cart.routes');
const protectRoutes = require('./src/middleware/protectRoutes');
const {
  secureRoute,
  checkUser,
} = require('./src/middleware/common');
const errorHandler = require('./src/middleware/error-handler');
const indexRouter = require('./src/routes/index.routes');
const productsRouter = require('./src/routes/products.routes');

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
    maxAge: 2 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

const storage = multer.diskStorage({
  destination: path.join('public', 'images'),
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const extension = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${extension}`);
  },
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sessionConfig));
const upload = multer({ storage });
app.use(upload.single('image'));

app.use('/', indexRouter);
app.use('/register', secureRoute, registerRouter);
app.use('/login', secureRoute, loginRouter);
app.use('/products', productsRouter);
app.use('/logout', logoutRouter);
app.use('/cart', cartRouter);
app.use(protectRoutes);
app.use('/admin', adminRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`===> Server Up and Running on port:${PORT}`);
});
