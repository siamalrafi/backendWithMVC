module.exports.getAllTools = (req, res, next) => {
    const { ip, query, params, body, headers } = req;
    // console.log(ip, query, params, body, headers);

    res.download(__dirname + "/../index.js")
}

module.exports.saveATools = (req, res) => {
    res.send("saveATools")
}