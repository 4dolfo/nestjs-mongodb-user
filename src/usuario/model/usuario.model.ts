import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: { type: String, required: false },
    cpf: { type: String, required: false },
    age: { type: Number, required: false },
});


export interface User extends mongoose.Document {

    name: string;
    cpf: string;
    age: number;
}