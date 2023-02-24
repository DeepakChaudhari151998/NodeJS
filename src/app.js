const path = require('path')
const express = require("express")
const temperature = require('../src/utils/temperature')
const app = express()
const publicDirectoryPath=path.join(__dirname,'../public')


app.set('view engin',"hbs")  //set are use to value to existing express setting
app.use(express.static(publicDirectoryPath))



app.get('/help', (req, res) => {
    
    res.send({
        name: "stev",
        location:"Boston"
    })
})

app.get('/about', (req, res) => {
    res.send({
        "name": "stev",
        "location":"New york"
    })
})
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send("Must send the address")
    }
    temperature(req.query.address, (error, data) => {
        if (error != undefined) {
            return res.send(error)
        }
        res.send({
            "forcast": "It is snowing",
            "address": req.query.address,
            "location": "jalgaon",
            "temperature":data
        })
    })
    
   
})


app.get('*', (req, res) => {
    res.send("<h1>Hello Express!</h1>")
})

app.listen(3000, () => {
    console.log("Express running on port 3000")
})

