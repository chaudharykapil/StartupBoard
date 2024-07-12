import {Schema,model} from "mongoose"

const user_schema = new  Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    companyname:{type:String},
    type:{type:String,enum:["investor","founder"]},
    password:{type:String,required:true},
    link:{type:Map,of:String},
},
{
    timestamps:true
})
export default model("users",user_schema)