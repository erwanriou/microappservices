const express = require("express")
const bodyParser = require("body-parser")
const { randomBytes } = require("crypto")

const app = express()
app.use(bodyParser.json())

const commentsByPostId = {}

app.get("/posts/:id/comments", (req, res) => {
  const { id } = req.params
  res.status(200).json(commentsByPostId[id] || [])
})

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex")
  const { content } = req.body
  const { id } = req.params

  const comments = commentsByPostId[id] || []
  comments.push({ id: commentId, content })
  commentsByPostId[id] = comments
  res.status(201).json(comments)
})

app.listen(4001, () => {
  console.log("Listenning on 4001")
})
