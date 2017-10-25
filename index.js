const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

app.use(morgan('combined', {stream: accessLogStream}));
app.use('/resrouces', express.static('public/assets'));

app.get('/', (req, res) => {
	res.send('listening');
});

app.listen(8080);