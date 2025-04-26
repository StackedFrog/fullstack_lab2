import express from "express"
import mongoose from "mongoose"
import { router } from "../route/apiRoute.js"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()


mongoose.connect(process.env.CONNECTION_URL)
.then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err))
 
const app = express();

const server = app.listen(process.env.PORT, () =>{
    console.log("running")
})
app.use(cors ({origin: "http://localhost:5173", credentials: "true "}))

app.use(express.json())

app.use('/', router)

async function shutdown(){
    server.close()
    // await close db 
}

process.on("SIGINT", shutdown)
process.on("SIGTERM", shutdown)