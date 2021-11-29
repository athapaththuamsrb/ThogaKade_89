const bcrypt = require('bcrypt');
const saltRounds = 10;

const UserSchema = require('../model/UserSchema');
const jwt = require('jsonwebtoken');

const signUp=(req,resp)=>{
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        const user = new UserSchema({
            userName:req.body.userName,
            contact:req.body.contact,
            email:req.body.email,
            password:hash
        });

        user.save().then(response=>{
            const token = jwt.sign(
                {email:req.body.email, password:req.body.password},
                process.env.JWT_ACCESS_KEY,
                {expiresIn: '24h'}
            )
            resp.status(201).json({status:true,token:token});
        }).catch(error=>{
            console.log(error)
            resp.status(500).json(error);
        });
    });


};
const login=(req,resp)=>{
    UserSchema.findOne({email:req.headers.email}).then(response=>{

        if (response!==null){
            // actual user

            bcrypt.compare(req.headers.password, response.password, function(err, result) {
                // result == true
                if (result){
                    // create token
                    const token = jwt.sign(
                        {email:response.email, password:req.headers.password,userName:response.userName,accountType:response.accountType},
                        process.env.JWT_ACCESS_KEY,
                        {expiresIn: '24h'}
                    )
                    resp.status(201).json({status:true,token:token});
                }else{
                    resp.status(401).json({message:"UnAuthorized Request"});
                }
            });

        }else{
            resp.status(404).json({message:"not found"});
        }

    }).catch(error=>{
        resp.status(500).json(error);
    })
}

module.exports={signUp, login}
