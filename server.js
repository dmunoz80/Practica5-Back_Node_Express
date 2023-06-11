const { getJoyas, joyasHATEOAS, getJoyasByFilter} = require('./consultas');
const { superMiddleware } = require('./middleware');
const express = require('express');
const app = express();

app.listen(3000, console.log("SERVIDOR ENCENDIDO EN EL PUERTO 3000"));

app.use(express.json());

app.get('/joyas', superMiddleware,  async (req, res) => {
    try {
        const queryString = req.query;
        const joyas = await getJoyas(queryString);
        const HATEOAS = await joyasHATEOAS(joyas)
        res.json(HATEOAS);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
})

app.get('/joyas/filtros', superMiddleware , async (req, res) => {
    try {
        const queryString = req.query;
        const joyas = await getJoyasByFilter(queryString);
        res.json(joyas);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
})