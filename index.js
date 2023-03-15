const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const colors = require("colors")
const dbConnect = require("./utilits/dbConnect");
const sendEmail = require('./utilits/email');
const router = require('./routes/v1/tools.route');
const viewCount = require("./middleware/viewCount");
const cors = require('cors');
const { rateLimit } = require('express-rate-limit');






//  middleware check

app.use(cors());
app.use(express.json());


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use(limiter)


// app.use(viewCount)


// sendEmail(); // available for use when need.
dbConnect();


app.use("/api/v1/tools", router)



app.get('/', (req, res) => {
    res.send('Server is connected!'.green)
})



app.all("*", (req, res) => {
    res.send("All router")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`.bgBlue.bold)
})