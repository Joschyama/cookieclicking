
    let score = document.getElementById("score");
    let counter = 0;
  
    function harvest() {
      counter += 1;
      score.innerHTML = counter;
    }