const mongoose = require('mongoose');

mongoose.model('Product', {
	id: Number,
	name: String,
	description: String,
	photoId: Number,
	ratingValue: Number,
	ratingCount: Number,
	type: String,
});

mongoose.model('Photo', {
	id: Number,
	photo: mongoose.Schema.Types.Buffer,
});

mongoose.model('Review', {
	id: Number,
	rating: Number,
	username: String,
	description: String,
	email: String,
	likes: Number,
	photoId: Number,
	productId: Number,
});