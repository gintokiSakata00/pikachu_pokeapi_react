
import './App.css';

async function getPokemon() {
  let url = "https://pokeapi.co/api/v2/pokemon/pikachu";
  let res = await fetch(url);
  let pokemon = await res.json();
  let poke_name = pokemon["name"];
  let poke_img = pokemon["sprites"]["front_default"];
  res = await fetch(pokemon["species"]["url"]);
  let poke_des = await res.json();
  poke_des = poke_des["flavor_text_entries"][8]["flavor_text"];

  // document.getElementById("pokedes").innerHTML=poke_des;
  const getpoke = {"name":poke_name, "img": poke_img, "des":poke_des}
  document.getElementById("image").src = getpoke.img;
  document.getElementById("pokename").innerHTML=getpoke.name;
  document.getElementById("pokedesc").innerHTML=getpoke.des;
}
getPokemon();
function App() {
  return (
    <div className="container">
      <div className="content image">
        <img alt='pika' id="image"></img>
      </div>
      <div className="content">
          <h2 id='pokename'></h2>
          <p id='pokedesc'></p>
      </div>
    </div>
  );
}

export default App;
