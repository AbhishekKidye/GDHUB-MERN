const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
    id:{
        type:Number,
        required: true,
        unique: true,
    },
    orderKey:{
        type:String,
        required: true,
    },
    orderInfo: {
        companyName: { type: String, required: true },
        companyEmail:{ type: String, required:true},
    },
    orderDetails: [
        {
        orderType:{
            type: String,
            required:[true,"example- LOGO, Banner, Typography"]
        },
        orderDescription:{
            type: String,
            required: true,
        }
        
    }],
    orderStatus:{
        type: String,
        default:"pending",
        required:true,
    },
    advancePayment:{
            type: Number,
            default:1000,
            required: true,
    },
    totalPrice:{
            type: Number,
            default:0,
            required:true,
    },
    
    orderDate : { 
        type: Date, default: Date.now 
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    }
    


});

module.exports = mongoose.model("Order",orderSchema);