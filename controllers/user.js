const User = require('../models/User');
const { StatusCodes } = require('http-status-codes')

const registerUser = async (req, res) => {
  const user = await User.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ user });
}

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(StatusCodes.OK).json({ users });
}

const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(StatusCodes.OK).json({ user });
}

const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true, context: 'query' }
  );
  res.status(StatusCodes.OK).json({ user });
}

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  if (!user) throw new Error(`No such user with id ${id} was found.`)
  res.status(StatusCodes.OK).send(`User with id ${id} deleted.`);
}

module.exports = {
  registerUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser
}
