function toCapital(str){
uName = str.split('')
uName.shift()
uName = uName.join('')
return uName
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function Pokemon(){
	
	this.getFetch = _ =>{
		this.pokemon = document.querySelector('#poke1').value.trim().toLowerCase()
	fetch('https://pokeapi.co/api/v2/pokemon/'+this.pokemon)
		.then(res => res.json())
		.then(data => {
		
		removeAllChildNodes(document.querySelector('.ability'))
		removeAllChildNodes(document.querySelector('.type'))

		
		let id = data.id
		let uName = toCapital(data.name)
		  document.querySelector('#name').innerText = data.name[0].toUpperCase() + uName
		  document.querySelector('#pokeImg1').src = data.sprites.versions[`generation-v`]['black-white'].animated['front_default']
		  document.querySelector('#pokeImg2').src = data.sprites.versions[`generation-v`]['black-white'].animated['back_default']
		  for (let i = 0;i<data.abilities.length;i++){
			let ability = document.createElement('li')
			let uName = toCapital(data.abilities[i].ability.name)
			ability.innerHTML = data.abilities[i].ability.name[0].toUpperCase() + uName
			document.querySelector('.ability').appendChild(ability)
		}

		for (let i =0; i< data.types.length; i++){
			let type = document.createElement('li')
			let uName = toCapital(data.types[i].type.name)
			type.innerHTML = data.types[i].type.name[0].toUpperCase() + uName
			document.querySelector('.type').appendChild(type)
		}
	})
	  .catch(err => console.error(err))


	};

}
	
	let poke = new Pokemon()
	document.querySelector('#find').addEventListener('click',poke.getFetch)

