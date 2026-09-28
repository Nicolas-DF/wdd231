const params = new URLSearchParams(window.location.search);

const fname = params.get("fname");
const lname = params.get("lname");
const email = params.get("email");
const phone = params.get("phone");
const businessName = params.get("business-name");

document.querySelector("#fname").textContent = fname;
document.querySelector("#lname").textContent = lname;
document.querySelector("#email").textContent = email;
document.querySelector("#phone").textContent = phone;
document.querySelector("#business-name").textContent = businessName;

// Timestamp
const timestamp = params.get("timestamp");
const date = new Date(timestamp);

const formattedDate = date.toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short"
});

document.querySelector("#timestamp").textContent = formattedDate;