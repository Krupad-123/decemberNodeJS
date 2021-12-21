function modulePattern() {
    var name = "Mayank";
    var age = 10;

    function getData() {
        console.log(name)
    }

    function getDetails() {
        getData();
    }

    return {
        getDetails: getDetails
    }
}

var data = modulePattern();

console.log(data.getDetails())

debugger;