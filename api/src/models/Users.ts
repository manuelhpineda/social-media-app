import {Schema, model} from 'mongoose';


interface User {
    name: string;
    username: string;
    email: string;
    password: string;
}

const UserSchema = new Schema<User>({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
