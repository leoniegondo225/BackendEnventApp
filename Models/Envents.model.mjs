import { Schema, models, model } from "mongoose";

const EnventsSchema = new Schema({
    titre: {type: String, required: true},
    description: {type: String, required: true},
    photo: {type: String, required: true},
    date: {type: Date, required: true},
    artistes: [],
    lieu: {type: String, required: true},
    heure: {type: String, required: true},
    prix: {type: Number, required: true}
})

export const EnventsModel = models.Users || model("Envents", EnventsSchema)