import express from 'express'


const app = express()
process.loadEnvFile();
const port = process.env.PORT || 3000

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome to Home page.")
})


app.listen(port, ()=>{
    console.log(`Express running on port: ${port} `)
})

