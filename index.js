const express = require('express');
const app = express();
// const handler = require("./handler");
const PORT = 8000;
// const middleware = require("./middleware");
// const { v4: uuidv4 } = require('uuid');
const { cars } = require('./models');
app.use(express.json())


const findAndSetCarsById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const car = await cars.findByPk(id);

        req.cars = car ;
        next();
    } catch (err) {
        res.status(404).json({ status: "id gaaada" });

        return;
    }

};


app.get("/", (req, res) => {
    res.status(200).send("welkam tu club!")
});

app.get("/cars", async (req, res) => {
    const car = await cars.findAll()
    console.log(car)
    res.status(200).json(car)
})

// GET ELEMENT BY ID

// app.get("/feeds/:id", findAndSetFeedById, (req, res) => {
//     const id = req.params.id
//     console.log(id)
//     const filter = feeds.find((i) => i.id == id)

//     res.status(200).json(filter)
// })

app.get("/cars/:id", findAndSetCarsById, async (req, res) => {
    const id = req.params.id
    console.log(id)
    const filter = await cars.findByPk(id)
    console.log(filter)

    res.status(200).json(filter)
})


app.get("/cars", (req, res) => {
    const { title } = req.query

    if (title) {
        const filterer = cars.filter((i) => i.title === title)
        res.status(200).send(filterer)
    }
    res.status(200).send(title)
})

app.delete("/cars/:id", async (req, res) => {
    try {
        const id = req.params.id
        await cars.destroy({where: {id}})
        res.json({ status: "successfull deleted" })
    } catch(err){
        res.status().json({
            message: err.message
        })
    }
    
})

app.post("/cars", async (req, res) => {
    try {
        const body = req.body;
        const result = await cars.create(body)
        console.log(result)
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})

app.put("/cars/:id", (req, res) => {
    const id = req.params.id
    const currentData = cars.findByPk(id);
    const { name } = req.body

    const updatedData = { ...currentData, ...{ name } }
    const index = cars.findByPk(id);

    if (index == -1) {
        res.json({ status: "id not found!" })
    }

    cars[index] = updatedData

    res.status(200).json(updatedData)
})

app.get('*', (req, res )=> {
    res.status(404).send('404 not found')
})

app.listen(PORT,()=>console.log('listening on http://local')) 
