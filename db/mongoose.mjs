import mongoose from "mongoose";

export const MongooseConnect = async (req, res) => {
    try {
        const uri = `mongodb+srv://leoniegondo:${process.env.MongoosePassword}@cluster0.7l50j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        await mongoose.connect(uri, {
            dbName: "EnventDB",
        })
        console.log("connexion à mongoose réussi")
        return "ok"
    } catch (error) {
        res.json("Erreur de connection à la base de données")
        console.log(err)
    }
}
