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

    card.innerHTML = `
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
    `;

    spotlights.appendChild(card);
}