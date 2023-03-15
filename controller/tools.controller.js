let tools = [
    { id: 1, name: "hemal" },
    { id: 2, name: "hemal2" },
    { id: 3, name: "hemal3" },
]

module.exports.getAllTools = (req, res, next) => {
    const { limit, page } = req.query;
    res.json(tools.slice(0, limit));
}

module.exports.saveATools = (req, res) => {
    console.log(req.body);
    tools.push(req.body)
    res.send(tools)
}


module.exports.getToolsDetails = (req, res, next) => {
    const { id } = req.params;
    const foundTool = tools.find((tool) => tool.id === Number(id));
    res.send(foundTool);
}

module.exports.updateTools = (req, res, next) => {
    const { id } = req.params;
    const newData = tools.find((tool) => tool.id === Number(id));
    newData.id = id;
    newData.name = req.body.name;

    res.send(newData);
}

module.exports.updateDelete = (req, res, next) => {
    const { id } = req.params;
    tools = tools.filter((tool) => tool.id !== Number(id));
    res.send(tools);
}