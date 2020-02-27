const express = require("express");

const homeController = require("../controllers/homeController");
const postController = require("../controllers/postController");
const userController = require("../controllers/userController");
const userMiddleware = require("../middlewares/userMiddleware");

const router = express.Router();

router.get("/", userMiddleware.userMiddleware, homeController.index);
router.get("/users/login", userController.login);
router.get("/users/register", userController.register);
router.get("/post/add", postController.add);
router.post("/post/add", postController.addAction);

module.exports = router;
