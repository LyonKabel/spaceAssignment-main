const express = require('express');
const router = express.Router();

const galaxyController = require('../controllers/galaxyController');


router.get('/', galaxyController.getAllGalaxies);
router.get('/:id', galaxyController.getGalaxyById);
router.post('/createGalaxy', galaxyController.createGalaxy);
router.put('/:id', galaxyController.updateGalaxy);
router.delete('/:id', galaxyController.deleteGalaxy);

module.exports = router;
