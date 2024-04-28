
const players = [
    {
        name: "Angel R.",
        stats: "*****",
        description: "Description: Perfect Setter Position, cheerful attitude, and Big smile!",
        photo: "images/Angel.JPEG"
    },
    {
        name: "Josh W.",
        stats: "****",
        description: "Description: Great Libero Position, Team player, and big jumper!",
        photo: "images/josh.JPEG"
    },
    {
        name: "Sabrina ",
        stats: "***",
        description: "Description: Tall Middle Blocker Position, good spiker, and fantastic footwork!",
        photo: "images/Sabrina.JPG"
    },
    {
        name: "Stacy ",
        stats: "**",
        description: "Description: THE IT GIRL, only she could bring what needed to be brought.",
        photo: "images/Stacy.JPEG"
    },
    {
        name: "Caroline",
        stats: "***",
        description: "Description: The Best Server Around, no one could ever bring her down.",
        photo: "images/Caroline.JPEG"
    },
    {
        name: "Alex ",
        stats: "******",
        description: "Description: The Boss Man, his smooth moves would trip up anyone.",
        photo: "images/Alex.JPEG"
    }
];

let currentCardIndex = 0;

function createPlayerCard(player) {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = player.photo;
    image.alt = player.name;
    card.appendChild(image);

    const name = document.createElement("h2");
    name.textContent = player.name;
    card.appendChild(name);

    const stars = document.createElement("div");
    stars.textContent = player.stats;
    stars.classList.add("stars");
    card.appendChild(stars);

    const description = document.createElement("p");
    description.textContent = player.description;
    card.appendChild(description);

    return card;
}


function showCard(index) {
    const container = document.getElementById("player-cards");
    container.innerHTML = ""; 

    const card = createPlayerCard(players[index]);
    container.appendChild(card);
}

// Function to show next card
function showNextCard() {
    currentCardIndex = (currentCardIndex + 1) % players.length;
    showCard(currentCardIndex);
}

// Function to show previous card
function showPrevCard() {
    currentCardIndex = (currentCardIndex - 1 + players.length) % players.length;
    showCard(currentCardIndex);
}

// Event listeners for navigation buttons
document.getElementById("nextBtn").addEventListener("click", showNextCard);
document.getElementById("prevBtn").addEventListener("click", showPrevCard);

// Show initial card
showCard(currentCardIndex);
