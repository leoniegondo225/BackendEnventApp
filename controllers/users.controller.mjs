import mongoose from "mongoose"
import { MongooseConnect } from "../db/mongoose.mjs"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "../db/firebase.mjs"
import { UserModel } from "../Models/Users.model.mjs"

export const SignUp = async (req, res) => {
    const {nom, email, password} = req.body
    try {
        const db = await MongooseConnect()
        if (db === "ok") {
            //pour créer un nouvel utilisateur avec firebase
            const data = await createUserWithEmailAndPassword(auth, email, password)
            const uid = data.user.uid //on recupère l'uid de l'utilisateur que renvoi firebase
            if (uid && uid !== undefined && uid !== "") {
                const data = new UserModel({uid, nom, email})
                await data.save()
                res.json({message: "ok", data})
            }
        } else {
            res.json("Une erreure s'est produite pendant la connexion à la base de données, vérifiez votre connection internet")
            console.log(db)
            return
        }

        mongoose.disconnect()

    } catch (error) {
        res.json({message: "Une erreur inconnue s'est produit", error})
        console.log(error)
    }
}

export const Login = async (req, res) => {
    const {email, password} = req.body
    try {
        const db = await MongooseConnect()
        if (db === "ok") {
            //pour se connecter avec firebase
            const data = await signInWithEmailAndPassword(auth, email, password)
            const uid = data.user.uid //on recupère l'uid de l'utilisateur que renvoi firebase
            if (uid && uid !== undefined && uid !== "") {
                const data = await UserModel.findOne({uid})
                res.json({message: "ok", data})
            }
        } else {
            res.json("Une erreure s'est produite, vérifiez votre connection internet")
            console.log(db)
            return
        }
        mongoose.disconnect()
    } catch (error) {
        const erMessage = error.message
        if (erMessage === "Firebase: Error (auth/invalid-credential).") {
            res.json("Identifiant ou mot de passe incorrect")
        } else {
            res.json("Une erreur inconnue s'est produit")
        }
        console.log(error.message)
    }
}