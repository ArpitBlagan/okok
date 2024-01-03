const express=require('express');
require("dotenv").config();
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
mongoose.connect(process.env.URL).then(()=>{
    console.log("connected");
})
const pDB=require('./schema');
app.use(express.json());
app.use(cors());
app.post("/add",async(req,res)=>{
    const {pickedUp,assigned_to_batch,products}=req.body;
    //console.log(products);   
    const pro= Object.values(products.reduce((acc, obj) => {
        acc[obj.name] = obj;
        return acc;
      }, {}));
    console.log("uniq",pro);
    const productNames = pro.map(product => product.name); 
    const data=await pDB.find({'products.name':{$in:productNames}});
    console.log("data",data);
    const val=[];
    pro.forEach((ele)=>{
        let f=false;
        data.forEach((el)=>{
            el.products.forEach((e)=>{
                if(e.name==ele.name){f=true;}
            })
        });
        if(!f){val.push(ele);}
    });console.log(val);
    if(val.length){
    const dd=await pDB.create({pickedUp,assigned_to_batch,products:val});}
    const ddd=await pDB.find();
    res.json(ddd);
})
app.listen(3001,function(req,res){
    console.log('listening..')
})