import {app} from "./app"
import dotenv from "dotenv"
import connectDB from "./src/db/conn"

dotenv.config({
    path : "./.env"
})


const PORT = process.env.PORT || 6000

connectDB()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running at ${PORT}`)
    }) 

})
.catch((err)=>{
    console.log("connection error", err)
})

