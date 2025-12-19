// petits helpers pour stocker/lire des valeurs typées dans localStorage
function lsSet(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}
function lsGet(key) {
  const v = window.localStorage.getItem(key);
  if (v === null) return null;
  try {
    return JSON.parse(v);
  } catch (e) {
    return v;
  }
}

// Nous stockons les totaux dans "votePour"+capsule et "voteContre"+capsule
// et le choix actuel de l'utilisateur dans "userVote"+capsule = 'pour'|'contre'|null

// Initialisation des données (ne réécrit pas si déjà présentes)
function initVotes(capsule, pourDefault, contreDefault) {
  if (lsGet('votePour' + capsule) === null) lsSet('votePour' + capsule, pourDefault);
  if (lsGet('voteContre' + capsule) === null) lsSet('voteContre' + capsule, contreDefault);
  if (lsGet('userVote' + capsule) === null) lsSet('userVote' + capsule, null);
}

// initialisation des votes pour les capsules
initVotes('exemple', 62, 38);
initVotes('ananas', 20, 15);

function getTotals(capsule) {
  return {
    pour: Number(lsGet('votePour' + capsule)) || 0,
    contre: Number(lsGet('voteContre' + capsule)) || 0,
    user: lsGet('userVote' + capsule) // 'pour' | 'contre' | null
  };
}

function saveTotals(capsule, pour, contre, user) {
  lsSet('votePour' + capsule, pour);
  lsSet('voteContre' + capsule, contre);
  lsSet('userVote' + capsule, user);
}

function updateUI(capsule) {
  const elOk = document.getElementById('voteOK' + capsule);
  const elNot = document.getElementById('voteNot' + capsule);
  const t = getTotals(capsule);
  // mets à jour les barres
  updateVoteBars(t.pour, t.contre, capsule);
  // mets à jour la sélection des boutons (laisser la couleur CSS par défaut si user est null)
  if (elOk) {
    elOk.classList.toggle('selected', t.user === 'pour');
  }
  if (elNot) {
    elNot.classList.toggle('selected', t.user === 'contre');
  }
}

function applyVote(capsule, choice) { // choice = 'pour' ou 'contre'
  const t = getTotals(capsule);
  let { pour, contre, user } = t;
  if (choice !== 'pour' && choice !== 'contre') return;

  if (user === choice) {
    // annuler le vote
    if (choice === 'pour') pour = Math.max(0, pour - 1);
    else contre = Math.max(0, contre - 1);
    user = null;
  } else if (user === null) {
    // nouveau vote
    if (choice === 'pour') pour += 1; else contre += 1;
    user = choice;
  } else {
    // changement de vote
    if (user === 'pour' && choice === 'contre') { pour = Math.max(0, pour - 1); contre += 1; }
    else if (user === 'contre' && choice === 'pour') { contre = Math.max(0, contre - 1); pour += 1; }
    user = choice;
  }

  saveTotals(capsule, pour, contre, user);
  updateUI(capsule);
}

// boutons
function voterOK(capsule) { applyVote(capsule, 'pour'); }
function voterNot(capsule) { applyVote(capsule, 'contre'); }

// update bars helper
function updateVoteBars(VotePour, VoteContre, capsule) {
    const total = (VotePour || 0) + (VoteContre || 0);
    const pourcentagePour = (total === 0) ? 0 : (VotePour / total) * 100;
    const pourcentageContre = 100 - pourcentagePour;
    const segmentPour = document.getElementById('segmentpour' + capsule);
    const segmentContre = document.getElementById('segmentcontre' + capsule);
    if (!segmentPour || !segmentContre) return;
    segmentPour.style.width = pourcentagePour + '%';
    segmentContre.style.width = pourcentageContre + '%';
    segmentPour.textContent = Math.round(pourcentagePour) + ' %';
    segmentContre.textContent = Math.round(pourcentageContre) + ' %';
}

// initialise l'affichage au chargement
document.addEventListener('DOMContentLoaded', function () {
    updateUI('exemple');
    updateUI('ananas');
});