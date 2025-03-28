const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
//Load Post Model
const Post = require('../../Models/Post');

//Load Validation
const validatePostInput = require('../../validation/post');

//@route GET  api/post/test
//@description Tests post route
//@access Public
router.get('/test', (req, res) => res.json({ msg: 'Post Works' }));

//@route GET  api/post
//@description Create post 
//@access Public

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const {errors, isValid} = validatePostInput(req.body);
    //Check Validation
    if(!isValid) {
        //If any errors send 400 with errors object
        return res.status(400).json(errors);
    }
    const newPost = new Post({
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id
    });
    newPost.save().then(post => res.json(post)).catch(err => res.status(404).json(err));
});
//@route GET  api/post/:id
//@description Get post by id
//@access Public



module.exports = router;
