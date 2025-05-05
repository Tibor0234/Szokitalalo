const words = [
    "angol",
    "kulcs",
    "motor",
    "darab",
    "dolog",
    "gomba",
    "fogas",
    "hurok",
    "karfa",
    "csizma",
    "labda",
    "lazac",
    "gyerek",
    "nappal",
    "nyomda",
    "lakat",
    "robot",
    "doboz",
    "szivar",
    "keret"
];

const word = words[Math.floor(Math.random() * words.length)];

console.log(word)

function GenerateWord() {
    const container = document.getElementById("word-container");
    container.innerHTML = "";

    for (let i = 0; i < word.length; i++) {
        const cell = document.createElement("div");
        cell.classList.add("letter-cell");

        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("maxlength", "1");
        input.classList.add("letter-input");

        const number = document.createElement("div");
        number.classList.add("letter-number");

        cell.appendChild(input);
        cell.appendChild(number);
        container.appendChild(cell);
    }
}

const values = []
const word_array = []

function Submit() {
    const inputs = document.querySelectorAll(".letter-input");
    let filled = 0

    inputs.forEach(input => {
        if (input.value.trim() !== "") {
            filled++;
        }
    });

    if (filled !== inputs.length) {
        alert("Nincs minden mező kitöltve!")
        return;
    }

    for (let i = 0; i < word.length; i++) {
        word_array[i] = word[i]
    }

    inputs.forEach(input => {
        values.push(input.value.trim())
        input.disabled = true;
    });
    
    fetch("http://localhost:5033/wordapi/target", {
        method : "POST",
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify({
            word : word_array
        })
    }).then(resp=>{
        console.log("response: ", resp)
    }).catch(error=>console.log(error));

    fetch("http://localhost:5033/wordapi/guess", {
        method : "POST",
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify({
            word : values
        })
    }).then(resp=>{
        console.log("response: ", resp)
        if (resp.ok) {
            Result()
        }
    }).catch(error=>console.log(error));
}

async function Result() {
    const response = await fetch("http://localhost:5033/wordapi")
    const result = await response.json()
    console.log(result)

    const result_container = document.getElementById("result")
    result_container.innerHTML = word

    const inputs = document.querySelectorAll(".letter-input");

    let guessed = 0
    for (let i = 0; i < result.length; i++) {
        if (result[i] == 0) {
            guessed++
        }        
    }
    
    let accuracy = (guessed / result.length) * 100

    inputs.forEach(input => {
        input.style.background = `linear-gradient(to top, green ${accuracy}%, white ${1 - accuracy}%)`;
    }
    );

    let numbers = document.querySelectorAll(".letter-number");
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].textContent = result[i]
    }
}

GenerateWord()