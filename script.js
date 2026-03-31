const roles = [
    "AI/ML Engineer",
    "Data Scientist",
    "Python Developer",
    "Machine Learning Enthusiast"
];

let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;

function type() {
    currentRole = roles[i];

    if (!isDeleting) {
        document.getElementById("typing").textContent =
            currentRole.substring(0, j++);
    } else {
        document.getElementById("typing").textContent =
            currentRole.substring(0, j--);
    }

    if (j === currentRole.length + 1) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (j === 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});
