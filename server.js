import express from "express"
import fs from "fs"
import cors from "cors"
import rateLimit from "express-rate-limit"
const port = process.env.PORT || 5000
const app = express()
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100000 // limit each IP to 100 requests per windowMs
})
app.use(express.static("public"))
app.use(limiter)
app.use(cors())
// api key
const apikey = [
    "ShyraZiess1911"
]
app.get("/vd", (req, res) => {
    const key = req.query.apikey
    const result = {}
    result.code = 200
    const videoList = fs.readdirSync("./public/vd")
    const randomVideo = videoList[Math.floor(Math.random() * videoList.length)]
    result.data = `https://api-music-0iun.onrender.com/vd/${randomVideo}`
    result.author = "Kain x Carrion"
    result.source = "random video gaixinh"
    res.header("Content-type", "application/json; charset=utf-8")
    if (apikey.includes(key)) {
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
    } else {
        const result = {}
        result.code = 403
        result.message = "Invalid API key, please contact admin to get key"
        res.send(JSON.stringify(result, null, 2))
    }
})
app.get("/speedup", (req, res) => {
    const key = req.query.apikey
    const result = {}
    result.code = 200
    const audioList = fs.readdirSync("./public/speedup")
    const randomAudio = audioList[Math.floor(Math.random() * audioList.length)]
    result.data = `https://api-music-0iun.onrender.com/speedup/${randomAudio}`
    result.author = "Nguyên"
    result.source = "Random"
    res.header("Content-type", "application/json; charset=utf-8")
    if (apikey.includes(key)) {
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
    } else {
        const result = {}
        result.code = 403
        result.message = "Invalid API key, please contact admin to get key"
        res.send(JSON.stringify(result, null, 2))
    }
})
app.listen(port, "0.0.0.0", function () {
    console.log(`Server listening on port ${port}\n`)
})
app.get("/videogai", (req, res) => {
    const key = req.query.apikey
    const result = {}
    result.code = 200
    const videoList = fs.readdirSync("./public/videogai")
    const randomVideo = videoList[Math.floor(Math.random() * videoList.length)]
    result.url = `https://api-music-0iun.onrender.com/videogai/${randomVideo}`
    result.author = "presel"
    result.source = "random video gái"
    res.header("Content-type", "application/json; charset=utf-8")
    if (apikey.includes(key)) {
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
    } else {
        const result = {}
        result.code = 403
        result.message = "Invalid API key, please contact admin to get key"
        res.send(JSON.stringify(result, null, 2))
    }
})
app.get("/nhac", (req, res) => {
    const key = req.query.apikey
    const result = {}
    result.code = 200
    const audioList = fs.readdirSync("./public/nhac")
    const randomAudio = audioList[Math.floor(Math.random() * audioList.length)]
    result.url = `https://api-music-0iun.onrender.com/nhac/${randomAudio}`
    result.author = "Nguyên"
    result.source = "Random"
    res.header("Content-type", "application/json; charset=utf-8")
    if (apikey.includes(key)) {
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
    } else {
        const result = {}
        result.code = 403
        result.message = "Invalid API key, please contact admin to get key"
        res.send(JSON.stringify(result, null, 2))
    }
})
app.get("/", (req, res) => {
    const key = req.query.apikey
    const result = {}
    result.code = 200
    const audioList = fs.readdirSync("./public/index.html")
    const randomAudio = audioList[Math.floor(Math.random() * audioList.length)]
    result.url = `https://api-music-0iun.onrender.com/nhac/${randomAudio}`
    result.author = "Nguyên"
    result.source = "Random"
    res.header("Content-type", "application/json; charset=utf-8")
    if (apikey.includes(key)) {
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
    }
})
