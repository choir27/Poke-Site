const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 9000
const cors = require('cors')
const fs = require('fs')
require('dotenv').config()

let db = 'pokemon'
let dbName = 'pokemon'

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.static('views'))
app.use(express.static('images'))
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



MongoClient.connect(process.env.DATABASE_URL, { useUnifiedTopology: true })
    .then(client => {

        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })


app.get('/',(request, response)=>{
    response.render('index.ejs')
})

app.get('/about',(request, response)=>{
    response.render('about.ejs')
})

app.get('/game',(request, response)=>{
    response.render('game.ejs')
})

app.get('/prices',(request, response)=>{
    response.render('prices.ejs')
})

app.get('/anime',(request, response)=>{
    response.render('anime.ejs')
})

app.get('/manga',(request, response)=>{
    response.render('manga.ejs')
})


app.listen(process.env.PORT || PORT, ()=>{  
    console.log(`Server running on port ${PORT}`)
})
