const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('db_cars', 'postgres', '12345', {
  host: 'localhost',
  dialect: 'postgres'});

const test = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
test();