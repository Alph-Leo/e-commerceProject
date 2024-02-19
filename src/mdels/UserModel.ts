import { Document, Schema, Types, model } from "mongoose";

export interface User extends Document {
    id: Types.ObjectId
    emailAddress : string;
    phoneNumber: string;
    username: string;
    password: string;
    role: 'customer' | 'vendor';
}

const userSchema = new Schema<User>({
    emailAddress: {
        type: String, 
        required: true, 
        unique: true
    },
    phoneNumber: {
        type: String, 
        required: true
    },
    username: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    role: {
        type: String, 
        enum: ['customer', 'vendor'], 
        required: true
    },
    
});

export default model<User>('User', userSchema);