// In this snippet, we are creating a simple route that returns a JSON object with a message :
// Users Works. This is a test route to ensure that the users route is working properly. We will test this route in the next section.
const express = require('express');
const router = express.Router();
//Load User model
const User = require('../../Models/User');


//@route GET  api/users/test
//@description Tests users route
//@access Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

//@route GET  api/users/register
//@description  register users
//@access Public
router.post('/register', (req, res) => {  
    User.findOne({ email: req.body.email })
    .then(user => {
        if(user){
            return res.status(400).json({email: 'Email already exists'});
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar,
            });
        }
    });
 });

module.exports = router;
