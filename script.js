function selectOption(option) {

    document.getElementById("result").innerText =
        "You selected: " + option + " ✅";

    let details = document.getElementById("details");

    if (option === "Health Issues") {

        details.innerHTML = `
            <h3>🩺 Select Your Health Problem</h3>

            <button onclick="selectProblem('Weakness')">Weakness</button>
            <button onclick="selectProblem('Obesity')">Obesity</button>
            <button onclick="selectProblem('Skin Problems')">Skin Problems</button>
            <button onclick="selectProblem('Hair Fall')">Hair Fall</button>
        `;

    } else {

        details.innerHTML = `
            <h3>🍎 Select Your Diet Goal</h3>

            <button onclick="selectProblem('Weight Loss')">Weight Loss</button>
            <button onclick="selectProblem('Weight Gain')">Weight Gain</button>
            <button onclick="selectProblem('Healthy Diet')">Healthy Diet</button>
        `;
    }
}


function selectProblem(problem) {

    document.getElementById("details").innerHTML +=
        "<p class='selected'>Selected: " + problem + " ✅</p>";
}