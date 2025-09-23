module.exports = (req, res, next) => {

  res.success = (message, data) =>
    res.status(200).json({ message, data });

  res.badRequest = (message, error) =>
    res.status(400).json({ message, error });

  res.failure = (message, error) =>
    res.status(500).json({
      message: message?.message || message || "Internal server error",
      error,
    });

  res.notFound = (message = "Not Found", error = {}) => {
    sendResponse(404, message, "error", error);
  };

  res.validationFailed = (message, error) =>
    res.status(422).json({ message, error });

  next();
};
