const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Arpit:Ab123@cluster0.j4fl22k.mongodb.net/assi').then(()=>{
    console.log("connected");
})
const pDB=require('./schema');
app.use(express.json());
app.use(cors());
app.post("/add",async(req,res)=>{
    const {pickedUp,assigned_to_batch,products}=req.body;
    console.log(products);   
    const data=await pDB.find({'products':{$in:products}});
    const val=[];
    const uni=new Set();
    products.map((ele)=>{
        if(!uni.has(ele.name)&&!data.includes(ele)){
            console.log(ele);uni.add(ele.name);
            val.push(ele);
        }
    });
    const dd=await pDB.create({pickedUp,assigned_to_batch,products:val});
    const ddd=await pDB.find();
    res.json(ddd);
})
app.listen(3001,function(req,res){
    console.log('listening..')
})