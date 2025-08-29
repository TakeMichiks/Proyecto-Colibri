// New file: ./routes/register.routes.js
const express = require("express");
const router = express.Router();
const User = require('../Models/User');

router.post('/Register', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Basic validation
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        // Create and save the new user
        const newUser = new User({ email, password });
        await newUser.save();

        // Respond with a 201 Created status
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (err) {
        res.status(500).json({ error: "Error User Register Server", details: err.message });
    }
});

router.post("/Login", async (req,res) => {
    try{
        const {email, password} = req.body;
        
        const user = await User.findOne ({ email });
        if (!user){
            return res.status(400).json ({ message: "credenciales Invalidos"});
        }
        if(user.password !== password){
            return res.status(400).json ({ message: "credenciales Invalidos"});
        }
      res.status(200).json ({ message: "credenciales validos", user: user.email});
        } catch (err) {
            res.status(500).json ({ message: "Servidor no reconoce", error: err.message });
        } 
});

module.exports = router;