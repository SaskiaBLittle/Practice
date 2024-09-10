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

        //displays name and when clicked will display link/call lin in the inspect console
        poke.innerHTML = `Name: ${pokemon.name}`;
        poke.url = pokemon.url;
        document.querySelector("body").appendChild(poke);
        poke.addEventListener("click", getMyPokemon)
    }
}

async function getMyPokemon(e) {
    const res = await fetch(e.target.url);
    const pokeData = await res.json();
    console.log(pokeData)

    onlyOne(pokeData);
}

function onlyOne(f) {
    

    const one = document.createElement("div");
    const pokeImg = document.createElement("img");

    pokeImg.src = f.sprites.front_default;
    for (stats of f.stats) {
        const stat = document.createElement("h3");

        stat.innerHTML = `${stats.stat.name}: ${stats.base_stat}`;

        document.querySelector("body").appendChild(stat);
    }

    one.appendChild(pokeImg);
    document.querySelector("body").appendChild(one);
}

getPokes();