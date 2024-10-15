const mongoose = require('mongoose');

// Check if a connection already exists
if (!mongoose.connection.readyState) {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Database connected successfully!'))
    .catch(err => console.error('Database connection error:', err));
}

module.exports = mongoose;
