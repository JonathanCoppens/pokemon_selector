const searchButton = document.querySelector('#search-pokemon'); //search button
const pokemonNumberInput = document.querySelector('#pokemon-number'); //input tag
const resultParagraph = document.querySelector('#result'); // pragraph tag

searchButton.addEventListener("click", () => { //on click "search" take the entry value to search in the API
    const pokemonNumber = pokemonNumberInput.value;
    searchPokemon(pokemonNumber);
});

pokemonNumberInput.addEventListener("keydown" , (event) => { // same effect with the return button
    if (event.keyCode === 13 || event.keyCode === 10) {
        const pokemonNumber = pokemonNumberInput.value;
        searchPokemon(pokemonNumber);
    }
})


// let users the choice to enter a number between 1 and 1292
const number = Math.floor(Math.random() * 1292) + 1;

function searchPokemon(number) {

    if(number < 1 || number > 1292) { // if number is lower than 1 or upper than 1292 return an error
        console.log('Invalid Pokemon number, enter a number between 1 and 1292.');
        return;
    }
    
    const url = `https://pokeapi.co/api/v2/pokemon/${number}`; // catch the URL and obtain the number of the API to get the correponding pokemon

    fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error('Request fail');
            }
            return response.json();
        })
        .then(data => {
            resultParagraph.textContent = `Chosen Pokemon : ${data.name}`;
        })
        .catch(error => {
            resultParagraph.textContent = `Error : ${error}`;
        });
}