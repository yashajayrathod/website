const express=require("express")
const mongoose =require('mongoose')
const cors=require("cors")
const EmployeeModel = require('./models/Employee')

const app =express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://yashajayrathod:5hRntj1ADYiqmXWA@login.uw9fb2d.mongodb.net/Trailique");

app.post("/login",(req,res) => {
    const {email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            } 
            
        }else {
            res.json("No record existed")
        }
       
    })
})

// app.post('/register',(req,res)=>{
//     EmployeeModel.create(req.body)
//     .then(employees=>res.json(employees))
//     .catch(err=>res.json(err))

// })

app.post('/register', (req, res) => {
    const { email } = req.body;

    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json("Email already exists");
            } else {
                console.log('user registered')
                EmployeeModel.create(req.body)
                    .then(employees => res.json(employees))
                    .catch(err => res.json(err));
            }
        })
        .catch(err => res.json(err));
});


app.listen(3001 ,()=>{
    console.log("server is running")
})