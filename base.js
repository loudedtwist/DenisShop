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

function generateCards(products, cardTemplate, catalogContainer) {
    for (let index = 0; index < products.length; index++) {
        const product = products[index];

        cardTemplate.content.querySelector(".container>h4").textContent = product.name;
        cardTemplate.content.querySelector(".container>p").textContent = product.description.substring(0, 48) + "...";
        cardTemplate.content.querySelector(".image").style.backgroundImage = "url('" + product.image + "')";

        var clone = document.importNode(cardTemplate.content, true); // where true means deep copy
        if (clone.childElementCount > 0) {
            console.log(clone.firstElementChild);
            clone.firstElementChild.addEventListener('click', function(event) {
                console.log(event);
                console.log(event.srcElement);
                console.log(event.srcElement.closest('.card'));
                // go to parrent until class found
                openNav(event)
            });
        }
        catalogContainer.appendChild(clone);
    }
}

function main() {
    var chemicalsCatalogContainer = document.getElementById("catalog-chemicals");
    var fertilizersCatalogContainer = document.getElementById("catalog-fertilizers");
    var cardTemplate = document.querySelector('#card-template');
    generateCards(chemicals, cardTemplate, chemicalsCatalogContainer);
    generateCards(fertilizers, cardTemplate, fertilizersCatalogContainer);
}