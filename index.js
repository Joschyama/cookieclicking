
let scores = document.getElementById("score");
let counter = 0;
let addedvalue = 1;
let autovalue = 0;
let func = add_autovalue;
let run = setInterval("func()", 1000);

function add_autovalue(){
  counter += autovalue
  score.innerHTML = counter;
}
function harvest() {
  counter += addedvalue;
  score.innerHTML = counter;
}
function buyupgrade1(){
  if (counter >= 10) {
    counter -= 10
    addedvalue += 1
    score.innerHTML = counter;
  }
};
function buyupgrade2(){
  if (counter >= 100) {
    counter -= 100
    addedvalue += 10
    score.innerHTML = counter;
  }
}
function buyupgrade3(){
  if (counter >= 100) {
    counter -= 100
    autovalue += 1
    score.innerHTML = counter;
  }
};
