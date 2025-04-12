function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Fetch JSON data and generate cards dynamically
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("card-container");
        data.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <a href="${item.link}" target="_blank">Learn More</a>
            `;
            container.appendChild(card);
        });
    })
    .catch(error => console.error("Error loading JSON:", error));