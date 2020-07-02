const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const { randomBytes } = require("crypto")
const app = express()

app.use(bodyParser.json())
app.use(cors())

const posts = {}

app.get("/posts", (req, res) => {
  res.json(posts)
})

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex")
  const { title } = req.body

  posts[id] = { id, title }

  res.status(201).json(posts[id])
})

app.listen(4000, () => {
  console.log("Listenning on 4000")
})
