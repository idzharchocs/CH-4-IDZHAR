const { cars } = require('./models');

// by id
const getAllcars = async () => {
    const data = await cars.findByPk('1b82936a-919e-43f6-9005-a514e54ee977');
    console.log(data);
}
getAllcars();



