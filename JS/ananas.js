var ok=document.getElementById("voteOK");
var or=document.getElementById("voteNeutre");
var not=document.getElementById("voteNot");

if (window.localStorage.voteAnanas=="OK") {
  window.alert("Tu as voté : Pour");
}

function voterOK() {
  window.localStorage.voteAnanas="OK";
}
