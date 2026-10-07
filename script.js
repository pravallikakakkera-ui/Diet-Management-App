// Save user's name
function saveName() {
    const name = document.getElementById("nameInput").value.trim();

    if (name === "") {
        alert("Please enter your name!");
        return;
    }

    document.getElementById("userName").innerText = name;

    localStorage.setItem("userName", name);
}


// Select Health Issues / Diet Plan
function selectOption(option) {

    document.getElementById("result").innerText =
        "You selected: " + option + " ✅";

    // Health Issues
    if (option === "Health Issues") {
        window.location.href = "page2.html";
    }

    // Diet Plan
    else if (option === "Diet Plan") {
        window.location.href = "diet.html";
    }
}


// Get Started button
function getStarted() {
    const name = document.getElementById("nameInput").value.trim();

    if (name === "") {
        alert("Please enter your name first!");
        return;
    }

    localStorage.setItem("userName", name);

    window.location.href = "page2.html";
}


// Load saved name
window.onload = function () {

    const savedName = localStorage.getItem("userName");

    if (savedName) {
        const userName = document.getElementById("userName");

        if (userName) {
            userName.innerText = savedName;
        }
    }
};
