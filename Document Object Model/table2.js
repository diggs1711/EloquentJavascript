function buildTable(mountains) {
    var table = document.createElement('table');
    var head = document.createElement('tr');

    Object.keys(mountains[0]).forEach(function(h) {
        var he = document.createElement('th');
        he.innerHTML = h;
        head.appendChild(he);
    })

    table.appendChild(head);

    mountains.forEach(function(mountain) {
        var data = document.createElement('tr');

        var name = document.createElement('td');
        name.innerHTML = mountain.name;

        var height = document.createElement('td');
        height.innerHTML = mountain.height;

        var country = document.createElement('td');
        country.innerHTML = mountain.country;

        data.appendChild(name);
        data.appendChild(height);
        data.appendChild(country);

        table.appendChild(data);
    });

    return table;
}

document.body.appendChild(buildTable(MOUNTAINS));
