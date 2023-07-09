const d1 = document.querySelector("#D1")
let d1V = Number(d1.value);

const d2 = document.querySelector("#D2");
let d2V = Number(d2.value);

const width = document.querySelector("#width");
let widthV = Number(width.value);

const height = document.querySelector("#height");
let heightV = Number(height.value);

const outputX = document.querySelector(".outputX span");
const outputR = document.querySelector(".outputR span");
const outputH = document.querySelector(".outputH span");

document.querySelector(".container .container-event").addEventListener("input", function (ev) {
  if (ev.target === d1) {
    d1V = Number(ev.target.value)
  }
  if (ev.target === d2) {
    d2V = Number(ev.target.value)
  }
  if (ev.target === width) {
    widthV = Number(ev.target.value)
  }
  if (ev.target === height) {
    heightV = Number(ev.target.value)
  }
  formula(d1V, d2V, widthV, heightV)
})

function formula(d1V, d2V, widthV, heightV) {
  simpleD = Number(((d1V - d2V) / 2).toFixed(3))
  radiusR = Number(((2.2 - widthV) / 2).toFixed(3))
  xOffset = Number((d1V / 2 + heightV / 2 - simpleD + radiusR).toFixed(3))

  outputX.textContent = " " + xOffset
  outputR.textContent = " " + radiusR
  outputH.textContent = -1
}

formula(d1V, d2V, widthV, heightV)
