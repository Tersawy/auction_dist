const express = require("express")

const app = express()

app.use(express.static("dist"))

const path = require("path")

app.get("*", (req, res) => res.sendFile(path.join(__dirname,  "./dist/index.html")))

let PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
