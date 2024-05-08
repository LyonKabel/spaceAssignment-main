const Planet = require('../models/planet.js');


const getAllPlanets = async (req, res) => {
    try {
        const planets = await Planet.findAll();
        res.json(planets);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getPlanetById = async (req, res) => {
    const { id } = req.params;
    try {
        const planet = await Planet.findByPk(id);
        if (!planet) {
            return res.status(404).json({ message: 'Planet not found' });
        }
        res.json(planet);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

const createPlanet = async (req, res) => {
    const { name, size, description } = req.body;
    try {
        const newPlanet = await Planet.create({ name, size, description });
        res.status(201).json(newPlanet);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updatePlanet = async (req, res) => {
    const { id } = req.params;
    const { name, size, description } = req.body;
    try {
        const planet = await Planet.findByPk(id);
        if (!planet) {
            return res.status(404).json({ message: 'Planet not found' });
        }
        await planet.update({ name, size, description });
        res.json(planet);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

const deletePlanet = async (req, res) => {
    const { id } = req.params;
    try {
        const planet = await Planet.findByPk(id);
        if (!planet) {
            return res.status(404).json({ message: 'Planet not found' });
        }
        await planet.destroy();
        res.status(204).end();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getAllPlanets,
    getPlanetById,
    createPlanet,
    updatePlanet,
    deletePlanet
};
