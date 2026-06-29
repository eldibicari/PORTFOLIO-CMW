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
  noliTitre: "Noli — documentaire web interactif · France × Corée du Sud",
  noliAccroche: "La société coréenne racontée à travers ses jeux.",
  noliIntro: "Noli (놀이, « jouer » en coréen) explore la société sud-coréenne à travers ses pratiques de jeu, des jeux traditionnels aux jeux vidéo. Le projet associe un film documentaire et un site interactif : on suit un parcours à travers plusieurs lieux de Busan, du jeu collectif au jeu solitaire, porté par les voix de quatre générations. Réalisé par une équipe internationale de dix étudiants du master CMW, en partenariat avec l'université Dong-Eui de Busan.",
  noliRoleTitre: "Mon rôle",
  noliRole: "<li><strong>Développement web</strong> — la partie interactive du site : le parcours animé à travers les lieux et les fiches de jeux.</li><li><strong>Recherche historique</strong> — documentation sur l'histoire des jeux coréens, rédaction du contexte et construction de la frise chronologique.</li><li><strong>Multilinguisme & sous-titrage</strong> — sous-titrage et traduction des fichiers SRT de chaque entretien (coréen ↔ français).</li><li><strong>Communication</strong> — échanges et coordination avec les partenaires et intervenants coréens.</li>",
  sociosimTitre: "SocioSim (Mimesis) — simulateur d'entretien sociologique propulsé par l'IA",
  sociosimAccroche: "S'entraîner à l'entretien semi-directif face à des enquêtés virtuels, avant le terrain.",
  sociosimIntro: "Plateforme web pour les étudiants en sciences sociales : ils s'entraînent à mener des entretiens semi-directifs face à des personas virtuels avant leurs premières enquêtes. Chaque persona a son profil sociologique et sa voix propre ; l'étudiant échange par texte ou en conversation vocale immersive, puis l'entretien est transcrit et analysé (qualité du matériau, posture, conseils). Conçu au sein de l'UMR LISIS — Université Gustave Eiffel.",
  sociosimRoleTitre: "Mon rôle",
  sociosimRole: "<li><strong>Architecture & développement</strong> — reprise d'un prototype transformé en application complète, déployée et utilisable en classe (front Next.js, back Python).</li><li><strong>UX/UI</strong> — refonte de l'accueil et des cartes personas, identité graphique et animations.</li><li><strong>Système de voix (ElevenLabs)</strong> — lecture des réponses, recommandation de voix à la création d'un persona, et conversation vocale temps réel en plein écran.</li><li><strong>Analyse pédagogique</strong> — transcription automatique des entretiens, retours sur la qualité du matériau et la posture, conseils de coaching.</li>",
  amsterdamTitre: "Benchmarking AI Chatbots — « What Kind of Sociologist Is Your LLM? »",
  amsterdamAccroche: "Mesurer les biais sociologiques des grands modèles de langage.",
  amsterdamIntro: "Étude menée à la Digital Methods Winter School 2025 (Amsterdam) : une équipe internationale a évalué plusieurs grands modèles de langage (Llama, Gemma, Qwen, ChatGPT, Claude) pour mesurer leurs biais quand ils recommandent des auteurs en sociologie, en comparant leurs réponses en quatre langues (anglais, français, allemand, mandarin). Résultats : une surreprésentation des auteurs occidentaux (Bourdieu en tête) et le constat que « plus gros » ne rime pas avec « plus divers ». Université Gustave Eiffel × Digital Methods Initiative ; restitution en anglais.",
  amsterdamRoleTitre: "Mon rôle",
  amsterdamRole: "<li><strong>Découverte de la data</strong> — ma première immersion dans l'analyse de données appliquée à la recherche.</li><li><strong>Visualisations & graphes</strong> — production des graphiques et des graphes de réseaux (network graphing).</li><li><strong>Contribution transversale</strong> — impliqué sur l'ensemble du projet, en équipe internationale et en anglais.</li>",
  wwKicker: "Février 2026 · UGE Graduate School — GP DIGIS",
  wwAccroche: "Une semaine de formation à la recherche, centrée sur l'IA et ses implications.",
  wwIntro: "J'ai suivi l'ensemble du programme de cette première Winter Week, sur l'intelligence artificielle dans la formation et la recherche. Temps fort : la conférence de Yann LeCun, « Perspectives on AI » (prix Turing 2018) ; également la table ronde « Just a Prompt or Nothing ? » (mathématiciens de l'ENPC, sociologues du LISIS) et la démonstration de MIMESIS.",
  wwAvenir: "📄 Compte rendu personnel — à paraître sur le site DIGIS.",
  memoireTitre: "Mémoire de M1 — L'impact de la désinformation sur la perception albanaise de l'adhésion à l'UE",
  memoireAccroche: "Une recherche mixte sur la désinformation, l'opinion publique et l'intégration européenne.",
  memoireIntro: "Mémoire de recherche (Master 1 Cultures et Métiers du Web, Université Gustave Eiffel, sous la direction de M. Serge Weber). J'y étudie comment la désinformation façonne la perception qu'ont les Albanais de l'adhésion à l'Union européenne, à travers une méthodologie mixte : analyse de centaines de commentaires Facebook, enquête par questionnaire auprès d'étudiants, études de cas médiatiques, et traitements en Python (analyse lexicale, regroupement automatique, graphes de réseaux).",
  memoireRoleTitre: "Mon rôle",
  memoireRole: "<li><strong>Recherche & rédaction</strong> — un mémoire de plus de 150 pages, de la problématique au terrain (auteur unique).</li><li><strong>Terrain & enquête</strong> — collecte et codage de centaines de commentaires, questionnaire auprès de 63 étudiants.</li><li><strong>Analyse de données en Python</strong> — analyse lexicale, regroupement (K-Means), graphes de réseaux, visualisations.</li><li><strong>Bilinguisme</strong> — corpus en albanais, analyse et rédaction en français.</li>",
  mathsKicker: "Racines scientifiques · Université de Bordeaux",
  mathsForetMeta: "Licence 3 · Ingénierie mathématique",
  mathsForetTitre: "Gestion optimale d'une forêt",
  mathsForetAccroche: "Modéliser et exploiter durablement une forêt par les mathématiques.",
  mathsForetIntro: "Projet appliqué : modélisation de la quantité de bois par une équation différentielle stochastique, recherche du seuil de coupe optimal, et stratégie d'apprentissage par renforcement (exploration / exploitation), le tout simulé en Python.",
  mathsForetRole: "Mon rôle : rédaction du rapport (en binôme) et implication sur le volet mathématique tout au long du projet — équipe de 6, encadrement M. Richou.",
  mathsOptimMeta: "Master 1 · EDP & Modélisation",
  mathsOptimTitre: "Optimisation convexe sous contrainte",
  mathsOptimAccroche: "Algorithmes d'optimisation sous contraintes : gradient projeté, pénalisation, contraintes actives.",
  mathsOptimIntro: "Travail individuel : gradient projeté (convexité forte, gradient lipschitzien, convergence), fonctions de pénalisation et projection sur un convexe, conditions d'optimalité avec contraintes actives.",
  mathsOptimRole: "Mon rôle : intégralité du TP (travail individuel).",
  dicolaborTitre: "Dico-Labor — dictionnaire numérique de l'histoire du travail",
  dicolaborAccroche: "Un dictionnaire collaboratif et multilingue sur l'histoire du travail, pensé pour l'université.",
  dicolaborIntro: "Dico-Labor est un dictionnaire numérique consacré à l'histoire du travail : il explore ses dimensions historiques, sociales et culturelles à travers une navigation thématique (concepts, lieux, pratiques, figures…), une carte et une frise chronologique, et un moteur de recherche. Le site est multilingue (français, italien, anglais). Projet web mené en équipe, présenté et soutenu à l'Université de Turin.",
  dicolaborRoleTitre: "Mon rôle",
  dicolaborRole: "<li><strong>Intégration web</strong> — intégration des pages et des contenus du dictionnaire sous WordPress.</li><li><strong>Communication</strong> — coordination et échanges au sein de l'équipe.</li><li><strong>Présentation & soutenance</strong> — présentation du projet et de l'université, en binôme, lors de la soutenance à Turin.</li>",
  contactIntro: "Un poste, une question, un échange ? Je suis ouvert aux opportunités mêlant IA, data, sociologie numérique et gestion de projet.",
  experiencesIntro: "En parallèle de mon parcours, des expériences de recherche, de service et de terrain qui m'ont appris la rigueur, l'organisation et le travail sous pression.",
  expStageMeta: "Stage · mi-janvier → mi-juillet 2026 · bureau Cortex, laboratoire LISIS",
  expStageTitre: "Stagiaire — projet SocioSim / MIMESIS",
  expStageDesc: "Stage de fin d'études autour de MIMESIS, une application d'IA générative pour la recherche en sciences sociales (voir le projet plus haut).",
  expMcdoMeta: "Août 2025 → aujourd'hui · Tremblay-en-France",
  expMcdoTitre: "Équipier polyvalent — McDonald's Drive",
  expMcdoDesc: "Service client en temps réel et gestion du flux de commandes : organisation, communication claire et qualité de service maintenue sous pression.",
  expLeclercMeta: "2019 → 2024 · Sainte-Eulalie (Bordeaux)",
  expLeclercTitre: "Agent de service client — Leclerc Drive",
  expLeclercDesc: "Suivi des commandes et relation client, reporting d'indicateurs à la direction, gestion des stocks et résolution de problèmes au quotidien.",
  expSaveMeta: "Engagement · Albanie · 2014",
  expSaveTitre: "Représentant des élèves — Save the Children",
  expSaveDesc: "Élu sénateur de classe puis président du conseil des élèves de mon collège, dans le cadre d'un programme Save the Children pour une école inclusive et de qualité. Très tôt, le rôle de représentant a compté pour moi — un fil que j'ai prolongé en étant délégué deux ans durant mon master.",
  // Menu de navigation (haut de page)
  navApropos: "À propos",
  navProjets: "Projets",
  navParcours: "Parcours",
  navCompetences: "Compétences",
  navExperiences: "Expériences",
  navContact: "Contact",
  // Pied de page
  piedMentions: "Site personnel d'Eldi Bicari, réalisé dans le cadre du Master 2 Cultures et Métiers du Web (Université Gustave Eiffel). Hébergé sur GitHub Pages. Contact : eldibicari99@gmail.com.",
  piedCreditIa: "Ce site a été développé avec l'aide de Claude (Anthropic) pour l'assistance au code et la mise en forme. Les contenus, projets et expériences présentés sont réels ; l'auteur a écrit et compris une partie du code.",
  piedRetourHaut: "↑ Revenir en haut",
  // lien d'evitement + legende et etiquettes du graphe + familles de competences
  lienEvitement: "Aller au contenu",
  sigmoideLegende: "<span class=\"mono\">σ(x) = 1 / (1 + e<sup>−x</sup>)</span> — la fonction sigmoïde : objet mathématique <em>et</em> fonction d'activation des réseaux de neurones. Ma trajectoire, des sciences vers l'IA.",
  sigmoideAria: "Courbe en forme de sigmoïde illustrant la trajectoire d'Eldi, de Clermont jusqu'au master CMW/DIGIS et au stage en IA",
  parcoursLabels: ["Clermont", "Bordeaux", "Amsterdam", "Turin", "Corée", "Master CMW + DIGIS"],
  compWebT: "Web", compWebV: "HTML, CSS, JavaScript, PHP, Java · WordPress · intégration et responsive.",
  compDataT: "Data & IA", compDataV: "Python (NumPy, Pandas), visualisation de données, web scraping, KPI · IA générative appliquée (MIMESIS).",
  compSciT: "Scientifique", compSciV: "Mathématiques appliquées, modélisation, EDP, optimisation · rigueur et esprit d'analyse.",
  compGestionT: "Gestion de projet", compGestionV: "Planification, méthode Agile, travail en équipe, reporting · présentations et soutenances.",
  compLanguesT: "Langues", compLanguesV: "Français & anglais (bilingue) · albanais (langue maternelle) · espagnol et italien (A2–B1).",
  // liens "voir / ouvrir" des projets (texte visible des boutons)
  noliLienPlein: "Ouvrir le site en plein écran ↗",
  sociosimLienPlein: "Ouvrir le site en plein écran ↗",
  dicolaborLienPlein: "Ouvrir le site en plein écran ↗",
  amsterdamLienProjet: "Voir le projet publié ↗",
  wwLienEvent: "Page de l'événement ↗",
  wwLienProgramme: "Programme (PDF) ↗",
  memoireLienPdf: "Ouvrir le mémoire (PDF) ↗",
  foretLienRapport: "Voir le rapport (PDF) ↗",
  optimLienOverleaf: "Voir sur Overleaf ↗",
  // textes sans affichage direct : alt des images, info-bulles des apercus, labels lecteurs d'ecran
  altHeroPhoto: "Portrait d'Eldi Bicari",
  titreNoliApercu: "Aperçu en direct du site Noli",
  titreSociosimApercu: "Aperçu en direct de la page d'accueil de SocioSim",
  titreDicolaborApercu: "Aperçu en direct du site Dico-Labor",
  titreAmsterdamPoster: "Poster du projet Benchmarking AI Chatbots (Whose Voice Matters)",
  titreMemoireApercu: "Mémoire de M1 d'Eldi Bicari (PDF)",
  ariaTempsForts: "Temps forts",
  ariaNavPrincipale: "Navigation principale",
  ariaNavLangues: "Choix de la langue",
  ariaDomaines: "Domaines",
  ariaEnBref: "En bref",
  cvBtn: "Voir mon CV",
  cvMsg: "📄 Mon CV final arrive bientôt — cette section sera mise à jour."
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
  noliTitre: "Noli — interactive web documentary · France × South Korea",
  noliAccroche: "Korean society told through its games.",
  noliIntro: "Noli (놀이, “to play” in Korean) explores South Korean society through the way people play — from traditional games to video games. The project pairs a documentary film with an interactive website: visitors follow a path through several places in Busan, from collective to solitary play, carried by the voices of four generations. Made by an international team of ten CMW master's students, in partnership with Dong-Eui University in Busan.",
  noliRoleTitre: "My role",
  noliRole: "<li><strong>Web development</strong> — the site's interactive part: the animated journey through the locations and the game cards.</li><li><strong>Historical research</strong> — research on the history of Korean games, writing the historical context, and building the timeline.</li><li><strong>Multilingualism & subtitling</strong> — subtitling and translating the SRT files of each interview (Korean ↔ French).</li><li><strong>Communication</strong> — exchanges and coordination with the Korean partners and contributors.</li>",
  sociosimTitre: "SocioSim (Mimesis) — an AI-powered sociological interview simulator",
  sociosimAccroche: "Practising semi-structured interviews with virtual respondents, before the field.",
  sociosimIntro: "A web platform for social-science students: they practise conducting semi-structured interviews with virtual personas before their first fieldwork. Each persona has its own sociological profile and voice; the student talks by text or in an immersive voice conversation, then the interview is transcribed and analysed (material quality, interviewer stance, coaching tips). Built at UMR LISIS — Université Gustave Eiffel.",
  sociosimRoleTitre: "My role",
  sociosimRole: "<li><strong>Architecture & development</strong> — took an initial prototype and turned it into a complete, deployed app used in class (Next.js front, Python back).</li><li><strong>UX/UI</strong> — redesigned the home page and persona cards, with a real visual identity and animations.</li><li><strong>Voice system (ElevenLabs)</strong> — spoken replies, voice recommendation when creating a persona, and real-time full-screen voice conversation.</li><li><strong>Pedagogical analysis</strong> — automatic interview transcription, feedback on material quality and interviewer stance, coaching tips.</li>",
  amsterdamTitre: "Benchmarking AI Chatbots — “What Kind of Sociologist Is Your LLM?”",
  amsterdamAccroche: "Measuring the sociological biases of large language models.",
  amsterdamIntro: "A study carried out at the Digital Methods Winter School 2025 (Amsterdam): an international team evaluated several large language models (Llama, Gemma, Qwen, ChatGPT, Claude) to measure their biases when recommending sociology authors, comparing their answers across four languages (English, French, German, Mandarin). Findings: an overrepresentation of Western authors (Bourdieu on top), and that “bigger” does not mean “more diverse”. Université Gustave Eiffel × Digital Methods Initiative; presented in English.",
  amsterdamRoleTitre: "My role",
  amsterdamRole: "<li><strong>Getting into data</strong> — my first real dive into data analysis for research.</li><li><strong>Visualisations & graphs</strong> — producing the charts and the network graphs.</li><li><strong>Cross-cutting contribution</strong> — involved across the whole project, in an international team and in English.</li>",
  wwKicker: "February 2026 · UGE Graduate School — DIGIS",
  wwAccroche: "A research-training week focused on AI and its implications.",
  wwIntro: "I followed the entire programme of this first Winter Week, on artificial intelligence in research and training. Highlight: Yann LeCun's lecture “Perspectives on AI” (Turing Award 2018); along with the round table “Just a Prompt or Nothing?” (mathematicians from ENPC, sociologists from LISIS) and the MIMESIS demonstration.",
  wwAvenir: "📄 Personal report — forthcoming on the DIGIS website.",
  memoireTitre: "Master's 1 thesis — How disinformation shapes Albanian views on EU accession",
  memoireAccroche: "A mixed-methods study of disinformation, public opinion and European integration.",
  memoireIntro: "Research thesis (first-year Master's in Web Cultures and Digital Industries, Université Gustave Eiffel, supervised by Serge Weber). It studies how disinformation shapes Albanians' perception of joining the European Union, through a mixed methodology: analysis of hundreds of Facebook comments, a student questionnaire, media case studies, and Python processing (lexical analysis, automatic clustering, network graphs).",
  memoireRoleTitre: "My role",
  memoireRole: "<li><strong>Research & writing</strong> — a 150-page research thesis, from the research question to fieldwork (sole author).</li><li><strong>Fieldwork & survey</strong> — collecting and coding hundreds of comments, a questionnaire with 63 students.</li><li><strong>Data analysis in Python</strong> — lexical analysis, clustering (K-Means), network graphs, visualisations.</li><li><strong>Bilingualism</strong> — corpus in Albanian, analysis and writing in French.</li>",
  mathsKicker: "Scientific roots · University of Bordeaux",
  mathsForetMeta: "3rd-year Bachelor's · Mathematical engineering",
  mathsForetTitre: "Optimal forest management",
  mathsForetAccroche: "Modelling and sustainably managing a forest with mathematics.",
  mathsForetIntro: "Applied project: modelling the wood stock with a stochastic differential equation, finding the optimal cutting threshold, and a reinforcement-learning strategy (exploration / exploitation), all simulated in Python.",
  mathsForetRole: "My role: writing the report (in a pair) and involvement on the mathematical side throughout the project — a team of 6, supervised by M. Richou.",
  mathsOptimMeta: "1st-year Master's · PDEs & Modelling",
  mathsOptimTitre: "Constrained convex optimisation",
  mathsOptimAccroche: "Constrained optimisation algorithms: projected gradient, penalisation, active constraints.",
  mathsOptimIntro: "Individual work: projected gradient (strong convexity, Lipschitz gradient, convergence), penalisation functions and projection onto a convex set, optimality conditions with active constraints.",
  mathsOptimRole: "My role: the entire assignment (individual work).",
  dicolaborTitre: "Dico-Labor — a digital dictionary of the history of work",
  dicolaborAccroche: "A collaborative, multilingual dictionary on the history of work, built for academia.",
  dicolaborIntro: "Dico-Labor is a digital dictionary devoted to the history of work: it explores its historical, social and cultural dimensions through thematic navigation (concepts, places, practices, figures…), a map and a timeline, and a search engine. The site is multilingual (French, Italian, English). A team web project, presented and defended at the University of Turin.",
  dicolaborRoleTitre: "My role",
  dicolaborRole: "<li><strong>Web integration</strong> — integrating the dictionary's pages and content in WordPress.</li><li><strong>Communication</strong> — coordination and exchanges within the team.</li><li><strong>Presentation & defence</strong> — presenting the project and the university, as a pair, at the Turin defence.</li>",
  contactIntro: "A role, a question, a chat? I'm open to opportunities mixing AI, data, digital sociology and project management.",
  experiencesIntro: "Alongside my studies, research, service and field experiences that taught me rigour, organisation and working under pressure.",
  expStageMeta: "Internship · mid-January → mid-July 2026 · Cortex office, LISIS lab",
  expStageTitre: "Intern — SocioSim / MIMESIS project",
  expStageDesc: "End-of-studies internship around MIMESIS, a generative-AI application for social-science research (see the project above).",
  expMcdoMeta: "August 2025 → present · Tremblay-en-France",
  expMcdoTitre: "Multi-skilled team member — McDonald's Drive",
  expMcdoDesc: "Real-time customer service and order-flow management: organisation, clear communication and consistent service quality under pressure.",
  expLeclercMeta: "2019 → 2024 · Sainte-Eulalie (Bordeaux)",
  expLeclercTitre: "Customer service agent — Leclerc Drive",
  expLeclercDesc: "Order follow-up and customer support, reporting KPIs to management, inventory management and daily problem-solving.",
  expSaveMeta: "Civic engagement · Albania · 2014",
  expSaveTitre: "Student representative — Save the Children",
  expSaveDesc: "Elected class senator and then president of my middle-school student council, as part of a Save the Children programme for inclusive, quality education. The representative role mattered to me early on — a thread I continued by serving as a student delegate for two years during my master's.",
  // Menu de navigation (haut de page)
  navApropos: "About",
  navProjets: "Projects",
  navParcours: "Path",
  navCompetences: "Skills",
  navExperiences: "Experience",
  navContact: "Contact",
  // Pied de page
  piedMentions: "Personal website by Eldi Bicari, created for the Master 2 Cultures et Métiers du Web programme (Université Gustave Eiffel). Hosted on GitHub Pages. Contact: eldibicari99@gmail.com.",
  piedCreditIa: "This site was developed with the help of Claude (Anthropic) for code assistance and layout. The content, projects and experiences shown are real; the author wrote and understands part of the code.",
  piedRetourHaut: "↑ Back to top",
  // memes cles que ci-dessus, en anglais
  lienEvitement: "Skip to content",
  sigmoideLegende: "<span class=\"mono\">σ(x) = 1 / (1 + e<sup>−x</sup>)</span> — the sigmoid function: a mathematical object <em>and</em> a neural-network activation function. My path, from science toward AI.",
  sigmoideAria: "Sigmoid-shaped curve showing Eldi's path, from Clermont to the CMW/DIGIS master's and the AI internship",
  parcoursLabels: ["Clermont", "Bordeaux", "Amsterdam", "Turin", "Korea", "Master CMW + DIGIS"],
  compWebT: "Web", compWebV: "HTML, CSS, JavaScript, PHP, Java · WordPress · integration and responsive design.",
  compDataT: "Data & AI", compDataV: "Python (NumPy, Pandas), data visualisation, web scraping, KPIs · applied generative AI (MIMESIS).",
  compSciT: "Scientific", compSciV: "Applied mathematics, modelling, PDEs, optimisation · rigour and analytical thinking.",
  compGestionT: "Project management", compGestionV: "Planning, Agile method, teamwork, reporting · presentations and defences.",
  compLanguesT: "Languages", compLanguesV: "French & English (bilingual) · Albanian (native) · Spanish and Italian (A2–B1).",
  // liens des projets (texte visible des boutons), en anglais
  noliLienPlein: "Open the site fullscreen ↗",
  sociosimLienPlein: "Open the site fullscreen ↗",
  dicolaborLienPlein: "Open the site fullscreen ↗",
  amsterdamLienProjet: "See the published project ↗",
  wwLienEvent: "Event page ↗",
  wwLienProgramme: "Programme (PDF) ↗",
  memoireLienPdf: "Open the dissertation (PDF) ↗",
  foretLienRapport: "See the report (PDF) ↗",
  optimLienOverleaf: "View on Overleaf ↗",
  // attributs (alt, info-bulles, labels lecteurs d'ecran), en anglais
  altHeroPhoto: "Portrait of Eldi Bicari",
  titreNoliApercu: "Live preview of the Noli site",
  titreSociosimApercu: "Live preview of the SocioSim home page",
  titreDicolaborApercu: "Live preview of the Dico-Labor site",
  titreAmsterdamPoster: "Poster of the Benchmarking AI Chatbots project (Whose Voice Matters)",
  titreMemoireApercu: "Eldi Bicari's M1 dissertation (PDF)",
  ariaTempsForts: "Highlights",
  ariaNavPrincipale: "Main navigation",
  ariaNavLangues: "Language selector",
  ariaDomaines: "Areas",
  ariaEnBref: "At a glance",
  cvBtn: "View my résumé",
  cvMsg: "📄 My final résumé is coming soon — this section will be updated."
};

