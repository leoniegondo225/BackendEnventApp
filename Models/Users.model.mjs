import { Schema, model } from "mongoose";

const UsersSchema = new Schema({
    uid: {type: String, unique: true, required: true},
    nom: {type: String, required: true},
    email: {type: String, unique: true, required: true}
})

export const UserModel = model.Users || model("Users", UsersSchema)