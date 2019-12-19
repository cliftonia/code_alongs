var calculateBtn = document.querySelector("button"); // create var
var result = document.querySelector(".result");
var input1 = document.querySelector(".num1");
var input2 = document.querySelector(".num2");

var body = document.querySelector("body");

var darkMode = () => {
  if (body.style.backgroundColor !== "black") {
    body.style.backgroundColor = "black";
    result.style.color = "white";
  }
};

const add = (num1, num2) => {
  return num1 + num2;
};

var calculate = function() {
  // var addition = Number(input1.value) + Number(input2.value);
  var addition = add(Number(input1.value), Number(input2.value));
  result.textContent = addition;
  if (input2.value === "") {
    input2.style.backgroundColor = "tomato";
  }
};

calculateBtn.addEventListener("click", calculate);
