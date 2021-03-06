const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const flashConnect = require('connect-flash');
const BodyParser = require('body-parser');
const Keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(Keys.mongoUri);
const app = express();
app.use(BodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [Keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
