const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');

router.post('/create', async function (req, res) {
  try {
    // Check if there is already an owner
    let owners = await ownerModel.find({});
    if (owners.length > 0) {
      return res.status(503).send("You can't create more than one owner");
    }

    // Get the details from the request body
    let { fullname, email, password } = req.body;

    // Create a new owner
    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });

    // Return the newly created owner
    res.status(201).send(createdOwner);
  } catch (error) {
    res.status(500).send("Error creating owner: " + error.message);
  }
});

// Default GET route to check if the router is working
router.get('/', (req, res) => {
  res.send('Working owner router');
});

module.exports = router;