// on retient la langue affichee, pour redessiner le graphe Parcours dans la bonne langue
var langueActuelle = "fr";

// petit utilitaire : traduit un attribut (alt, title, aria-label...) d'un element donne
function majAttribut(id, attribut, texte) {
  var el = document.getElementById(id);
  if (el && texte) { el.setAttribute(attribut, texte); }
}

function appliquerLangue(codeLangue) {
  // 0) Choisir la langue
  langueActuelle = codeLangue;
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

  // les elements sans texte visible : on traduit leurs attributs a part
  majAttribut("heroPhotoImg", "alt", contenuLangue.altHeroPhoto);
  majAttribut("noliApercu", "title", contenuLangue.titreNoliApercu);
  majAttribut("sociosimApercu", "title", contenuLangue.titreSociosimApercu);
  majAttribut("dicolaborApercu", "title", contenuLangue.titreDicolaborApercu);
  majAttribut("amsterdamPoster", "title", contenuLangue.titreAmsterdamPoster);
  majAttribut("memoireApercu", "title", contenuLangue.titreMemoireApercu);
  majAttribut("wwTempsForts", "aria-label", contenuLangue.ariaTempsForts);
  majAttribut("navPrincipale", "aria-label", contenuLangue.ariaNavPrincipale);
  majAttribut("navLangues", "aria-label", contenuLangue.ariaNavLangues);
  majAttribut("motsClesListe", "aria-label", contenuLangue.ariaDomaines);
  majAttribut("panneauDonnees", "aria-label", contenuLangue.ariaEnBref);

  // on redessine le graphe Parcours pour que ses etiquettes suivent la langue
  dessinerSigmoide();
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
// (le texte des etiquettes vient de parcoursLabels FR/EN ; ici "x" donne la position sur la courbe.)
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

  // labels du graphe + texte alternatif dans la langue du moment
  var contenu = langueActuelle === "en" ? anglais : francais;
  var labels = contenu.parcoursLabels || [];
  if (contenu.sigmoideAria) { svg.setAttribute("aria-label", contenu.sigmoideAria); }

  // on vide le SVG avant de le redessiner (sinon les points se cumulent au changement de langue)
  while (svg.firstChild) { svg.removeChild(svg.firstChild); }
  svg.classList.remove("visible");

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
    texte.textContent = labels[j] || e.label; // version traduite si dispo, sinon valeur par defaut
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

// Au chargement : on applique la langue par defaut (ce qui dessine aussi la sigmoide) + le nom anime
appliquerLangue("fr");
animerNom();

// Bouton "Voir mon CV" : au clic, affiche un message "CV bientot disponible"
var boutonCv = document.getElementById("cvBtn");
if (boutonCv) {
  boutonCv.addEventListener("click", function () {
    var cvMsg = document.getElementById("cvMsg");
    if (cvMsg) { cvMsg.hidden = false; }
    boutonCv.setAttribute("aria-expanded", "true");
  });
}