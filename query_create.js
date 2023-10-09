const { cars } = require('./models');
const { v4: uuidv4 } = require('uuid');

cars.create({ id : uuidv4(), name: 'Mustang', image: 'images5', capacity: '3', rentPerDay: '400000', description: 'ini kenceng banget', availableAt: new Date(), createdAt: new Date(), updatedAt: new Date() })
    .then((data) => { console.log(data) }).catch((err) => { console.log(err) })
