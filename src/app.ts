import express from 'express'
import { postRouter } from './routes/posts.js'
import { userRouter } from './routes/users.js'


export const app = express()

app.use(express.json())
app.use("/posts", postRouter)
app.use("/users", userRouter)


app.get("/", (req, res) => {
    res.send("Welcome to Home page. Ahola")
})


app.get("/health", (req,res)=>{
    res.json({"status": "ok"})
})




