import mongoose from "mongoose";

export const MongooseConnect = async (req, res) => {
    try {
        await mongoose.connect(process.env.MongooseUrl, {
            dbName: "EnventDB",
        })
        console.log("connexion à mongoose réussi")
        return "ok"
    } catch (error) {
        res.json("Erreur de connection à la base de données")
        console.log(err)
    }
}
