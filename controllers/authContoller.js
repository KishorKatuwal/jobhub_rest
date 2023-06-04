const User = require("../models/User");
const CryptoJS = require("crypto-js");

module.exports = {

    //creating user
    createUser: async (req, res) => {
        const newuser = new User({
            username: req.body.username,
            email: req.body.email,
           //var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
            password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
        });
        try{
            const saveUser = await newuser.save();
            res.status(201).json(saveUser);
        }catch(error){
            res.status(500).json(error);
        }

    },

    //login function
    loginUser: async (req, res) =>{
        try{
            console.log("hit here");
            const user = await User.findOne({email: req.body.email});
             !user && res.status(401).json("Wrong Login Details");
            //decrypting database password
            const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
            const depassword = decryptedPassword.toString(CryptoJS.enc.Utf8);
            //matching password
            depassword !== req.body.password && res.status(401).json("Wrong Password");
            //removing unwanted returing responses
            const {password, __v, createdAt, ...others } = user._doc;
            //returning response to user
            res.status(200).json(others);
        }catch(error){
            res.status(500).json(error);
        }
               
    },




//last bracket    
}