const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

  if (!req.headers.authorization) {
    return res.status(401).send("Access Denied. Login Action Needed");
  }

  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1]; // get the 2nd element in the array "Bearer {token}"
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = payload;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send("Invalid auth token");
  }
};