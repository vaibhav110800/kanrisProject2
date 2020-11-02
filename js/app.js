document.getElementById('1').onclick = function changeContent() {
    document.getElementById('c1').style = "display: block";
    document.getElementById('c2').style = "display: none";
    document.getElementById('c3').style = "display: none";
}

document.getElementById('2').onclick = function changeContent() {
    document.getElementById('c1').style = "display: none";
    document.getElementById('c2').style = "display: block";
    document.getElementById('c3').style = "display: none";
}

document.getElementById('3').onclick = function changeContent() {
    document.getElementById('c1').style = "display: none";
    document.getElementById('c2').style = "display: none";
    document.getElementById('c3').style = "display: block";
}

function search_products() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('pro-box-box');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "flex";
        }
    }
};


