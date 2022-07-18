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