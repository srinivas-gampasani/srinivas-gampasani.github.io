// Typing effect
const roles = [
    "AI/ML Engineer",
    "Data Scientist",
    "Python Developer",
    "Machine Learning Enthusiast"
];

let i = 0, j = 0, current = "", deleting = false;

function type() {
    current = roles[i];

    document.getElementById("typing").textContent =
        current.substring(0, j);

    if (!deleting) {
        j++;
        if (j > current.length) {
            deleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        j--;
        if (j === 0) {
            deleting = false;
            i = (i + 1) % roles.length;
        }
    }

    setTimeout(type, deleting ? 50 : 100);
}

type();

// Theme toggle
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggle.textContent =
        document.body.classList.contains("light") ? "☀️" : "🌙";
});
