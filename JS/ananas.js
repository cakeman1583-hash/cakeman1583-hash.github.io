var ok=document.getElementById("voteOK");
var or=document.getElementById("voteNeutre");
var not=document.getElementById("voteNot");
//fonctions pour actualiser le vote
function update() {
  if (window.localStorage.voteAnanas=="OK") {
    ananas.innerHTML = "Tu as voté Pour.";
    ok.style.border="1px solid gold;";
  }

  if (window.localStorage.voteAnanas=="NOT") {
    ananas.innerHTML = "Tu as voté Contre.";
    not.style.border="1px solid gold;";
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
