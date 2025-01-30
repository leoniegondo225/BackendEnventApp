import { Schema, model } from "mongoose";

const EnventsSchema = new Schema({
    titre: {type: String, required: true},
    description: {type: String, required: true},
    photo: {type: String, required: true},
    dateEnvent: {type: Date, required: true},
    artistes: [],
    lieu: {type: String, required: true},
    heureEnvent: {type: String, required: true},
    prix: {type: Number, required: true},
    idUser: {type: String, required: true},
    nomUser: {type: String, required: true},
    datePub:{type: Date, required: true, default: new Date()},
    contacts: []
})

export const EnventsModel = model.Users || model("Envents", EnventsSchema)