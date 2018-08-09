const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/confusion';
const connect = mongoose.connect(url, {
	useMongoClient: true
});


connect.then((db) => {

	console.log('connected correctly to server');

	var newDish = Dishes({
		name: 'Uthappiza',
		description: 'test'
	});

	newDish.save()
		.then((dish) =>{
			console.log(dish);


			return Dishes.find({});
		})
		.then((dishes) => {
			console.log(dishes);

			return Dishes.remove({});
		})

		.then(() => {
			return mongoose.connection.close();
		})
		.catch((err) => {
			console.log(err);
		});
});