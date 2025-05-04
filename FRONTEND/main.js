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
    
        cell.appendChild(input);
        container.appendChild(cell);
    }
}

function Submit() {
    const inputs = document.querySelectorAll(".letter-input");
    const values = [];

    const word_array = []
    for (let i = 0; i < word.length; i++) {
        word_array[i] = word[i]
    }

    inputs.forEach(input => {
        values.push(input.value.trim());
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
    const word = await response.json()
    console.log(word)
}

GenerateWord()