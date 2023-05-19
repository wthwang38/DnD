const User = require('../models/User');

const registerUser = async (req, res) => {
  const user = await User.create({ ...req.body });
  res.status(200).json({ user });
}

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({ users });
}

const getUser = async (req, res) => {
  const users = await User.findById(req.params.id);
  res.status(200).json({ user });
}

const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true, context: 'query' }
  );
  res.status(200).json({ user });
}

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  if (!user) throw new Error(`No such user with id ${id} was found.`)
  res.status(200).send(`User with id ${id} deleted.`);
}

module.exports = {
  registerUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser
}
