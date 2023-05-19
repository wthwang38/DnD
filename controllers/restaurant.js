const Restaurant = require("../models/Restaurant");
const { StatusCodes } = require('http-status-codes')

const createRestaurant = async (req, res) => {
  const restaurant = await Restaurant.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ restaurant });
};

const getAllRestaurants = async (req, res) => {
  const restaurants = await Restaurant.find({});
  res.status(StatusCodes.OK).json({ restaurants });
};

const getRestaurant = async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);
  res.status(StatusCodes.OK).json({ restaurant });
};

const updateRestaurant = async (req, res) => {
  const restaurant = await Restaurant.findByIdAndUpdate(
    req.params.id, 
    req.body, 
    {
      new: true,
      runValidators: true,
      context: "query",
    }
  );
  res.status(StatusCodes.OK).json({ restaurant });
};

const deleteRestaurant = async (req, res) => {
  const { id } = req.params;
  const restaurant = await Restaurant.findByIdAndDelete(id);
  if (!restaurant) throw new Error(`No such restaurant with id ${id} was found.`);
  res.status(StatusCodes.OK).send(`Restaurant with id ${id} deleted.`);
};

module.exports = {
  createRestaurant,
  getAllRestaurants,
  getRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
