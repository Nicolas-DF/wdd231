async function getServices () {
    const response = await fetch("data/services.json");
    const services = await response.json();

    displayServices(services);
}

function getRandomServices(services, amount) {
    const shuffled = [...services].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, amount);
}

