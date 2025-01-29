import { Schema, models, model } from "mongoose";

const LikesSchema = new Schema({
    nom: {type: String, required: true},
    date: {type: Date, required: true}
})

export const LikesModel = models.Users || model("Likes", LikesSchema)