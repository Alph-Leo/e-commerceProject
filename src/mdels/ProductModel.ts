import { Document, Schema, Types, model } from "mongoose";

export interface Product extends Document{
    name: string;
    decsription: string;
    price: number;
    store: Types.ObjectId;
    productImage: string;
    dateCreated: Date;
}

const productSchema = new Schema<Product>({
    name: {
        type: String, 
        required: true
    },
    decsription: {
        type: String, 
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
    store: {
        type: Schema.Types.ObjectId, 
        ref: 'Store', 
        required: true
    },
    productImage: {
        type: String, 
        required: true
    },
    dateCreated: {
        type: Date
    },
});

export default model<Product>('Product', productSchema);