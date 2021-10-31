function openNav(element) {
    console.log(element);
    document.getElementById("myNav").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeNav() {
    document.getElementById("myNav").style.display = "none";
    document.body.style.overflow = "initial";
}