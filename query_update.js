const { cars } = require('./models');
// update
cars.update(
    { name: 'BMW M3 GTR', image: 'update image', capacity: '3', rentPerDay: '600000', description: 'ini kenceng poll', availableAt: new Date(), createdAt: new Date(), updatedAt: new Date()  },
    { where: { id: 'aa349218-2f6e-4a8a-a6af-7fae12d1317b' } })
    .then((data) => { console.log(data) })
    .catch((err) => { console.log(err) });
