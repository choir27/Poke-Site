document.querySelector('#left').addEventListener('click',goLeft)
document.querySelector('#right').addEventListener('click',goRight)


let index = 1
function goLeft(){
if(index === 7){
    document.querySelector(`.manga${index}`).classList.add('hidden')
    index = 1
    document.querySelector(`.manga${index}`).classList.remove('hidden')
}else{
    document.querySelector(`.manga${index}`).classList.add('hidden')
    index++
    document.querySelector(`.manga${index}`).classList.remove('hidden')
}
}

function goRight(){
    if(index === 1){
        document.querySelector(`.manga${index}`).classList.add('hidden')
        index = 7
        document.querySelector(`.manga${index}`).classList.remove('hidden')
    }else{
        document.querySelector(`.manga${index}`).classList.add('hidden')
        index--
        document.querySelector(`.manga${index}`).classList.remove('hidden')
    }
}

fetch('https://pokemon-anime.herokuapp.com/api')
    .then(res=>res.json())
    .then(data=>{
      for(let i =1;i<8;i++){
        console.log(`.m-${i}`)

        document.querySelector(`.m-${i}`).setAttribute(`href`,data.manga[`m-${i}`])
      }
    })