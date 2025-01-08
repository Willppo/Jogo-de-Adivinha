const randomNumber = Math.floor(Math.random() * 11);
    console.log("Número gerado (para testar):", randomNumber); // Apenas para fins de teste

function Adivinhar() {
    const userGuess = parseInt(document.getElementById('numeroAdivinha').value);

    if (isNaN(userGuess)) {
        document.getElementById('output').innerText = "Bruh! Estás de brincadeira comigo!";
        return;
      }

      if (userGuess < 0 || userGuess > 10) {
        document.getElementById('output').innerText = "Eu disse sem batotas!";
      } else if (userGuess === randomNumber) {
        document.getElementById('output').innerText = "Bem Mau! É mesmo assim!";
      } else {
        document.getElementById('output').innerText = userGuess > randomNumber 
          ? "Está calor aqui hein!" 
          : "Estou congelando!";
      }
  }

  const btn = document.querySelector("#recarregar");

  btn.addEventListener("click", () => {
    location.reload()
  });