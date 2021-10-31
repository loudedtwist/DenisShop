window.onscroll = function() {
    onScroll();
};

var navigation = document.getElementById("navigation");
var hero = document.getElementById("hero");

var navigationTopOffset = navigation.offsetTop;
var navigationHeight = navigation.offsetHeight;
var heroTopPadding = hero.style.marginTop;

console.log(heroTopPadding);
console.log(navigationHeight);

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function onScroll() {
    if (window.pageYOffset > navigationTopOffset) {
        navigation.classList.add("sticky");
        // document.body.style.paddingTop = navigationHeight;
    } else {
        navigation.classList.remove("sticky");
        // document.body.style.paddingTop = 0;
    }
}