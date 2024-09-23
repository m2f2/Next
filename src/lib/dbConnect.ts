import mongoose from "mongoose";

export function dbConnection(){
    mongoose.connect(`mongodb+srv://Cluster29816:${process.env.SECRET}@cluster29816.kblontc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster29816/Next`).then(()=>{
        console.log("connected to db");
    }).catch((err)=>{
        console.log(err);
        
    })
}