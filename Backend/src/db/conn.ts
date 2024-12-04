import mongoose from "mongoose";
import {DB_NAME} from '../../constants'

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`mogooDB connected !DB host ;${conn.connection.host}`)
        
    } catch (error) {
        console.log("connection error", error)
        process.exit(1)
    }
}

export default connectDB