// In this snippet, we are creating a simple route that returns a JSON object with a message :
// Users Works. This is a test route to ensure that the users route is working properly. We will test this route in the next section.
const express = require('express');
const router = express.Router();

//@route GET  api/users/test
//@description Tests users route
//@access Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

module.exports = router;
