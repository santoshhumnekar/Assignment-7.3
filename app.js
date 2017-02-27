var counter = 0;

function add() {
    return counter += 1;
}

function addFunction(){
    document.getElementById("count").innerHTML = add();
}