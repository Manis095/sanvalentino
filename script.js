const messaggi = [
    "Ma sei seria? 😂",
    "Riprova, sarai più fortunata!",
    "Nemmeno per sogno! 😜",
    "ERROR 404: Cuore non trovato",
    "Mannaggia a te, premi il SÌ!",
    "Ma che t'ho fatto di male? 💀",
    "oh che cazzo dobbiamo fare",
    "mo mi incazzo",
    "ti prego metti si santiddio"
];

const gifSanValentino = [
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjR4YnhtMnIxd3NocTFjdnFvdHF0N3QxOHc2ZXhvYzBhanJmb3d1bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nDMyoNRkCesJdZAuuL/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDN2cDlnenNqN3gxdG9ncW5tcDN4YXE0ZXQ3eWw3MXRka2l5NTg2eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dKK1PLSMreiTC/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDhsd2trdjBtaWZ4aG5uYjR0NXZ4YmFiYnI4eWRnY24zNmllcGNlNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DDqnnZCKrpF0ctocT9/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzR6ZHkxM2hia2VyaXQ5dTdzZjV2bmY1NXpqazBoOW1iOWV0b2YyNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GSkySYGxQf7sWCyDz7/giphy.gif"
];

function openInvitation() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('invitationContent').style.display = 'flex';
    if (window.player && window.player.playVideo) {
        window.player.playVideo();
    }
}

function moveButton() {
    const btn = document.getElementById('noButton');
    const container = document.querySelector('.container');
    const yesBtn = document.getElementById('yesButton');
    const question = document.getElementById('question');

    const indiceCasuale = Math.floor(Math.random() * messaggi.length);
    question.innerText = messaggi[indiceCasuale];

    const maxX = container.clientWidth - btn.offsetWidth - 20;
    const maxY = container.clientHeight - btn.offsetHeight - 20;

    let newX, newY;
    let safe = false;

    while (!safe) {
        newX = Math.random() * maxX;
        newY = Math.random() * maxY;

        const yesRect = yesBtn.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const yesRelX = yesRect.left - containerRect.left;
        const yesRelY = yesRect.top - containerRect.top;

        const distH = Math.abs(newX - yesRelX);
        const distV = Math.abs(newY - yesRelY);

        if (distH > 110 || distV > 100) {
            safe = true;
        }
    }

    btn.style.left = newX + "px";
    btn.style.top = newY + "px";
}

function accepted() {
    document.getElementById('main-card').innerHTML = `
        <h1 style="color: #ff4d6d;">Sapevo che avresti detto di SÌ! 😍</h1>
        <p style="font-size: 1.1rem; color: #555;">Preparati, Alice. Il 14 sarà speciale.</p>
        <div class="gif-container">
            <img id="gifRotante" src="${gifSanValentino[0]}" alt="Love GIF">
        </div>
        <div style="font-size: 50px; margin-top: 10px;">🌹✨🥂</div>
    `;

    let currentGifIndex = 0;
    setInterval(() => {
        const imgElement = document.getElementById('gifRotante');
        if (imgElement) {
            let nuovoIndice;
            do {
                nuovoIndice = Math.floor(Math.random() * gifSanValentino.length);
            } while (nuovoIndice === currentGifIndex);
            currentGifIndex = nuovoIndice;
            imgElement.src = gifSanValentino[currentGifIndex];
        }
    }, 5000);

    if (window.player && window.player.playVideo) {
        window.player.playVideo();
    }
}