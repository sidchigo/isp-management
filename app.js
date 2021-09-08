const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/user');


mongoose.connect('mongodb://localhost:27017/isp-mgmt');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('Database connected');
});

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send({
        message: 'Home route located!'
    })
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch(err) {
        res.send(err);
    }
})

app.post('/users', async (req, res) => {
    const { firstName, lastName, phone, email, createdOn, role } = req.body;
	try {
		const user = User({
			firstName,
			lastName,
			phone,
			email,
			createdOn,
			role,
		});
        const response = await user.save();
		res.send(response);
	} catch (err) {
		res.send(err);
	}
});

app.listen(5000, () => {
	console.log('Serving on port 5000');
});