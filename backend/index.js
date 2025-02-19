const express = require("express");
const apiRouter = require("./routes");

const app = express();
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1',apiRouter)

app.listen(3000,()=>{
    console.log("App is running on port 3000");
    
})

