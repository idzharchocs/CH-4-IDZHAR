// // const cars = require('./cars')
// const { cars } = require('./models');

// const handleListcars = async (req, res) => {
//     const { category } = req.query
    
//     if (category) {
//         const filtered = cars.findAll({ where: { category } });
//         res.status(200).json(filtered)
//     }

//     const result = await cars.findAll();
//     res.status(200).json(result);
// }
// module.exports = {
//     handleListcars
// }

// const handleUpdateCars = async (req, res) => {
//     try {
       
//         const body = req.body;
//         const { id } = req.cars;
//         const result = await cars.update(body, { where: { id }, returning: true })
    
//         res.status(201).json(result);
//     } catch (err) {
//         res.status(500).json({
//             message: err.message
//         });
//     }
// }   
