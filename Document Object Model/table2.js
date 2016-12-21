function buildTable(mountains) {
    var table = document.createElement('table');
    var head = document.createElement('tr');
    var fields = Object.keys(mountains[0]);

    fields.forEach(function(h) {
        var he = document.createElement('th');
        he.innerHTML = h;
        head.appendChild(he);
    })

    table.appendChild(head);

    mountains.forEach(function(mountain) {
        var data = document.createElement('tr');

        fields.forEach(function(field) {
            var el = document.createElement('td');
            el.innerHTML = mountain[field];
            if (typeof mountain[field] == "number")
                el.style.textAlign = "right";
            data.appendChild(el);
        })

        table.appendChild(data);
    });

    return table;
}

document.body.appendChild(buildTable(MOUNTAINS));
