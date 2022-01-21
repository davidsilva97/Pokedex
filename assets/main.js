
const d = document,
boton = d.getElementById("boton");
boton.addEventListener("click",obtenerPokemon);
const contenedor = d.getElementById("informacion");

function agregarPokemon(pokemon){
    const elementoHTML = `
    
    <div id = "estadisticas">
    <h2> ${pokemon.name}</h2>
    <p>Heigh: ${pokemon.height} ft.</p>
    <p>Weight: ${pokemon.weight} pounds.</p>
    
    </div>
    <img src = "${pokemon.sprites.front_default}"> 
    `

    contenedor.innerHTML= elementoHTML;
    d.getElementById("nombre").value = "";
}
function error(){
    console.log("No existe ese pokemon");
    let nombrePokemon = d.getElementById("nombre").value;
    const mensaje = `
    <h2>${nombrePokemon} no es un pokemon</h2>
    `
    contenedor.innerHTML = mensaje;
    d.getElementById("nombre").value = "";
}

function obtenerPokemon(){
    let nombrePokemon = d.getElementById("nombre").value;
    const url = ` https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`;

    fetch(url)
    .then((pokemons) => pokemons.json())
    .then(pokemons =>{
        console.log(pokemons);
        agregarPokemon(pokemons);
    })
    .catch(err => {
        error();
    });
    
}