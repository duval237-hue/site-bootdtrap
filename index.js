// Tableau d'objets (histoires) avec fables et morales
const stories = [
  {
    title: "La Tortue et le Lièvre",
    categorie: "Sagesse",
    summary: "Une fable classique qui enseigne que la persévérance.",
    img: "https://i.postimg.cc/28Tr0wWb/02f8ccad-7b56-40e1-b16f-d6a6bd35234d.jpg",
    video: "vido/lv_0_20250926172044.mp4",
    texte: "Dans une grande forêt, un lièvre se moquait toujours de la tortue, car elle avançait lentement. Fatiguée de ses moqueries, la tortue lui proposa un défi : 'Courons jusqu’au grand baobab'. Le lièvre accepta en riant. Lorsque la course commença, il partit très vite et, sûr de gagner, il décida de faire une sieste. Pendant ce temps, la tortue continua, pas après pas, sans jamais s’arrêter. Lorsqu’il se réveilla, le lièvre courut à toute vitesse… mais il arriva trop tard. La tortue avait déjà franchi la ligne d’arrivée.",
    morale: "La persévérance est plus forte que l’arrogance."
  },
  {
    title: "Le Tigre et la Brume",
    categorie: "Sagesse",
    summary: "Une histoire célèbre sur la méfiance.",
    img: "https://i.postimg.cc/sxwq4TLr/0b2c1f51-6c23-4c2d-b15c-3fc7fbe3df5d.jpg",
    video: "vido/lv_0_20250926172044.mp4",
    texte: "Un tigre orgueilleux avançait dans la forêt lorsqu’une étrange brume tomba soudain. Elle effaça les arbres, les sentiers et même l’odeur des proies. Le tigre, perdu, paniqua. Il se mit alors à suivre des bruits imaginaires, croyant voir des ennemis partout. Un vieux hibou perché lui dit : 'La brume n’est pas ton ennemi. C’est ta peur qui t’aveugle.' Le tigre respira profondément et marcha lentement, jusqu’à retrouver son chemin.",
    morale: "La méfiance exagérée crée ses propres pièges."
  },
  {
    title: "Le Caméléon qui voulait plaire",
    categorie: "Premium",
    summary: "Une belle fable sur l’adaptation forcée.",
    img: "https://i.postimg.cc/0QZ2mxCW/2e17199b-bbac-4043-8e9a-c5bd26e3388d.jpg",
    video: "vido/lv_0_20250926172044.mp4",
    texte: "Un caméléon changeait de couleur à chaque rencontre : bleu pour les oiseaux, vert pour les serpents, jaune pour les singes. À force de vouloir plaire à tout le monde, il finit par perdre sa propre couleur. Un jour, son reflet dans l’eau ne lui renvoya plus aucune teinte : il était devenu transparent. Terrifié, il comprit qu’à force de se changer pour les autres, il avait oublié qui il était vraiment.",
    morale: "Chercher l’approbation de tous, c’est risquer de se perdre soi-même."
  },
  {
    title: "La Lionne Vengeresse",
    categorie: "Vengeance",
    summary: "Une histoire intense.",
    img: "https://i.postimg.cc/bN43fXkb/6db362c7-dae0-4259-86fa-8facb96ed721.jpg",
    video: "vido/lv_0_20250926172044.mp4",
    texte: "Une lionne perdit son petit, tué par un chasseur. Le cœur rempli de rage, elle chercha le coupable dans toute la savane. Un vieux buffle lui dit : 'La vengeance brûle plus longtemps que la douleur'. Mais la lionne n’écouta pas. Elle traqua le chasseur pendant des jours et finit par l’attraper. Au moment de le frapper, elle vit dans ses yeux la même peur que celle de son petit avant de mourir. Elle le laissa partir. Sa vengeance ne lui rendrait jamais ce qu’elle avait perdu.",
    morale: "La vengeance soulage un instant, mais détruit à long terme."
  },
  {
    title: "Le Poisson et l’Hibou",
    categorie: "Amour",
    summary: "Une fable touchante.",
    img: "https://i.postimg.cc/0jpnZWbV/3c9bfa2e-a5cc-4891-90c4-41bdd597c551.jpg",
    texte: "Un poisson et un hibou tombèrent amoureux. Mais le poisson ne pouvait pas vivre hors de l’eau, et l’hibou ne pouvait pas plonger. Ils tentèrent pourtant chaque soir de se voir au bord du lac. Un jour, l’hibou proposa : 'Je t’aimerai d’en haut, et toi d’en bas. Même si on ne se touche pas, nos cœurs resteront liés.' Et chaque nuit, l’ombre de l’hibou accompagnait le poisson qui nageait en dessous.",
    morale: "L’amour ne demande pas toujours la présence, mais la fidélité."
  },
  {
    title: "Le Roi des Animaux",
    categorie: "Premium",
    summary: "Une histoire majestueuse.",
    img: "https://i.postimg.cc/CLZgSf6K/1e1cc0d8-a587-40b0-860c-41e8076349e1.jpg",
    texte: "Le lion, roi de la savane, devint arrogant. Il croyait que tous lui devaient respect simplement parce qu’il était fort. Un jour, lors d’une sécheresse, aucun animal ne vint lui demander conseil. Seul un petit singe osa lui dire : 'Un roi n’est rien sans son peuple.' Le lion comprit alors que la force n’apporte aucune valeur sans sagesse.",
    morale: "Le pouvoir ne vaut rien sans humilité."
  },
  {
    title: "Le Cité d’Or",
    categorie: "Sagesse",
    summary: "Un monde oublié par tous.",
    img: "https://i.postimg.cc/ZRHXj526/00d65520-ff29-41a9-9ef4-cb1b61c52129.jpg",
    video: "vido/lv_0_20250926172044.mp4",
    texte: "Une légende parlait d’une cité entièrement faite d’or. Beaucoup la cherchaient, mais nul ne l’avait trouvée. Un jeune voyageur découvrit enfin la cité… mais elle était vide. Une voix résonna : 'Ceux qui cherchent la richesse oublient souvent la vraie valeur : les gens qu’ils laissent derrière eux.' Le voyageur repartit, comprenant qu’il avait perdu du temps précieux loin des siens.",
    morale: "L’or n’a aucune valeur quand on est seul pour le regarder."
  },
  {
    title: "Le Singe et l’Hibou",
    categorie: "Trahison",
    summary: "Quand la trahison surprend.",
    img: "https://i.postimg.cc/3NghgMM1/1fcb070e-c31d-4cad-87e8-ff33f3e82d83.jpg",
    video: "vido/lv_0_20250926172044.mp4",
    texte: "Un hibou et un singe étaient amis. Le hibou gardait les secrets du singe, et le singe partageait sa nourriture. Un jour, pour impressionner les autres animaux, le singe révéla un secret du hibou. Humilié, le hibou partit sans un mot. Plus tard, le singe regretta : il avait perdu son seul ami pour faire rire la foule.",
    morale: "La trahison commence souvent par un petit geste qui détruit beaucoup."
  },
  {
    title: "Le Singe et la Pomme d’Or",
    categorie: "Confiance",
    summary: "Une histoire sur le courage.",
    img: "https://i.postimg.cc/MKL0VJPp/0ac1b50f-10dc-4040-b5c9-05003a8c8ba2.jpg",
    video: "vido/lv_0_20250926172044.mp4",
    texte: "Un singe trouva une pomme d’or magique. Elle brillait tellement que tout le monde la voulait. Un serpent rusé lui dit : 'Fais-moi confiance, je peux la garder pour toi.' Le singe accepta… mais le serpent disparut avec la pomme. Au fil du temps, le singe comprit qu’il avait donné sa confiance trop vite.",
    morale: "La confiance se mérite, elle ne se donne pas au premier sourire."
  },
  {
    title: "La Revanche du Renard",
    categorie: "Vengeance",
    summary: "Le renard et l’humiliation.",
    img: "https://i.postimg.cc/QCF1fbNg/3d21546f-6dee-4300-a495-e68dee9f04a9.jpg",
    video: "vido/lv_0_20250926172044.mp4",
    texte: "Un renard fut humilié par une meute de chiens. Blessé dans son orgueil, il décida de se venger. Il prépara un piège pour les attirer… mais au dernier moment, il vit un jeune chien innocent marcher vers le piège. Le renard courut pour le sauver, réalisant que sa vengeance allait frapper un innocent. Il détruisit son piège et abandonna sa rancune.",
    morale: "La vengeance touche rarement le bon coupable."
  },
  {
    title: "Le Lièvre Arrogant",
    categorie: "Sagesse",
    summary: "Le plus arrogant de la forêt.",
    img: "https://i.postimg.cc/vHWd4dMt/3ba56fff-e7de-46d1-a3d0-382297abe66b.jpg",
    video: "vido/lv_0_20250926172044.mp4",
    texte: "Dans la forêt vivait un lièvre qui se croyait plus rapide que tout le monde. Il provoquait les animaux pour les ridiculiser. Un jour, une vieille antilope accepta son défi. Le lièvre partit comme une flèche, mais voulut montrer sa supériorité en faisant des détours, en dansant, en riant. L’antilope, elle, suivit son chemin sans bruit. Elle arriva avant lui.",
    morale: "Celui qui parle beaucoup oublie souvent d’avancer."
  }
];


    const itemsPerPage = 3;
    let currentPage = 1;
    let filteredStories = [...stories];

    const cardList = document.getElementById("cardList");
    const pagination = document.getElementById("pagination");
    const searchInput = document.getElementById("searchInput");

    // Afficher les cartes selon la page
