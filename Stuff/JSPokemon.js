/* 
    fetch and get the data for the pokemon
    it will then wait until the data is reseved until next code is used
    it then calls the loopPokes
*/
async function getPokes() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    const pokeData = await res.json();
    loopPokes(pokeData);
}

//creates a pokes variable
function loopPokes(pokes) {
    for (pokemon of pokes.results) {
        const poke = document.createElement("div");

        poke.innerHTML = `Name: ${pokemon.name}`;
        poke.url = pokemon.url;
        document.querySelector("body").appendChild(poke);
        poke.addEventListener("click", getMyPokemon)
    }
}

async function getMyPokemon(e) {
    const res = await fetch(e.target.url);
    const pokeData = await res.json();
    console.log(pokeData.name);
}

getPokes();