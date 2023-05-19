const express = require('express');
const router = express.Router();
const {
  createRestaurant,
  getAllRestaurants,
  getRestaurant,
  updateRestaurant,
  deleteRestaurant
} = require('../controllers/restaurant');


router.route('/').get(getAllRestaurants).post(createRestaurant);
router.route('/:id').get(getRestaurant).patch(updateRestaurant).delete(deleteRestaurant)

module.exports = router;