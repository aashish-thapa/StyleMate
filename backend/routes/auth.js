const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res)=>{
    const {username, email, password, fashion_style} = req.body;

    try{
        const hashedpassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            username, 
            email, password:hashedpassword,
            fashion_style
        });
        res.status(201).json({message: 'User Registered Successfully'});
    }
    catch(err){
        res.status(500).json({error: 'Error Registering User'});
    }
});

router.post('/login', async (req, res)=>{
    const {email, password} = req.body;
    try{
        const user = await User.findOne({where: {email}});
        if (!user ) return res.status(404).json({error: "user not found"});

        const isMatch = await bcrypt.compare(password, user.password);

        if(!match ) return res.status(400).json({error: 'Invalid Password'});

        res.json({ message: "Login Succesfull", user});
        

    }
    catch(err){
        res.status(500).json({error: 'Error during Login'});
    }

});

module.exports = router;