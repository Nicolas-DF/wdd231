const membersURL = "../data/members.json";

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();

    console.log(data);
}

getMembers();