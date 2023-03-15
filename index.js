const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const colors = require("colors")
const dbConnect = require("./utilits/dbConnect");
const router = require('./routes/v1/tools.route');
const cors = require('cors');
const { rateLimit } = require('express-rate-limit');
const ejs = require('ejs');
const errorHandler = require("./middleware/errorHander");


//  middleware check

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.set('view engine', 'ejs')
// app.use(viewCount)


// sendEmail(); // available for use when need.
dbConnect();


// routes
app.use("/api/v1/tools", router)



app.get('/', (req, res) => {
    // res.sendFile(__dirname + "/public/index.html");
    res.render('pages/index', {
        id: 5
    })
})

app.all("*", (req, res) => {
    res.send("All router")
})

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`.bgBlue.bold)
})


process.on("unhandledRejection",(error)=>{
    console.log(error.name,error.massage);
    app.close(()=>{
        process.exit(1);
    })
})
