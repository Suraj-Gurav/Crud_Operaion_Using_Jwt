const userSchema = require('./../Module/userModule');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const secretKey = 'secretKey';

exports.userSignUp = async (req, res) => {
    const { email, fullname, password } = req.body;
    try {
        const existingUser = await userSchema.findOne({ email });
        if (existingUser) {
            // User already exists
            return res.status(202).json({status:false, message: 'User already present!!', data: existingUser });
        } else {
            const hashPassword = bcrypt.hashSync(password)
            // Create a new user
            const newUser = new userSchema({ fullname, email, password: hashPassword });
            const userData = await newUser.save();
            return res.status(201).json({status:true, message: 'User successfully signed up!!', data:userData });
        }
    } catch (error) {
        console.error("Error in loginUser:", error);
        return res.status(500).json({ error: 'Failed to create user' });
    }
};

exports.userSignIn = async (req, res) => {
    const { email, password } = req.body;
    let existingUser;
    try {
        existingUser = await userSchema.findOne({ email: email });
    } catch (error) {
        console.log("Error", error);
        return res.status(500).json({ Error: error });
    }
    if (!existingUser) {
        return res.status(400).json({status:false, massege: "User not found!!" })
    }
    let isCorrectPassword = bcrypt.compareSync(password, existingUser.password);
    if (!isCorrectPassword) {
        return res.status(400).json({status:false, massege: "Invalid Email / Password!!" })
    }
    let token = jwt.sign({id:existingUser.id}, secretKey,{expiresIn:'1h'})
    res.cookie(String(existingUser.id), token,{
        path:'/',
        expires: new Date(Date.now() + 1000 * 30),
        httpOnly:true,
        sameSite:'lax'
    })
    return res.status(200).json({status:true, massege: 'Successfully login in user!!', user: existingUser, token: token })

}

exports.veriftToken = (req, resp, next) => {
    const header = req.headers.cookie;
    const token = header?.split('=')[1];
    // const header = req.headers['authorization'];
    // let token = header.split(" ")[1];
    jwt.verify(String(token), secretKey, (error, user) => {
        if (error) {
            return res.status(400).json({ massege: "Invalid token" })
        }
        req.id = user.id
        console.log(user.id);
    })
    next();
}

exports.getUser = async(req, res, next)=>{
    let userId = req.id;
    let user;
    try {
        user = await userSchema.findById(userId,"-password")
        console.log("user",user);
    } catch (error) {
        console.log(error);
        return new Error(error);
    }
    if(!user){
        return res.status(400).json({massege:'User not found'})
    }
    return res.status(200).json({user});
}