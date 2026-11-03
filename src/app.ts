import express from 'express'
import { postRouter } from './routes/posts.js'


export const app = express()

app.use(express.json())
app.use("/posts", postRouter)

app.get("/", (req, res) => {
    res.send("Welcome to Home page. Ahola")
})


app.get("/health", (req,res)=>{
    res.json({"status": "ok"})
})



