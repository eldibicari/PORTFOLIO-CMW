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
  panneauTitre: "en bref",
  dlLanguesT: "Langues",
  dlLanguesV: "FR · EN · Albanais · ES/IT",
  dlPaysT: "International",
  dlPaysV: "Corée · Pays-Bas · Italie · Albanie",
  dlFormationT: "Formation",
  dlFormationV: "Master CMW + DIGIS",
  dlRechercheT: "Recherche",
  dlRechercheV: "Poste à temps plein",
  motCle1: "Cultures numériques",
  motCle2: "Sociologie numérique",
  motCle3: "Web",
  motCle4: "Gestion de projet",
  motCle5: "IA & data",
  projets: "Projets",
  parcours: "Parcours",
  competences: "Compétences",
  experiences: "Expériences",
  contact: "Contact",
  projetNoliDesc: "À compléter : documentaire web interactif France × Corée du Sud (culture du jeu vidéo). Dev web, UX, terrain à Busan.",
  projetSociosimDesc: "À compléter : application d'IA générative simulant des entretiens sociologiques (stage, laboratoire LISIS).",
  projetAmsterdamDesc: "À compléter : benchmarking de chatbots IA — Digital Methods Winter School (Amsterdam), équipe internationale, rapport publié.",
  projetDicoworkDesc: "À compléter : projet web à deux, présenté et soutenu à l'Université de Turin.",
  contactIntro: "À compléter : une phrase d'invitation + tes liens (email, LinkedIn, GitHub)."
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
  panneauTitre: "in brief",
  dlLanguesT: "Languages",
  dlLanguesV: "FR · EN · Albanian · ES/IT",
  dlPaysT: "International",
  dlPaysV: "Korea · Netherlands · Italy · Albania",
  dlFormationT: "Education",
  dlFormationV: "Master's CMW + DIGIS",
  dlRechercheT: "Looking for",
  dlRechercheV: "Full-time role",
  motCle1: "Digital cultures",
  motCle2: "Digital sociology",
  motCle3: "Web",
  motCle4: "Project management",
  motCle5: "AI & data",
  projets: "Projects",
  parcours: "Journey",
  competences: "Skills",
  experiences: "Experience",
  contact: "Contact",
  projetNoliDesc: "To complete: interactive web documentary France × South Korea (video-game culture). Web dev, UX, fieldwork in Busan.",
  projetSociosimDesc: "To complete: a generative-AI app simulating sociological interviews (internship, LISIS research lab).",
  projetAmsterdamDesc: "To complete: benchmarking AI chatbots — Digital Methods Winter School (Amsterdam), international team, published report.",
  projetDicoworkDesc: "To complete: a two-person web project, presented and defended at the University of Turin.",
  contactIntro: "To complete: a short invitation line + your links (email, LinkedIn, GitHub)."
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

// --- Animation : le nom s'ecrit, s'efface, puis se reecrit, EN BOUCLE (machine a ecrire) ---
// (le nom est le meme en FR et en EN, donc on le gere a part, hors des objets de langue)
var nomComplet = "Eldi Bicari";

// Reglages de l'animation (a ajuster librement) :
var vitesseFrappe = 110;        // ms entre deux lettres quand on ecrit
var vitesseEffacement = 55;     // ms entre deux lettres quand on efface
var dureeAffichage = 4000;      // T : duree pendant laquelle le nom complet reste affiche (ms)
var pauseAvantReecriture = 700; // petite pause une fois le nom efface, avant de recommencer (ms)

function animerNom() {
  var cible = document.getElementById("nomAnime");
  if (!cible) return; // securite : si l'element n'existe pas, on s'arrete

  // Accessibilite : si l'utilisateur prefere moins d'animations, on affiche le nom fixe (pas de boucle)
  var moinsDanimations = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (moinsDanimations) {
    cible.textContent = nomComplet;
    return;
  }

  var position = 0;         // nombre de lettres actuellement affichees
  var enEffacement = false; // false = on ecrit, true = on efface

  // Une "etape" ajoute ou retire une lettre, puis se rappelle elle-meme apres un delai
  function etape() {
    if (!enEffacement) {
      // Phase d'ecriture : on revele une lettre de plus
      position = position + 1;
      cible.textContent = nomComplet.slice(0, position);
      if (position === nomComplet.length) {
        enEffacement = true;                // nom complet : la prochaine etape effacera
        setTimeout(etape, dureeAffichage);  // ... mais seulement apres la duree T
      } else {
        setTimeout(etape, vitesseFrappe);
      }
    } else {
      // Phase d'effacement : on retire une lettre
      position = position - 1;
      cible.textContent = nomComplet.slice(0, position);
      if (position === 0) {
        enEffacement = false;                    // tout efface : on repart en ecriture
        setTimeout(etape, pauseAvantReecriture); // ... apres une petite pause
      } else {
        setTimeout(etape, vitesseEffacement);
      }
    }
  }

  etape(); // on lance la boucle
}

