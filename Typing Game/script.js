const inputEl = document.querySelector("input");
const scoreEl = document.querySelector("#score");
const timeEl = document.querySelector("#time");
const wordEl = document.querySelector("#key-word");
const barEl = document.querySelector(".bar");
const gameoverEl = document.querySelector("#gameover-container");
const container = document.querySelector(".container");
const levelEl = document.querySelector("#level");

let timer = 10;
let score = 0;
let word;
let difficulty = 'easy'; //default setting
let width = 100;

const list = [
    "vigilant",
    "brilliant",
    "coward",
    "clever",
    "spectacular",
    "spontanous",
    "programming",
    "sweet",
    "heaven",
    "truth",
    "mystry",
    "default",
    "trust",
    "depend",
    "grace",
    "awesome",
    "church",
    "hardware",
    "architecture"
]


inputEl.focus();
addNewWord();
// barEl.style.width = 100 + "%"; //initial value

const interval = setInterval(updateTime,1000);

function addNewWord() {
    word = randomWord();
    wordEl.innerHTML = word;

    timeEl.innerHTML = formatNumber(timer);
}

function randomWord() {
    const random = Math.floor(Math.random() * list.length);

    return list[random];
}


//adding dificulty
levelEl.addEventListener("change",(e)=> {
    difficulty = e.target.value;
    // location.reload();
    inputEl.focus();
})

//input handling
inputEl.addEventListener("input", (e) => {
    const typedWord = e.target.value;

    if(typedWord == word) {
        addNewWord();
        e.target.value = "";

        score++;
        scoreEl.innerHTML = formatNumber(score);
        
        //the time increment
        if(difficulty==="hard") {
            timer += 2;
        } else if(difficulty==="medium") {
            timer += 3;
        } else {
            timer += 5;
        }
        updateTime();
    }
})


function updateTime() {
    timer--;
    // const barInterval = setInterval(()=>{
    //     if(timer<10) {
    //     barEl.style.width = timer * 10 + "%";
    //     }
    // },1000);

    if(timer == 0) {
        gameover();
        clearInterval(interval);
        // clearInterval(barInterval);
    }
    timeEl.innerHTML = formatNumber(timer);

}

function formatNumber(num) {
    return num < 10 ? `0${num}` : num;
}


function gameover() {
    gameoverEl.innerHTML = `
    <p>Your time is up.</p>
    <h1>Game Over</h1>
    <p>Your score: ${score} </p>
    <button>Reload</button>
`;
    gameoverEl.style.display = "block";
    container.style.display="none";
    gameoverEl.querySelector("button").addEventListener("click", e => {
        location.reload();
    })

}