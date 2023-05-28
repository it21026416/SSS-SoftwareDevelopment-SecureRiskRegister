// Dependencies
require('dotenv/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Parsing data
app.use(bodyParser.json());

// Connecting & setting up MongoDB
mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('Connected to MongoDB');
});

// Importing routes
const risksRoute = require('./routes/risks');
const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');

// Using Routes
app.use('/risks', risksRoute);
app.use('/login', loginRoute);
app.use('/register', registerRoute);

// Setting up Express
app.use(express.json());

app.listen(5000, () => {
	console.log('Server started on port 5000');
});
