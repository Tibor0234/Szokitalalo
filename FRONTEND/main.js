const words = [
    "asztal",
    "körte",
    "gyerek",
    "halász",
    "csizma",
    "tükör",
    "papír",
    "erdő",
    "kabát",
    "motor",
    "kulcs",
    "doboz",
    "lakat",
    "fogas",
    "csónak",
    "keret",
    "vödör",
    "gyűrű",
    "olló",
    "szégyen"
];

function generateWord() {
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

generateWord()