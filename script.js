function firstYes() {
    let question = document.getElementById("question");
    let buttons = document.querySelector(".buttons");
    let followUp = document.getElementById("follow-up");
    let followUpQuestion = document.getElementById("follow-up-question");
    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");

    question.innerText = "Are you sure?";
    buttons.style.display = "none";

    setTimeout(() => {
        followUp.style.display = "block";
        followUpQuestion.innerText = "This choice cannot be undone.";
        option1.innerText = "Yes, I'm sure.";
        option2.innerText = "Wait...";
    }, 2000);
}

function firstNo() {
    let question = document.getElementById("question");
    let buttons = document.querySelector(".buttons");
    let followUp = document.getElementById("follow-up");
    let cryingCat = document.getElementById("crying-cat");
    let creepySound = document.getElementById("creepy-sound");

    question.innerText = "Wrong choice.";
    buttons.style.display = "none";
    cryingCat.style.display = "block";
    creepySound.play();

    setTimeout(() => {
        document.body.style.animation = "flicker 0.1s infinite alternate";
    }, 2000);
}

function option1Click() {
    document.body.innerHTML = "<h1 style='color: red;'>It's too late now.</h1>";
}

function option2Click() {
    document.body.innerHTML = "<h1 style='color: red;'>You should have chosen wisely.</h1>";
}
