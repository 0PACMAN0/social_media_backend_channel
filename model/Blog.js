import mongoose from "mongoose";
const Schema=mongoose.Schema;

const blogSchema= new Schema({
    title:{
        type:String,
        required:[true,"Please add a Title for the Blog"]
    },
    description:{
        type:String,
        required:true,
    },
    image: {
        type:String,
        default:"no-image.jpg"
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true,
    }
});
    
export default mongoose.model("Blog",blogSchema);