
const heading = document.getElementById("heading");
const para = document.getElementById("para");
const input = document.getElementById("inputText");

const btnText = document.getElementById("btnText");
const btnColor = document.getElementById("btnColor");
const btnFont = document.getElementById("btnFont");
const btnToggle = document.getElementById("btnToggle");
const btnReset = document.getElementById("btnReset");

const defaultHeading = heading.innerText;
const defaultBg = "linear-gradient(to right, #dfe9f3, #ffffff)";
const defaultFontSize = "18px";

btnText.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    heading.innerText = input.value;
  }
});

btnColor.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.background = randomColor;
});

btnFont.addEventListener("click", () => {
  let currentSize = window.getComputedStyle(para).fontSize;
  para.style.fontSize = parseInt(currentSize) + 2 + "px";
});

btnToggle.addEventListener("click", () => {
  para.style.display = para.style.display === "none" ? "block" : "none";
});

btnReset.addEventListener("click", () => {
  heading.innerText = defaultHeading;
  document.body.style.background = defaultBg;
  para.style.fontSize = defaultFontSize;
  para.style.display = "block";
  input.value = "";
});

