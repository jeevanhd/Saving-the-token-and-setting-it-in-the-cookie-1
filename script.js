const jwt = require("jsonwebtoken");

const encrypt = (payload) => {
  return jwt.sign(payload, "your-secret-key", { expiresIn: "1h" });
};

const decrypt = (token) => {
  try {
    return jwt.verify(token, "your-secret-key");
  } catch (err) {
    console.error("Invalid token:", err);
    return null;
  }
};

module.exports = {
  encrypt,
  decrypt,
};
