function openNav(element) {
    console.log(element);

    const name = element.dataset.name;
    const image = element.dataset.image;
    const description = element.dataset.description;
    const full_description = element.dataset.full_description;
    const active_substance = element.dataset.active_substance;


    document.getElementById("overlay-product-image").style.backgroundImage = "url('" + image + "')";
    document.getElementById("overlay-product-name").innerText = name;
    document.getElementById("overlay-product-description").innerText = full_description;
    document.getElementById("overlay-product-components").innerText = active_substance;

    // show the overlay and disable scrolling on the main page behained
    document.getElementById("product-details-overlay").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeNav() {
    // hide the overlay and enable scrolling on the main page behained
    document.getElementById("product-details-overlay").style.display = "none";
    document.body.style.overflow = "initial";
}