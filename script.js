const yesQuestions = [
    "220 ba ean? :< (oo nga / jk lng)",
    "Baka namali kalang nang tap, gi na :< (sorry:< / 22o nga)",
    "22o tlga? (oo nga / hindi)",
    "Weh?? (oo nga / Hindi eh)",
    "Di nga? (oo nga / Ayoko na)",
    "Bat parang napipilitan ka? (Medyo lang / Oo nga eh)",
    "D'wag na, parang napipilitan kalang eh (Hindi / Okay sige ayoko na / Ewan)"
];

const noQuestions = [
    "Pls?:< (Sige na nga / Ayoko)",
    "C-gurado naba ean?:<< (Oo naman! / Ewan)",
    "Last chance:<<< (Bakit ba kasi / No pa rin)",
    "Baka gusto mo pag-isipan ulit?:<<<< (No is no / Pwede next time?)",
    "Sakit mo nmn:<<<<<< peru pls? (sorry / No pa rin)",
    "Baka kaya pato late game?:<<<<<< (Malay mo / Di talaga)",
    "Ayaw mo maawa?:<<<<<<<< (Wala akong awa / Sige na nga)",
    "Kung ako nlng sana~~ baks nmn:<<<<<<<<< (ayuko nga / pakeko)",
    "Awa nlng tlga baks,awa nlng:<<<<<<<<< (Awa lang pero no pa rin / Baka)",
    "Tigas nang hart mo! (Okay fine sige na / Talaga)"
];

let index = 0;
const questionText = document.getElementById("question");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

yesBtn.addEventListener("click", function() {
    if (index < yesQuestions.length) {
        questionText.innerText = yesQuestions[index];
        index++;
    } else {
        document.body.innerHTML = "<h1>Yay! ❤️</h1><p>Excited na akong manligaw!</p>";
    }
});

noBtn.addEventListener("click", function() {
    if (index < noQuestions.length) {
        questionText.innerText = noQuestions[index];
        index++;
    } else {
        document.body.innerHTML = "<h1>😭</h1><p>Ouch! Pero respeto sa decision mo.</p>";
    }
});
