document.body.innerHTML=`
<h1 class="heading">POKEMON API </h1>
<div class = "poke-container">
  
</div>
`;

const poke_container = document.querySelector('.poke-container');
const pokemons_number = 50;  //=>Here , we can increase cards as many we want

const fetchPokemons = async () => {         // create for loop of to get id from 1 to 50
	for (let i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
        
	}
};
const getPokemon = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}/`; // Here , fetched the data from pokemon Api
	const res = await fetch(url);
	const pokemon = await res.json();
    console.log(pokemon)
	createPokemon(pokemon);
};



function createPokemon(pokemon){
   const pokemonElement = document.createElement("div"); // Here ,created element called div and gave a class name as pokemon
   pokemonElement.className = "pokemon";

//    const poke_abilities = pokemon.abilities.map(value => value.ability.name);   =>to display all abilities
//    const poke_moves = pokemon.moves.map(value => value.move.name);   => to display all moves
  
   const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1); // Here, made first letter of name captial
 
   const pokeInnerHTML = `
   <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
             alt="${name}" />
        </div>
    <div class="info">
    <p class="name"><b>Name : ${name}</b> </p>
    <p class="weight"><b>Weight : </b> ${pokemon.weight}</p>
    <p class= "abilities"><b>Abilities : </b>${pokemon.abilities[0].ability.name}</p>
   
      
         <p class="move"><b>Moves: </b>${pokemon.moves[0].move.name}</p>
        
     
    </div>    
   `;
   // create other elements using innerHtml

   pokemonElement.innerHTML= pokeInnerHTML;
   poke_container.appendChild(pokemonElement);

}

fetchPokemons();