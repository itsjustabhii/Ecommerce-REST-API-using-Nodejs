const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema(
    {
        userId:{type:String, require:true},
        products:[
            {
                productId : {
                    type:String
                },
                quantity:{
                    type:Number,
                    default:1,
                },
            },
        ],             
    },
    {timestamps: true}      //logs in created time
)

module.exports = mongoose.model("Cart", CartSchema)