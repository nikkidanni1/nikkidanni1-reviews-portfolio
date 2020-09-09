const mongoose = require('mongoose');
require('../models/index');

const Product = mongoose.model('Product');
const Photo = mongoose.model('Photo');
const Review = mongoose.model('Review');

const TYPES = [
	'other',
	'appliances',
	'electronics',
	'food',
	'household_chemicals',
	'furniture',
	'goods_for_pets',
	'sporting goods',
	'clothes',
	'medicines',
	'building_materials',
];

const EMAIL_REGEX = /(?:(?:\r\n)?[ \t])*(?:(?:(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*))*@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*|(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)*\<(?:(?:\r\n)?[ \t])*(?:@(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*(?:,@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*)*:(?:(?:\r\n)?[ \t])*)?(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*))*@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*\>(?:(?:\r\n)?[ \t])*)|(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)*:(?:(?:\r\n)?[ \t])*(?:(?:(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*))*@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*|(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)*\<(?:(?:\r\n)?[ \t])*(?:@(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*(?:,@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*)*:(?:(?:\r\n)?[ \t])*)?(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*))*@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*\>(?:(?:\r\n)?[ \t])*)(?:,\s*(?:(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*))*@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*|(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)*\<(?:(?:\r\n)?[ \t])*(?:@(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*(?:,@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*)*:(?:(?:\r\n)?[ \t])*)?(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*))*@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*\>(?:(?:\r\n)?[ \t])*))*)?;\s*)/;

const checkById = async (model, id) => {
	const res = await model
		.findOne({ id })
		.exec()
		.then((item) => !!item);
	return res;
};

module.exports = (app) => {
	app.get('/products', function (req, res) {
		res.set('Content-Type', 'application/json');

		Product.find()
			.exec()
			.then((products) => {
				const data = products
					.filter((item) => (req.query.type === '' ? true : item.type === req.query.type))
					.filter((item) => (req.query.searchword === '' ? true : item.name.includes(req.query.searchword)));
				res.send({
					count: data.length,
					data: data.filter((item, index) => req.query.from <= index && index < req.query.from + req.query.count),
				});
			});
	});

	app.get('/product/:id', function (req, res) {
		res.set('Content-Type', 'application/json');
		Product.findOne({ id: req.params.id })
			.exec()
			.then((product) => {
				res.send(product);
			});
	});

	app.post('/products', async function (req, res) {
		const data = req.body;
		const paths = Product.schema.paths;
		for (const key in paths) {
			if (!/(^_[\w]+)|id|ratingValue|ratingCount/.test(key) && !data[key]) {
				res.status(400).send({ message: `${key} required` });
				return;
			}
		}

		if (!(await checkById(Photo, data.photoId))) {
			res.status(400).send({ message: 'invalid photoId' });
			return;
		}

		if (!TYPES.includes(data.type)) {
			res.status(400).send({ message: 'invalid type' });
			return;
		}

		const lastId = await Product.find()
			.exec()
			.then((products) => {
				return products[products.length - 1] ? products[products.length - 1].id : 1;
			});

		Product.create({
			...data,
			id: lastId + 1,
			ratingValue: 0,
			ratingCount: 0,
		});

		res.send({ success: true });
	});

	app.get('/photos/:id', function (req, res) {
		Photo.findOne({ id: req.params.id })
			.exec()
			.then((photo) => {
				res.writeHead(200, {
					'Content-Type': 'image/*',
					'Content-Length': photo.photo.length,
				});
				res.end(photo.photo);
			});
	});

	// app.get('/photos/:id', function (req, res) {
	// 	Photo.findOne({ id: req.params.id })
	// 		.exec()
	// 		.then((photo) => {
	// 			res.writeHead(200, {
	// 				'Content-Type': 'application/octet-stream',
	// 				'Content-Length': photo.photo.length,
	// 			});
	// 			res.end(photo.photo);
	// 		});
	// });

	app.post('/photo', function (req, res) {
		Photo.find()
			.exec()
			.then((photos) => {
				if (5242880 >= req.body.byteLength) {
					const id = photos[photos.length - 1] ? photos[photos.length - 1].id + 1 : 1;
					
					Photo.create({
						id,
						photo: req.body,
					});
					res.send({ success: true, id });
				} else {
					res.status(413).json({ message: 'Request Entity Too Large' });
				}
			});
	});

	app.get('/reviews/:id', function (req, res) {
		res.set('Content-Type', 'application/json');
		Product.findOne({ id: req.params.id })
			.exec()
			.then((product) => {
				if (product) {
					Review.find({ productId: req.params.id })
						.exec()
						.then((reviews) => {
							res.send(
								reviews.filter((item, index) => req.query.from <= index && index < req.query.from + req.query.count)
							);
						});
				} else {
					res.send([]);
				}
			});
	});

	app.post('/reviews', async function (req, res) {
		const data = req.body;
		const paths = Review.schema.paths;

		for (const key in paths) {
			if (!/(^_[\w]+)|id|likes|photoId|rating/.test(key) && !data[key]) {
				res.status(400).send({ message: `${key} required` });
				return;
			}
		}

		if (data.photoId && !(await checkById(Photo, data.photoId))) {
			res.status(400).send({ message: 'invalid photoId' });
			return;
		}

		if (!(await checkById(Product, data.productId))) {
			res.status(400).send({ message: 'invalid productId' });
			return;
		}

		if (!EMAIL_REGEX.test(data.email)) {
			res.status(400).send({ message: 'invalid email' });
			return;
		}

		if (data.rating && (data.rating < 0 || data.rating > 5)) {
			res.status(400).send({ message: 'invalid rating' });
			return;
		}

		await Product.findOne({ id: data.productId })
			.exec()
			.then(async (product) => {
				if (data.rating) {
					product.ratingValue = (product.ratingValue * product.ratingCount + data.rating) / (product.ratingCount + 1);
					product.ratingCount += 1;
					await Product.findOneAndUpdate({ id: data.productId }, product);
				}
			});

		const lastId = await Review.find()
			.exec()
			.then((reviews) => {
				return reviews[reviews.length - 1] ? reviews[reviews.length - 1].id : 1;
			});

		Review.create({
			...data,
			id: lastId + 1,
			rating: data.rating ? data.rating : 0,
			likes: 0,
		});

		res.send({ success: true });
	});

	app.get('/review/:id', function (req, res) {
		res.set('Content-Type', 'application/json');
		Review.findOne({ id: req.params.id })
			.exec()
			.then((review) => {
				res.send(review);
			});
	});

	app.post('/like/:id', async function (req, res) {
		await Review.findOne({ id: req.params.id })
			.exec()
			.then(async (review) => {
				review.likes++;
				await Product.findOneAndUpdate({ id: req.params.id }, review);
				res.send({ success: true });
			});
	});

	app.post('/dislike/:id', async function (req, res) {
		await Review.findOne({ id: req.params.id })
			.exec()
			.then(async (review) => {
				review.likes--;
				await Product.findOneAndUpdate({ id: req.params.id }, review);
				res.send({ success: true });
			});
	});

	app.get('/types', function (req, res) {
		res.set('Content-Type', 'application/json');
		res.send(TYPES);
	});
};
