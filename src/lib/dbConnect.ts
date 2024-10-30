import mongoose from "mongoose";

export function dbConnection() {
    mongoose.connect('mongodb://127.0.0.1:27017/Next')
        .then(() => {
            console.log("Connected to DB");
        })
        .catch((err) => {
            console.log("DB connection error: ", err);
        });
}