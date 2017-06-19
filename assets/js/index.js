/*global $, getJSON, Header, Grid, alert*/
const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper container"></div>');

    root.append(wrapper);
    wrapper.append(Header());
    wrapper.append(Grid());
};

const state = {
    pokemons: null,
    currPokemon: null,
    selectedPokemon: {
        id: null,
        src: null,
        name: null,
        description: null,
        height: null,
        weight: null,
        sex: null,
        category: null,
        ability: null,
        type: null,
        weakness: null
    }
};

$(_ => {
    getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {

        if (err) {
            return alert(err.message);
        }
        state.pokemons = json.pokemon_entries;
        const root = $('.root');
        render(root);
    });
});