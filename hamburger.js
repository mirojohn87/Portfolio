// Hamburger menu functionality
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});

// Fetch JSON data and generate cards
fetch('test.json')
    .then(response => response.json())
    .then(data => {
        const namesContainer = document.getElementById('namesContainer');
        data.forEach(person => {
            const card = document.createElement('a');
            card.className = 'card';
            card.href = 'details.html';
            card.innerHTML = `
                <img src="${person.imageUrl}" alt="${person.firstName} ${person.lastName}">
                <h2>${person.firstName} ${person.lastName}</h2>
                <div class="details">
                    <p>Address: ${person.address}</p>
                    <p>Age: ${person.age}</p>
                    <p>Phone: ${person.phone}</p>
                </div>
            `;
            namesContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));