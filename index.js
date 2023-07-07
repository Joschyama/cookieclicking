
let scores = document.getElementById("score");
let counter = 0;
let addedvalue = 1;

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
