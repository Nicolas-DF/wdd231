const membersURL = "data/members.json";
const spotlights = document.querySelector('.spotlights');

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();

    const qualifiedMembers = data.filter(member => member.membershipLevel === 2 || member.membershipLevel === 3);
    qualifiedMembers.sort(() => Math.random() - 0.5);

    const selectedMembers = qualifiedMembers.slice(0, 3);

    console.log(selectedMembers);
    selectedMembers.forEach(displayMembers);
}

getMembers();

function displayMembers(member) {
    const card = document.createElement('article');

    let membership = "";
    if (member.membershipLevel === 3) {
        membership = "Gold Member";
    } else {
        membership = "Silver Member";
    };

    card.innerHTML = `
        <img src="${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.phone}</p>
        <p>${member.address}</p>
        <a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
        <p>${membership}</p>
    `;

    spotlights.appendChild(card);
};