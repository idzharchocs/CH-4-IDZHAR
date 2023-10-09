const { cars } = require('./models');
cars.destroy({ where: { id: '1b82936a-919e-43f6-9005-a514e54ee977' } })
    .then((data) => { console.log(data) })
    .catch((err) => { console.log(err) });