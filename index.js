
let scores = document.getElementById("score");
let counter = 101000;
let prestige = 0;
let addedvalue = 1;
let newaddedvalue = addedvalue * prestige * 2; 
let autovalue = 0;
let newautovalue = autovalue * prestige * 2;
let func1 = add_autovalue;
let cookietime = 1000;
let run1 = setInterval("func1()", cookietime);
let func2 = enoughcookies;
let run2 = setInterval("func2()", 10);
let func3 = notenoughcookies;
let run3 = setInterval("func3()", 10);
let func4 = currentclicks;
let run4 = setInterval("func4()", 10);

function currentclicks() {
  if (prestige <= 0) {
    document.getElementById("currentperclick").innerHTML = "Current Cookies per click: " + addedvalue;
    if (autovalue > 0) {
      document.getElementById("currentpersec").innerHTML = "Current Cookies per second: " + autovalue;
    }
  }
  else if (prestige > 0) {
    document.getElementById("currentperclick").innerHTML = "Current Cookies per click: " + newaddedvalue 
    if (autovalue > 0) {
      document.getElementById("currentpersec").innerHTML = "Current Cookies per second: " + newautovalue;
    }
  }
}
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
  if (counter >= 1000) {
    document.getElementById("butup5").style.backgroundColor = "green";
  }
  if (counter >= 10000) {
    document.getElementById("butup6").style.backgroundColor = "green";
  }
  if (counter >= 10000) {
    document.getElementById("butup7").style.backgroundColor = "green";
  }
  if (counter >= 100000) {
    document.getElementById("butup8").style.backgroundColor = "green";
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
  if (counter < 1000) {
    document.getElementById("butup5").style.backgroundColor = "red";
  }
  if (counter < 10000) {
    document.getElementById("butup6").style.backgroundColor = "red";
  }
  if (counter < 10000) {
    document.getElementById("butup7").style.backgroundColor = "red";
  }
  if (counter < 100000) {
    document.getElementById("butup8").style.backgroundColor = "red";
  }
}
function add_autovalue(){
  if (prestige <= 0) {
    counter += autovalue
    score.innerHTML = counter;
  }
  else if (prestige > 0) {
    counter += newautovalue
    score.innerHTML = counter;
  }
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
function buyspec1(){
  if (counter >= 100000){
    counter -= 100000
    cookietime = 1000 / 2
    clearInterval(run1);
    run1 = setInterval("func1()", cookietime);
    document.getElementById("butspec1").style.visibility = "hidden"
    score.innerHTML = counter;
  } 
}
function buyupgrade1(){
  if (counter >= 10) {
    counter -= 10
    addedvalue += 1
    newaddedvalue = addedvalue * prestige * 2;
    score.innerHTML = counter;
  }
};
function buyupgrade2(){
  if (counter >= 100) {
    counter -= 100
    addedvalue += 10
    newaddedvalue = addedvalue * prestige * 2;
    score.innerHTML = counter;
  }
}
function buyupgrade3(){
  if (counter >= 100) {
    counter -= 100
    autovalue += 1
    newautovalue = autovalue * prestige * 2;
    score.innerHTML = counter;
  }
};
function buyupgrade4(){
  if (counter >= 1000) {
    counter -= 1000
    autovalue += 10
    newautovalue = autovalue * prestige * 2;
    score.innerHTML = counter;
  }
};
function buyupgrade5(){
  if (counter >= 1000) {
    counter -= 1000
    addedvalue += 100
    newaddedvalue = addedvalue * prestige * 2;
    score.innerHTML = counter;
  }
};
function buyupgrade6(){
  if (counter >= 10000) {
    counter -= 10000
    addedvalue += 1000
    newaddedvalue = addedvalue * prestige * 2;
    score.innerHTML = counter;
  }
};
function buyupgrade7(){
  if (counter >= 10000) {
    counter -= 10000
    autovalue += 100
    newautovalue = autovalue * prestige * 2;
    score.innerHTML = counter;
  }
};
function buyupgrade8(){
  if (counter >= 100000) {
    counter -= 100000
    autovalue += 1000
    newautovalue = autovalue * prestige * 2;
    score.innerHTML = counter;
  }
};

