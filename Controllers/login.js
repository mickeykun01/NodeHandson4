const jwt = require('jsonwebtoken');

const Constants = require('../Config/Constant');

const userLogin = (req,res)=>{
    console.log("user is logging in..");
    const loginData = req.body

    if(loginData.username && loginData.password){
        console.log("user login data is received here" , loginData);
        
        const jwttoken = jwt.sign(loginData , Constants.SECRET_KEY);
        res.status(200).send({Token : jwttoken});
    }

    else{
        return res.status(400).send({message : "invalid credentials is typed by user."})
    }

}


module.exports = {userLogin};