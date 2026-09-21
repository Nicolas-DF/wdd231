const membersURL = "data/members.json";

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();

    const qualifiedMembers = data.filter(member => member.membershipLevel === 2 || member.membershipLevel === 3);
    qualifiedMembers.sort(() => Math.random() - 0.5);

    const selectedMembers = qualifiedMembers.slice(0, 3);

    console.log(selectedMembers);
}

getMembers();