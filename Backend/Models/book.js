import mongoose from "mongoose";
const bookSchema=new mongoose.Schema(
    {
        name:String,
        content:String,
        author:String,
        tags:[String,String,String],
        price:Number,
        isAvaible:Boolean,
        quantity:Number,
        category:String,
        image:String
    })
    
    const BookModel = mongoose.model("books", bookSchema);

export default BookModel;
