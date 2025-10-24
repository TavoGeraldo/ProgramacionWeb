function getPokeData()
{
    const nombre = document.getElementById("poke_search").value.toLowerCase();


	fetch('https://pokeapi.co/api/v2/pokemon/'+ nombre)
	  .then(
	  	response => response.json()
	  )
	  .then(

	  	data => {
     
            document.getElementById('poke_data').innerHTML="<img src='"+data.sprites.front_default+"'>"
	  		document.getElementById('poke_name').innerHTML=data.name

	  	}

	  )
      .catch(error => {
        document.getElementById('poke_data').innerHTML=""
        document.getElementById('poke_name').innerHTML="No se encontro el pokémon"
      });

}