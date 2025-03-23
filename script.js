function firstYes() {
    document.getElementById("question").style.display = "none";
    document.getElementById("follow-up").style.display = "block";
    document.getElementById("follow-up-question").innerText = "Are you sure? 🤩";
    document.getElementById("option1").innerText = "Yes";
    document.getElementById("option2").innerText = "Joke";
}

function firstNo() {
    document.getElementById("question").style.display = "none";
    document.getElementById("follow-up").style.display = "block";
    document.getElementById("follow-up-question").innerText = "Pls?";
    document.getElementById("option1").innerText = "Cge na nga";
    document.getElementById("option2").innerText = "Ayuko";
}

function option1Click() {
    alert("Yay! 😍");
}

function option2Click() {
    let question = document.getElementById("follow-up-question").innerText;

    if (question === "Pramis?") {
        document.getElementById("follow-up").style.display = "none";
        document.getElementById("crying-cat").style.display = "block";
    } 
    else if (question === "Pls?") {
        document.getElementById("follow-up-question").innerText = "Awa nalang?";
        document.getElementById("option1").innerText = "Fine...";
        document.getElementById("option2").innerText = "Ayuko pa rin";
    } 
    else if (question === "Awa nalang?") {
        document.getElementById("follow-up").style.display = "none";
        document.getElementById("crying-cat").style.display = "block";
    }
}
