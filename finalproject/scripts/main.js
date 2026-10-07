async function getServices () {
    const response = await fetch("data/services.json");
    const services = await response.json();

    displayServices(services);
}

function getRandomServices(services, amount) {
    const shuffled = [...services].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, amount);
}

function displayServices(services) {
    const container = document.querySelector("#services-container");

    const randomServices = getRandomServices(services, 3);

    randomServices.forEach(service => {
        const card = document.createElement("article");
        card.classList.add("service-card");

        card.innerHTML = `
        <img src="${service.image}" alt="${service.alt}">
        <h3>${service.name}</h3>
        <p>${service.description}</p>
        <a href="services.html#${service.id}">Learn More</a>
        `;

        container.appendChild(card);
    });
}

getServices();