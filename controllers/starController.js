const Star = require('../models/star.js');


const getAllStars = async (req, res) => {
    try {
        const stars = await Star.findAll();
        res.json(stars);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getStarById = async (req, res) => {
    const { id } = req.params;
    try {
        const star = await Star.findByPk(id);
        if (!star) {
            return res.status(404).json({ message: 'Star not found' });
        }
        res.json(star);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

const createStar = async (req, res) => {
    const { name, size, description } = req.body;
    try {
        const newStar = await Star.create({ name, size, description });
        res.status(201).json(newStar);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateStar = async (req, res) => {
    const { id } = req.params;
    const { name, size, description } = req.body;
    try {
        const star = await Star.findByPk(id);
        if (!star) {
            return res.status(404).json({ message: 'Star not found' });
        }
        await star.update({ name, size, description });
        res.json(star);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteStar = async (req, res) => {
    const { id } = req.params;
    try {
        const star = await Star.findByPk(id);
        if (!star) {
            return res.status(404).json({ message: 'Star not found' });
        }
        await star.destroy();
        res.status(204).end();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getAllStars,
    getStarById,
    createStar,
    updateStar,
    deleteStar
};
