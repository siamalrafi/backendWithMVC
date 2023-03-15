const express = require("express");

const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("tools router connected")
// })


// router.post("/:id", (req, res) => {
//     res.send("post router connected")
// })





router.route("/")
    /**
      * @api {get} /tools All tools
      * @apiDescription Get all the tools
      * @apiPermission admin
      *
      * @apiHeader {String} Authorization   User's access token
      *
      * @apiParam  {Number{1-}}         [page=1]     List page
      * @apiParam  {Number{1-100}}      [limit=10]  Users per page
      *
      * @apiSuccess {Object[]} all the tools.
      *
      * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
      * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
      */
    .get((req, res) => {
        res.send("get router connected")
    })



    /**
  * @api {get} /tools save all
  * @apiDescription Get all the tools
  * @apiPermission admin
  *
  * @apiHeader {String} Authorization   User's access token
  *
  * @apiParam  {Number{1-}}         [page=1]     List page
  * @apiParam  {Number{1-100}}      [limit=10]  Users per page
  *
  * @apiSuccess {Object[]} all the tools.
  *
  * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
  * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
  */
    .post((req, res) => {
        res.send("post router connected")
    })



module.exports = router;
