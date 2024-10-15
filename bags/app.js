const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const expressSession = require('express-session');
const flash = require('connect-flash');

require('dotenv').config();

const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');
const indexRouter = require('./routes/index');


const db = require('./config/mongoose-connection');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.SESSION_SECRET_KEY || 'fallback-secret-key', // Fallback option
    })
);

app.use(flash());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static assets
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use('/owner', ownersRouter);  // Owners routes
app.use('/user', usersRouter);    // Users routes
app.use('/product', productsRouter);  // Products routes

// Start the server
app.listen(3000, () => console.log('Example app listening on port 3000!'));
