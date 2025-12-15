var ok=document.getElementById("voteOK");
var or=document.getElementById("voteNeutre");
var not=document.getElementById("voteNot");
//fonctions pour actualiser le vote
function voterOK() {
  window.localStorage.voteAnanas="OK";
  update();
}
function voterNeutre() {
  window.localStorage.voteAnanas="OR";
  update();
}
function voterNot() {
  window.localStorage.voteAnanas="NOT";
  update();
}
