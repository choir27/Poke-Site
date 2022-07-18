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
    anime:{
    'g-1'	: 'Original series (1997–2002)',
    'g-2'	: 'Advanced Generation (2002–2006)',
    'g-3'	: 'Diamond and Pearl (2006–2010)',
    'g-4'	: 'Black & White (2010–2013)',
    'g-5'	: 'XY (2013–2016)',
    'g-6'	: 'Sun & Moon (2016–2019)',
    'g-7'	: 'Journeys (2019–present)',
    },
    manga:{
       'm-1': 'https://pic3.yx247.com/comics/pic5/24/24984/541520/PocketMonsterSpecial13590.jpg',
       'm-2': 'https://pic3.yx247.com/comics/pic5/24/24984/541893/PocketMonsterSpecial1181871.jpg',
       'm-3': 'https://pic12.yx247.com/comics/pic12/24/24984/1797492/9957d0d6c13e2cb00518c92af0df3b96.jpg',
       'm-4': 'https://pic3.yx247.com/comics/pic5/24/24984/542536/PocketMonsterSpecial3475595.jpg',
       'm-5': 'https://pic3.yx247.com/comics/pic5/24/24984/542785/PocketMonsterSpecial4911236.jpg',
       'm-6': 'https://ta1.yx247.com/comics/pic15/24/24984/3162272/56a465c9508ceead97dda6643575a5a5.jpg',
       'm-7': 'https://ta1.yx247.com/comics/pic15/24/24984/3421582/c5046bb22cdd9d8866f361b99dc32ea6.jpg',
    }
}

app.get('/',(request, response)=>{
    response.render('index.ejs')
})

app.get('/',(request, response)=>{
response.sendFile(__dirname + '/index.html')
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

app.get('/api',(request,response)=>{
response.json(pokemonAnime)
})


app.listen(process.env.PORT || PORT, ()=>{  
    console.log(`Server running on port ${PORT}`)
})
