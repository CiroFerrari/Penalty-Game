// Capture from DOM the div with class "arco-izquierda"
let arcoIzquierda = document.querySelector(".arco-izquierda");
let arcoCentro = document.querySelector(".arco-centro");
let arcoDerecha = document.querySelector(".arco-derecha");
let pelota = document.querySelector(".pelota");
let resetButton = document.querySelector(".reset-button");
let arquero = document.querySelector(".arquero");
let resultado = document.querySelector(".resultado");

let playerSelection;
let computerSelection;

// Add click event to arcoIzquierda
arcoIzquierda.addEventListener("click", function () {
  // Set player selection
  playerSelection = "izquierda";

  // Add to pelota the css class "pelota-izquierda"
  pelota.classList.add("pelota-izquierda");

  // Remove from pelota the css class "pelota-centro" and "pelota-derecha"
  pelota.classList.remove("pelota-centro");
  pelota.classList.remove("pelota-derecha");

  // Move arquero
  moveArquero();

  // Set resultado to the result of the function resultado
  resultado.textContent = calcularResultado(playerSelection, computerSelection);

  // Display reset button
  resetButton.style.display = "block";
}
);

// Add click event to arcoCentro
arcoCentro.addEventListener("click", function () {
  // Set player selection
  playerSelection = "centro";

  // Add to pelota the css class "pelota-centro"
  pelota.classList.add("pelota-centro");

  // Remove from pelota the css class "pelota-izquierda" and "pelota-derecha"
  pelota.classList.remove("pelota-izquierda");
  pelota.classList.remove("pelota-derecha");

  // Move arquero
  moveArquero();

  // Set resultado to the result of the function resultado
  resultado.textContent = calcularResultado(playerSelection, computerSelection);

  // Display reset button
  resetButton.style.display = "block";
}
);

// Add click event to arcoDerecha
arcoDerecha.addEventListener("click", function () {
  // Set player selection
  playerSelection = "derecha";

  // Add to pelota the css class "pelota-derecha"
  pelota.classList.add("pelota-derecha");

  // Remove from pelota the css class "pelota-izquierda" and "pelota-centro"
  pelota.classList.remove("pelota-izquierda");
  pelota.classList.remove("pelota-centro");

  // Move arquero
  moveArquero();

  // Set resultado to the result of the function resultado
  resultado.textContent = calcularResultado(playerSelection, computerSelection);

  // Display reset button
  resetButton.style.display = "block";
}
);

// Add click event to resetButton
resetButton.addEventListener("click", function () {
  // Remove from pelota the css class "pelota-izquierda", "pelota-centro" and "pelota-derecha"
  pelota.classList.remove("pelota-izquierda");
  pelota.classList.remove("pelota-centro");
  pelota.classList.remove("pelota-derecha");

  // Remove from arquero the css class "arquero-izquierda", "arquero-centro" and "arquero-derecha"
  arquero.classList.remove("arquero-izquierda");
  arquero.classList.remove("arquero-centro");
  arquero.classList.remove("arquero-derecha");

  // Hide reset button
  resetButton.style.display = "none";

  // Set resultado to empty string
  resultado.textContent = "";
}
);

// Function that randomly moves the arquero
function moveArquero() {
  // Get random number between 0 and 2
  let random = Math.floor(Math.random() * 3);

  // Move arquero to the left adding the css class "arquero-izquierda"
  if (random == 0) {
    arquero.classList.add("arquero-izquierda");
    computerSelection = "izquierda";
  }

  // Move arquero to the center adding the css class "arquero-centro"
  if (random == 1) {
    arquero.classList.add("arquero-centro");
    computerSelection = "centro";
  }

  // Move arquero to the right adding the css class "arquero-derecha"
  if (random == 2) {
    arquero.classList.add("arquero-derecha");
    computerSelection = "derecha";
  }
}

// Function that compares the player selection and computer selection
function calcularResultado(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "ATAJADÓN";
  } else {
    return "GOOOL"
  }
}