function displayStories(storiesToDisplay) {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const storiesOnPage = storiesToDisplay.slice(start, end);

  cardList.innerHTML = "";

  if (storiesOnPage.length === 0) {
    cardList.innerHTML = "<p class='text-center text-muted'>Aucune fable trouvée.</p>";
    return;
  }

  storiesOnPage.forEach((story, index) => {
    cardList.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm h-100">
          <img src="${story.img}" class="card-img-top" alt="${story.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-primary fw-bold">${story.title}</h5>
            <p class="card-text text-dark flex-grow-1">${story.summary}</p>
            <div class="d-flex gap-2 mt-auto justify-content-between">
              <a href="${story.video}" class="btn btn-sm btn-outline-primary">
                <i class="bi bi-play-circle"></i> Vidéo
              </a>
              <button class="btn btn-sm btn-success" onclick="openFableModal(${stories.indexOf(story)})">
                <i class="bi bi-book"></i> Lire la fable
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

// Fonction pour ouvrir la modal avec le texte et la morale
function openFableModal(index) {
  const story = stories[index];
  document.getElementById("fableModalTitle").textContent = story.title;
  document.getElementById("fableTexte").textContent = story.texte;
  document.getElementById("fableMorale").textContent = story.morale;
  const modal = new bootstrap.Modal(document.getElementById('fableModal'));
  modal.show();
}


    // Pagination
    function setupPagination(totalItems) {
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      pagination.innerHTML = "";

      for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `
          <li class="page-item ${i === currentPage ? "active" : ""}">
            <button class="page-link" onclick="changePage(${i})">${i}</button>
          </li>
        `;
      }
    }

    function changePage(page) {
      currentPage = page;
      displayStories(filteredStories);
      setupPagination(filteredStories.length);
    }

    // Recherche dynamique
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();

      filteredStories = stories.filter(story =>
        story.title.toLowerCase().includes(query) ||
        story.categorie.toLowerCase().includes(query) ||
        story.summary.toLowerCase().includes(query)
      );

      currentPage = 1; // reset page
      displayStories(filteredStories);
      setupPagination(filteredStories.length);
    });

    // Initialisation
    displayStories(stories);
    setupPagination(stories.length);