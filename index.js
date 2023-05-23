const express = require("express")
const { connection } = require("./db")
const { userRouter } = require("./routes/user.routes")
const { authenticate } = require("./middlewares/authenticate.middlewares")
const cors=require("cors")
const { taskRouter } = require("./routes/task.routes")
require('dotenv').config();

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Welcome to Homepage");
})

app.use("/user", userRouter)
app.use(authenticate)
app.use('/tasktime',taskRouter)

app.listen(process.env.Port, async () => {
    try {
        await connection
        console.log("conneccted with Database")
    } catch (err) {
        console.log(err.message)
    }
    console.log(`Server is running at Port ${process.env.Port}`);
})