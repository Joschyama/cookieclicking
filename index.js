
let scores = document.getElementById("score");
let counter = 0;
let prestige = 0;
let addedvalue = 1;
let newaddedvalue = 1 * prestige * 2; 
let autovalue = 0;
let newautovalue = autovalue * prestige * 2;
let func1 = add_autovalue;
let run1 = setInterval("func1()", 1000);
let func2 = enoughcookies;
let run2 = setInterval("func2()", 10);
let func3 = notenoughcookies;
let run3 = setInterval("func3()", 10);

function enoughcookies(){
  if (counter >= 10) {
    document.getElementById("butup1").style.backgroundColor = "green";
  }
  if (counter >= 100) {
    document.getElementById("butup2").style.backgroundColor = "green";
  }
  if (counter >= 100) {
    document.getElementById("butup3").style.backgroundColor = "green";
  }
  if (counter >= 1000) {
    document.getElementById("butup4").style.backgroundColor = "green";
  }
};
function notenoughcookies(){
  if (counter < 10) {
  document.getElementById("butup1").style.backgroundColor = "red";
  }
  if (counter < 100) {
  document.getElementById("butup2").style.backgroundColor = "red";
  }
  if (counter < 100) {
  document.getElementById("butup3").style.backgroundColor = "red";
  }
  if (counter < 1000) {
    document.getElementById("butup4").style.backgroundColor = "red";
  }
}
function add_autovalue(){
  counter += autovalue
  score.innerHTML = counter;
}
function harvest() {
  if (prestige <= 0){
    counter += addedvalue;
    score.innerHTML = counter;
  }
  else if (prestige > 0) {
    counter += newaddedvalue;
    score.innerHTML = counter;
  }
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
function buyupgrade4(){
  if (counter >= 1000) {
    counter -= 1000
    autovalue += 10
    score.innerHTML = counter;
  }
};
