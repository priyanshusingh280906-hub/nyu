const messages = [
    "Another year begins, and I want you to know you are my favorite part of this year.",
    "With you, even ordinary days feel special and warm.",
    "Thank you for loving me and standing by me.",
    "In this new year, I promise more care, more patience, and more love.",
    "No matter where life takes us, my heart will always choose you."
];

const photos = [
    "photo1.jpeg",
    "photo2.jpeg",
    "photo3.jpeg",
    "photo4.jpeg",
    "photo5.jpeg"
];

let i = 0;
let musicStarted = false;

const text = document.getElementById("wish-text");
const img = document.getElementById("photo");
const music = document.getElementById("bg-music");

function nextMessage() {
    if (!musicStarted) {
        music.play();
        musicStarted = true;
    }

    i = (i + 1) % messages.length;
    text.textContent = messages[i];
    img.src = photos[i];
}

/* Floating hearts animation */
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function Heart() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 50;
    this.size = Math.random() * 10 + 10;
    this.speed = Math.random() * 1 + 0.5;
}

function drawHeart(h) {
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.beginPath();
    ctx.moveTo(h.x, h.y);
    ctx.bezierCurveTo(
        h.x + h.size, h.y - h.size,
        h.x + h.size * 2, h.y + h.size / 3,
        h.x, h.y + h.size * 2
    );
    ctx.bezierCurveTo(
        h.x - h.size * 2, h.y + h.size / 3,
        h.x - h.size, h.y - h.size,
        h.x, h.y
    );
    ctx.fill();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (hearts.length < 40) hearts.push(new Heart());

    hearts.forEach((h, index) => {
        h.y -= h.speed;
        drawHeart(h);
        if (h.y < -50) hearts.splice(index, 1);
    });

    requestAnimationFrame(animate);
}

animate();
