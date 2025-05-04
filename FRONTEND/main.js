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


function GenerateWord() {
    const container = document.getElementById("word-container");
    container.innerHTML = ""; // előző tartalom törlése
  
    // Véletlen szó kiválasztása
    const word = words[Math.floor(Math.random() * words.length)];
  
    // Rublikák létrehozása minden betűhöz
    for (let i = 0; i < word.length; i++) {
        const cell = document.createElement("div");
        cell.classList.add("letter-cell");
    
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("maxlength", "1"); // csak 1 karakter legyen beírható
        input.classList.add("letter-input");
    
        cell.appendChild(input);
        container.appendChild(cell);
    }
}

function Submit() {
    const inputs = document.querySelectorAll(".letter-input");
    const values = [];

    inputs.forEach(input => {
        values.push(input.value.trim()); // trim: eltávolítja az esetleges szóközöket
    });

    fetch("http://localhost:5033/wordapi/guess", {
        method : "POST",
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify({
            word : values
        })
    }).then(resp=>{
        console.log("response: ", resp)
    }).catch(error=>console.log(error));
}

GenerateWord()