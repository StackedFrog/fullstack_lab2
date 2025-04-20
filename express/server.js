import express from "express"

const app = express();

app.use(express.static("public"))

const server = app.listen(process.env.PORT, () =>{
    console.log("running")
})

async function shutdown(){
    server.close()
    // await close db 
}

process.on("SIGINT", shutdown)
process.on("SIGTERM", shutdown)