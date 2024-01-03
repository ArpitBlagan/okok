const mongoose=require('mongoose');
// Task:
// You need to create a node.js project and insert this document to Mongodb 

// Before you insert you need to build 1 api  call and get all these fields as input, Need to build schema first  and then once you got these as input then you have to submit the document 
// to mongodb if there is no duplicate record available. 


// {
//   "_id": {
//     "$oid": "65239e483dab89aba7a403cf"
//   },
//   "pickedup": false,
//   "assigned_to_batch": false,

//   "products": [
//     {
//       "gst_amount": 0,
  
//       "name": "Harpic White   Shine Bleach ",
//       "cashback": 1,
//       "quantity": 1
//     },
//     {
//       "gst_amount": 0,
//       "name": "Harpic White   Shine Bleach ",
//       "cashback": 1,
//       "quantity": 1
//     }
//   ],
//  }
const proSchema=mongoose.Schema({
    pickedUp:Boolean,
    assigned_to_batch:Boolean,
    products:[
        {gst_amount:Number,name:String,cashback:Number,quantity:Number}
    ]
});
module.exports=mongoose.model('PDB',proSchema);