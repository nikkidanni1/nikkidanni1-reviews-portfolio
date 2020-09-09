const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
var cors = require('cors');

require('./models/index');

const img =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAKElEQVQ4jWNgYGD4Twzu6FhFFGYYNXDUwGFpIAk2E4dHDRw1cDgaCAASFOffhEIO3gAAAABJRU5ErkJggg==';

const data = img.replace(/^data:image\/\w+;base64,/, '');
const buf = Buffer.from(data, 'base64');

const Product = mongoose.model('Product');
const Photo = mongoose.model('Photo');
const Review = mongoose.model('Review');

// Review.create({
//     id: 1,
// 	rating: 4,
// 	username: 'fdsf',
// 	description: 'sdfsdfs',
// 	email: 'fsdf@sdffs.ru',
// 	likes: 4,
// 	photoId: 1,
// 	productId: 2,
// })

// Photo.create({
//     id: 1,
//     photo: buf
// })

// for(let i = 1; i < 9; i++) {
//     Product.deleteOne({ id: i })
//         .exec()
//         .then(() => res.json({ success: true }))
// }

// for (let i = 1; i < 9; i++) {
//    Product.create({ id: i, name: `name${i}`, description: 'description1', photoId: i, ratingValue: 4, ratingCount: i, typeId: 1 }).then(createdProduct => {
//         res.json(createdProduct);
//     });
// }

const app = express();
var cors = require('cors');

app.use(bodyParser.json(), bodyParser.raw(), cors());
app.options('*', cors());
app.set('port', process.env.PORT || 3000);

mongoose.set('useFindAndModify', false);

routes(app);

// mongodb://localhost:27017/reviews

mongoose
	.connect('mongodb+srv://nikkidanni1:blackgirlJapan@cluster0.nttbp.mongodb.net/reviews')
	.then(() => app.listen(app.get('port'), '127.0.0.1', () => console.log('Listenting')))
	.catch(err => console.error(`Error connection to mongo: ${'mongodb+srv://nikkidanni1:blackgirlJapan@cluster0.nttbp.mongodb.net/reviews'}`, err));

