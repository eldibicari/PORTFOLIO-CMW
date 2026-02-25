var francais = {
  titrePage: "Portfolio - Eldi BICARI",
  titrePrincipal: "Portfolio - Eldi BICARI",
  aPropos: "A propos",
  projets: "Projets",
  competences: "Competences",
  experiences: "Experiences",
  contact: "Contact"
};

var anglais = {
  titrePage: "Portfolio - Eldi BICARI",
  titrePrincipal: "Portfolio - Eldi BICARI",
  aPropos: "About",
  projets: "Projects",
  competences: "Skills",
  experiences: "Experience",
  contact: "Contact"
};

function appliquerLangue(codeLangue) {
  // 0) Choisir la langue
  var contenuLangue = codeLangue === "fr" ? francais : anglais;

  // 1) Pour chaque cle de l'objet
  for (var cle of Object.keys(contenuLangue)) {
    // 2) Selectionner la balise dont l'id est cette cle
    var element = document.getElementById(cle);

    // 3) Remplacer le code HTML avec la valeur associee a la cle
    if (element) {
      element.innerHTML = contenuLangue[cle];
    }
  }
}

document.getElementById("btn-fr").addEventListener("click", function () {
  appliquerLangue("fr");
});

document.getElementById("btn-en").addEventListener("click", function () {
  appliquerLangue("en");
});

appliquerLangue("fr");
