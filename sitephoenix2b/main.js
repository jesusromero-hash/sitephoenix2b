const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 0 20px #ff4500";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });

});