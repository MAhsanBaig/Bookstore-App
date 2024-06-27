import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import bookroute from "./route/book.route.js"
import userroute from "./route/user.route.js"

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
const PORT=process.env.PORT || 4000
const URI =process.env.MongoDBURI
try{mongoose.connect(URI)
console.log("mongo db connect")
}
catch(error){
  console.log("error",error)
  
}

app.use("/book",bookroute)
app.use("/user",userroute)



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})