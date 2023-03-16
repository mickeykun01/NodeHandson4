const bcrypt = require('bcrypt');

const userRegister = (req,res)=>{
    console.log('user is being registered on..');

    const userDetails = req.body
    const password = userDetails.password;

    const saltrounds = 10;
    bcrypt.genSalt(saltrounds , (err , salt)=>{
        if(err){
            console.log("error");
        }

        else{
            bcrypt.hash(password ,salt ,(err,hashedPassword)=>{
                if(err){
                    console.log("error");
                }

                else{
                    console.log("user has logged in successfully");
                    res.send({"HashedPassword" : hashedPassword});
                }
            })
        }
    })

}
module.exports = {userRegister};
