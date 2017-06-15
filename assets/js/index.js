const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');

    root.append(wrapper);
};

$(_ => {
    getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {

        if (err) {
            return alert(err.message);
        }

        const root = $('.root');
        render(root);
    });
});