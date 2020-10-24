const form = document.querySelector("#form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  start(event);
});

function getInputWeight(event) {
  const inputWeight = event.target.querySelector("#weight");
  return inputWeight;
}

function getInputHeight(event) {
  const inputHeight = event.target.querySelector("#height");
  return inputHeight;
}

function getWeight(value) {
  const weight = Number(value);
  return weight;
}

function getHeight(value) {
  const height = Number(value);
  return height;
}

function getImc(weight, height) {
  const imc = weight / height ** 2;
  return imc.toFixed(2);
}

function getImcCategory(imc) {
  const category = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade Grau 3",
  ];

  if (imc >= 39.9) return category[5];
  if (imc >= 34.9) return category[4];
  if (imc >= 29.9) return category[3];
  if (imc >= 24.9) return category[2];
  if (imc >= 18.5) return category[1];
  if (imc < 18.5) return category[0];
}

function createDIV() {
  return document.createElement("div");
}

function setStyle(status) {
  if (status == "error") {
    return "alert alert-danger mt-1";
  } else {
    return "alert alert-primary mt-1";
  }
}

function setResult(msg, status) {
  const result = document.querySelector("#result");
  result.innerHTML = "";
  const div = createDIV();
  div.innerHTML = msg;
  div.classList = setStyle(status);
  result.appendChild(div);
}

function start(event) {
  const inputWeight = getInputWeight(event);
  const inputHeight = getInputHeight(event);
  const weight = getWeight(inputWeight.value);
  const height = getHeight(inputHeight.value);

  if (!height) {
    setResult("Altura inválida", "error");
    return;
  }
  if (!weight) {
    setResult("Peso inválido", "error");
    return;
  }

  const imc = getImc(weight, height);
  const imcCategory = getImcCategory(imc);
  setResult(`Seu IMC é ${imc}, classificação : ${imcCategory}`);
}
