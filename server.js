const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const questions = require('./data')

server.use(express.static('public'))

server.set("view engine", "html")

nunjucks.configure("views", {
    express:server,
    autoescape:false,
    noCache: true
})

server.get("/", function (req, res) {
    return res.render("index")
})

server.get("/quest/:index", function (req, res) {
    const questId = req.params.index
    const fullQuest = questions[questId]

    return res.render("quest", {fullQuest})
})

server.get("/result", function (req, res) {
    return res.render("result")
})

server.listen(5000)