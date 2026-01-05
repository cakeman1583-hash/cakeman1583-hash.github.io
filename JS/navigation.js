// Navigation entre les pages avec structure définie
var pageSommaire = './index.html';
var pagesOrdre = [
    './index.html',
    './multimedia.html',
    './ananas.html',
    './vote.html',
    './pates.html',
    './usb.html',
    './SoumettreVote.html',
    './Logo.html',
    './Credits.html'
];

// Obtenir la page actuelle
function obtenirPageActuelle() {
    var pathname = window.location.pathname;
    var fichier = pathname.substring(pathname.lastIndexOf('/') + 1);
    return './' + (fichier === '' ? 'index.html' : fichier);
}

// Obtenir l'index de la page actuelle
function obtenirIndexPage() {
    var pageActuelle = obtenirPageActuelle();
    for (var i = 0; i < pagesOrdre.length; i++) {
        if (pagesOrdre[i].indexOf(pageActuelle.split('/').pop()) !== -1) {
            return i;
        }
    }
    return -1;
}

// Naviguer vers la page suivante
function allerSuivant() {
    var index = obtenirIndexPage();
    if (index !== -1 && index < pagesOrdre.length - 1) {
        window.location.href = pagesOrdre[index + 1];
    }
}

// Naviguer vers la page précédente
function allerPrecedent() {
    var index = obtenirIndexPage();
    if (index > 0) {
        window.location.href = pagesOrdre[index - 1];
    }
}

// Retourner au sommaire
function allerSommaire() {
    window.location.href = pageSommaire;
}
