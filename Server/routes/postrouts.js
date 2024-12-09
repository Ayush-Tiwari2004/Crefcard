const router = require("express").Router();
const {createPost, getPosts, updatePost, deletePost} = require('../controllers/postcontrollers')

router.post("/createPost", createPost); // Create a post
router.get("/getPosts", getPosts); // Get all posts
router.put("/updatePost/:id", updatePost); // Update a post
router.delete("/DeletePost/:id", deletePost); // Delete a post

module.exports = router;
