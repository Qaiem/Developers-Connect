const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Load Profile Model
const Profile = require('../../Models/Profile');
//Load User Model
const User = require('../../Models/User');

//Load Validation Profile Input
const validateProfileInput = require('../../validation/profile');
//Load Validation Experience Input
const validateExperienceInput = require('../../validation/experience');
//Load Validation Education Input
const validateEducationInput = require('../../validation/education');

//@route GET  api/profile/test
//@description Tests profile route
//@access Public
router.get('/test', (req, res) => res.json({ msg: 'Profile Works' }));

//@route GET  api/profile
//@description Get current user profile 
//@access Privete
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
        .populate('user',['name', 'avatar'])
        .then(profile => {
            if (!profile) {
                errors.noprofile = 'There is no profile for this user';
                return res.status(404).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});

//@route GET  api/profile/handle/:handle
//@description Get profile by handle
//@access Public
router.get('/handle/:handle', (req, res) => {
    const errors = {};
    Profile.findOne({ handle: req.params.handle })
        .populate('user',['name', 'avatar'])
        .then(profile => {
            if (!profile) {
                errors.noprofile = 'There is no profile for this user';
                res.status(404).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});

//@route GET  api/profile/user/:user_id
//@description Get profile by user id
//@access Public

router.get('/user/:user_id', (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.params.user_id })
        .populate('user',['name', 'avatar'])
        .then(profile => {
            if (!profile) {
                errors.noprofile = 'There is no profile for this user';
                res.status(404).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json({ profile: 'There is no profile for this user' }));
});

//@route GET  api/profile/all
//@description Get all profiles
//@access Public

router.get('/all', (req, res) => {
    const errors = {};
    Profile.find()
        .populate('user',['name', 'avatar'])
        .then(profiles => {
            if (!profiles) {
                errors.noprofile = 'There are no profiles';
                res.status(404).json(errors);
            }
            res.json(profiles);
        })
        
});


//@route POST api/profile
//@description create user profile 
//@access Privete
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    //Check Validation
     if(!isValid) {
        //Return any errors with 400 status
        return res.status(400).json(errors);
    }

    //Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if(req.body.handle) profileFields.handle = req.body.handle;
    if(req.body.company) profileFields.company = req.body.company;
    if(req.body.website) profileFields.website = req.body.website;
    if(req.body.location) profileFields.location = req.body.location;
    if(req.body.bio) profileFields.bio = req.body.bio;
    if(req.body.status) profileFields.status = req.body.status;
    if(req.body.githubusername) profileFields.githubusername = req.body.githubusername;
    //Skills - Split into array
    if(typeof req.body.skills !== 'undefined') {
        profileFields.skills = req.body.skills.split(',');
    }
    //Social
    profileFields.social = {};
    if(req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if(req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if(req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if(req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    if(req.body.instagram) profileFields.social.instagram = req.body.instagram;

    Profile.findOne({ user: req.user.id })
        .then(profile => {
            if(profile) {
                //Update
                Profile.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: profileFields },
                    { new: true }
                )
                .then(profile => res.json(profile));
            } else {
                //Create
                //Check if handle exists
                Profile.findOne({ handle: profileFields.handle })
                    .then(profile => {
                        if(profile) {
                            errors.handle = 'That handle already exists';
                            res.status(400).json(errors);
                        }
                        //Save Profile
                        new Profile(profileFields).save().then(profile => res.json(profile));
                    });
            }
        });
});

//@route POST api/profile/experience
//@description Add experience to profile
//@access Privete
router.post('/experience', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateExperienceInput(req.body);

    //Check Validation
    if(!isValid) {
        //Return any errors with 400 status
        return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id })
        .then(profile => {
            const newExp = {
                title: req.body.title,
                company: req.body.company,
                location: req.body.location,
                from: req.body.from,
                to: req.body.to,
                current: req.body.current,
                description: req.body.description
            };

            //Add to exp array
            profile.experience.unshift(newExp);

            profile.save().then(profile => res.json(profile));
        });
});
router.post('/education', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateEducationInput(req.body);

    //Check Validation
    if(!isValid) {
        //Return any errors with 400 status
        return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id })
        .then(profile => {
            const newEdu = {
                school: req.body.school,
                degree: req.body.degree,
                fieldofstudy: req.body.fieldofstudy,
                from: req.body.from,
                to: req.body.to,
                current: req.body.current,
                description: req.body.description
            };

            //Add to exp array
            profile.education.unshift(newEdu);

            profile.save().then(profile => res.json(profile));
        });
});

//@route DELETE api/profile/experience/:exp_id  
//@description Delete experience from profile
//@access Privete

router.delete('/experience/:exp_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Profile.findOne({ user: req.user.id })
        .then(profile => {
            //Get remove index
            const removeIndex = profile.experience
                .map(item => item.id)
                .indexOf(req.params.exp_id);

            //Splice out of array
            profile.experience.splice(removeIndex, 1);

            //Save
            profile.save().then(profile => res.json(profile));
        })
        .catch(err => res.status(404).json(err));
});

//@route DELETE api/profile/education/:edu_id
//@description Delete education from profile
//@access Privete

router.delete('/education/:edu_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Profile.findOne({ user: req.user.id })
        .then(profile => {
            //Get remove index
            const removeIndex = profile.education
                .map(item => item.id)
                .indexOf(req.params.edu_id);

            //Splice out of array
            profile.education.splice(removeIndex, 1);

            //Save
            profile.save().then(profile => res.json(profile));
        })
        .catch(err => res.status(404).json(err));
});

//@route DELETE api/profile
//@description Delete user and profile
//@access Privete

router.delete('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id })
        .then(() => {
            User.findOneAndRemove({ _id: req.user.id })
                .then(() => res.json({ success: true }));
        });
});

module.exports = router;
