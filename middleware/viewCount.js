const { rateLimit } = require("express-rate-limit");

let count = 0;

const viewCount = (req, res, next) => {
    count++;
    console.log(count);
    next();
}

// Apply the rate limiting middleware to all requests

module.exports = viewCount;