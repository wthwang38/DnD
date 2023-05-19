const express = require("express");
const router = express.Router();
const {
  registerUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser
} = require("../controllers/user");

router.route("/").get(getAllUsers).post(registerUser);
router.route("/:id")
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
