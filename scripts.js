const colores = ["blue", "lightblue", "green", "lightgreen", "red", "lightred", "orange", "pink", "purple", "grey", "lightgrey", "black"];
const numero = ["1", "2", "3", "4", "5", "6"];
var direccion;

function getRandom(array) {
    let num = Math.floor(Math.random() * (array.length - 1));
    return array[num];
}

const enlaces = document.querySelectorAll("a");
for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
    });
};

const imagenes = document.querySelectorAll("img");
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("click", function() {
        let imagen = "./assets/magic-" + getRandom(numero) + ".gif";
        imagenes[i].src = imagen;
    });
    imagenes[i].addEventListener("mouseover", function() {
        direccion = imagenes[i].src;
        imagenes[i].src = `./assets/abracadabra.gif`;
    });
    imagenes[i].addEventListener("mouseout", function() {
        imagenes[i].src = direccion;
    });
};

const parrafo = document.querySelectorAll("p");
for (let i = 0; i < parrafo.length; i++) {
    parrafo[i].addEventListener("click", function() {
        let color = getRandom(colores).toString();
        parrafo[i].style.color = color;
        do {
            let color1 = getRandom(colores).toString();
            parrafo[i].style.backgroundColor = color1;
        } while (parrafo[i].style.backgroundColor == parrafo[i].style.color); 
    });
    parrafo[i].addEventListener("mouseover", function() {
        let color = getRandom(colores);
        parrafo[i].style.color = color;
        do {
            let color1 = getRandom(colores);
            parrafo[i].style.backgroundColor = color1;
        } while (parrafo[i].style.backgroundColor == parrafo[i].style.color);
    });
    parrafo[i].addEventListener("mouseout", function() {
        parrafo[i].style.color = "black";
        parrafo[i].style.backgroundColor = "white";
    });
};

const article = document.querySelectorAll("article");
for (let i = 0; i < article.length; i++) {
    article[i].addEventListener("click", function() {
        do {
            let color = getRandom(colores).toString();
            var parrafo1 = article[i].querySelector("p");
            article[i].style.backgroundColor = color;
        } while (article[i].style.backgroundColor == parrafo1.style.backgroundColor); 
    });
    article[i].addEventListener("mouseover", function() {
        do {
            let color = getRandom(colores).toString();
            var parrafo1 = article[i].querySelector("p");
            article[i].style.backgroundColor = color;
        } while (article[i].style.backgroundColor == parrafo1.style.backgroundColor);
    });
    article[i].addEventListener("mouseout", function() {
        article[i].style.backgroundColor = "white";
    });
};
