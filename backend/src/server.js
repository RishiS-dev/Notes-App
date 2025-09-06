import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "../config/db.js"
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js"

dotenv.config()

const app = express()

//middleware
app.use(express.json())
app.use(rateLimiter)

//simple custon middleware
// app.use((req,res,next)=>{
//     console.log(`Req method is ${req.method} & Req url is ${req.url}`)
//     next()
// })

app.use("/api/notes",notesRoutes)

connectDB().then(()=>{
    app.listen(process.env.PORT, () =>{
    console.log("Server started on ",process.env.PORT)
})
})