const express = require('express')

const app = express()

const posts = {}

app.get("/posts", (req, res) => {
res.send(posts)
})

app.post("/posts", (req, res) => {

})

app.listen(4000, () => {
console.log("Listenning on 4000");
})
