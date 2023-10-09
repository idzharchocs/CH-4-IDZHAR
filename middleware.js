// const cars = require('./feeds')
const { cars } = require('./models')
// const cars = require('./cars')
// const { cars } = require('./models');

const handleListcars = async (req, res) => {
    const { category } = req.query
    
    if (category) {
        const filtered = cars.findAll({ where: { category } });
        res.status(200).json(filtered)
    }

    const result = await cars.findAll();
    res.status(200).json(result);
}
module.exports = {
    handleListcars
}

const findAndSetFeedById = async (req, res, next) => {
    const id = req.params.id;
    const cars = await cars.findByPK(id);

    if (!cars) {
        res.status(404).json({
            message: 'Feed not found!'
        })
    }

    req.cars = cars;
    next();
}

module.exports = {
    findAndSetFeedById
}
// const findAndSetFeedById = async (req, res, next) => {
//     const id = req.params.id;
//     const cars = await cars.findByPK(id);

//     if (!cars) {
//         res.status(404).json({
//             message: 'Feed not found!'
//         })
//     }

//     req.cars = cars;
//     next();
// }

module.exports = {
    findAndSetFeedById
}

// const findAndDeleteDataById = async (req, res, next) => {
//     const id = req.cars.id;
//     const list = cars.filter((i) => i.id != id);
//     cars = list;

//         if (!cars) {
//         res.status(404).json({
//             message: 'cars not found'
//         })
//     }

//     req.cars = cars;
//     next();
// }
