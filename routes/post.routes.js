const Router = require("express");
const router = new Router();
const postControler = require("../controller/post.controler");

router.post("/post", postControler.createPost);
router.get("/post", postControler.getPosts);

module.exports = router;
