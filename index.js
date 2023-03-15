const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const colors = require("colors")
const dbConnect = require("./utilits/dbConnect");
const sendEmail = require('./utilits/email');
const router = require('./routes/v1/tools.route');

console.log(dbConnect);



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