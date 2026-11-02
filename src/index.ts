import { app } from "./app.js";

process.loadEnvFile();
const port = process.env.PORT || 3000



app.listen(port, ()=>{
    console.log(`Express running on port: ${port} `)
})