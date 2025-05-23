const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
//Load Post Model
const Post = require("../../Models/Post");

//Load Profile Model
const Profile = require("../../Models/Profile");

//Load Validation
const validatePostInput = require("../../validation/post");

//@route GET  api/post/test
//@description Tests post route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "Post Works" }));

//@route GET api/post
//@description Fetch post
//@access Public
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then((posts) => res.json(posts))
    .catch((err) => res.status(404).json({ nopostsfound: "No posts found" }));
});

//@route GET api/post/:id
//@description Fetch post by id
//@access Public
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) =>
      res.status(404).json({ nopostfound: "No post found with that ID" })
    );
});

//@route POST api/post
//@description Create post
//@access Public
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);
    //Check Validation
    if (!isValid) {
      //If any errors send 400 with errors object
      return res.status(400).json(errors);
    }
    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id,
    });
    newPost
      .save()
      .then((post) => res.json(post))
      .catch((err) => res.status(404).json(err));
  }
);

//@route DELETE api/post/:id
//@description Delete post by id
//@access Public
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then((Profile) => {
        Post.findById(req.params.id)
        .then((post) => {
          //Check for post owner
          if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ notauthorized: "User not authorized" });
          }
          //Delete
          post.remove().then(() => res.json({ success: true }));
        })
        .catch((err) =>
          res.status(404).json({ postnotfound: "No post found" }));
      })
      
  });

// //@route POST api/post/like/:id
// //@description Like post
// //@access Public
router.post(
  "/like/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.findById(req.params.id)
      .then((post) => {
        if (
          post.likes.filter((like) => like.user.toString() === req.user.id)
            .length > 0
        ) {
          return res.status(400).json({ alreadyliked: "User already liked" });
        }
        //Add user id to likes array
        post.likes.unshift({ user: req.user.id });
        post.save().then((post) => res.json(post));
      })
      .catch((err) =>
        res.status(404).json({ postnotfound: "No post found" })
      );
  }
);

//@route POST api/post/unlike/:id
//@description Unlike post
//@access Private

router.post(
  "/unlike/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.findById(req.params.id)
      .then((post) => {
        if (
          post.likes.filter((like) => like.user.toString() === req.user.id)
            .length === 0
        ) {
          return res.status(400).json({ notliked: "You have not liked" });
        }
        //Get remove index
        const removeIndex = post.likes
          .map((item) => item.user.toString())
          .indexOf(req.user.id);
        //Splice out of array
        post.likes.splice(removeIndex, 1);
        //Save
        post.save().then((post) => res.json(post));
      })
      .catch((err) =>
        res.status(404).json({ postnotfound: "No post found" })
      );
  }
);

//@route POST api/post/comment/:id
//@description Add comment to post
//@access Public
router.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);
    //Check Validation
    if (!isValid) {
      //If any errors send 400 with errors object
      return res.status(400).json(errors);
    }
    Post.findById(req.params.id)
      .then((post) => {
        const newComment = {
          text: req.body.text,
          name: req.body.name,
          avatar: req.body.avatar,
          user: req.user.id,
        };
        //Add to comments array
        post.comments.unshift(newComment);
        post.save().then((post) => res.json(post));
      })
      .catch((err) =>
        res.status(404).json({ postnotfound: "No post found" })
      );
  }
);

//@route DELETE api/post/comment/:id/:comment_id
//@description Remove comment from post
//@access Public
router.delete(
  "/comment/:id/:comment_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.findById(req.params.id)
      .then((post) => {
        //Check to see if comment exists
        if (
          post.comments.filter(
            (comment) => comment._id.toString() === req.params.comment_id
          ).length === 0
        ) {
          return res.status(404).json({ commentnotexists: "Comment does not exist" });
        }
        //Get remove index
        const removeIndex = post.comments
          .map((item) => item._id.toString())
          .indexOf(req.params.comment_id);
        //Splice out of array
        post.comments.splice(removeIndex, 1);
        //Save
        post.save().then((post) => res.json(post));
      })
      .catch((err) =>
        res.status(404).json({ postnotfound: "No post found" })
      );
  }
);

// });

module.exports = router;
