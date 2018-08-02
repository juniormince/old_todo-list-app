const mongoose = require('mongoose');

const databaseUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/todo';
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo on', databaseUrl);
});

mongoose.connection.on('error', (error) => {
    console.log('error connecting to database', error);
});