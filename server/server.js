const express = require('express');
const path = require('path');

const app = express();

app.use('/dist', (req, res) => {
	res.sendFile(path.join(__dirname, '../dist/bundle.js'));
});

app.get('/', (req, res) => {
	res
		.status(200)
		.type('html')
		.sendFile(path.join(__dirname, '../src/index.html'));
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}...`);
});
