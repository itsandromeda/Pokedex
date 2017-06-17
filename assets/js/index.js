const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper container"></div>');

    root.append(wrapper);
    wrapper.append(Header());
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