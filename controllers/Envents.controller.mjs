import mongoose from "mongoose"
import { MongooseConnect } from "../db/mongoose.mjs"
import { EnventsModel } from "../Models/Envents.model.mjs"

export const AddEvent = async (req, res) => {
    try {
        const db = await MongooseConnect()
        if (db === "ok") {
            const data = new EnventsModel(req.body)
            await data.save()
            res.json({message: "ok", data})
        } else {
            res.json("Une erreure s'est produite pendant la connexion à la base de données, vérifiez votre connection internet")
            console.log(db)
            return
        }
        mongoose.disconnect()
    } catch (error) {
        res.json({ message: "Une erreur s'est produite", error })
        console.log(error)
    }
}

export const GetEvent = async (req, res) => {
    try {
        const db = await MongooseConnect()
        if (db === "ok") {
            const data = await EnventsModel.find()
            res.json({message: "ok", data})
        } else {
            res.json("Une erreure s'est produite pendant la connexion à la base de données, vérifiez votre connection internet")
            console.log(db)
            return
        }
        mongoose.disconnect()
    } catch (error) {
        res.json({ message: "Une erreur s'est produite", error })
        console.log(error)
    }
}

export const GetMyEvent = async (req, res) => {
    const {idUser} = req.params
    try {
        const db = await MongooseConnect()
        if (db === "ok") {
            const data = await EnventsModel.find({idUser})
            res.json({message: "ok", data})
        } else {
            res.json("Une erreure s'est produite pendant la connexion à la base de données, vérifiez votre connection internet")
            console.log(db)
            return
        }
        mongoose.disconnect()
    } catch (error) {
        res.json({ message: "Une erreur s'est produite", error })
        console.log(error)
    }
}