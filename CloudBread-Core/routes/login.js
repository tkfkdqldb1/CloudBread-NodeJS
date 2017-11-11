let express = require('express');
let models = require('../models');
let router = express.Router();


let user = require('./user/user.ctrl');

/* Router for Log In system */

/* Implement message router here */
router.get("/get", (req, res, next) => {
    res.send("Login GET Test");
});

router.get("/SelLoginIDDupeCheck", (req, res, next) => {
    const FindID = String(req.query.memberID);

    models.Member.findAll({
      where: {MemberID: FindID}
    }).then((result) => {

    if (result.length === 0) {
      res.send(true);
    } else {
      res.send(false);
    }

  });
});

/* if request route that is not implemented */
router.use((req, res, next) => {
    res.send("ERR 0000:There's no route for that request");
});

module.exports = router;
