const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Server response on / route")
})

app.get('/task3', (req, res) => {
    let worker = [
        {
            id: 1,
            age: "19",
            name: "Konul"
        },
        {
            id: 2,
            age: "19",
            name: "Fidan"
        },
        {
            id: 3,
            age: "20",
            name: "Yusif"
        }
    ]
    res.json(worker)
})

app.listen(3000, () => {
    console.log("Server started on 3000 port")
})