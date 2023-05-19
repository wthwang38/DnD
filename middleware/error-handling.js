const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    // set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong. Try again later.",
  };

  // Custom Cast error
  if (err.name === "CastError") {
    customError.msg = `No item found with id: ${err.value}`;
    customError.statusCode = 404;
  }

  // Custom validation error
  if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors).map((item) => item.message);
    customError.statusCode = 400;
  }

  return res.status(customError.statusCode).json({
    msg: customError.msg,
    status: false,
  });
};

module.exports = errorHandlerMiddleware;
