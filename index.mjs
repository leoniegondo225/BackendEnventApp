import express from "express"
import route from "./routes/routes.mjs"
import dotenv from "dotenv"
import { MongooseConnect } from "./db/mongoose.mjs"
dotenv.config()

const app = express()

app.use(express.json())
app.use("/api", route)

app.get("/", (req, res) => res.json("Bienvenue sur notre api"))

app.listen(3000, () => console.log("serveur demarrer"))

export default app