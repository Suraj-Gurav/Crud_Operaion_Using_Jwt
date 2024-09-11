const express = require('express')
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const Route = require('./Route/userRoute')
app.use(express.json());
app.use(cors());

app.use('/', Route)
app.use(cookieParser());

// app.get('/jwt',(req, res)=>{
//     res.json("Sample API for JWT Token")
// })

// app.post('/login',(req, res)=>{
//     let user ={
//         id:2,
//         userName:'Suraj',
//         email:'suraj@test.com'
//     }
//     jwt.sign({user},secretKey,{expiresIn:'2000s'},(error, token)=>{
//         res.json({token})
//     })
// })

// app.post('/profile',varifyToken,(req, res)=>{
//     jwt.verify(req.token, secretKey, (error, authData)=>{
//         if(error){
//             res.send({result : 'Invalid token'})
//         }else{
//             res.json({
//                 massege:"Profile accessed",
//                 data:authData
//             })
//         }
//     })
// })

// function varifyToken (req, resp, next){
//     const bearerHeader = req.headers['authorization'];
//     if(typeof bearerHeader !== 'undefined'){
//         let bearer = bearerHeader.split(" ");
//         let token = bearer[1];
//         req.token = token;
//         next();

//     }else{
//         resp.send({
//             massege:'Token is Invalid'
//         })
//     }
// }
mongoose.connect("mongodb://localhost:27017/user", {
    family: 4
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
