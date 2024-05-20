var ascending = true;

function sortDivs(columnIndex) {
    var container = document.getElementById("container");
    var columns = Array.from(container.getElementsByClassName("column"));
    columns.sort(function(a, b) {
        var x = a.getElementsByTagName("div")[columnIndex].innerText.toLowerCase();
        var y = b.getElementsByTagName("div")[columnIndex].innerText.toLowerCase();
        
        if (columnIndex === 3) {
            x = getSexOrder(x);
            y = getSexOrder(y);
        }
        
        if (ascending) {
            return x > y ? 1 : (x < y ? -1 : 0);
        } else {
            return x < y ? 1 : (x > y ? -1 : 0);
        }
    });

    columns.forEach(function(column) {
        container.appendChild(column);
    });

    ascending = !ascending;
}

function getSexOrder(sex) {
    switch(sex) {
        case '男':
            return 1;
        case '女':
            return 2;
        case '不透露':
            return 3;
        default:
            return 4;
    }
}