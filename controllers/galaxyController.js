const Galaxy = require('../models/galaxy.js');


const getAllGalaxies = async (req, res) => {
    try {
        const galaxies = await Galaxy.findAll();
        res.json(galaxies);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getGalaxyById = async (req, res) => {
    const { id } = req.params;
    try {
        const galaxy = await Galaxy.findByID(id);
        if (!galaxy) {
            return res.status(404).json({ message: 'Galaxy not found' });
        }
        res.json(galaxy);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

const createGalaxy = async (req, res) => {
    const { name, size, description } = req.body;
    try {
        const newGalaxy = await Galaxy.create({ name, size, description });
        res.status(201).json(newGalaxy);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateGalaxy = async (req, res) => {
    const { id } = req.params;
    const { name, size, description } = req.body;
    try {
        const galaxy = await Galaxy.findByID(id);
        if (!galaxy) {
            return res.status(404).json({ message: 'Galaxy not found' });
        }
        await galaxy.update({ name, size, description });
        res.json(galaxy);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteGalaxy = async (req, res) => {
    const { id } = req.params;
    try {
        const galaxy = await Galaxy.findByID(id);
        if (!galaxy) {
            return res.status(404).json({ message: 'Galaxy not found' });
        }
        await galaxy.destroy();
        res.status(204).end();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getAllGalaxies,
    getGalaxyById,
    createGalaxy,
    updateGalaxy,
    deleteGalaxy
};
