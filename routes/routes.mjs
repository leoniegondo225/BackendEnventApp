import express from "express"
import { Login, SignUp } from "../controllers/users.controller.mjs"
import { AddEvent, GetEvent } from "../controllers/Envents.controller.mjs"
const route = express.Router()

route.get("/", (req, res) => {
    res.json("Notre Api fonctionne")
})

route.get("/get-event", GetEvent)
route.post("/sign-up", SignUp)
route.post("/login", Login)
route.post("/add-event", AddEvent)


export default route