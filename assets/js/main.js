/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);

function Pokemon(){

	this.sprites = ''
	this.moreSprites = ''
	this.currentIndex = 0
	this.currIndex = 0
	this.removeAllChildNodes = parent => {
		while(parent.firstChild){
		parent.removeChild(parent.firstChild);
	}
	}
	
	this.addTypes = data =>{
		data.types.forEach(ele=>{
			document.querySelector('#name').innerText += ele.type.name + '\n'
		  })
	}
	
	
	this.getFetch = _ =>{
		this.pokemon = document.querySelector('#poke1').value.trim().toLowerCase()
		this.url = 'https://pokeapi.co/api/v2/pokemon/'+this.pokemon
	fetch(this.url)
		.then(res => res.json())
		.then(data => {
		   
			document.querySelector('h2').innerText = ''
	
			this.addTypes(data)
	
			document.querySelector('#prev').classList.remove('hidden')
			document.querySelector('#next').classList.remove('hidden')
	
			let value = Object.values(data.sprites)
	
			let versions = data.sprites.versions
			for(let keys in versions){
				let obj = versions[keys]
				for(let values in obj){
				  let objects = obj[values]
				  for(let i in objects){
					  let o = objects[i]
					  if (o!== null){
						 if(typeof o === 'object'){
							 for(k in o){
								 if(o[k]!==null){
								  this.sprites = Object.values(o)
								 }
							 }
						 }else{
							 this.moreSprites = Object.values(objects)
						 }
					  }
				  }
				}
			}
			this.sprites = this.sprites.concat(this.moreSprites)
			this.sprites = this.sprites.concat(this.value)

			document.querySelector('#pokeImg1').src = this.sprites[this.currentIndex]
	
			document.querySelector('#prev').addEventListener('click',this.prevImage)
			document.querySelector('#next').addEventListener('click',this.nextImage)
		})
	
	}
	

	this.nextImage = _ => {
		fetch(this.url)
		.then(res => res.json()) // parse response as JSON
		.then(data => {
	this.values = Object.values(data.sprites)
	this.values = this.values.concat(this.sprites)
	this.values = this.values.filter(ele=>typeof ele==='string')

	if(this.currentIndex<this.values.length){
	++this.currentIndex
	document.querySelector('#pokeImg1').src = this.values[this.currentIndex]

	if(this.currentIndex === this.values.length-1){
	  this.currentIndex = 0
	}
	
	return this.currentIndex
	}
	
	})
	},
	
	
	this.prevImage = _ =>{
		fetch(this.url)
		.then(res => res.json()) // parse response as JSON
		.then(data => {
	this.values = Object.values(data.sprites)
	this.values = this.values.concat(this.sprites)
	
	this.values = this.values.filter(ele=>typeof ele==='string')
	if(this.currentIndex===0){
	this.currentIndex = this.values.length-1
	document.querySelector('#pokeImg1').src = this.values[this.currentIndex]
	return this.currentIndex
	}else if(this.currentIndex > 0){
	--this.currentIndex
	document.querySelector('#pokeImg1').src = this.values[this.currentIndex]
	return this.currentIndex
	}
	
	})
	}

	};
	
	
	let poke = new Pokemon()
	document.querySelector('button').addEventListener('click',poke.getFetch)