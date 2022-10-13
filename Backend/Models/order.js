import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
    {
        user: {
            firstname: String,
            lastname: String
        },
        book: {
            name: String
        },
        isPaid: Boolean
    })
const OrderScheme = mongoose.model("orders", orderSchema);
export default OrderScheme;