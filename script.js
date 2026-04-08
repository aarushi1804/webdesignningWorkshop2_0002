let heading = document.getElementById('mainheading');
let paragraph = document.getElementById('paragraph');
let input = document.getElementById('name');
let fontSize = 16;


document.getElementById('changtxtbtn').addEventListener('click', function () {
    if (input.value !== "") {
        heading.innerHTML = input.value;
    }
});


document.getElementById('bgcolorbtn').onclick = function () {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
};


document.getElementById('fontsizebtn').addEventListener('click', function () {
    fontSize += 2;
    paragraph.style.fontSize = fontSize + "px";
});



document.getElementById('togglebtn').addEventListener('click', function () {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});


document.getElementById('resetbtn').addEventListener('click', function () {
    heading.innerHTML = "Welcome to JavaScript Lab";
    paragraph.style.fontSize = "16px";
    fontSize = 16;
    paragraph.style.display = "block";
    document.body.style.backgroundColor = "#f4f4f4";
    input.value = "";
});