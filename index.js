//ejercicio 1 
async function getRandomPokemon() {

    let random = Math.floor(Math.random() * 151)
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    let pokemon = await response.json()
    console.log(pokemon);

    return pokemon
};


//ejercicio 2
async function getImageAndName(pokemon) {

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return { name, img }

};

//ejercicio 3
async function printImageAndName() {
    let random = Math.floor(Math.random() * 151) + 1
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    let pokemon = await response.json()
    let name = pokemon.name
    let img = pokemon.sprites.front_default

    return `<section>
    <img src="${img}" alt="${name}>
    <h1>${name}</h1>
    </section>`
}

//ejercicio 4
async function getRandomDogImage() {
    let response = await fetch('https://dog.ceo/api/breeds/image/random')
    let data = await response.json()
    let img = data.message

    return img
}

// //ejercicio 5
async function getRandomPokemonImage() {

    const min = 1;
    const max = 1302;
    const pokemonAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonAleatorio}/`);
        if (!response.ok) {
            throw new Error(
                `Error HTTP: ${response.status} - ${response.statusText}`
            );
        }
        let data = await response.json();
        let urlAleatoria = data.sprites.front_default;

        return urlAleatoria;

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        throw new Error("socorro!")
    }
}
getRandomPokemonImage()
    .then((urlAleatoria) => console.log(urlAleatoria))
    .catch(error => console.error("Algo salió mal:", error.message));

//ejercicio 6
async function pokemonPikachu() {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
        if (!response.ok) {
            throw new Error(
                `Error HTTP: ${response.status} - ${response.statusText}`
            );
        }
        let data = await response.json();
        let img = data.sprites.front_default;
        return img;

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}

async function dogPug() {
    try {
        let responseDos = await fetch(`https://dog.ceo/api/breed/pug/images`);
        if (!responseDos.ok) {
            throw new Error(
                `Error HTTP: ${responseDos.status} - ${responseDos.statusText}`
            );
        }
        let dataUno = await responseDos.json();
        let todasLasImgPug = dataUno.message;

        return todasLasImgPug;
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }

}
async function printPugVsPikachu() {
    try {
        const pikachuUrl = await pokemonPikachu();
        const pugUrls = await dogPug();

        // const [pikachuUrl, pugUrls] = await Promise.all([
        //     pokemonPikachu(), 
        //     dogPug()    
        // ]);

        const segundaImgPug = pugUrls[5];
        console.log(segundaImgPug)

        let contenedor = document.getElementById("pikachu-pug");
        contenedor.innerHTML = `
                <div class="imagen-item">
                 <img src="${pikachuUrl}" alt="Imagen de Pikachu">
                </div>
                <h2> vs </h2>
                <div class="imagen-item">
                <img src="${segundaImgPug}" alt="Imagen de un pug">
                </div>
            `;
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}
printPugVsPikachu()

//ejercicio 7
async function getRandomCharacter() {
    let random = Math.floor(Math.random() * 100) + 1
    let response = await fetch(`https://rickandmortyapi.com/api/character/${random}`)
    let character = await response.json()
    console.log(character);

    return character
}

//ejercicio 8
async function getRandomCharacterInfo() {
    let random = Math.floor(Math.random() * 100) + 1
    let response = await fetch(`https://rickandmortyapi.com/api/character/1`)
    let character = await response.json()
    let img = character.image
    let name = character.name
    let episodes = character.episode

    let episodeInfo = await fetch(character.episode[0])

    let dataEpisode = await episodeInfo.json()

    let firstEpisode = dataEpisode.name

    let dateEpisode = dataEpisode.air_date

    return { img, name, episodes, firstEpisode, dateEpisode }
}

getRandomCharacterInfo()