// --- Signature du site : la courbe sigmoide (la trajectoire d'Eldi) ---
// sigma(x) = 1 / (1 + e^-x) : objet mathematique ET fonction d'activation de reseau de neurones.

// Les etapes du parcours, dans l'ordre. "fort: true" = experience mise en avant (le master).
// (Eldi : modifie librement les labels ; "x" controle la position le long de la courbe.)
var etapesParcours = [
  { x: -5.4, label: "Clermont",           fort: false },
  { x: -3.2, label: "Bordeaux",           fort: false },
  { x: -1.2, label: "Amsterdam",          fort: false },
  { x:  0.4, label: "Turin",              fort: false },
  { x:  2.4, label: "Corée",              fort: false },
  { x:  5.4, label: "Master CMW + DIGIS", fort: true  }
];

function dessinerSigmoide() {
  var svg = document.getElementById("sigmoide-svg");
  if (!svg) return;

  // Marges et dimensions du dessin (en unites du viewBox)
  var L = 70, R = 60, T = 50, B = 90;   // marges : gauche, droite, haut, bas
  var larg = 900, haut = 420;
  var xMin = -6, xMax = 6;

  // Deux petites fonctions pour passer des maths aux coordonnees du dessin
  function versX(x) { return L + (x - xMin) / (xMax - xMin) * (larg - L - R); }
  function versY(s) { return (haut - B) - s * (haut - T - B); } // s va de 0 (bas) a 1 (haut)

  var ns = "http://www.w3.org/2000/svg"; // espace de noms obligatoire pour creer du SVG

  // 1) Tracer la courbe en echantillonnant la fonction sigmoide en 120 points
  var d = "";
  for (var i = 0; i <= 120; i++) {
    var x = xMin + (xMax - xMin) * (i / 120);
    var s = 1 / (1 + Math.exp(-x));        // la sigmoide elle-meme
    d += (i === 0 ? "M" : "L") + versX(x).toFixed(1) + " " + versY(s).toFixed(1) + " ";
  }
  var courbe = document.createElementNS(ns, "path");
  courbe.setAttribute("d", d);
  courbe.setAttribute("class", "sig-courbe");
  svg.appendChild(courbe);

  // 2) Placer un point + une etiquette pour chaque etape du parcours
  for (var j = 0; j < etapesParcours.length; j++) {
    var e = etapesParcours[j];
    var s2 = 1 / (1 + Math.exp(-e.x));
    var px = versX(e.x), py = versY(s2);

    var point = document.createElementNS(ns, "circle");
    point.setAttribute("cx", px.toFixed(1));
    point.setAttribute("cy", py.toFixed(1));
    point.setAttribute("r", e.fort ? 9 : 5);              // le master est plus gros
    point.setAttribute("class", e.fort ? "sig-point fort" : "sig-point");
    svg.appendChild(point);

    var texte = document.createElementNS(ns, "text");
    texte.setAttribute("x", px.toFixed(1));
    texte.setAttribute("y", (py + (e.fort ? -18 : 22)).toFixed(1)); // master au-dessus, le reste en dessous
    texte.setAttribute("text-anchor", "middle");
    texte.setAttribute("class", e.fort ? "sig-label fort" : "sig-label");
    texte.textContent = e.label;
    svg.appendChild(texte);
  }

  // 3) Animation : la courbe se "dessine" quand la section arrive a l'ecran
  var moinsDanimations = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (moinsDanimations) {
    svg.classList.add("visible"); // pas d'animation : tout est visible directement
    return;
  }
  var longueur = courbe.getTotalLength();
  courbe.style.strokeDasharray = longueur;   // on "cache" le trait...
  courbe.style.strokeDashoffset = longueur;  // ... en le decalant de toute sa longueur
  var observateur = new IntersectionObserver(function (entrees) {
    entrees.forEach(function (entree) {
      if (entree.isIntersecting) {
        courbe.style.transition = "stroke-dashoffset 1.8s ease";
        courbe.style.strokeDashoffset = "0"; // le trait se devoile -> effet de dessin
        svg.classList.add("visible");        // fait apparaitre les points et les labels
        observateur.disconnect();            // on n'observe plus, c'est joue
      }
    });
  }, { threshold: 0.3 });
  observateur.observe(svg);
}

// Au chargement : langue par defaut, animation du nom, puis dessin de la sigmoide
appliquerLangue("fr");
animerNom();
dessinerSigmoide();