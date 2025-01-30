import express from "express"
import route from "./routes/routes.mjs"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()

const app = express()

//Pour donner l'autorisation à des domaines sur votre serveur
const domaineAutorise = ["http://localhost:5173", "https://frontend-login-rho.vercel.app/"]

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || domaineAutorise.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error("Domaine non autorisé par le cors"))
        }
    }
}
app.use(cors(corsOptions))



app.use(express.json())

app.use("/api", route)

app.get("/", (req, res) => res.json("Bienvenue sur notre api"))

app.listen(3000, () => console.log("serveur demarrer"))

export default app