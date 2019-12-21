const express = require("express")
const carsRouter = require("./router/carsRouter")

const server = express()
const host = "localhost"
const port = "5000"

server.use(express.json())

server.use("/api/cars", carsRouter)
server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        error: "A problem occured"
    })
})

server.listen(port, host, () => {
    console.log(`\nRunning on http://${host}:${port}`)
})