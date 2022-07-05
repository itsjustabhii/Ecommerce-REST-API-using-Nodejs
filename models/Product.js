const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        title:{type:String, require:true, unique: true},
        desc:{type:String, required:true},
        img:{type:String, required:true},
        categories:{type:Array, required:true},     //category type can be many so we use array
        size:{type:String},
        color:{type:String},
        price:{type:Number, required:true},
        
        
    },
    {timestamps: true}      //logs in created time
)

module.exports = mongoose.model("Product", ProductSchema)