const express = require("express");
const router = express.Router();
const user_view = require("./views/users");

router.get("/", user_view.get_users);
router.get("/update/:id", user_view.update_user);

module.exports = router;
