// Function to get query parameters from the URL
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    id: params.get("id"),
  };
}

function fetchPokemonDetails(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then((pokemon) => {
      document.getElementById(
        "pokemon-name"
      ).innerText = `${pokemon.name} (ID: ${pokemon.id})`;
      document.getElementById("pokemon-info").innerHTML = `
                <img src="${pokemon.sprites.front_default}" alt="${
        pokemon.name
      }">
                <p><strong>Height:</strong> ${pokemon.height} decimetres</p>
                <p><strong>Weight:</strong> ${pokemon.weight} hectograms</p>
                <p><strong>Description:</strong> A Pokémon of type ${pokemon.types
                  .map((t) => t.type.name)
                  .join(", ")}</p>
            `;
    })
    .catch((error) => console.error("Error fetching Pokémon details:", error));
}

function goBack() {
  window.history.back();
}
const params = getQueryParams();
if (params.id) {
  fetchPokemonDetails(params.id);
}
