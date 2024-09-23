import mongoose, { Document, model, Schema } from 'mongoose';

export interface IUser extends Document {
            email: string;
            password?: string;
            name: string;
            city: string;
            street: string;
            phone: string;
            image: string;
            _id: string ;
}

const UserSchema: Schema = new Schema({
            email: { type: String, required: true },
            password: { type: String, required: true },
            name: { type: String, required: true },
            city: { type: String, required: true },
            street: { type: String, required: true },
            phone: { type: String, required: true },
            image: { type: String, required: false },
});

export const userModel = mongoose.models.User || model<IUser>('User', UserSchema);