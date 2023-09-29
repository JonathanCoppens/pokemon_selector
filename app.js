/* function fechtUsers() {
    const r = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    if (r.ok === true){
    return r.json();
    }
    throw new Error('Impossible de contacter le serveur')
};

fetch('https://pokeapi.co/api/v2/pokemon/ditto') // ne pas mettre de ';' après l'itilisation de fetch
    // revoie un objet de type "response"    
.then(r => r.json())
.then(body => console.log(body)) */


    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then(response => {
        if (!response.ok) {
            throw new Error('Request error'); // si la réponse est ! de ok, afficher l'erreur
        }
        return response.json(); // converti la réponse en json
    })
    .then(data => {
        //data contient l'objet json de la réponse
        const pokemons = data.results;
        pokemons.forEach(pokemon => {
            console.log(`Pokemon's name : ${pokemon.name}`);
            console.log(`Pokemon's url : ${pokemon.url}`);
            //console.log(pokemons);
        })       

        console.log(`Number of Pokemon : ${data.count}`);
                                        // data reprend les données en json
                                        //results accède aux résultas du tableau
                                        //0 donne l'élément du tableau
                                        //name accède à la catégorie demandé
        /* console.log(`Name of the Pokemon : ${pokemons[0].name}`);
        console.log(`Url of the Pokemon : ${pokemons[0].url}`); */

    })
    .catch(error => {
        console.log('Error : ', error);
    });

    
