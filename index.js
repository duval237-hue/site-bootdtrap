// Tableau d'objets (histoires)
    const stories = [
      { title: "La Tortue et le Lièvre", 
        categorie: "Sagesse", 
        summary: "Une fable classique qui enseigne que la persévérance.", 
        img: "https://i.postimg.cc/28Tr0wWb/02f8ccad-7b56-40e1-b16f-d6a6bd35234d.jpg", 
        video:"vido/lv_0_20250926172044.mp4"},
      { title: "Le tigre et la brume",
         categorie: "Sagesse",
          summary: "Une histoire célèbre sur la méfiance.", 
          img: "https://i.postimg.cc/sxwq4TLr/0b2c1f51-6c23-4c2d-b15c-3fc7fbe3df5d.jpg",
            video:"vido/lv_0_20250926172044.mp4", },
      { title: "Le Caméléon qui voulait plaire", 
        categorie: "Premium", 
        summary: "Une belle fable sur l’adaptation forcée.",
        img: "https://i.postimg.cc/0QZ2mxCW/2e17199b-bbac-4043-8e9a-c5bd26e3388d.jpg",  
        video:"vido/lv_0_20250926172044.mp4", },
      { title: "La Lionne Vengeresse", 
        categorie: "Vengeance", 
        summary: "Une histoire intense.",
         img: "https://i.postimg.cc/bN43fXkb/6db362c7-dae0-4259-86fa-8facb96ed721.jpg",
            video:"vido/lv_0_20250926172044.mp4", },
      { title: "Le poisson et l'hibou", 
        categorie: "Amour", 
        summary: "Une fable touchante.",
         img: "https://i.postimg.cc/0jpnZWbV/3c9bfa2e-a5cc-4891-90c4-41bdd597c551.jpg" },
      { title: "Le Roi des Animaux",
         categorie: "Premium",
          summary: "Une histoire majestueuse.", 
          img:"https://i.postimg.cc/CLZgSf6K/1e1cc0d8-a587-40b0-860c-41e8076349e1.jpg" },
      { title: "Le Cite d'or", 
        categorie: "Sagesse", 
        summary: "Un monde oublier par tous", 
        img: "https://i.postimg.cc/ZRHXj526/00d65520-ff29-41a9-9ef4-cb1b61c52129.jpg",
        video:"vido/lv_0_20250926172044.mp4", },
      { title: "Le singe et hibou", 
        categorie: "Trahison", 
        summary: "Quand la trahison surprend.", 
        img: "https://i.postimg.cc/3NghgMM1/1fcb070e-c31d-4cad-87e8-ff33f3e82d83.jpg",
        video:"vido/lv_0_20250926172044.mp4", },
      { title: "Le singe et la pomme d'or", 
        categorie: "confiance", 
        summary: "Une histoire sur le courage", 
        img: "https://i.postimg.cc/MKL0VJPp/0ac1b50f-10dc-4040-b5c9-05003a8c8ba2.jpg",
        video:"vido/lv_0_20250926172044.mp4", },
      { title: "La Revanche du Renard", 
        categorie: "Vengeance", 
        summary: "Le renard et l'humilation", 
        img: "https://i.postimg.cc/QCF1fbNg/3d21546f-6dee-4300-a495-e68dee9f04a9.jpg",
        video:"vido/lv_0_20250926172044.mp4", },
      { title: "Le lievre arrogant", 
        categorie: "sagesse", 
        summary: "Le plus arrogant de la foret",
        img:"https://i.postimg.cc/vHWd4dMt/3ba56fff-e7de-46d1-a3d0-382297abe66b.jpg",
        video:"vido/lv_0_20250926172044.mp4", },


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

      storiesOnPage.forEach(story => {
        cardList.innerHTML += `
          <div class="col-md-4">
            <div class="card shadow-sm h-100">
                <img src="${story.img}" class="card-img-top" alt="${story.title}">
                <div class="card-body text-center">
                     <h5 class="card-title text-primary fw-bold">${story.title}</h5>
                     <p class="card-text text-dark">${story.summary}</p>
                    <a href="${story.video}"class="btn btn-sm btn-outline-primary ">
                        <i class="bi bi-play-circle"></i> Vidéo
                    </a>
            
              </div>
            </div>
          </div>
        `;
      });
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