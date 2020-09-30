document.getElementById('1').onclick = function changeContent() {
    document.getElementById('c1').style = "display: block";
    document.getElementById('c2').style = "display: none";
    document.getElementById('courses3').style = "display: none";
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