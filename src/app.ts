import express from 'express'


export const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome to Home page. Ahola")
})


app.get("/health", (req,res)=>{
    res.json({"status": "ok"})
})



