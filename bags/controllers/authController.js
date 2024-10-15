const express = require('express');
const userModel = require('../models/user-model');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");

module.exports.registerUser = async function (req, res) {  // Mark the function as async
    try {
        // Destructure request body to get user details
        let { fullname, email, password } = req.body;

        // Check if the user already exists
        let user = await userModel.findOne({ email });
        if (user) {
            return res.status(401).send("User already exists");
        }

        // Generate salt and hash the password
        bcrypt.genSalt(10, function (err, salt) {
            if (err) return res.status(500).send("Error generating salt");

            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) return res.status(500).send("Error hashing password");

                // Create new user
                let newUser = await userModel.create({
                    fullname,
                    email,
                    password: hash,
                });

                // Create a JWT token for the user
                let token = generateToken(newUser);

                // Send the token as a response
                res.status(201).send({ token });
            });
        });

    } catch (err) {
        // Catch any errors and send error message
        res.status(500).send("Error: " + err.message);
    }
};

module.exports.loginUser = async function (req, res) {
    
        // Destructure request body to get user details
        let { email, password } = req.body;
        let user = await userModel.findOne({ email: email });

        if (!user) {
            return res.send("Email or password is incorrect");
        }
        // Compare the provided password with the stored hashed password
        bcrypt.compare(password, user.password, function (err, result) {
            if(result){
                // If passwords match, generate a JWT token
                let token = generateToken(user);
                res.cookie("token", token);
                res.send("you can login");
            }else{
                res.status(401).send("Email or password is incorrect"); 
            }
        });
    };
