import express from "express"
import { Login, SignUp } from "../controllers/users.controller.mjs"
const route = express.Router()


route.get("/", (req, res) => {
    res.json("Notre Api fonctionne")
})

route.post("/sign-up", SignUp)
route.post("/login", Login)


export default route