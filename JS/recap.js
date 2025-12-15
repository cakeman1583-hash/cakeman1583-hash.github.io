var ananas=document.getElementById("voteAnanas");
if (window.localStorage.voteAnanas=="OK") {
  ananas.innerHTML = "Tu as voté Pour.";
}
if (window.localStorage.voteAnanas=="OR") {
  ananas.innerHTML = "Tu as voté Neutre.";
}
if (window.localStorage.voteAnanas=="NOT") {
  ananas.innerHTML = "Tu as voté Contre.";
}
