const express = require("express")

const app = express()

app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }))

const path = require("path")

const { exec } = require("child_process")

if (!process.env.pullPassword) throw new Error("You must specify a pullPassword before running the app.");

app.post("/pull", function (req, res) {
    if (req.body.password !== process.env.pullPassword) return res.send("Route does not exist");

    exec("git pull", (error, stdout, stderr) => {
        if (error) return res.send(error)

        if (stderr) return res.send(stderr)

        res.send(stdout)
    })
})

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "./public/index.html")))

let PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
