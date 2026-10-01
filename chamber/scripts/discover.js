import places from "../data/places.mjs";

const discoverGrid = document.getElementById("discover-grid");

places.forEach(place => {
    const card = document.createElement("article");

    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="${place.image}" alt="${place.name}" loading="lazy">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <a href="${place.url}" target="_blank" rel="noopener noreferrer">Learn More</a>
        `;

    discoverGrid.appendChild(card);
});