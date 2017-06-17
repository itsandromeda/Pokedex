/*global $, state*/
const Header = (update) => {
    const header = $('<header></header>'),
        title = $('<h1 class="text-center">Pokédex</h1>'),
        div = $('<div class="row"></div>'),
        div_2 = $('<div class="col-md-11"></div'),
        div_3 = $('<div class="col-md-1 text-center"></div>'),
        input = $('<input />'),
        icon = $('<i class="glyphicon glyphicon-search"></i>'),
        span = $('<span>A-Z</span>');

    header.append(title);
    header.append(div);

    div.append(div_2);
    div.append(div_3);

    div_2.append(icon);
    div_2.append(input);

    div_3.append(span);

    return header;
};