const imageContainer = document.getElementById("image-container");

fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    data.results.forEach((pokemon) => {
      fetch(pokemon.url)
        .then((response) => response.json())
        .then((pokemonDetails) => {
            console.log(pokemonDetails);
          const imageCard = document.createElement("div");
          imageCard.classList.add("image-card");
          imageCard.innerHTML = `
                        <img src="${pokemonDetails.sprites.front_default}">
                        <h3><a href="details.html?id=${pokemonDetails.id}">${pokemonDetails.name}</a></h3>
                        <p>ID: ${pokemonDetails.id}</p>
                        <p>Description: A Pokémon of type ${pokemonDetails.types[0].type.name}</p>
                    `;
          imageContainer.appendChild(imageCard);
        });
    });
  })
  .catch((error) => console.error("Error fetching Pokémon data:", error));
