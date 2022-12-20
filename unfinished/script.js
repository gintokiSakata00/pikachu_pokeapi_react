var pokedex = {};
window.onload = async function(){
    getPokemon();
    for ( let i = 0; i < 1; i++){
        console.log(pokedex[i]);
    }
}

async function getPokemon() {
    let url = "https://pokeapi.co/api/v2/pokemon/pikachu";

    let res = await fetch(url);
    let pokemon = await res.json();
    let poke_name = pokemon["name"];
    let poke_type = pokemon["types"];
    let poke_img = pokemon["sprites"]["front_default"];

    res = await fetch(pokemon["species"]["url"]);
    let poke_des = await res.json();


    poke_des = poke_des["flavor_text_entries"][8]["flavor_text"];

    pokedex[0] = {"name" : poke_name, "img" : poke_img, "types" : poke_type, "desc" : poke_des };
   
}