fetch('https://pokemon-anime.herokuapp.com/api')
    .then(res=>res.json())
    .then(data=>{
        for(let i=1; i < 8; i++){
            document.querySelector(`.g-${i}`).innerText = data.anime[`g-${i}`]
        }
    })