const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');

const db = require('./config/mongoose-connection');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static assets
app.set("view engine", "ejs");

// Correctly mount the routers
app.use('/owner', ownersRouter);  // Owners routes
app.use('/user', usersRouter);    // Users routes
app.use('/product', productsRouter);  // Products routes

// Start the server
app.listen(3000, () => console.log('Example app listening on port 3000!'));
