let punkte = 0;
let start = document.getElementById("0");
start.addEventListener("click", () => startClickHandler());
let question1 = document.getElementsByClassName("1");
let question2 = document.getElementsByClassName("2");
let question3 = document.getElementsByClassName("3");
let question4 = document.getElementsByClassName("4");
let question = document.getElementsByClassName("question");
let results = document.getElementById("results");

let myfunc;

for(let i = 0; i < question1.length; i++) {
    question1[i].addEventListener("click", () => question1ClickHandler(i));
    question2[i].addEventListener("click", () => question2ClickHandler(i));
    question3[i].addEventListener("click", () => question3ClickHandler(i));
    question4[i].addEventListener("click", () => question4ClickHandler(i));
}

for(let i = 0; i < question.length; i++){
    question[i].style.display = "none";
}

question[0].style.display = "block";

function startClickHandler() {
    question[0].style.display = "none";
    question[1].style.display = "block";
    timer();
}

function question1ClickHandler(i) {
    question[1].style.display = "none";
    question[2].style.display = "block";
    if(question1[i].innerHTML == "2021"){
        punkte++;
        console.log(punkte);
    }
}

function question2ClickHandler(i) {
    question[2].style.display = "none";
    question[3].style.display = "block";
    if(question2[i].innerHTML == "20"){
        punkte++;
        console.log(punkte);
    }
}

function question3ClickHandler(i) {
    question[3].style.display = "none";
    question[4].style.display = "block";
    if(question3[i].innerHTML == "Makler im Fokus &amp; Remote Coffee"){
        punkte++;
        console.log(punkte);
    }
}

function question4ClickHandler(i) {
    question[4].style.display = "none";
    clearInterval(myfunc);
    document.getElementById("time").style.display = "none";
    if(question4[i].innerHTML == "3"){
        punkte++;
        console.log(punkte);
    }
    results.innerHTML = "Sie haben " + punkte + " von 4 Punkten erreicht.";
}
function timer(){
    let countDownDate = new Date().getTime() + 60 * 1000 * 3;
    myfunc = setInterval(function() {

        let now = new Date().getTime();
        let timeleft = countDownDate - now;

        let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        document.getElementById("time").innerHTML = minutes + "m " + seconds + "s ";

        if(timeleft < 10000) {
            document.getElementById("time").style.color = "red";
        }

        if (timeleft < 0) {
            clearInterval(myfunc);
            document.getElementById("time").innerHTML = ""
            document.getElementById("end").innerHTML = "Die Zeit ist abgelaufen!";
            results.innerHTML = "Sie haben " + punkte + " von 4 Punkten erreicht.";
            for(let i = 0; i < question.length; i++){
                question[i].style.display = "none";
            }
        }
    }, 1000);
}
