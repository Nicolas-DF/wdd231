async function getServices() {
    const response = await fetch("data/services.json");
    const services = await response.json();

    displayServices(services);
}

function displayServices(services) {
    const businessPrinting = document.getElementById("business-printing");
    const marketingMaterials = document.getElementById("marketing-materials");
    const customDesign = document.getElementById("custom-design");

    const categories = {
        "business-printing": [
            "business-cards",
            "brochures",
            "calendars"
        ],
        "marketing-materials": [
            "flyers",
            "posters",
            "banners",
            "stickers",
            "labels"
        ],
        "custom-design": [
            "invitations",
            "packaging",
            "custom-graphic-design",
            "logo-design"
        ]
    };

    const containers = {
        "business-printing": businessPrinting,
        "marketing-materials": marketingMaterials,
        "custom-design": customDesign
    };

    services.forEach(service => {
        const category = Object.keys(categories).find(key => 
            categories[key].includes(service.id)
        );

        if(!category) {
            console.warn(`No category found for: ${service.name}`);
            return;
        }

        const container = containers[category];

        const card = document.createElement("article");
        card.classList.add("service-card");
        card.id = service.id;

        card.innerHTML = `
            <img src="${service.image}" alt="${service.alt}">
            <h4>${service.name}</h4>
            <p>${service.description}</p>
            <a href="request.html">Request a Quote</a>
        `;
        container.appendChild(card);
    });
}

getServices();