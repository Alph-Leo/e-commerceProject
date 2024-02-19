import { Schema, Types, model } from "mongoose"

export interface Store extends Document{
    name: string,
    description: string,
    vendor: Types.ObjectId,
    products: Types.ObjectId[]
};

const storeSchema = new Schema<Store>({
    name: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    vendor: {
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }]
});

export default model<Store>('store', storeSchema);