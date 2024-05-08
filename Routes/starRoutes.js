const express = require('express');
const router = express.Router();

const starController = require('../controllers/starController');


router.get('/', starController.getAllStars);
router.get('/:id', starController.getStarById);
router.post('/', starController.createStar);
router.put('/:id', starController.updateStar);
router.delete('/:id', starController.deleteStar);

module.exports = router;
