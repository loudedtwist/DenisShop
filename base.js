// Generate cards for chemicals 
window.addEventListener('load', main);
window.addEventListener('load', registerOnHeroClicked);
window.addEventListener('load', registerOnPointClicked);

var alternate = function(func) {
    var pressedTimes = 0;
    var func = func;

    return function() {
        var alternation = pressedTimes++ % 2 == 0;
        func(alternation);
    }
}

function registerOnHeroClicked() {
    var hero = document.getElementById("hero");
    var alternateBackground = alternate(function(alternation) {
        hero.style.backgroundSize = alternation ? "initial" : "30% 80%";
    });
    hero.addEventListener('click', alternateBackground);
}

function registerOnPointClicked() {
    var alternateBackground = alternate(function(alternation) {
        var points = document.getElementsByClassName("feature-point");
        for (let i = 0; i < points.length; i++) {
            const point = points[i];
            console.log(point);
            point.style.backgroundColor = alternation ? "royalblue" : "initial";
            point.style.color = alternation ? "whitesmoke" : "initial";
        }
    });

    var points = document.getElementsByClassName("feature-point");
    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        console.log(point);
        point.addEventListener('click', alternateBackground);
    }
}

function main() {
    var chemicalsCatalog = document.getElementById("catalog-chemicals");
    var cardTemplate = document.querySelector('#card-template');

    for (let index = 0; index < chemicals.length; index++) {
        const chemical = chemicals[index];

        cardTemplate.content.querySelector(".container>h4").textContent = chemical.name;
        cardTemplate.content.querySelector(".container>p").textContent = chemical.description.substring(0, 48) + "...";
        cardTemplate.content.querySelector(".image").style.backgroundImage = "url('" + chemical.image + "')";

        var clone = document.importNode(cardTemplate.content, true); // where true means deep copy
        chemicalsCatalog.appendChild(clone);
    }
}