function updateVoteBars(VotePour, VoteContre, NuméroCapsule) {
    // Calcul du pourcentage
    const pourcentagePour = (VotePour / (VotePour + VoteContre)) * 100;
    const pourcentageContre = 100 - pourcentagePour;

    // Récupération des éléments
    const segmentPour = document.getElementById("segmentpour" + NuméroCapsule);
    const segmentContre = document.getElementById("segmentcontre" + NuméroCapsule);

    // Vérification de l'existence des éléments
    if (!segmentPour || !segmentContre) {
        console.error("Élément(s) introuvable(s) pour la capsule :", NuméroCapsule);
        return;
    }

    // Met à jour les largeurs CSS
    segmentPour.style.width = pourcentagePour + "%";
    segmentContre.style.width = pourcentageContre + "%";

    // Met à jour le texte : arrondi à l'entier et concatène un espace + %
    segmentPour.textContent = Math.round(pourcentagePour) + " %";
    segmentContre.textContent = Math.round(pourcentageContre) + " %";
}

// Exemple
updateVoteBars(1800, 525, "exemple");