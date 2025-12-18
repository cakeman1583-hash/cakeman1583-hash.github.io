var ok=document.getElementById("voteOK");
var or=document.getElementById("voteNeutre");
var not=document.getElementById("voteNot");
//fonctions pour actualiser le vote
function update() {
  if (window.localStorage.voteAnanas=="OK") {
    ananas.innerHTML = "Tu as voté Pour.";
    ok.style.borderColor="#FFD700;";
  }

  if (window.localStorage.voteAnanas=="NOT") {
    ananas.innerHTML = "Tu as voté Contre.";
    not.style.borderColor="#FFD700;";
  }
}
function voterOK() {
  window.localStorage.voteAnanas="OK";
  update();
}
function voterNot() {
  window.localStorage.voteAnanas="NOT";
  update();
}
