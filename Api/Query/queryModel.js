import  mongoose, {Schema,model} from "mongoose"

const query_schema = new Schema({
    userid:{type:mongoose.Types.ObjectId,required:true},
    title:{type:String,required:true},
    content:{type:String,required:true},
    banner:{type:String},
    category:{type:String}
},
{
    timestamps:true
})

const query_interest_schema = new Schema({
    userid:{type:mongoose.Types.ObjectId,required:true},
    queryid:{type:mongoose.Types.ObjectId,required:true},
},
{
    timestamps:true
})
const queries_interest = model("queries_interest",query_interest_schema)
export {queries_interest}
export default model("queries",query_schema)