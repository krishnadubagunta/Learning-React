const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const Keys = require('../config/keys');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new FacebookStrategy(
		{
			clientID: Keys.facebookClientID,
			clientSecret: Keys.facebookSecret,
			callbackURL: '/auth/facebook/callback',
			profileFields: ['name', 'gender', 'photos', 'emails', 'displayName'],
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({
				providerId: profile.id
			});
			if (existingUser) {
				return done(null, existingUser);
			}
			const user = await new User({
				provider: profile.provider,
				providerId: profile.id,
				displayName: profile.displayName,
				emails: profile.emails,
				gender: profile.gender,
				photos: profile.photos[0]
			}).save();
			done(null, user);
		}
	)
);

passport.use(
	new GoogleStrategy(
		{
			clientID: Keys.googleClientID,
			clientSecret: Keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({
				providerId: profile.id
			});
			if (existingUser) {
				return done(null, existingUser);
			}
			const user = await new User({
				provider: profile.provider,
				providerId: profile.id,
				displayName: profile.displayName,
				emails: profile.emails,
				gender: profile.gender,
				photos: profile.photos[0]
			}).save();
			done(null, user);
		}
	)
);
