const express = require("express")
const dbConnect = require("./config/db")
const userRouter = require("./routes/user.route")
const app = express()
app.use(express.json())
app.get("/", (req, res) => {
    res.send("WELCOME TO MVP CONSTRACTURE ")
})

app.use("/user",userRouter)

app.listen(9090, () => {
    console.log("YOUR PORT NUMBER IS:- 9090");
   dbConnect()
})