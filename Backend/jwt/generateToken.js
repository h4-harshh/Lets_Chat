import jwt from 'jsonwebtoken';

const createTokenAndSaveCookie=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_TOKEN,{
        expiresIn:"10d"
    });
    res.cookie("jwt",token,{
        httpOnly:true, //security from XSS attack
        secure:true,
        sameSite:"strict" // provide security from CSRF attack
    });
}

export default createTokenAndSaveCookie;