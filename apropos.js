        document.getElementById("btnRetour").addEventListener("click", () => {
            const accepted = document.getElementById("acceptTerms").checked;

            if (!accepted) {
                document.getElementById("errorTerms").classList.remove("d-none");
                return;
            }

            // Cache l’erreur si déjà affichée
            document.getElementById("errorTerms").classList.add("d-none");

            // Retour à la page d'accueil
            window.location.href = "index.html";
        });