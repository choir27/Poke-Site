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

const pokemonAnime = {
    'g-1'	: 'Original series (1997–2002)',
    'g-2'	: 'Advanced Generation (2002–2006)',
    'g-3'	: 'Diamond and Pearl (2006–2010)',
    'g-4'	: 'Black & White (2010–2013)',
    'g-5'	: 'XY (2013–2016)',
    'g-6'	: 'Sun & Moon (2016–2019)',
    'g-7'	: 'Journeys (2019–present)',
}


MongoClient.connect(process.env.DATABASE_URL, { useUnifiedTopology: true })
    .then(client => {

        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })


app.get('/',(request, response)=>{
    response.sendFile(__dirname + '/index.ejs')
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

app.get('/api/:name',(request,response)=>{
    const year = request.params.name.toLowerCase()
    if(pokemonAnime[year]){
        response.json(pokemonAnime[year])
    }else{
        response.json('error')
    }
})


app.listen(process.env.PORT || PORT, ()=>{  
    console.log(`Server running on port ${PORT}`)
})
