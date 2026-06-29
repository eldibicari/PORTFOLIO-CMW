// Realise par Eldi Bicari. Aide a la mise en forme : Claude Code (Anthropic).
// Contenus, choix et experiences : reels et rediges par l'auteur.

// Contenus en francais, ranges par id (comme dans ton systeme existant)
var francais = {
  titrePage: "Portfolio - Eldi Bicari",
  heroRole: "Sciences → IA & cultures numériques",
  heroIntro: "J'ai appris à modéliser des systèmes complexes. Je m'en sers aujourd'hui pour décrypter quelque chose de bien plus mouvant : ce que l'IA et le numérique font à nos sociétés.",
  heroCta: "Me contacter",
  aPropos: "À propos",
  aProposTexte: "Je viens de terminer un master en Cultures et Métiers du Web à l'Université Gustave Eiffel, complété par le programme DIGIS — un supplément au diplôme centré sur la data, l'IA et les études numériques. J'y suis arrivé depuis les sciences : une formation en mathématiques et en physique, qui m'a appris à décortiquer un problème, le modéliser, et vérifier mes résultats plutôt que de les croire sur parole. Passer des maths au numérique n'a pas été un changement de cap, mais une continuité : la même méthode, appliquée à des sujets plus concrets et plus humains.",
  aProposTexte2: "Ce que j'aime, c'est passer de l'idée à quelque chose de concret. J'ai conçu un documentaire web interactif entre la France et la Corée du Sud, mené une étude data publiée à l'université d'Amsterdam, présenté et soutenu un projet à l'université de Turin, et je conçois et développe en ce moment, de bout en bout, une application d'IA générative au sein du laboratoire LISIS. Presque toujours en équipe, souvent à l'international et en plusieurs langues — un cadre dans lequel je suis efficace et que je cherche à retrouver. Curieux, je m'adapte vite et je garde un œil critique sur ce que je produis. Aujourd'hui, je cherche un poste pour continuer exactement ça : construire des outils numériques utiles et bien pensés, dans une équipe où l'exigence va avec l'ouverture.",
  projets: "Projets",
  competences: "Compétences",
  experiences: "Expériences",
  contact: "Contact"
};

// Memes cles, mais en anglais
var anglais = {
  titrePage: "Portfolio - Eldi Bicari",
  heroRole: "Science → AI & digital cultures",
  heroIntro: "I learned to model complex systems. Now I use that to make sense of something far less stable: what AI and the digital world are doing to our societies.",
  heroCta: "Get in touch",
  aPropos: "About",
  aProposTexte: "I've just completed a master's in Web Cultures and Digital Industries at Université Gustave Eiffel, alongside the DIGIS programme — a diploma supplement focused on data, AI, and digital studies. I came to it from the sciences: a background in mathematics and physics that taught me to break a problem down, model it, and check my results rather than take them on trust. Moving from maths to the digital field wasn't a change of direction but a continuation — the same method, applied to more concrete and more human subjects.",
  aProposTexte2: "What I enjoy is turning an idea into something real. I designed an interactive web documentary between France and South Korea, ran a data study published at the University of Amsterdam, presented and defended a project at the University of Turin, and I'm currently designing and building a generative-AI application end to end at the LISIS research lab. Almost always in a team, often international and across several languages — a setting where I'm effective, and one I want to keep working in. Curious, quick to adapt, and keeping a critical eye on what I build, I'm now looking for a role to carry on doing exactly that: building digital tools that are useful and well thought out, where high standards go hand in hand with openness.",
  projets: "Projects",
  competences: "Skills",
  experiences: "Experience",
  contact: "Contact"
};

function appliquerLangue(codeLangue) {
  // 0) Choisir la langue
  var contenuLangue = codeLangue === "fr" ? francais : anglais;

  // 0 bis) Mettre a jour la langue de la page (utile pour les lecteurs d'ecran)
  document.documentElement.lang = codeLangue;

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

// --- Animation : le nom s'ecrit lettre par lettre ---
// (le nom est le meme en FR et en EN, donc on le gere a part, hors des objets de langue)
var nomComplet = "Eldi Bicari";

function animerNom() {
  var cible = document.getElementById("nomAnime");
  if (!cible) return; // securite : si l'element n'existe pas, on s'arrete

  // Accessibilite : si l'utilisateur prefere moins d'animations, on affiche tout d'un coup
  var moinsDanimations = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (moinsDanimations) {
    cible.textContent = nomComplet;
    return;
  }

  var position = 0;          // combien de lettres sont deja affichees
  cible.textContent = "";    // on part d'un texte vide
  var minuteur = setInterval(function () {
    position = position + 1;
    cible.textContent = nomComplet.slice(0, position); // on revele une lettre de plus
    if (position >= nomComplet.length) {
      clearInterval(minuteur); // arrive a la fin : on arrete la repetition
    }
  }, 110); // 110 ms entre chaque lettre
}

// Au chargement : francais par defaut, puis on lance l'animation du nom
appliquerLangue("fr");
animerNom();